import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const Drink = ({ drinkData }) => {
  console.log('drink', drinkData);
  const { strDrinkThumb, strDrink, idDrink } = drinkData;

  return (
    <Card className="m-2 bg-light border-white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strDrinkThumb} />

      <Card.Body>
        <Card.Title>{strDrink}</Card.Title>
      </Card.Body>

      <Link to={`/drinkdetails/${idDrink}`}>Details</Link>
    </Card>
  );
};

export default Drink;
