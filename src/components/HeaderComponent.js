import React from 'react';
import SearchForm from './UI/SearchForm';

const HeaderComponent = () => {
  return (
    <header className='sticky-top p-3 bg-dark text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center'>
          <h3 className='nav col-12 col-lg-auto mr-lg-auto mb-3 mb-lg-0 justify-content-center'>
            Movie Info App
          </h3>
          <SearchForm></SearchForm>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
