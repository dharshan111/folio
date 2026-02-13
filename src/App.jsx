import React, { useEffect } from "react"; // Add useEffect here
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Container } from "@mui/material";
import Education from "./components/Education";
import Skillsmob from "./components/Skillsmob";

const App = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      offset: 100, // Offset from original trigger point
      easing: 'ease-in-out', // Easing function
    });
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <>
      <Container>



















        <Header />
        <Hero />
        <Education />
        <Skills />
        <Skillsmob sx={{display:{xs:"block", md:"hidden"}}} />
        <Project />
        <Contact />
      </Container>
    </>
  );
};

export default App;