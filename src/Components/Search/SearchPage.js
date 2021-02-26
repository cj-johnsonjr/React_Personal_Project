import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setSearch,
  addFavorite,
  deleteFavorite,
} from "../../Redux/Actions/index";
import DisplayPage from "../Display/DisplayPage";

const SearchPage = (props) => {
  const [year, setYear] = useState(2021);
  const [type, setType] = useState("Movies");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [faveIds, setFaveIds] = useState([]);

  useEffect(() => {
    let ids = props.favorite.map((movie) => movie.id);
    setFaveIds(ids);
  }, [props.favorite]);

  async function getMovies(search, type, year) {
    let url = `http://www.omdbapi.com/?1=tt3896198=&apikey=e6fe3ad0&s=${search}&type=${type}&y=${year}`;
    try {
      setError("");
      let response = await fetch(url);
      let json = response.json();
      let resMovies = json.data.map((val) => {
        return { id: val.imdbID, title: val.title, year: val.year };
      });
      props.setSearch(resMovies);
    } catch (e) {
      setError("An error has occured");
      props.setSearch([]);
    }
  }

  return (
    <>
      <h1 className="text-center">Welcome (Username)</h1>
      <div className="container">
        <label htmlFor="title">Search For a Movie/Show:</label>
        <input
          value={search}
          type="text"
          placeholder="Movie/TV Title"
          onChange={(e) => setSearch(e.target.value)}
          id="search"
        ></input>
      </div>
      <div className="container space">
        <label htmlFor="type">
          Please pick which type you are searching for:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="type"
        >
          <option>Movie</option>
          <option>Show</option>
          <option>Episode</option>
        </select>
      </div>
      <div className="container space">
        <label htmlFor="year">Select which Year:</label>
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="number"
          min="1900"
          max="2025"
        ></input>
      </div>
      <div className="container">
        <button onClick={(e) => getMovies(search, type, year)}>Search</button>
        {error.length > 0 && <h1>{error}</h1>}
        {error.length === 0 &&
          props.movie.map((v) => (
            <DisplayPage
              key={v.id}
              movie={v}
              isFavorite={faveIds.includes(v.id)}
              deleteFavorite={props.deleteFavorite}
              addFavorite={props.addFavorite}
            />
          ))}
      </div>
      <hr />
    </>
  );
};

const mapDispatchToProps = {
  setSearch,
  addFavorite,
  deleteFavorite,
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    movie: state.search,
    favorite: state.favorite,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
