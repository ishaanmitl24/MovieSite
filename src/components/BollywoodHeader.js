import React from "react";
import classes from "./BollywoodHeader.module.css";
import SeeAllButton from "./SeeAllButton";
import { useDispatch } from "react-redux";
import { bollywoodActions } from "../Store/bollywood-slice";

const BollywoodHeader = () => {
  const dispatch = useDispatch();
  const showMovies = (event) => {
    dispatch(bollywoodActions.changeSeeAll());
  };
  return (
    <div className={classes.main}>
      <div className={classes.recommendedHead}>
        <div className={classes.recommended}>
          <i className={`${classes.graph} fa-solid fa-globe fa-2xl`}></i>
          <h1>Bollywood</h1>
        </div>
        <hr />
        <div className={classes.series}>movies</div>
      </div>
      <SeeAllButton see={classes.see} showMovies={showMovies} />
    </div>
  );
};

export default BollywoodHeader;

