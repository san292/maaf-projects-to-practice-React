import React from 'react';
import { v4 } from 'uuid';

const Form = ({
  inputValue,
  setInputValue,
  setTexts,
  texts,
  setEditTodo,
  editTodo
}) => {
  console.log('editTodo', editTodo);
  const updateTodo = (title, id, completed) => {
    const newTodo = texts.map((text) => {
      text.id === id ? { title, id, completed } : text;
    });
    setTexts(newTodo);
    setEditTodo('');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (!editTodo) {
      setTexts([...texts, { id: v4(), title: inputValue, completed: false }]);
      setInputValue('');
    } else {
      updateTodo(inputValue, editTodo.id, editTodo.completed);
    }
  };

  return (
    <>
      <form onSubmit={hendleSubmit} name="form">
        <input
          className="form-input"
          type="text"
          placeholder="entrer votre texte"
          onChange={handleChange}
          defaultValue={inputValue}
          required
        />

        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default Form;
