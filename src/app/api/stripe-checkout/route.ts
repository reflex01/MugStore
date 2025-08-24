import { NextRequest, NextResponse } from 'next/server';

interface CheckoutParams {
  product: string;
  price: number;
  order_id: string;
  currency: string;
}

export async function POST(request: NextRequest) {
  try {
    const { product, price, order_id, currency } = await request.json() as CheckoutParams;

    if (!product || !price || !order_id || !currency) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://stripe.49.12.98.62.nip.io/create-checkout-session/?product=${encodeURIComponent(product)}&price=${price}&order_id=${order_id}&currency=${currency}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Stripe server error: ${response.status} - ${errorText}`);
      throw new Error(`Stripe server error: ${response.status}`);
    }

    const checkoutUrl = await response.text();
    
    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}