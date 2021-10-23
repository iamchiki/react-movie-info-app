import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className='form-control mr-sm-2'
      type='search'
      placeholder='Search'
      aria-label='Search'
      ref={ref}
    />
  );
});

export default Input;
