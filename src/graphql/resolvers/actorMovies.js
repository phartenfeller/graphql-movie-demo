const movies = require('../../../data/movies.json');

const getActorMovies = name => {
  console.log('name =>', name);
  const actorMovies = movies.filter(movie => {
    const actors = movie.cast.map(castEntry => castEntry.name);
    return actors.includes(name);
  });

  return actorMovies;
};

module.exports = getActorMovies;
