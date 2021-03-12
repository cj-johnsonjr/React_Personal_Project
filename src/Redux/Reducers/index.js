import { combineReducers } from "redux";
import favoritesReducer from "./FavoritesReducers";
import reviewsReducer from "./ReviewsReducer";
import searchReducer from "./SearchReducers";
import userReducer from "./UserReducers";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorite: favoritesReducer,
  review: reviewsReducer,
});

export default rootReducer;
