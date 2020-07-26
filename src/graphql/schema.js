const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const schema = buildASTSchema(gql`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello World!'
};

module.exports = { schema, root };
