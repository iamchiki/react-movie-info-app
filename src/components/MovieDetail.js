import React from 'react';

const MovieDetail = (props) => {
  const svg = (
    <svg
      className='img-fluid svg-text-centered'
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

  const image = <img src={props.movieObj.Poster} className='img-fluid' />;
  return (
    <React.Fragment>
      <div className='container-md movie-font'>
        <div className='card flex-md-row m-5'>
          {props.movieObj.Poster === 'N/A' ? svg : image}
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
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
