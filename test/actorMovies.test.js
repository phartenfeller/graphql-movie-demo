const actorMovies = require('../src/graphql/resolvers/actorMovies');

const mfMovies = actorMovies('Morgan Freeman');
const titles = mfMovies.map(movie => movie.title);

console.log(titles);
