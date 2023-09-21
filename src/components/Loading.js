import React from "react";
import classes from "./Loading.module.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Loading = () => {
  const loading = useSelector((state) => state.loading);
  let specialClass = "";
  if (loading.status === "loading") {
    specialClass = classes.loading;
  }
  if (loading.status === "success") {
    specialClass = classes.success;
  }
  if (loading.status === "failed") {
    specialClass = classes.failed;
  }

  return (
    <div className={`${classes.loading} ${specialClass}`}>
      <div className={classes.loadingData}>
        <h1>{loading.title}</h1>
        <h3>{loading.message}</h3>
      </div>
    </div>
  );
};

export default Loading;
