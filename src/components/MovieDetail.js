import React from 'react';

const MovieDetail = (props) => {
  return (
    <React.Fragment>
      <div className='card flex-row m-5'>
        <img src={props.movieObj.Poster} className='' alt='...' />
        <div className='card-body'>
          <h4 className='card-title'>{props.movieObj.Title}</h4>
          <ul className='list-group '>
            <li className='list-group-item'>{`Genre: ${props.movieObj.Genre}`}</li>
            <li className='list-group-item'>{`Released: ${props.movieObj.Released}`}</li>
            <li className='list-group-item'>{`IMDB Rating: ${props.movieObj.imdbRating}`}</li>
            <li className='list-group-item'>{`Director: ${props.movieObj.Director}`}</li>
            <li className='list-group-item'>{`Writer: ${props.movieObj.Writer}`}</li>
            <li className='list-group-item'>{`Actors: ${props.movieObj.Actors}`}</li>
            <li className='list-group-item'>{`Language: ${props.movieObj.Language}`}</li>
          </ul>
        </div>
      </div>
      <div className='card m-5'>
        <div className='card-body'>
          <h4 className='card-title'>Plot</h4>
          <p>{props.movieObj.Plot}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
