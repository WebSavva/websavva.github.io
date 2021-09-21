import React, { useContext, useState, useEffect } from "react";
import usePrevious from "../../hooks/usePrevious";
import "./../../styles/abstract/_mixins.scss";
import classes from "./Header.module.scss";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { MdLanguage } from "@react-icons/all-files/md/MdLanguage";
import { GlobalCtx } from "../../store/GlobalContext";
import Text from "../Text";

const Header = () => {
  const {
    lang: { currentLanguage, toggleLanguage },
    theme: { isDarkTheme, toggleTheme },
  } = useContext(GlobalCtx);
  const [isHeaderVisible, setIsHeaderVisible] = useState(
    window.pageXOffset < 100
  );
  const [scrolledHeight, setScrolledHeight] = useState(window.pageYOffset);
  const previosScrolledHeight = usePrevious(scrolledHeight);
  useEffect(() => {
    const onScrollHanler = () => {
      setScrolledHeight(window.pageYOffset);
    };
    window.addEventListener("scroll", onScrollHanler);

    return () => window.removeEventListener("scroll", onScrollHanler);
  }, []);

  useEffect(() => {
    if (
      previosScrolledHeight !== null &&
      window.pageYOffset - previosScrolledHeight < 0
    ) {
      setIsHeaderVisible(true);
    } else if (window.pageYOffset > 100) {
      setIsHeaderVisible(false);
    }
  }, [scrolledHeight]);
  return (
    <header
      className={classes.header}
      style={{ transform: `translateY(${isHeaderVisible ? 0 : -100}%)` }}
    >
      <div className={classes.header__content}>
        <div className={classes.header__logo}>{"<WS />"}</div>
        <nav>
          <ul className={classes.header__nav}>
            <li>
              <a href="#hero">
                <Text path="menuHome" />
              </a>
            </li>
            <li>
              <a href="#projects">
                <Text path="menuProjects" />
              </a>
            </li>
            <li>
              <button
                className={`${classes["header__mode-btn"]}`}
                onClick={toggleTheme}
              >
                {isDarkTheme ? (
                  <FaMoon className={classes.header__icon} />
                ) : (
                  <FaSun className={classes.header__icon} />
                )}
              </button>
            </li>
            <li>
              <button
                className={classes["header__lang-btn"]}
                onClick={toggleLanguage}
              >
                <MdLanguage className={classes.header__icon} />
                <span>{currentLanguage}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
