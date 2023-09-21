import React from "react";
import classes from "./BrowserHead.module.css";
import { useDispatch } from "react-redux";
import { trendActions } from "../Store/trend-slice";
import SeeAllButton from "./SeeAllButton";

const BrowserHead = () => {
  const dispatch = useDispatch();
  const showMovies = (event) => {
    dispatch(trendActions.changeSeeAll());
  };
  return (
    <div className={classes.main}>
      <div className={classes.recommendedHead}>
        <div className={classes.recommended}>
          <i className={`${classes.graph} fa-solid fa-chart-simple fa-2xl`}></i>
          <h1>recommended</h1>
        </div>
        <hr />
        <div className={classes.series}>movies and series</div>
      </div>
      <SeeAllButton see={classes.see} showMovies={showMovies} />
    </div>
  );
};

export default BrowserHead;
