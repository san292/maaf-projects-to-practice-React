import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './Actions';
import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      // const newTodo = (name) => {
      //   return { id: uuidv4(), name: name, complete: false };
      // };
      // return [...state, newTodo(action.payload.name)];
      return { ...state, name: action.payload.name };

    default:
      return state;
  }
};
export default reducer;
