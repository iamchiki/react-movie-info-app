import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      className='form-control form-control-dark mr-lg-3'
      type='search'
      placeholder='Enter Movie Name'
      aria-label='Search'
      ref={ref}
    />
  );
});

export default Input;
