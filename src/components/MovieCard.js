import React, { useContext } from 'react';
import MovieContext from '../store/movie-context';

const MovieCard = (props) => {
  const movieCtx = useContext(MovieContext);

  const fetchMovieDetail = async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=3b8cf2cb&i=${id}`
    );
    const movieInfo = await response.json();
    movieCtx.movieInfo = movieInfo;
    movieCtx.displayMovieInfo(movieCtx.movieInfo);
  };

  const movieDetailHandler = () => {
    movieCtx.setRequestStatus({ statusType: 'pending' });
    fetchMovieDetail(props.movieItem.imdbID);
  };
  return (
    <div className='card shadow-sm'>
      <img src={props.movieItem.Poster} className='card-img-top card-img' />

      <div className='card-body'>
        <h5 className='card-title'>{props.movieItem.Title}</h5>
        <p className='card-text'>Release Year: {props.movieItem.Year}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button
              type='button'
              onClick={movieDetailHandler}
              className='btn btn-sm btn-outline-secondary'>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
