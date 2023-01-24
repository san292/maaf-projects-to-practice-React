import { SET_LOADING } from './Actions';
import { SET_STORIES } from './Actions';
import { HANDLE_SEARCH } from './Actions';
import { HANDLE_REMOVE } from './Actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload
      };
    case HANDLE_REMOVE:
      const filterRemoveId = state.hits.filter(
        (hit) => hit.objectID !== action.payload
      );
      return {
        ...state,
        hits: filterRemoveId
      };

    default:
      return state;
  }
};
export default reducer;
