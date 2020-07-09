const movies = require('../../../data/movies.json');

const getMoviesByGenre = args => {
  return movies.filter(movie => movie.genres.includes(args.genre));
};

module.exports = getMoviesByGenre;
