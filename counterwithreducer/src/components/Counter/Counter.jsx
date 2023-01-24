import React, { useReducer } from 'react';
import './Counter.css';
import {
  increment_value,
  decrement_value,
  reset_value
} from '../../reducer/Actions';
import Reducer from '../../reducer/Reducer';

const initialstate = {
  counter: 0
};

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialstate);
  const increment = (value) => {
    dispatch({ type: increment_value, payload: value });
  };
  const decrement = (value) => {
    dispatch({ type: decrement_value, payload: value });
  };
  const reset = () => {
    dispatch({ type: reset_value });
  };

  return (
    <>
      <div className="count_countainer">
        <button className="count_btn" onClick={() => decrement(1)}>
          -
        </button>
        <p className="count_result">{Number(state.counter)}</p>
        <button className="count_btn" onClick={() => increment(1)}>
          +
        </button>
      </div>
      <div>
        <button className="count_btn1" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
