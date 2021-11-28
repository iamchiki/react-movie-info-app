import React, { useReducer } from 'react';
import MovieContext from './movie-context';

const defaultState = {
  showMovieInfo: false,
  showMovieSection: false,
  isLoading: false,
  movieList: [],
  movieInfo: null,
};

const movieReducer = (state, action) => {
  if (action.type === 'movie-section') {
    return {
      showMovieInfo: false,
      showMovieSection: true,
      isLoading: false,
      movieList: action.payload,
    };
  } else if (action.type === 'movie-info') {
    return {
      showMovieInfo: true,
      showMovieSection: false,
      isLoading: false,
      movieInfo: action.payload,
    };
  } else if (action.type === 'pending') {
    return {
      isLoading: true,
    };
  }
};

const MovieCtxProvider = (props) => {
  const [movieState, dispatch] = useReducer(movieReducer, defaultState);

  const displayMovies = (movies) => {
    dispatch({ type: 'movie-section', payload: movies });
  };

  const displayMovieInfo = (movieDtl) => {
    dispatch({ type: 'movie-info', payload: movieDtl });
  };

  const setRequestStatus = (requestStatus) => {
    dispatch({ type: requestStatus });
  };

  const defaultValues = {
    movieList: movieState.movieList,
    showMovieDtl: movieState.showMovieInfo,
    showMovieList: movieState.showMovieSection,
    diaplayMovies: displayMovies,
    displayMovieInfo: displayMovieInfo,
    movieInfo: movieState.movieInfo,
    isLoading: movieState.isLoading,
    setRequestStatus: setRequestStatus,
  };
  return (
    <MovieContext.Provider value={defaultValues}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieCtxProvider;
