import { SET_LOADING } from './Actios';
import { SET_POSTS } from './Actios';
import { SET_SEARCH } from './Actios';
import { SET_REMOVE } from './Actios';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SET_POSTS:
      const filterPost = action.payload.filter((item) => {
        return item.title.slice(0, 3) === state.query;
      });
      console.log('filetr', filterPost);
      return {
        ...state,
        posts: filterPost,
        isLoading: false
      };
    case SET_SEARCH:
      return {
        ...state,
        query: action.payload
      };
    case SET_REMOVE:
      const deletePosts = state.posts.filter(
        (post) => post.id !== action.payload
      );

      return {
        ...state,
        posts: deletePosts
      };

    default:
      return state;
  }
};
export default reducer;
