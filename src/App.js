import React, { useContext } from 'react';
import HeaderComponent from './components/HeaderComponent';
import Error from './components/UI/Error';
import MovieDetail from './components/MovieDetail';
import MovieSection from './components/MovieSection';
import Spinner from './components/UI/Spinner';
import MovieContext from './store/movie-context';

function App() {
  const movieCtx = useContext(MovieContext);

  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      {movieCtx.isLoading && (
        <div className='centered'>
          <Spinner></Spinner>
        </div>
      )}
      {movieCtx.showMovieList && <MovieSection></MovieSection>}
      {movieCtx.showMovieDtl && (
        <MovieDetail movieObj={movieCtx.movieInfo}></MovieDetail>
      )}
      {movieCtx.error.showError && (
        <Error message={movieCtx.error.message}></Error>
      )}
    </React.Fragment>
  );
}

export default App;
