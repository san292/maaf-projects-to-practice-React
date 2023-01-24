import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Accordion } from 'react-bootstrap';

import { fetchRecipeDetails } from '../helpers/fetchRecipeDetails';

const RecipeDetails = () => {
  const { id } = useParams();

  const [fetchRecipe, setFetchRecipe] = useState({});

  useEffect(() => {
    fetchRecipeDetails(id).then((res) => setFetchRecipe(res));
  }, []);

  const {
    title,
    image,
    cuisines,
    instructions,
    sourceName,
    summary,
    readyInMinutes
  } = fetchRecipe;

  return (
    <Card style={{ width: '32rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Header as="h5">{title}</Card.Header>

        <Accordion className="mb-2" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Faites défiler pour lire le sommaire
            </Accordion.Header>
            <Accordion.Body>{summary}</Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h6>{cuisines?.length < 0 ? 'origines' : ''}</h6>

        <Card.Title as="h6">Source Name :{sourceName}</Card.Title>
        {cuisines?.map((c) => (
          <Card.Subtitle className="mb-2 text-muted">{c}</Card.Subtitle>
        ))}

        <Card.Subtitle className="mb-2 text-muted">
          readyInMinutes : {readyInMinutes} minutes
        </Card.Subtitle>
        {instructions == null ? (
          ''
        ) : (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Faites défiler pour lire les instructions
              </Accordion.Header>
              <Accordion.Body>{instructions}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Card.Body>
      <Link to="/">Back to Home</Link>
    </Card>
  );
};

export default RecipeDetails;
