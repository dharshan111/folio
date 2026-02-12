import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Education />
        <Skills />
        <Project />
        <Contact />
      </Container>
    </>
  );
};

export default App;
