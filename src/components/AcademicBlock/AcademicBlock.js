import React, { useContext, useState, useEffect } from "react";
import classes from "./AcademicBlock.module.scss";
import darkQrSrc from "./../../assets/diploma-qrcode--dark.svg";
import lightQrSrc from "./../../assets/diploma-qrcode--light.svg";
import { GlobalCtx } from "./../../store/GlobalContext";
import Fade from "react-reveal/Fade";
import Text from "../Text";

const AcademicBlock = () => {
  const {
    lang: { currentLanguage, textContent },
    theme: { isDarkTheme, toggleTheme },
  } = useContext(GlobalCtx);
  const [qrSrc, setQrSrc] = useState(lightQrSrc);

  useEffect(() => {
    const newQrSrc = isDarkTheme ? darkQrSrc : lightQrSrc;
    setQrSrc(newQrSrc);
  }, [isDarkTheme]);

  return (
    <div className={classes.academic}>
      <Fade right>
        <div className={classes.academic__content}>
          <div className={classes.academic__message}>
            <h4 className={classes.academic__heading}>
              <Text path="academicHeading" />
            </h4>
            {textContent["academicDescription"][currentLanguage].map((text) => (
              <p key={text} className={classes.academic__description}>
                {text}
              </p>
            ))}
          </div>
          <div className={classes["academic__qr-column"]}>
            <img
              src={qrSrc}
              className={classes.academic__qr}
              alt="Diploma QR-code"
            />
            <a
              href="https://diploma.spbu.ru/s/?rn=2011114&bd=19990221&h=b4eec686154e479e9ca261c9c29010f5"
              className={classes.academic__link}
            >
              Link
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AcademicBlock;
