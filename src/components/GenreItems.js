import React, { useEffect, useState } from "react";
import classes from "./GenreItems.module.css";

const GenreItems = (props) => {
  const itemHandler = (event) => {
    props.itemHandler({ id: props.id, name: props.name });
  };
  return (
    <h2
      onClick={itemHandler}
      className={`${classes.genreItem} ${props.styling}`}
    >
      {props.name}
    </h2>
  );
};
export default GenreItems;
