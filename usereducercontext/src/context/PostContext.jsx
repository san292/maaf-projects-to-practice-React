import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from '../components/Reducer';
import {
  SET_POSTS,
  SET_LOADING,
  SET_SEARCH,
  SET_REMOVE
} from '../components/Actios';

const initialState = {
  isLoading: false,
  query: '',
  posts: []
};
const api = 'https://jsonplaceholder.typicode.com/posts?';
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(`${url}${state.query}`);
      const data = await response.json();
      console.log('data', data);

      dispatch({
        type: SET_POSTS,
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const inputValue = (query) => {
    dispatch({ type: SET_SEARCH, payload: query });
  };

  const removeId = (id) => {
    dispatch({ type: SET_REMOVE, payload: id });
    console.log('queryyyyyyyy', id);
  };

  useEffect(() => {
    fetchData(api);
  }, [state.query]);

  return (
    <PostContext.Provider value={{ ...state, inputValue, removeId }}>
      {children}
    </PostContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PostContext);
};

//// dabort on  cree une action dans le fichier Actions.jsx

// exemple d'action : export const SET_LOADING = 'SET_LOADING';

//// dans le fichier reducer, on importe l'action

// import { SET_POSTS } from './Actios';

////on cree notre function reducer qui prend deux parametres state et action

// const reducer = (state, action) => {
//     switch (action.type) {
//       case SET_LOADING:
//         return {
//           ...state,
//           isLoading: true
//         };
//       case SET_POSTS:
//         return {
//           ...state,
//           posts: action.payload.posts,
//           isLoading: false
//         };

//       default:
//         return state;
//     }
//   };
//   export default reducer;

/// ON IMPORT NOTRE REDUCER LA OU ON EN A BESOIN

// import { createContext, useContext, useReducer, useEffect } from 'react';
// import reducer from '../components/Reducer';
// import { SET_POSTS, SET_LOADING } from '../components/Actios';

// ON DESTRUCTURE STATE ET DISPATCH DE NOTRE REDUCER ET ON LUI AFFECTE
//   DEUX PARAMETRE NOTRE INITIALESTATE ET NOTRE REDUCER

// const [state, dispatch] = useReducer(reducer, initialState);

//PUIS ON DISPATCH NOS ACTION : SET_LOADING ET SET_STORIES
//  POUR METTERA JOUR NOTRE STATE ON LE STOCKANT DANS PAYLOAD

// const fetchData = async (url) => {
//     dispatch({ type: SET_LOADING });
//     try {
//       const response = await fetch(`${url}query=${state.query}`);
//       const data = await response.json();
//       dispatch({
//         type: SET_STORIES,
//         payload: { hits: data.hits, nbPages: data.nbPages }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
