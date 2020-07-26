const { buildASTSchema } = require('graphql');
const gql = require('graphql-tag');

const allMoviesResolver = require('./resolvers/allMovies');

const schema = buildASTSchema(gql`
  type Query {
    hello: String
    allMovies: [Movie]
  }
  type Movie {
    id: Int!
    title: String!
    year: Int!
    runtime: Int
    genres: [String]
  }
`);

const root = {
  hello: () => 'Hello World!',
  allMovies: allMoviesResolver
};

module.exports = { schema, root };
