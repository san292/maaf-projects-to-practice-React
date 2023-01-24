import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import getDrinks from './helpers/getDrinks';
import axios from 'axios';

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState([]);

  const getDrinks = async () => {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const data = response.data.drinks.slice(94);

    console.log('slicedata', data);
    setRandomCocktail(data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <>
      <h1 class="display-6">Nos Cocktails sans Alcool</h1>
      <div class="card-group mb-3">
        {randomCocktail?.map((c) => {
          const { strDrink, strDrinkThumb } = c;
          return (
            <Card key={c.idDrink} style={{ width: '20rem' }}>
              <Card.Img variant="top" src={strDrinkThumb} />
              <Card.Body>
                <Card.Title class="h6">{strDrink}</Card.Title>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RandomCocktail;
