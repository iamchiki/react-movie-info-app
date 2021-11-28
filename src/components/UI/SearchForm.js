import React, { useContext } from 'react';
import MovieContext from '../../store/movie-context';
import ButtonComponent from './ButtonComponent';
import Input from './Input';

const API_KEY = '3b8cf2cb&s';

const SearchForm = (props) => {
  const inputRef = React.createRef();
  const movieCtx = useContext(MovieContext);

  const fetchMovies = async (queryText) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}=${queryText}`
      );
      const movies = await response.json();
      movieCtx.movieList = [...movies.Search];
      movieCtx.diaplayMovies(movieCtx.movieList);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    movieCtx.setRequestStatus('pending');
    fetchMovies(inputRef.current.value);
  };

  return (
    <form
      className='col-12 col-lg-auto d-flex flex-column flex-lg-row'
      onSubmit={submitHandler}>
      <Input ref={inputRef}></Input>
      <div className='align-self-center mt-3 mt-lg-0'>
        <ButtonComponent>Search</ButtonComponent>
      </div>
    </form>
  );
};

export default SearchForm;
