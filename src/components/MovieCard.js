import React, { useContext } from 'react';
import MovieContext from '../store/movie-context';
import classes from './MovieCard.module.css';

const MovieCard = (props) => {
  const movieCtx = useContext(MovieContext);
  const cardClasse = `card ${classes['movie-card']}`;

  const fetchMovieDetail = async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=3b8cf2cb&i=${id}`
    );
    const movieInfo = await response.json();
    movieCtx.movieInfo = movieInfo;
    movieCtx.displayMovieInfo(movieCtx.movieInfo);
  };

  const movieDetailHandler = () => {
    fetchMovieDetail(props.movieItem.imdbID);
  };

  return (
    <div className={cardClasse}>
      <img src={props.movieItem.Poster} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{props.movieItem.Title}</h5>
        <p className='card-text'>Release Year: {props.movieItem.Year}</p>
        <button className='btn btn-primary' onClick={movieDetailHandler}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
