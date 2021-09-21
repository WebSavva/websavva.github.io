import React, { useContext } from "react";
import { GlobalCtx } from "./../../store/GlobalContext";
import classes from "./Connect.module.scss";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiVk } from "@react-icons/all-files/si/SiVk";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import Fade from "react-reveal/Fade";

const Connect = () => {
  const {
    lang: { currentLanguage, textContent },
  } = useContext(GlobalCtx);
  const [highlitedPartHeader, normalPartHeader] =
    textContent.connectHeader[currentLanguage];
  return (
    <div className={classes.connected}>
      <h4 className={classes.connected__heading}>
        <span>{highlitedPartHeader}</span>
        {normalPartHeader}
      </h4>
      <Fade bottom>
        <div className={classes.connected__content}>
          <a
            href="https://www.facebook.com/profile.php?id=100019597573319"
            target="_blank"
          >
            <SiFacebook />
          </a>
          <a href="https://github.com/WebSavva" target="_blank">
            <SiGithub />
          </a>
          <a href="https://vk.com/id444973440" target="_blank">
            <SiVk />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Connect;
