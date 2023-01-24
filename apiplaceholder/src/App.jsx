import React from 'react';
import './App.css';
import RouteIndex from './routes/RouteIndex';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouteIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
