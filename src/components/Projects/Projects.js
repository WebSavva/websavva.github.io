import React, { useState, useCallback, useEffect, useContext } from "react";
import classes from "./Projects.module.scss";
import projectsData from "./../../data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
import { BiSortDown } from "@react-icons/all-files/bi/BiSortDown";
import { BiSortUp } from "@react-icons/all-files/bi/BiSortUp";
import FlipMove from "react-flip-move";
import Fade from "react-reveal/Fade";
import Text from "../Text";
import { GlobalCtx } from "../../store/GlobalContext";

const Projects = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [projects, setProjectData] = useState(projectsData);
  const {
    lang: { textContent, currentLanguage },
  } = useContext(GlobalCtx);
  const [isDescendingOrder, setIsDescendingOrder] = useState(true);
  const [visibleNumber, setVisibleNumber] = useState(6);
  const toggleOrder = useCallback(() => setIsDescendingOrder((prev) => !prev));

  useEffect(() => {
    setProjectData(
      projectsData
        .sort((a, b) =>
          isDescendingOrder
            ? b.complexity - a.complexity
            : a.complexity - b.complexity
        )
        .slice(0, visibleNumber)
    );
  }, [isDescendingOrder, visibleNumber]);
  return (
    <div className={classes.projects} id="projects">
      <div className={classes.projects__head}>
        <h4 className={classes.projects__heading}>
          <Text path="projectsHeader" />
        </h4>
        <button className={classes.projects__btn} onClick={toggleOrder}>
          {isDescendingOrder ? <BiSortDown /> : <BiSortUp />}
        </button>
      </div>
      <Fade bottom onReveal={() => setIsRevealed(true)}>
        <React.Fragment>
          <div className={classes.projects__content}>
            <FlipMove typeName={null} easing={"ease-in-out"} duration={5e2}>
              {projects.map((data) => {
                const [headerText, descriptionText, infoText] =
                  textContent.projects[data.name][currentLanguage];
                return (
                  <ProjectCard
                    allowNumberAnimation={isRevealed}
                    key={data.githubLink}
                    {...data}
                    headerText={headerText}
                    descriptionText={descriptionText}
                    infoText={infoText}
                  />
                );
              })}
            </FlipMove>
          </div>
          {visibleNumber < projectsData.length && (
            <button
              className={classes.projects__show}
              onClick={() => setVisibleNumber(projectsData.length)}
            >
              <BiChevronDown />
            </button>
          )}
        </React.Fragment>
      </Fade>
    </div>
  );
};

export default Projects;
