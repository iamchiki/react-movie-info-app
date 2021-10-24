import React, { useContext } from 'react';
import MovieContext from '../../store/movie-context';
import ButtonComponent from './ButtonComponent';
import Input from './Input';

const SearchForm = (props) => {
  const inputRef = React.createRef();
  const movieCtx = useContext(MovieContext);
  const arr = [
    {
      Title: 'Uri: The Surgical Strike',
      Year: '2019',
      imdbID: 'tt8291224',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg',
    },
  ];

  const fetchMovies = async (queryText) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=3b8cf2cb&s=${queryText}`
      );
      const movies = await response.json();
      console.log(movies);
      movieCtx.movieList = [...movies.Search];
      movieCtx.diaplayMovies(movieCtx.movieList);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // movieCtx.movieList = [...arr];
    // movieCtx.diaplayMovies(movieCtx.movieList);
    // props.onSearch(movieCtx.movieList);
    fetchMovies(inputRef.current.value);
  };

  return (
    <div>
      <form className='form-inline my-2 my-lg-0' onSubmit={submitHandler}>
        <Input ref={inputRef}></Input>
        <ButtonComponent>Search</ButtonComponent>
      </form>
    </div>
  );
};

export default SearchForm;
