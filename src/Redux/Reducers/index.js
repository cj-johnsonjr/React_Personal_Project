import { combineReducers } from "redux";
import favoritesReducer from "./FavoritesReducers";
import searchReducer from "./SearchReducers";
import userReducer from "./UserReducers";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorite: favoritesReducer,
});

export default rootReducer;
