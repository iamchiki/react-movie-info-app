import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MovieCtxProvider from './store/MovieCtxProvider';

ReactDOM.render(
  <React.StrictMode>
    <MovieCtxProvider>
      <App />
    </MovieCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
