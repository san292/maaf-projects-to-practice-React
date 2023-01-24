import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Error from './Error';
import WeatherTemplate from './WeatherTemplate';

const WeatherCity = ({ weatherDetails }) => {
  const { main, name, wind, weather } = weatherDetails;
  console.log('weathercod', weatherDetails.cod);

  if (weatherDetails.cod === '404') {
    return <Error message="Verifier Votre Ville puis recommencer" />;
  }
  if ((!weather, !main, !name, !wind)) {
    return <WeatherTemplate />;
  }

  const degres = 273.15;

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />

      <Card.Body>
        <h2> Meteo de la ville de {name}</h2>
        <h3 className="md">
          Temperature {parseInt(main.temp - degres, 10)} <span>&#x2103;</span>
        </h3>
        <Card.Text>
          Temperature max {parseInt(main.temp_max - degres, 10)} &#x2103;
        </Card.Text>

        <Card.Text>
          Temperature min {parseInt(main.temp_min - degres, 10)} &#x2103;
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          wind : {wind.speed}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        {weather?.map((w) => (
          <>
            <Card.Text> sky: {w.description}</Card.Text>
            <Card.Text>Humidity {main.humidity}</Card.Text>
          </>
        ))}
      </Card.Body>
    </Card>
  );
};

export default WeatherCity;
