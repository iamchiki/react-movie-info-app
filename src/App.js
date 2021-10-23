import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MovieSection from './components/MovieSection';
import MovieContext from './store/movie-context';

function App() {
  const movies = [
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
  return (
    <MovieContext.Provider
      value={{
        movieList: movies,
      }}>
      <HeaderComponent></HeaderComponent>
      <MovieSection></MovieSection>
    </MovieContext.Provider>
  );
}

export default App;
