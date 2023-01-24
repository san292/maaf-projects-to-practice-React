import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useCallback
} from 'react';
import { useAsync } from '../hooks/useAsync';

import Error from '../../components/Error';
import ErrorPage from '../../Pages/ErrorPage';
import Loading from '../../components/Loading';
import { configApi } from '../../helpers/api';

const CocktailContext = createContext();
function asyncReducer(state, action) {
  switch (action.type) {
    case 'idle':
      return { loading: false, data: null, error: null };
    case 'pending': {
      return { loading: true, data: [], error: null };
    }
    case 'resolved': {
      return { loading: false, data: action.data || [], error: null };
    }
    case 'rejected': {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export const CocktailProvider = ({ children }) => {
  const [inputCocktail, setInputCocktail] = useState('');
  console.log('context cmponenet', inputCocktail);

  const asyncCallback = useCallback(
    () => configApi(inputCocktail),
    [inputCocktail]
  );

  const state = useAsync(asyncReducer, asyncCallback, {
    status: 'idle',
    data: [],
    error: null,
    loading: false
  });

  const { data: dataCocktails, error, status } = state;

  const onChange = (e) => {
    setInputCocktail(e.target.value);
  };
  switch (status) {
    case 'pending':
      return <Loading />;
    case 'rejected':
      return error;

    default:
      break;
  }
  console.log('context', dataCocktails);
  if (dataCocktails == [] && inputCocktail.length < 2) {
    return (
      <ErrorPage error="ce cocktail n'existe pas, veuillez vérifier votre saisie svp! " />
    );
  }

  return (
    <CocktailContext.Provider
      value={{ dataCocktails, onChange, inputCocktail }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CocktailContext);
};
