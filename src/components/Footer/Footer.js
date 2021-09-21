import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>&#169;{new Date().getFullYear()} All rights reserved by WebSavva</p>
      <p>
        Inspired by{" "}
        <a href="https://stashchuk.com/" target="_blank">
          staschuk.com
        </a>{" "}
        and{" "}
        <a href="https://copilot.github.com/" target="_blank">
          copilot.github.com
        </a>
      </p>
    </div>
  );
};

export default Footer;
