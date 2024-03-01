const { User, Issue, Vote, Bounty } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)

        return user;
      }

      throw AuthenticationError;
    },
    issues: async (parent, args) => {

      const issues = await Issue.find()

      return issues;

    },
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
      // console.log("issuedata", issueData)
      if (context.user) {
        const issue = new Issue(issueData);
        // console.log("user",context.user)
        const userData = await User.findByIdAndUpdate(context.user._id,
          { $addToSet: { savedIssues: issue } },
          { new: true },
        );
        // console.log('userdata', userData)
        return userData;
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
    addVote: async (parent, voteData, context) => {
      console.log(voteData.issueId)
      if (context.user) {
        const vote = new Vote(voteData);
        const issueData = await Issue.findOneAndUpdate(
          { _Id: voteData.issueId },
          { $push: { votes: vote } },
          { new: true },
        );

        return issueData;
      }

      throw AuthenticationError;
    }, addBounty: async (parent, bountyData, context) => {
      console.log(bountyData)
      if (context.user) {
        return Issue.findOneAndUpdate(
          { _id: _id },
          {
            $addToSet: { bounty: bountyData },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
