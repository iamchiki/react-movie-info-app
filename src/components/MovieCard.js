import React from 'react';
import classes from './MovieCard.module.css';

const MovieCard = (props) => {
  const cardClasse = `card ${classes['movie-card']}`;
  return (
    <div className={cardClasse}>
      <img src={props.movieItem.Poster} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{props.movieItem.title}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>
          View Details
        </a>
      </div>
    </div>
  );
};

export default MovieCard;