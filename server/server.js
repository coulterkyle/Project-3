const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// require('dotenv').config({ path: './.env'});
// const stripe = require('stripe')('sk_test_51OpCbqEMmWm7Z5rrdCDdTsC3CH1njTK8TrnzyxYbM2tnYVAqxTDymjJTag8nJVbuowsEHQvfx0fZIf9Wd0rOFDZE00WWcQLe0c');
// const stripe = require('stripe')('STRIPE_PUBLISHABLE_KEY');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// //Just a test for Stripe
// (async () => {
// console.log(await stripe.plans.list());
// })();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));


  // // Stripe Checkout Session
  // app.post('/create-checkout-session', async (req, res) => {
  //   const session = await stripe.checkout.sessions.create({
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: 'usd',
  //           product_data: {
  //             name: 'Bounty',
  //           },
  //           unit_amount: 2000,
  //         },
  //         quantity: 1,
  //       },
  //     ],
  //     mode: 'payment',
  //     success_url: 'http://localhost:3000/success',
  //     cancel_url: 'http://localhost:3000/cancel',
  //   });

  //   res.redirect(303, session.url);
  // });



  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));


    // Catch-all
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();


// // For Stripe utilization
// const stripe = require('stripe')('sk_test_51OpCbqEMmWm7Z5rrdCDdTsC3CH1njTK8TrnzyxYbM2tnYVAqxTDymjJTag8nJVbuowsEHQvfx0fZIf9Wd0rOFDZE00WWcQLe0c');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   payment_method_types: ['card'],
// });
// const clientSecret = paymentIntent.client_secret
// // Pass the client secret to the client