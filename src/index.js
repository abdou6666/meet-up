import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {FavoriteContextProvider} from  './store/favorites-context';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById('root')
);


