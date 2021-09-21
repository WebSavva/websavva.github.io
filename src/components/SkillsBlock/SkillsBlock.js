import React, { useState } from "react";
import importAll from "../../utilities/importAll";
import classes from "./SkillsBlock.module.scss";
import skillsData from "./../../data/skills.json";
import Skill from "./Skill";
import Fade from "react-reveal/Fade";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import Text from "../Text";
const logos = importAll(
  require.context("./../../assets/skills", false, /\.svg$/),
  (filename) => filename.replace("./", "").replace(".svg", "")
);

const SkillsBlock = () => {
  const [shownAmount, setShownAmount] = useState(8);
  return (
    <section className={classes.skills}>
      <h4 className={classes.skills__heading}>
        <Text path="skillsHeading" />
      </h4>
      <Fade left>
        <div className={classes.skills__content}>
          {skillsData
            .sort((left, right) => right.knowledgeLevel - left.knowledgeLevel)
            .slice(0, shownAmount)
            .map((skillData) => (
              <Skill
                key={skillData.name}
                {...skillData}
                imgSrc={logos[skillData.name]}
              />
            ))}
          {shownAmount === 8 && (
            <button
              className={classes["skills__show-btn"]}
              onClick={() => setShownAmount(skillsData.length)}
            >
              <BsChevronDown className={classes["skills__show-icon"]} />
            </button>
          )}
        </div>
      </Fade>
    </section>
  );
};

export default SkillsBlock;
