import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://ascendantventures.co.uk';

  if (!token) {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=invalid', baseUrl));
  }

  const confirmSecret = process.env.NEWSLETTER_CONFIRM_SECRET;
  const siteId = process.env.CUSTOMERIO_SITE_ID;
  const apiKey = process.env.CUSTOMERIO_API_KEY;

  if (!confirmSecret || !siteId || !apiKey) {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=error', baseUrl));
  }

  const [payload, sig] = token.split('.');
  if (!payload || !sig) {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=invalid', baseUrl));
  }

  const expectedSig = createHmac('sha256', confirmSecret).update(payload).digest('hex');
  if (sig !== expectedSig) {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=invalid', baseUrl));
  }

  let data: { id: string; exp: number };
  try {
    data = JSON.parse(Buffer.from(payload, 'base64url').toString());
  } catch {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=invalid', baseUrl));
  }

  if (data.exp < Date.now()) {
    return NextResponse.redirect(new URL('/newsletter/confirmed?status=expired', baseUrl));
  }

  const credentials = Buffer.from(`${siteId}:${apiKey}`).toString('base64');

  // Mark contact as confirmed
  await fetch(
    `https://track.customer.io/api/v1/customers/${data.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newsletter_subscribed: true,
        newsletter_opted_in: true,
        newsletter_confirmed_at: new Date().toISOString(),
      }),
    },
  );

  // Fire newsletter_signup to trigger welcome email journey
  await fetch(
    `https://track.customer.io/api/v1/customers/${data.id}/events`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'newsletter_signup' }),
    },
  );

  return NextResponse.redirect(new URL('/newsletter/confirmed', baseUrl));
}
