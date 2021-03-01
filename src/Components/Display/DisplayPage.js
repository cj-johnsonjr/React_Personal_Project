import React from "react";
import "./DisplayPage.css";

const DisplayPage = ({ movie, isFavorite, addFavorite, deleteFavorite }) => {
  return (
    <div>
      <div className="movieparent">
        <h3 className="text-center">{movie.title}</h3>
        <img className="movie" src={movie.img} alt="description"></img>
      </div>
      <div className="centering">
        {!isFavorite && (
          <button onClick={(e) => addFavorite(movie)}>Add Favorite</button>
        )}
        {isFavorite && (
          <button onClick={(e) => deleteFavorite(movie)}>
            Delete Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayPage;
