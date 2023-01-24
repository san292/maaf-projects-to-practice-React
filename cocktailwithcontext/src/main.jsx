import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CocktailProvider } from './utils/context/cocktailDataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CocktailProvider>
      <App />
    </CocktailProvider>
  </React.StrictMode>
);
