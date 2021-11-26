import React from 'react';

const ButtonComponent = (props) => {
  return (
    <button className='btn btn-outline-light' type='submit'>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
