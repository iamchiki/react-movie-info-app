import React, { useContext } from 'react';
import MovieContext from '../store/movie-context';
import MovieCard from './MovieCard';

const MovieSection = () => {
  const movieCtx = useContext(MovieContext);

  const movieCardList = movieCtx.movieList.map((movie) => {
    return (
      <div key={movie.imdbID} className='col mt-3'>
        <MovieCard movieItem={movie}></MovieCard>
      </div>
    );
  });
  return (
    <div className='album py-5'>
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center justify-content-sm-start'>
          {movieCardList}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
