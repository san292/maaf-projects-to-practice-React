import React from 'react';
import { Alert } from 'react-bootstrap';
const Error = ({ message }) => {
  return (
    <div>
      <Alert variant="warning">
        <Alert.Heading>Desolé</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </div>
  );
};

export default Error;
