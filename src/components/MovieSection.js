import React, { useContext } from 'react';
import MovieContext from '../store/movie-context';
import MovieCard from './MovieCard';

const MovieSection = () => {
  const movieCtx = useContext(MovieContext);

  const movieCardList = movieCtx.movieList.map((movie) => {
    return (
      <li key={movie.imdbID} className='col-auto'>
        <MovieCard movieItem={movie}></MovieCard>
      </li>
    );
  });
  return (
    <main>
      <section className='container my-3'>
        <ul className='list-unstyled row justify-content-center'>
          {movieCardList}
        </ul>
      </section>
    </main>
  );
};

export default MovieSection;
