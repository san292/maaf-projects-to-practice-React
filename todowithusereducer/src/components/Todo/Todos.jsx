import React, { useState, useReducer } from 'react';
import { ADD_TODO } from '../../useReducer/Actions';
import reducer from '../../useReducer/reducer';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

const initialState = {
  id: uuidv4(),
  name: [],
  complete: false
};
// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, newTodo(action.payload.name)];

//     default:
//       return state;
//   }
// };

const Todos = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  console.log('naaaaaaame', state);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="taper votre texte"
          onChange={handleChange}
        />
      </form>
      <Todo name={name} />
    </>
  );
};

export default Todos;
