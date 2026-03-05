import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

export const runtime = 'nodejs';

const VALID_TYPES = ['access', 'erasure', 'rectification', 'restriction', 'portability', 'objection'];

export async function POST(req: NextRequest) {
  const { name, email, requestType, details } = await req.json();

  if (!name || typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email address is required.' }, { status: 400 });
  }

  if (!requestType || !VALID_TYPES.includes(requestType)) {
    return NextResponse.json({ error: 'Please select a valid request type.' }, { status: 400 });
  }

  const siteId = process.env.CUSTOMERIO_SITE_ID;
  const apiKey = process.env.CUSTOMERIO_API_KEY;

  if (!siteId || !apiKey) {
    return NextResponse.json({ error: 'Service not configured.' }, { status: 500 });
  }

  const credentials = Buffer.from(`${siteId}:${apiKey}`).toString('base64');

  const customerId = 'dsar_' + createHash('sha256')
    .update(email.toLowerCase().trim())
    .digest('hex')
    .substring(0, 32);

  // Create/update customer record with DSAR attributes
  const customerRes = await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: customerId,
        email: email.toLowerCase().trim(),
        name: name.trim(),
        dsar_request: true,
        dsar_type: requestType,
        dsar_submitted_at: new Date().toISOString(),
        dsar_source: 'ascendant_website',
      }),
    },
  );

  if (!customerRes.ok) {
    console.error('Customer.io customer error:', customerRes.status, await customerRes.text());
    return NextResponse.json({ error: 'Could not submit your request. Please try again.' }, { status: 502 });
  }

  // Fire dsar_request_received event so a Customer.io workflow can notify the team
  const eventRes = await fetch(
    `https://track.customer.io/api/v1/customers/${customerId}/events`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'dsar_request_received',
        data: {
          request_type: requestType,
          requester_name: name.trim(),
          requester_email: email.toLowerCase().trim(),
          details: (details && typeof details === 'string') ? details.trim() : '',
          submitted_at: new Date().toISOString(),
        },
      }),
    },
  );

  if (!eventRes.ok) {
    console.error('Customer.io event error:', eventRes.status, await eventRes.text());
    // Customer record was created — still treat as success
  }

  return NextResponse.json({ ok: true });
}
