import React, {
  forwardRef,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import classes from "./ProjectCard.module.scss";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { SiVk } from "@react-icons/all-files/si/SiVk";
import { SiPaypal } from "@react-icons/all-files/si/SiPaypal";
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs";
import { SiVueDotJs } from "@react-icons/all-files/si/SiVueDotJs";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiSocketDotIo } from "@react-icons/all-files/si/SiSocketDotIo";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiReactrouter } from "@react-icons/all-files/si/SiReactrouter";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiFlask } from "@react-icons/all-files/si/SiFlask";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiSass } from "@react-icons/all-files/si/SiSass";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";
import { FiFolder } from "@react-icons/all-files/fi/FiFolder";
import { FiInfo } from "@react-icons/all-files/fi/FiInfo";
import { GlobalCtx } from "./../../store/GlobalContext";
import Bar from "./../UI/Bar/Bar";

import useAnimatedNumber from "../../hooks/useAnimatedNumber";
import getIcons from "../../utilities/getIcons";

const TechIcons = getIcons([
  SiWebpack,
  SiVk,
  SiPaypal,
  SiNextDotJs,
  SiVueDotJs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSocketDotIo,
  SiMongodb,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiBootstrap,
  SiNodeDotJs,
  SiFlask,
  SiGithub,
  SiSass,
]);

const ProjectCard = forwardRef(
  (
    {
      link,
      githubLink,
      headerText,
      descriptionText,
      complexity,
      techIconNames,
      infoText,
      allowNumberAnimation,
    },
    ref
  ) => {
    const GitHubIcon = TechIcons["SiGithub"];
    const {
      lang: { currentLanguage },
    } = useContext(GlobalCtx);
    const [isRevealed, setIsRevealed] = useState(false);
    const currentComplexity = useAnimatedNumber({
      isStartAllowed: allowNumberAnimation,
      value: complexity,
      delay: 5e2,
    });
    const [isHintVisible, setIsHintVisible] = useState(false);
    const [mouseCoordinates, setMouseCoordinates] = useState({
      x: 0,
      y: 0,
    });
    const infoBlockRef = useRef(null);
    const placeHint = useCallback(
      (e) => {
        setMouseCoordinates({
          x: e.clientX,
          y: e.clientY - infoBlockRef.current.offsetHeight,
        });
      },
      [infoBlockRef]
    );
    const displayHint = useCallback(
      (e) => {
        setIsHintVisible(true);
        placeHint(e);
      },
      [placeHint]
    );
    const hideHint = useCallback(() => setIsHintVisible(false), []);

    return (
      <div className={classes.card} ref={ref}>
        <div className={classes.card__head}>
          <FiFolder />
          {link && (
            <a href={link} className={classes["card__link"]} target="_blank">
              <FiExternalLink />
            </a>
          )}
          <a
            href={githubLink}
            className={classes["card__link"]}
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
        <div className={classes.card__body}>
          <h5 className={classes.card__name}>
            {headerText}
            {infoText && (
              <React.Fragment>
                <button>
                  <FiInfo
                    onMouseEnter={displayHint}
                    onMouseMove={placeHint}
                    onMouseLeave={hideHint}
                  />
                  <span
                    ref={infoBlockRef}
                    style={{
                      display: isHintVisible ? "" : "none",
                      left: mouseCoordinates.x + "px",
                      top: mouseCoordinates.y + "px",
                    }}
                  >
                    {infoText}
                  </span>
                </button>
              </React.Fragment>
            )}
          </h5>
          <p className={classes.card__description}>{descriptionText}</p>
        </div>
        <div className={classes.card__bottom}>
          <div className={classes["card__complexity-box"]}>
            <div className={classes["card__complexity-head"]}>
              <h6>{currentLanguage === "en" ? "Complexity" : "Сложность"}</h6>
              <span>{currentComplexity}%</span>
            </div>
            <Bar
              barClass={classes.card__bar}
              fillClass={classes["card__bar--filled"]}
              fillValue={currentComplexity}
            />
          </div>
          <div className={classes["card__tech-icons"]}>
            {techIconNames.map((name) => {
              const Icon = TechIcons["Si" + name];
              return <Icon key={name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
