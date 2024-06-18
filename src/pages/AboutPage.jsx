import React from "react";
import AboutCTA from "../components/AboutCTA";
import AboutHero from "../components/AboutHero";
import AboutOurValues from "../components/AboutOurValues";
import AboutWhyUs from "../components/AboutWhyUs";
import OurTeam from "../components/OurTeam";

const AboutPage = () => {
  return (
    // I'm going to leave this as empty fragments with bunch of components in here completing the page
    <>
      <AboutHero />
      <AboutOurValues />
      <OurTeam />
      <AboutWhyUs />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
