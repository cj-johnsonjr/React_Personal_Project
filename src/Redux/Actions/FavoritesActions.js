export const ADD_FAVORITES = "Add Favorites";
export const DELETE_FAVORITES = "Delete Favorites";

export function addFavorite(movie) {
  return { type: ADD_FAVORITES, favorites: movie };
}

export function deleteFavorite(id) {
  return { type: DELETE_FAVORITES, id: id };
}
