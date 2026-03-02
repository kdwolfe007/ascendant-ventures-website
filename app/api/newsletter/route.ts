import { NextRequest, NextResponse } from 'next/server';
import { createHash, createHmac } from 'crypto';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { email, name, gdprConsent } = await req.json();

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  if (!gdprConsent) {
    return NextResponse.json({ error: 'Please tick the consent box to subscribe.' }, { status: 400 });
  }

  const siteId = process.env.CUSTOMERIO_SITE_ID;
  const apiKey = process.env.CUSTOMERIO_API_KEY;
  const confirmSecret = process.env.NEWSLETTER_CONFIRM_SECRET;

  if (!siteId || !apiKey || !confirmSecret) {
    return NextResponse.json({ error: 'Newsletter service not configured.' }, { status: 500 });
  }

  const credentials = Buffer.from(`${siteId}:${apiKey}`).toString('base64');

  // Deterministic ID so re-subscribes update the same contact
  const customerId = 'av_' + createHash('sha256')
    .update(email.toLowerCase().trim())
    .digest('hex')
    .substring(0, 32);

  // Signed confirmation token — expires in 72 hours
  const payload = Buffer.from(
    JSON.stringify({ id: customerId, exp: Date.now() + 72 * 60 * 60 * 1000 })
  ).toString('base64url');
  const sig = createHmac('sha256', confirmSecret).update(payload).digest('hex');
  const token = `${payload}.${sig}`;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://ascendantventures.co.uk';
  const confirmUrl = `${baseUrl}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;

  const body: Record<string, unknown> = {
    id: customerId,
    email: email.toLowerCase().trim(),
    newsletter_opted_in: false,
    newsletter_subscribed: false,
    newsletter_gdpr_consent: true,
    newsletter_gdpr_consent_at: new Date().toISOString(),
    newsletter_source: 'ascendant_website',
    verification_url: confirmUrl,
    created_at: Math.floor(Date.now() / 1000),
  };
  if (name && typeof name === 'string' && name.trim()) {
    body.name = name.trim();
  }

  const res = await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) {
    const text = await res.text();
    console.error('Customer.io error:', res.status, text);
    return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 502 });
  }

  // Fire pending event — Customer.io journey sends confirmation email
  await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}/events`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'newsletter_signup_pending',
        data: {
          confirm_url: confirmUrl,
          name: (name && typeof name === 'string' && name.trim()) ? name.trim() : '',
        },
      }),
    },
  );

  return NextResponse.json({ ok: true });
}
