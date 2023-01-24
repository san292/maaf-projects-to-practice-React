import React from 'react';
import {
  increment_value,
  decrement_value,
  reset_value
} from '../reducer/Actions';

const Reducer = (state, action) => {
  switch (action.type) {
    case increment_value:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case decrement_value:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case reset_value:
      return {
        counter: 0
      };

    default:
      return state;
  }
};

export default Reducer;
