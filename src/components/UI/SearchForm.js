import React from 'react';
import ButtonComponent from './ButtonComponent';
import Input from './Input';

const SearchForm = () => {
  return (
    <div>
      <form className='form-inline my-2 my-lg-0'>
        <Input></Input>
        <ButtonComponent>Search</ButtonComponent>
      </form>
    </div>
  );
};

export default SearchForm;
