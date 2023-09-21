import React from "react";
import classes from "./MovieDetail.module.css";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";

const MovieDetail = (props) => {
  const detail = useSelector((state) => state.detail);
  const data = useSelector((state) => state.detail.item);
  const genre = useSelector((state) => state.detail.genre);
  const audioNew = useSelector((state) => state.detail.audio);
  const overview = useSelector((state) => state.detail.overview);
  const dateStr = data["release_date"];
  const date = new Date(dateStr);
  const rate = parseInt(data["vote_average"]);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const getMonthName = (month) => {
    const monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthArr[month - 1];
  };

  return (
    <div className={classes.main}>
      <h1>Details about : {data.title}</h1>
      <div className={classes.singlePage}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data["poster_path"]}`}
          alt={`${data.title} image`}
        />
        <div className={classes.data}>
          <span className={classes.topHeading}>
            <h1>{data.title}</h1>
            {<p>({year})</p>}
          </span>
          <span className={classes.genre}>
            <p>|</p>
            {genre.map((item) => (
              <p key={item.id}>{item.name},</p>
            ))}
            <p>|</p>
            <p>{`${getMonthName(month)} ${day} , ${year}`}</p>
          </span>
          <span className={classes.rating}>
            <StarIcon className={classes.star} />
            <div className={classes.rate}>
              <span>
                <strong>Rating: </strong>
                {rate}/10 from {data["vote_count"]} users.
              </span>
              <p>
                {overview && overview}
                {!overview && <p>Overview Not Available</p>}
              </p>
            </div>
          </span>
          <span className={classes.audio}>
            <span>
              <p className={classes.audioHead}>
                <strong>Audio : </strong>
              </p>
              {audioNew.map((item) => (
                <p key={item["iso_639_1"]}>{item["english_name"]},</p>
              ))}
            </span>
            <p className={classes.status}>
              <strong>Type : </strong>
              {detail.media}
            </p>
            <p className={classes.status}>
              <strong> Status : </strong>
              {data["status"]}
            </p>
            <p className={classes.status}>
              <strong>Runtime : </strong>
              {data["runtime"]}mins
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
