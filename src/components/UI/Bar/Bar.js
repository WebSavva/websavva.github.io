import React from "react";
import classes from "./Bar.module.scss";

const Bar = ({ barClass, fillClass, children, fillValue }) => {
  return (
    <div className={`${classes.bar} ${barClass ?? ""}`}>
      <div
        className={`${classes.bar__inner} ${fillClass ?? ""}`}
        style={{ width: fillValue + "%" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Bar;
