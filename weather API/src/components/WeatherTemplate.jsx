import React from 'react';
import { Card, Row } from 'react-bootstrap';

const WeatherTemplate = () => {
  return (
    <Row>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <h2> Meteo de la ville de ...</h2>
          <h3 className="md">
            Temperature <span>&#x2103;</span>
          </h3>
          <Card.Text>Temperature max &#x2103;</Card.Text>
          <Card.Text>Temperature min &#x2103;</Card.Text>
          <Card.Subtitle className="mb-2 text-muted">wind</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

          <Card.Text> sky </Card.Text>
          <Card.Text>Humidity </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default WeatherTemplate;
