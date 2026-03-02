import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }

  const siteId = process.env.CUSTOMERIO_SITE_ID;
  const apiKey = process.env.CUSTOMERIO_API_KEY;

  if (!siteId || !apiKey) {
    return NextResponse.json({ error: 'Newsletter service not configured.' }, { status: 500 });
  }

  const credentials = Buffer.from(`${siteId}:${apiKey}`).toString('base64');
  const { randomUUID } = await import('crypto');
  const customerId = randomUUID();

  const body: Record<string, unknown> = {
    id: customerId,
    email: email.toLowerCase().trim(),
    newsletter_subscribed: true,
    newsletter_source: 'ascendant_website',
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

  // Fire event to trigger welcome journey
  await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}/events`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'newsletter_signup',
        data: {
          source: 'ascendant_website',
          name: (name && typeof name === 'string' && name.trim()) ? name.trim() : '',
        },
      }),
    },
  );

  return NextResponse.json({ ok: true });
}
