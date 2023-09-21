import React from "react";
import classes from "./MovieCard.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { detailAction } from "../Store/movie-tv-details";
const MovieCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let releaseDate = props.data.releaseDate;
  const navigateHandler = (event) => {
    dispatch(detailAction.changeId({ id: props.id }));
    dispatch(detailAction.changeMedia({ media: props.data.media }));
    navigate(`${props.id}`);
  };
  return (
    <motion.div
      onClick={navigateHandler}
      whileHover={{ scale: 1.18, zIndex: 100 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
      className={classes.movieCard}
    >
      <img src={`https://image.tmdb.org/t/p/w500/${props.data.bgImage}`} />
      <div className={classes.intro}>
        <h4>{props.data.title}</h4>
        <div className={classes.star}>
          <span>
            <i
              className="star fa-solid fa-star"
              style={{ color: "yellow" }}
            ></i>{" "}
            <span className="star">{props.data.rating}</span>{" "}
          </span>
          {releaseDate && <p>{releaseDate.slice(0, 4)}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
