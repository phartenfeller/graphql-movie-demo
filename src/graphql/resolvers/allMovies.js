const movies = require('../../../data/movies.json');

const allMovies = (amount = undefined) => {
  console.log('amount', amount);
  if (amount) {
    return movies.slice(0, amount);
  }
  return movies;
};

module.exports = allMovies;
