import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../../Redux/Actions";
import DisplayPage from "../Display/DisplayPage";

const FavoritesPage = (props) => {
  return (
    <>
      <h1 className="text-center">FAVORITES</h1>
      <div></div>
      {props.favorite.map((v) => (
        <DisplayPage
          key={v.id}
          movie={v}
          isFavorite={true}
          deleteFavorite={props.favorite.deleteFavorite}
        />
      ))}
    </>
  );
};

const mapDispatchFromProps = {
  deleteFavorite,
};

function mapStateToProps(state) {
  return {
    favorite: state.favorite,
  };
}

export default connect(mapStateToProps, mapDispatchFromProps)(FavoritesPage);
