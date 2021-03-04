import React from "react";
import "./DisplayPage.css";

const DisplayPage = ({ movie, isFavorite, addFavorite, deleteFavorite }) => {
  return (
    <div className="movieparent">
      <h3 className="text-center">{movie.title}</h3>
      <img className="movie" src={movie.img} alt="description"></img>

      {!isFavorite && (
        <button className="centering" onClick={(e) => addFavorite(movie)}>
          Add Favorite
        </button>
      )}
      {isFavorite && (
        <button className="centering" onClick={(e) => deleteFavorite(movie)}>
          Delete Favorite
        </button>
      )}
    </div>
  );
};

export default DisplayPage;
