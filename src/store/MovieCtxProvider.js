import React, { useContext, useReducer, useState } from 'react';
import MovieContext from './movie-context';

const defaultState = {
  showMovieInfo: false,
  showMovieSection: false,
};

const movieReducer = (state, action) => {
  if (action.type === 'movie-section') {
    return { showMovieInfo: false, showMovieSection: true };
  } else if (action.type === 'movie-info') {
    return { showMovieInfo: true, showMovieSection: false };
  }
};

const MovieCtxProvider = (props) => {
  const movieCtx = useContext(MovieContext);

  const [movies, setMovies] = useState(movieCtx.movieList);
  const [movieState, dispatch] = useReducer(movieReducer, defaultState);

  const displayMovies = (movies) => {
    setMovies(movies);
    dispatch({ type: 'movie-section' });
  };

  const displayMovieInfo = (obj) => {
    movieCtx.movieInfo = obj;
    dispatch({ type: 'movie-info' });
  };

  const defaultValues = {
    movieList: movies,
    showMovieDtl: movieState.showMovieInfo,
    showMovieList: movieState.showMovieSection,
    diaplayMovies: displayMovies,
    displayMovieInfo: displayMovieInfo,
    movieInfo: movieCtx.movieInfo,
  };
  return (
    <MovieContext.Provider value={defaultValues}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieCtxProvider;
