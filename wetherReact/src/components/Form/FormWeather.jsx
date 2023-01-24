import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const FormWeather = ({ onInputData }) => {
  const [cityName, setCityName] = useState({
    inputCity: '',
    inputCountry: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onInputData(cityName.inputCity, cityName.inputCountry);
  };

  const handleChange = (e) => {
    setCityName({
      ...cityName,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="m-1">
        <Form.Control
          size="sm"
          name="inputCity"
          type="text"
          placeholder="taper votre Ville"
          onChange={handleChange}
          value={cityName.inputCity}
        />
        <Form.Text className="text-muted">
          Entrer le nom de votre Ville
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          size="sm"
          name="inputCountry"
          type="text"
          placeholder=" code de votre pays"
          onChange={handleChange}
          value={cityName.inputCountry}
        />
        <Form.Text className="text-muted">
          ex: pour la France c'est : fr
        </Form.Text>
      </Form.Group>
      <Button
        size="sm"
        variant="primary"
        type="submit"
        // disabled={!cityName.inputCity || !cityName.inputCountry}
      >
        Envoyer
      </Button>
    </Form>
  );
};

export default FormWeather;
