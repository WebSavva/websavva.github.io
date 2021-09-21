import React, { useContext, useState, useEffect, useRef } from "react";
import classes from "./HeroBlock.module.scss";
import HeroImage from "./HeroImage";
import { GlobalCtx } from "../../store/GlobalContext";
import Text from "../Text";
import { Typewriter } from "react-simple-typewriter";
import Fade from "react-reveal/Fade";

const HeroBlock = () => {
  const {
    lang: { currentLanguage, textContent },
  } = useContext(GlobalCtx);

  return (
    <div className={classes.hero} id="hero">
      <div className={classes.hero__content}>
        <Fade left>
          <div className={classes.hero__intro}>
            <h4 className={classes.hero__heading}>
              <span>
                <Text path="heroHeading" />
              </span>
              <span className={classes["hero__heading--highlight"]}>
                <Typewriter
                  words={textContent.heroHeadingHighlight[currentLanguage]}
                  cursor
                  loop={false}
                  cursorStyle="|"
                />
              </span>
            </h4>
            <p className={classes.hero__text}>
              <Text path="heroText" />
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className={classes.hero__img}>
            <HeroImage />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default HeroBlock;
