import React from 'react';

const MovieDetail = (props) => {
  return (
    <div>
      <h2>Movie info</h2>
      <p>{props.movieObj.Title}</p>
    </div>
  );
};

export default MovieDetail;
