import React from "react";

const SearchPage = () => {
  return (
    <>
      <h1 className="text-center">Welcome (Username)</h1>
      <div className="container">
        <label htmlFor="title">Search For a Movie/Show:</label>
        <input type="text" placeholder="Movie/TV Title"></input>
      </div>
      <div className="container space">
        <label htmlFor="rating">
          Please pick which type you are searching for:
        </label>
        <select>
          <option>Movie</option>
          <option>Show</option>
          <option>Episode</option>
        </select>
      </div>
      <div className="container space">
        <label htmlFor="year">Select which Year:</label>
        <input type="number" min="1900" max="2025"></input>
      </div>
      <div className="container">
        <button>Search</button>
      </div>
      <hr />
    </>
  );
};

export default SearchPage;
