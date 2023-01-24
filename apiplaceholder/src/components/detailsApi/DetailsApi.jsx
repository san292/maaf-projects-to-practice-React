import React from 'react';
import { Link } from 'react-router-dom';

const DetailsApi = ({ data }) => {
  const { id } = data;
  return (
    <div key={id}>
      <Link to={`details/${id}`}>{id}</Link>
    </div>
  );
};

export default DetailsApi;
