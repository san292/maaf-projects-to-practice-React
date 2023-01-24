import React, { useState } from 'react';
import { fetchApi } from '../helpers/fetchApi';
import FormWeather from './Form/FormWeather';
import WeatherCity from './WeatherCity';
import { Row, Col } from 'react-bootstrap';
import WeatherTemplate from './WeatherTemplate';
import Error from './Error';

const Weather = () => {
  const [weatherCity, setWeatherCity] = useState([]);

  const onInputData = (valueCity, valueCountry) => {
    fetchApi(valueCity, valueCountry).then((res) => setWeatherCity(res));
  };

  return (
    <Row>
      <Col md>
        <FormWeather onInputData={onInputData} />
      </Col>
      <Col>
        <WeatherCity weatherDetails={weatherCity} />
      </Col>
    </Row>
  );
};

export default Weather;
