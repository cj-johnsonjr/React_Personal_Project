import { ADD_REVIEW, DELETE_REVIEW } from "../Actions";

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case ADD_REVIEW:
      return [...state, action.add];

    case DELETE_REVIEW:
      let newState = [...state];
      let idx = newState.findIndex((review) => review.id === action.id);
      newState.splice(idx, 1);
      return newState;

    default:
      return state;
  }
}

export default reviewsReducer;
