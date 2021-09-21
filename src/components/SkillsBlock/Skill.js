import React, { useState } from "react";
import classes from "./Skill.module.scss";
import useAnimatedNumber from "./../../hooks/useAnimatedNumber";
import Fade from "react-reveal/Fade";
import Bar from "../UI/Bar/Bar";

const Skill = ({ name, knowledgeLevel, imgSrc }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const currentKnowledgeLevel = useAnimatedNumber({
    isStartAllowed: isRevealed,
    value: knowledgeLevel,
    step: 1,
    delay: 1e3,
  });
  return (
    <Fade left onReveal={() => setIsRevealed(true)}>
      <div className={classes.skill}>
        <div className={classes.skill__header}>
          <img src={imgSrc} alt={name} className={classes.skill__icon} />
          <h6 className={classes.skill__name}>{name}</h6>
        </div>
        <Bar
          barClass={classes.skill__bar}
          fillClass={classes["skill__bar--filled"]}
          fillValue={currentKnowledgeLevel}
        >
          <Fade delay={25e2}>
            <span className={classes.skill__value}>{knowledgeLevel}%</span>
          </Fade>
        </Bar>
      </div>
    </Fade>
  );
};

export default Skill;
