import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const navigate = useNavigate();

  const { title, image, id } = recipe;

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="row ">
      <Card style={{ width: '15rem', height: '20rem' }}>
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title as="h6">{title}</Card.Title>

          <Button variant="secondary" onClick={() => handleClick(id)}>
            Details Recipe{' '}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
