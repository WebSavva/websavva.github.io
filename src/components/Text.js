import React, { useContext } from "react";
import text from "./../data/text.json";
import { GlobalCtx } from "../store/GlobalContext";

const Text = ({ path }) => {
  const {
    lang: { currentLanguage },
  } = useContext(GlobalCtx);
  return <>{text[path][currentLanguage]}</>;
};

export default Text;
