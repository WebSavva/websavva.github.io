import React from "react";
import classes from "./CodeBlock.module.scss";
import CodeWindow from "../CodeWindow/CodeWindow";
import Fade from "react-reveal/Fade";
import Text from "./../Text";

const CodeBlock = () => {
  return (
    <div className={classes.code}>
      <Fade left>
        <div className={classes.code__content}>
          <h4 className={classes.code__heading}>
            <Text path="favoritesHeader" />
          </h4>
          <CodeWindow />
        </div>
      </Fade>
    </div>
  );
};

export default CodeBlock;
