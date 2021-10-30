import React, { useEffect, useState } from 'react';

const MovieDetail = (props) => {
  // const fetchMovieDetail = async (id) => {};
  // const [movieObj, setMovieObj] = useState(null);

  // useEffect(() => {
  //   const fetchMovieDetail = async (id) => {
  //     const response = await fetch(
  //       `https://www.omdbapi.com/?apikey=3b8cf2cb&i=${id}`
  //     );
  //     const movieInfo = await response.json();
  //     setMovieObj(movieInfo);
  //     console.log(movieInfo);
  //   };
  //   fetchMovieDetail(props.id);
  // }, []);
  console.log(props);
  return (
    <div>
      <h2>Movie info</h2>
      <p>{props.id}</p>
      <p>{props.movieObj.Title}</p>
      {/* <p>{movieObj && movieObj.Title}</p> */}
    </div>
  );
};

export default MovieDetail;
