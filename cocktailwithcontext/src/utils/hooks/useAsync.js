import { useReducer, useEffect } from 'react';

export function useAsync(asyncReducer, asyncCallback, initialState) {
  const [state, dispatch] = useReducer(asyncReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'pending' });
    const promise = asyncCallback();

    if (!promise) {
      return;
    }

    promise.then(
      (response) => {
        dispatch({ type: 'resolved', data: response.drinks });
      },
      (error) => {
        dispatch({ type: 'rejected', error });
      }
    );
  }, [asyncCallback]);

  return state;
}
