import React from 'react';

const ButtonComponent = (props) => {
  return (
    <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
