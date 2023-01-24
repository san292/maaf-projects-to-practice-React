import React, { useState } from 'react';

const Input = ({ getInputValue }) => {
  const [inputSearch, setInputsearch] = useState('');

  const inputHandleChange = (e) => {
    setInputsearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getInputValue(inputSearch);
    setInputsearch('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputSearch}
          placeholder="tapez votre cocktail"
          onChange={inputHandleChange}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
