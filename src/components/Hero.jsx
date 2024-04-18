import React from "react";
import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full">
      <img src={hero} alt="heroimage" className="w-full h-full" />
    </div>
  );
};

export default Hero;
