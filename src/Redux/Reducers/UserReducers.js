import { bindActionCreators } from "redux";
import { CLEAR_USER, SET_USER } from "../Actions";

function userReducer(state = [], action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, username: action.username };

    case CLEAR_USER:
      return { ...state, username: "" };

    default:
      return state;
  }
}

export default userReducer;
