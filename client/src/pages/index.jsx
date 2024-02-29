import getStripe from '../lib/stripe';
// import 'dotenv/config';
// require('dotenv').config();

export default function Checkout() {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 1099,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  return <button onClick={handleCheckout}>Checkout</button>;
}