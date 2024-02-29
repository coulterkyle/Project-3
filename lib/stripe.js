require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};
// const fetch = require('node-fetch');

// const stripeSecretKey = 'sk_test_51OpCdxAkyIoKX4GUkHR4CB5AeCAqHu0ZgboNXTCryH5d5jSb0fhwULAUEPbwT9ufTwBKcFk4yBuhRXXiX6xMBbcm00veS2QDKA';
// const productName = 'Fundraising dinner';

// const url = 'https://api.stripe.com/v1/products';
// const data = { name: productName };

// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(`${stripeSecretKey}:`).toString('base64')}`,
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: new URLSearchParams(data),
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// export default getStripe;

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1000, // amount in cents
//   currency: 'usd',
//   payment_method_types: ['card'],
// });

// // server.js
// //
// // Use this sample code to handle webhook events in your integration.
// //
// // 1) Paste this code into a new file (server.js)
// //
// // 2) Install dependencies
// //   npm install stripe
// //   npm install express
// //
// // 3) Run the server on http://localhost:4242
// //   node server.js

// // The library needs to be configured with your account's secret key.
// // Ensure the key is kept out of any version control system you might be using.
// const express = require('express');
// const app = express();


// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_ca036519813e9da66469329a04acbd125823accf408579a7d16a9ddd51209db4";

// app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntentSucceeded = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send();
// });

// app.listen(3001, () => console.log('Running on port 3001'));


// export default function Home() {
//   async function handleCheckout() {
//     const stripe = await getStripe();
//     const { error } = await stripe.redirectToCheckout({
//       lineItems: [
//         {
//           price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
//           quantity: 1,
//         },
//       ],
//       mode: 'subscription',
//       successUrl: `http://localhost:3000/success`,
//       cancelUrl: `http://localhost:3000/cancel`,
//       customerEmail: 'customer@email.com',
//     });
//     console.warn(error.message);
//   }

//   return <button onClick={handleCheckout}>Checkout</button>;
// }