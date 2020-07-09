const { buildSchema } = require('graphql');
const getAllMovies = require('./resolvers/allMoviesResolver');
const getMoviesByGenre = require('./resolvers/moviesByGenreResolver');

const schema = buildSchema(`
  type Query {
    hello: String
    allMovies: [Movie]
    moviesByGenre(genre: String!): [Movie]
  },
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
  allMovies: getAllMovies,
  moviesByGenre: getMoviesByGenre
};

module.exports = { schema, root };
