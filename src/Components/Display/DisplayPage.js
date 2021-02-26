import React from "react";

const DisplayPage = ({ movie, isFavorite, addFavorite, deleteFavorite }) => {
  return (
    <div>
      <h3>{movie.title}</h3>

      {!isFavorite && (
        <button onClick={(e) => addFavorite(movie)}>Add Favorite</button>
      )}
      {isFavorite && (
        <button onClick={(e) => deleteFavorite(movie)}>Delete Favorite</button>
      )}
    </div>
  );
};

export default DisplayPage;
