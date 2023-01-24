import React, { useState } from 'react';

const Input = ({ inputValue }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
    inputValue(inputText);
  };

  return (
    <div>
      <form>
        <input
          type="texte"
          value={inputText}
          onChange={handleChange}
          placeholder="taper votre recherche"
        />
      </form>
    </div>
  );
};

export default Input;
