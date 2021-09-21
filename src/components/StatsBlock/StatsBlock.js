import React, { useState } from "react";
import useAnimatedNumber from "../../hooks/useAnimatedNumber";
import classes from "./StatsBlock.module.scss";
import Fade from "react-reveal/Fade";
import stats from "./../../data/stats.json";
import Text from "../Text";

const StatsBlock = () => {
  const [isBlockReavealed, setIsBlockRevealed] = useState(false);
  const numberCourseHours = useAnimatedNumber({
    value: stats.courseHours,
    step: 1,
    startValue: 180,
    isStartAllowed: isBlockReavealed,
  });
  const numberPassedCourses = useAnimatedNumber({
    value: stats.coursesPassed,
    step: 0.2,
    isStartAllowed: isBlockReavealed,
  });
  const numberMadeProjects = useAnimatedNumber({
    value: stats.projectsMade,
    step: 0.08,
    isStartAllowed: isBlockReavealed,
  });

  const formatNumber = (number) => Math.round(number);

  return (
    <section className={classes.stats}>
      <Fade bottom duration={5e2} onReveal={() => setIsBlockRevealed(true)}>
        <div className={classes.stats__content}>
          <div className={classes.stats__card}>
            <h3 className={classes.stats__heading}>
              {formatNumber(numberCourseHours)} +
            </h3>
            <span className={classes.stats__info}>
              {stats.courseHours} <Text path="statsCourseHours" />
            </span>
          </div>
          <div className={classes.stats__card}>
            <h3 className={classes.stats__heading}>
              {formatNumber(numberPassedCourses)} +
            </h3>
            <span className={classes.stats__info}>
              {stats.coursesPassed} <Text path="statsPassedCourses" />
            </span>
          </div>
          <div className={classes.stats__card}>
            <h3 className={classes.stats__heading}>
              {formatNumber(numberMadeProjects)} +
            </h3>
            <span className={classes.stats__info}>
              {stats.projectsMade} <Text path="statsMadeProjects" />
            </span>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default StatsBlock;
