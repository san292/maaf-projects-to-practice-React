import React from 'react';
import Cocktail from './Cocktail';

const Cocktails = ({ cocktails = [] }) => {
  console.log('cktail', cocktails);

  return (
    <div class="card-group mb-3">
      {cocktails.map((drink) => (
        <Cocktail drink={drink} />
      ))}
    </div>
  );
};

export default Cocktails;
