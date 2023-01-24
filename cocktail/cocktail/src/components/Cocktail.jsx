import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cocktail = ({ drink }) => {
  if (!drink) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Card style={{ width: '18rem', margin: '0.3rem' }}>
      <Card.Img variant="top" src={drink.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{drink.strDrink}</Card.Title>
        <Card.Text>Category : {drink.strCategory}</Card.Text>
        <Card.Text>Type Drink : {drink.strAlcoholic}</Card.Text>
        <Card.Title>Ingredients</Card.Title>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{drink.strIngredient1}</li>
          <li class="list-group-item">{drink.strIngredient2}</li>
          <li class="list-group-item">{drink.strIngredient3}</li>
          <li class="list-group-item">{drink.strIngredient4}</li>
          <li class="list-group-item">{drink.strIngredient5}</li>
        </ul>
        {/* <Card.Title>instruments mesurs</Card.Title>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{drink.strMeasure1}</li>
          <li class="list-group-item">{drink.strMeasure2}</li>
          <li class="list-group-item">{drink.strMeasure3}</li>
          <li class="list-group-item">{drink.strMeasure4}</li>
          <li class="list-group-item">{drink.strMeasure5}</li>
        </ul> */}

        <p class="card-text">
          <small class="text-muted">
            Instruction : {drink.strInstructions}
          </small>
        </p>

        {/* <Button variant="secondary">Details Card</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Cocktail;
