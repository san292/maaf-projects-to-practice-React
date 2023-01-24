import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Formdata';
import { Link, useNavigate } from 'react-router-dom';
import { fetchRecipesHome } from '../helpers/fetchRecipesHome.js';
import { Card, Button, Container, Row } from 'react-bootstrap';

const Home = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipesHome(query).then((res) => setData(res));
  };

  const handleClick = (id) => {
    navigate(`recipes/${id}`);
  };

  return (
    <Container>
      <Form
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        handleSubmit={handleSubmit}
        query={query}
      />
      <div className="row mt-2">
        {data?.map((d) => (
          <Row key={d.id} className="col">
            <Card className="m-2" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={d.image} />
              <Card.Body>
                <Card.Title as="h6">{d.title}</Card.Title>
                <Button variant="secondary" onClick={() => handleClick(d.id)}>
                  Details Recipe{' '}
                </Button>
              </Card.Body>
            </Card>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default Home;
