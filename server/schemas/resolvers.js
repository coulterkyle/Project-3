const { User, Issue, Vote, Bounty } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate('savedIssues')

        return user;
      }

      throw AuthenticationError;
    },
    user: async (parent, {_id}, ) => {
        const user = await User.findById({_id}).populate('savedIssues')

        return user;
      },
    users: async () => {
      return User.find().populate('savedIssues');
    },
    issues: async (parent, args) => {

      return await Issue.find().populate('votes');

    },
    issue: async (parent, { issueId }) => {
      console.log(issueId)
      const issue = await Issue.findById(issueId)

      return issue;

    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
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
      if (context.user) {
        const issue = await Issue.create(issueData);

        await User.findByIdAndUpdate(
          {_id: context.user._id},
          { $addToSet: { savedIssues: issue._id } },
        );

        return issue;
      }
      throw AuthenticationError;
    },
    removeIssue: async (parent, { issueId }, context) => {
      // console.log({ issueId })
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedIssues: { issueId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    addVote: async (parent, { issueId }, context) => {
      if (context.user) {
        return await Issue.findByIdAndUpdate(
          { _id: issueId },
          { $addToSet: { voters: context.user._id  } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeVote: async (parent, { issueId }, context) => {
      if (context.user) {
        return await Issue.findByIdAndUpdate(
          { _id: issueId },
          { $pull: { voters: context.user._id  } },
          { new: true },
        );
      }
      throw AuthenticationError;
    },
    // addBounty: async (parent, bountyData, context) => {
    //   console.log(bountyData)
    //   if (context.user) {
    //     return Issue.findOneAndUpdate(
    //       { _id: _id },
    //       {
    //         $addToSet: { bounty: bountyData },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;
