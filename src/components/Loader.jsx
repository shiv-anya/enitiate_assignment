import React from "react";
import classes from "./Loader.module.css";

const Loader = ({ color }) => {
  return (
    <div className="h-auto w-auto">
      {color === "blue" ? (
        <div className="h-[100vh] flex justify-center items-center">
          <span className={classes.loader_blue}></span>
        </div>
      ) : (
        <span className={classes.loader_white}></span>
      )}
    </div>
  );
};

export default Loader;
