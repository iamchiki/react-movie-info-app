import React from 'react';

const MovieContext = React.createContext({
  movieList: [],
  showMovieDtl: false,
  showMovieList: false,
  diaplayMovies: (movies) => {},
  displayMovieInfo: (id, obj) => {},
  movieId: null,
  movieInfo: null,
});

export default MovieContext;
