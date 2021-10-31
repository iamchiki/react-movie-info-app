import React from 'react';

const MovieContext = React.createContext({
  movieList: [],
  showMovieDtl: false,
  showMovieList: false,
  diaplayMovies: (movies) => {},
  displayMovieInfo: (obj) => {},
  movieInfo: null,
});

export default MovieContext;
