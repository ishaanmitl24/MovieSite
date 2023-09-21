import React from "react";
import classes from "./BackgroundDesign.module.css";
import ReactDOM from "react-dom";

const BackgroundDesign = () => {
  const Design = () => {
    return (
      <div className={classes.main}>
        <div className={`${classes.secondCircle} ${classes.circle}`}></div>
      </div>
    );
  };
  const BigCircle = () => {
    return <div className={classes.bigCircle}></div>;
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Design />, document.getElementById("design"))}
      {ReactDOM.createPortal(
        <BigCircle />,
        document.getElementById("bigcircle")
      )}
    </React.Fragment>
  );
};

export default BackgroundDesign;
