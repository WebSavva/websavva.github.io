import React, { useState, useEffect } from "react";
import text from "../data/text.json";

export const GlobalCtx = React.createContext({
  lang: {
    currentLanguage: "",
    textContent: {},
    toggleLanguage: () => {},
  },
  theme: {
    isDarkTheme: false,
    toggleTheme: () => {},
    setDarkTheme: (themeType) => {},
  },
});

const GlobalProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleLanguage = () =>
    setCurrentLanguage((prevLang) => (prevLang === "en" ? "ru" : "en"));
  const toggleTheme = () => setIsDarkTheme((prevTheme) => !prevTheme);

  const store = {
    lang: {
      currentLanguage: currentLanguage,
      textContent: text,
      toggleLanguage,
    },
    theme: {
      isDarkTheme,
      toggleTheme,
      setDarkTheme: setIsDarkTheme,
    },
  };

  useEffect(() => {
    const hours = new Date().getHours();
    setIsDarkTheme(hours > 17 || hours < 6);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return <GlobalCtx.Provider value={store}>{children}</GlobalCtx.Provider>;
};

export default GlobalProvider;
