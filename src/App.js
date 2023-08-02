import React from "react";
import Layout from "./components/UI/Layout";
import GlobalProvider from "./store/GlobalContext";
import HeroBlock from "./components/HeroBlock/HeroBlock";
import PrinciplesBlock from "./components/PrinciplesBlock/PrinciplesBlock";
import StatsBlock from "./components/StatsBlock/StatsBlock";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
import AcademicBlock from "./components/AcademicBlock/AcademicBlock";
import CodeBlock from "./components/CodeBlock/CodeBlock";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";

const App = () => {
  return (
    <GlobalProvider>
      <Layout>
        <HeroBlock />
        <PrinciplesBlock />
        <StatsBlock />
        <SkillsBlock />
        <AcademicBlock />
        <CodeBlock />
        <Projects />
      </Layout>
    </GlobalProvider>
  );
};

export default App;
