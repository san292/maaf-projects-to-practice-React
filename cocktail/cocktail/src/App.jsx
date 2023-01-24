import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import Cocktails from './components/Cocktails';
import RandomCocktail from './components/RandomCocktail';
import getDrinks from './components/helpers/getDrinks';

function App() {
  const [cocktails, setCoktails] = useState([]);

  const getInputValue = (inputText) => {
    getDrinks(inputText)
      .then((res) => {
        setCoktails(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <div class="container">
      <Input getInputValue={getInputValue} />

      <div class="row">
        <Cocktails cocktails={cocktails} />
        <RandomCocktail />
      </div>
    </div>
  );
}

export default App;
