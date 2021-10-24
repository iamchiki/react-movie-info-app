import React, { useContext, useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import MovieSection from './components/MovieSection';
import MovieContext from './store/movie-context';

function App() {
  const movieCtx = useContext(MovieContext);

  const [movies, setMovies] = useState(movieCtx.movieList);

  const displayMovies = (movies) => {
    setMovies(movies);
    // movieCtx.diaplayMovies(movies);
  };

  return (
    <MovieContext.Provider
      value={{
        movieList: movies,
        diaplayMovies: displayMovies,
      }}>
      <HeaderComponent></HeaderComponent>
      <MovieSection></MovieSection>
    </MovieContext.Provider>
  );
}

export default App;
