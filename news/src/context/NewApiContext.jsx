import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../components/Reducer';
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_SEARCH,
  HANDLE_REMOVE
} from '../components/Actions';

export const NameContext = createContext();

const initialState = {
  isLoading: false,
  query: '',
  hits: [],
  page: 0,
  nbPages: 0
};

const api = 'https://hn.algolia.com/api/v1/search?';

export const NameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(`${url}query=${state.query}`);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const inputValue = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const removeId = (id) => {
    dispatch({ type: HANDLE_REMOVE, payload: id });
  };
  useEffect(() => {
    fetchData(api);
  }, [state.query]);
  return (
    <NameContext.Provider value={{ ...state, inputValue, removeId }}>
      {children}
    </NameContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(NameContext);
};

//fichier createContext

// import { createContext, useContext, } from 'react';
// on initialise un state initial

// const initialState = {
//   isLoading: false,
//   query: '',
//   hits: [],
//   page: 0,
//   nbPages: 0
// };

// on cree notre context
// export const NameContext = createContext();

// export const NameProvider = ({ children }) => {
//   return (
////ici la value est egal a state puisque on utilise un reduer
////sinnon on peut utiliserr un useState
//     <NameContext.Provider value={{...state}}>
//       {children}
//     </NameContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(NameContext);
// };

//  avant d'utiliser le context, on englobe l'entree de l'application
//  comme ça le context est accessible dans toute lapplication

// import { NameProvider } from './context/NewApiContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <NameProvider>
//     <App />
//   </NameProvider>
// );

//pour utiliser le context

// on import le context global qui contient tout notre state
// import { useGlobalContext } from '../context/NewApiContext';
// on destructure ou non tout depend nos besoins dans le composant
// const SearchForm = () => {
//   const { inputValue, query } = useGlobalContext();
