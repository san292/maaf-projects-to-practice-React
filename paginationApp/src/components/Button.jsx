import React from 'react';

const Button = ({ index, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{index}</button>
    </div>
  );
};

export default Button;
