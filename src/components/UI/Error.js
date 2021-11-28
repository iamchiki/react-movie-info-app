import React from 'react';

const Error = (props) => {
  return (
    <div className='centered'>
      <h2>{props.message}</h2>
    </div>
  );
};

export default Error;
