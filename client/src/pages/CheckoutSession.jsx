const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51OpCbqEMmWm7Z5rrdCDdTsC3CH1njTK8TrnzyxYbM2tnYVAqxTDymjJTag8nJVbuowsEHQvfx0fZIf9Wd0rOFDZE00WWcQLe0c');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Bounty',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log(`Listening on port ${3000}!`));

export default CheckoutSession;