export const ADD_REVIEW = "Add Review";
export const DELETE_REVIEW = "Delete Review";

export function addReview(review) {
  return { type: ADD_REVIEW, add: review };
}

export function deleteReview(id) {
  return { type: DELETE_REVIEW, id: id };
}
