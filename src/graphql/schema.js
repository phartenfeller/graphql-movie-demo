const { makeExecutableSchema } = require('@graphql-tools/schema');
const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
