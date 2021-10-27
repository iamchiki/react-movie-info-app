import React, { useContext, useState } from 'react';
import MovieContext from './movie-context';

const MovieCtxProvider = (props) => {
  const movieCtx = useContext(MovieContext);

  const [movies, setMovies] = useState(movieCtx.movieList);

  const displayMovies = (movies) => {
    setMovies(movies);
  };
  return (
    <MovieContext.Provider
      value={{
        movieList: movies,
        diaplayMovies: displayMovies,
      }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieCtxProvider;
