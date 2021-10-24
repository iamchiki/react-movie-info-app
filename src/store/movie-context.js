import React from 'react';

const MovieContext = React.createContext({
  movieList: [],
  diaplayMovies: (movies) => {},
});

export default MovieContext;
