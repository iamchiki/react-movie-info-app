import React from 'react';

const MovieContext = React.createContext({
  movieList: [],
  showMovieDtl: false,
  showMovieList: false,
  diaplayMovies: (movies) => {},
  displayMovieInfo: (obj) => {},
  movieInfo: null,
  isLoading: false,
  setRequestStatus: (requestStatus) => {},
  error: {
    showError: false,
    message: null,
  },
});

export default MovieContext;
