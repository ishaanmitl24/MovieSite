import React from "react";
import SeeAllButton from "./SeeAllButton";
import classes from "./MovieFilter.module.css";
import { useDispatch } from "react-redux";
import { movieGenreSliceAction } from "../Store/movie-genre-slice";

const MovieFilter = (props) => {
  const dispatch = useDispatch();
  const showMovies = (event) => {
    dispatch(movieGenreSliceAction.changeSeeAll());
  };
  return (
    <div className={classes.main}>
      <div className={classes.filterHead}>
        <div className={classes.filter}>
          <i className={`${classes.icon} fa-solid fa-film fa-2xl`}></i>
          <h1>Movies</h1>
        </div>
        <hr />
        <div className={classes.series}>
          {props.data.map((u) => u.name).join(" & ")}
        </div>
      </div>
      <SeeAllButton see={classes.see} showMovies={showMovies} />
    </div>
  );
};

export default MovieFilter;
