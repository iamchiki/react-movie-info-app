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

  const svg = (
    <svg
      className='card-img-top card-img svg-text-centered'
      width='100%'
      height='225'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-label='Placeholder: Thumbnail'
      preserveAspectRatio='xMidYMid slice'
      focusable='false'>
      <title>Placeholder</title>
      <rect width='100%' height='100%' fill='#55595c' />
      <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
        Image Not Found
      </text>
    </svg>
  );

  const image = (
    <img
      src={props.movieItem.Poster}
      alt=''
      className='card-img-top card-img'
    />
  );
  return (
    <div className='card shadow-sm'>
      {props.movieItem.Poster === 'N/A' ? svg : image}
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
