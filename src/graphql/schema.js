const { makeExecutableSchema } = require('@graphql-tools/schema');
const gql = require('graphql-tag');

const allMoviesResolver = require('./resolvers/allMovies');
const actorMoviesResolver = require('./resolvers/actorMovies');

const typeDefs = gql`
  type Query {
    hello: String
    allMovies: [Movie]
    amountOfMovies(amount: Int!): [Movie]
  }
  type Movie {
    id: Int!
    title: String!
    year: Int!
    runtime: Int
    genres: [String]
    cast: [MovieRole]
  }

  type MovieRole {
    name: String!
    role: String
    movies: [Movie]
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    allMovies: () => allMoviesResolver(),
    amountOfMovies: (parent, { amount }) => allMoviesResolver(amount)
  },
  MovieRole: {
    movies: parent => actorMoviesResolver(parent.name)
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
