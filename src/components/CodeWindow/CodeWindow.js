import React, { useState, useCallback, useEffect, useContext } from "react";
import classes from "./CodeWindow.module.scss";
import { VscFiles } from "@react-icons/all-files/vsc/VscFiles";
import { VscSearch } from "@react-icons/all-files/vsc/VscSearch";
import { VscSourceControl } from "@react-icons/all-files/vsc/VscSourceControl";
import { VscDebugAlt2 } from "@react-icons/all-files/vsc/VscDebugAlt2";
import { VscExtensions } from "@react-icons/all-files/vsc/VscExtensions";
import { VscAccount } from "@react-icons/all-files/vsc/VscAccount";
import { VscSettingsGear } from "@react-icons/all-files/vsc/VscSettingsGear";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import importAll from "../../utilities/importAll";
import getIcons from "../../utilities/getIcons";
import codeData from "./../../data/code.json";
import { GlobalCtx } from "./../../store/GlobalContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  okaidia,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Typist from "react-typist";

const rawCodeData = importAll(
  require.context("./../../assets/code_samples", false, /\.txt$/),
  (filename) => filename.replace("./", "").replace(".txt", "")
);

const FileIcons = getIcons([SiCplusplus, SiJavascript, SiPython, SiTypescript]);

const CodeWindow = () => {
  const {
    theme: { isDarkTheme },
  } = useContext(GlobalCtx);
  const [activeFile, setActiveFile] = useState(codeData[0].filename);
  const [typing, setTyping] = useState(true);
  const selectFile = useCallback((selectedFile) => {
    setActiveFile(selectedFile);
  }, []);
  const activeLanguage = codeData.find(
    (codeData) => codeData.filename === activeFile
  ).language;
  const syntaxTheme = isDarkTheme ? okaidia : materialLight;
  const codeContent = (
    <SyntaxHighlighter
      language={activeLanguage}
      showLineNumbers
      style={syntaxTheme}
      className={classes["code-window__code"]}
    >
      {rawCodeData[activeFile]}
    </SyntaxHighlighter>
  );

  useEffect(() => {
    if (!typing) setTyping(true);
  }, [typing]);

  const fileTabs = codeData.map(({ filename, iconName, language }) => {
    const Icon = FileIcons[iconName];
    return (
      <button
        key={filename}
        className={`${classes["code-window__tab"]} ${
          activeFile === filename ? classes["code-window__tab--active"] : ""
        }`}
        onClick={selectFile.bind(null, filename)}
      >
        <Icon />
        <span>{filename}</span>
      </button>
    );
  });

  return (
    <div className={`${classes["code-window"]} ${classes["vs-colored"]}`}>
      <div className={classes["code-window__head"]}>
        <div className={classes["code-window__manage"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h5 className={classes["code-window__heading"]}>Visual Studio Code</h5>
      </div>
      <div className={classes["code-window__content"]}>
        <div className={classes.sidebar}>
          <VscFiles className={classes.sidebar__icon} />
          <VscSearch className={classes.sidebar__icon} />
          <VscSourceControl className={classes.sidebar__icon} />
          <VscDebugAlt2 className={classes.sidebar__icon} />
          <VscExtensions
            className={`${classes.sidebar__icon} ${classes["sidebar__icon--pushing"]}`}
          />
          <VscAccount className={classes.sidebar__icon} />
          <VscSettingsGear className={classes.sidebar__icon} />
        </div>
        <div className={classes["code-window__display"]}>
          <div className={classes["code-window__tabs"]}>{fileTabs}</div>
          {typing ? (
            <Typist
              avgTypingDelay={30}
              cursor={{ show: false }}
              key={activeFile}
              onTypingDone={() => setTimeout(setTyping, 3e3, false)}
              className={classes["code-window__code-wrapper"]}
            >
              {codeContent}
            </Typist>
          ) : (
            codeContent
          )}
        </div>
      </div>
      <div className={classes["code-window__bottom"]}>
        <VscSourceControl />
        <span>Main</span>
      </div>
    </div>
  );
};

export default CodeWindow;
