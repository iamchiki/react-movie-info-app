import React from 'react';
import ButtonComponent from './ButtonComponent';
import Input from './Input';

const SearchForm = () => {
  const inputRef = React.createRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <form className='form-inline my-2 my-lg-0' onSubmit={submitHandler}>
        <Input ref={inputRef}></Input>
        <ButtonComponent>Search</ButtonComponent>
      </form>
    </div>
  );
};

export default SearchForm;
