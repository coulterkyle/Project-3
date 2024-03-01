const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51OpCbqEMmWm7Z5rrdCDdTsC3CH1njTK8TrnzyxYbM2tnYVAqxTDymjJTag8nJVbuowsEHQvfx0fZIf9Wd0rOFDZE00WWcQLe0c');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)

        return user;
      }

      throw AuthenticationError;
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ Bounty: args.Bounty });
      const line_items = [];

      const { Bounty } = await order.populate('Bounty');

        const bounty = await stripe.Bounty.create({
          issue: Bounty.issue,
        });

        const price = await stripe.prices.create({
          bounty: Bounty.id,
          // NOT SURE WHAT NEEDS TO BE CHANGED HERE???
          amount: products[i].price * 100, 
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
    

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveIssue: async (parent, issueData, context) => {
      console.log(issueData)
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $addToSet: { savedIssues: issueData },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeIssue: async (parent, { issueId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedIssues: { issueId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  }
};

module.exports = resolvers;
