import React, { useReducer } from 'react';
import MovieContext from './movie-context';

const defaultState = {
  showMovieInfo: false,
  showMovieSection: false,
  isLoading: false,
  movieList: [],
  movieInfo: null,
  error: {
    showError: false,
    message: null,
  },
};

const movieReducer = (state, action) => {
  if (action.type === 'movie-section') {
    return {
      ...defaultState,
      showMovieInfo: false,
      showMovieSection: true,
      isLoading: false,
      movieList: action.payload,
    };
  } else if (action.type === 'movie-info') {
    return {
      ...defaultState,
      showMovieInfo: true,
      showMovieSection: false,
      isLoading: false,
      movieInfo: action.payload,
    };
  } else if (action.type === 'pending') {
    return {
      ...defaultState,
      isLoading: true,
    };
  } else if (action.type === 'error') {
    return {
      ...defaultState,
      error: {
        showError: true,
        message: action.payload,
      },
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
    dispatch({
      type: requestStatus.statusType,
      payload: requestStatus.message,
    });
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
    error: movieState.error,
  };
  return (
    <MovieContext.Provider value={defaultValues}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieCtxProvider;
