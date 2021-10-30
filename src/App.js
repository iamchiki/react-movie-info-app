import React, { useContext } from 'react';
import HeaderComponent from './components/HeaderComponent';
import MovieDetail from './components/MovieDetail';
import MovieSection from './components/MovieSection';
import MovieContext from './store/movie-context';

function App() {
  const movieCtx = useContext(MovieContext);
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      {movieCtx.showMovieList && <MovieSection></MovieSection>}
      {movieCtx.showMovieDtl && (
        <MovieDetail
          id={movieCtx.movieId}
          movieObj={movieCtx.movieInfo}></MovieDetail>
      )}
    </React.Fragment>
  );
}

export default App;
