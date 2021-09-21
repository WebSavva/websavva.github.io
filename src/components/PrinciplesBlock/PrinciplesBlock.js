import React, { useContext } from "react";
import classes from "./PrinciplesBlock.module.scss";
import { FaRegHandScissors } from "@react-icons/all-files/fa/FaRegHandScissors";
import { FaFlagUsa } from "@react-icons/all-files/fa/FaFlagUsa";
import { ImShrink2 } from "@react-icons/all-files/im/ImShrink2";
import Text from "./../Text";
import Fade from "react-reveal/Fade";

const PrinciplesBlock = () => {
  return (
    <section className={classes.principles}>
      <h2 className={classes.principles__heading}>
        <Text path="principlesHeading" />
      </h2>
      <Fade bottom cascade>
        <div className={classes.principles__content}>
          <div className={classes.principles__card}>
            <div className={classes["principles__icon-set"]}>
              <div className={classes.principles__circle}></div>
              <FaRegHandScissors className={classes.principles__icon} />
            </div>
            <h4 className={classes.principles__subheading}>DRY</h4>
            <p className={classes.principles__details}>
              <Text path="dryDetails" />
            </p>
          </div>
          <div className={classes.principles__card}>
            <div className={classes["principles__icon-set"]}>
              <div className={classes.principles__circle}></div>
              <ImShrink2 className={classes.principles__icon} />
            </div>
            <h4 className={classes.principles__subheading}>KISS</h4>
            <p className={classes.principles__details}>
              <Text path="kissDetails" />
            </p>
          </div>
          <div className={classes.principles__card}>
            <div className={classes["principles__icon-set"]}>
              <div className={classes.principles__circle}></div>
              <FaFlagUsa className={classes.principles__icon} />
            </div>
            <h4 className={classes.principles__subheading}>English-First</h4>
            <p className={classes.principles__details}>
              <Text path="englishFirstDetails" />
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default PrinciplesBlock;
