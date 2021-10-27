import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import MovieSection from './components/MovieSection';
import MovieCtxProvider from './store/MovieCtxProvider';

function App() {
  return (
    <MovieCtxProvider>
      <HeaderComponent></HeaderComponent>
      <MovieSection></MovieSection>
    </MovieCtxProvider>
  );
}

export default App;
