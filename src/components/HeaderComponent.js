import React from 'react';
import SearchForm from './UI/SearchForm';

const HeaderComponent = () => {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <h1 className='navbar-brand'>Movie Info App</h1>
        <SearchForm></SearchForm>
      </nav>
    </header>
  );
};

export default HeaderComponent;
