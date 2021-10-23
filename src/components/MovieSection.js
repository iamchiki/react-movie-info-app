import React from 'react';
import MovieCard from './MovieCard';

const MovieSection = () => {
  const moviesArr = [
    {
      Title: 'Stree',
      Year: '2018',
      imdbID: 'tt8108202',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      Title: 'Stree',
      Year: '2018',
      imdbID: 'tt8108203',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      Title: 'Stree',
      Year: '2018',
      imdbID: 'tt8108204',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      Title: 'Stree',
      Year: '2018',
      imdbID: 'tt8108205',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
      Title: 'Stree',
      Year: '2018',
      imdbID: 'tt8108206',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjk4NGZiMzAtODU1NS00MmQ4LWJiNmQtNWU5ZWU4Y2VmNWI0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
  ];

  const movieCardList = moviesArr.map((movie) => {
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
