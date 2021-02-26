import { ADD_FAVORITES, DELETE_FAVORITES } from "../Actions";

function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return [...state, action.favorite];

    case DELETE_FAVORITES:
      let newState = [...state];
      let idx = newState.findIndex((movie) => movie.id === action.id);
      newState.splice(idx, 1);
      return newState;

    default:
      return state;
  }
}

export default favoritesReducer;
