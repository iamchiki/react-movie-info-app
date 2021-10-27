import React, { useContext, useState } from 'react';
import MovieContext from './movie-context';

const MovieCtxProvider = (props) => {
  const movieCtx = useContext(MovieContext);

  const [movies, setMovies] = useState(movieCtx.movieList);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [showMovieSection, setMovieSection] = useState(false);

  const displayMovies = (movies) => {
    setMovies(movies);
    setShowMovieInfo(false);
    setMovieSection(true);
  };

  const displayMovieInfo = (movieId) => {
    setShowMovieInfo(true);
    setMovieSection(false);
  };
  return (
    <MovieContext.Provider
      value={{
        movieList: movies,
        showMovieDtl: showMovieInfo,
        showMovieList: showMovieSection,
        diaplayMovies: displayMovies,
        displayMovieInfo: displayMovieInfo,
      }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieCtxProvider;
