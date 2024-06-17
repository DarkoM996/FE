import React from "react";
import hero from "../images/hero.jpg";

const Hero = () => {
  return (
    // this h-class can be changed later on for resposiveness
    <div className="h-2/3 max-w-screen-3xl mx-auto space-y-4 ">
      {/* Image Container */}
      <div className="h-[calc(100vh-18rem)] min-w-min px-6 py-2 lg:px-8 lg:py-4 relative">
        <img
          src={hero}
          alt="hero image"
          className="object-cover rounded-2xl shadow-2xl w-full h-full"
        />
      </div>
      {/* Text Container */}
      <div className="h-1/3 w-full flex flex-col md:justify-between items-top md:flex-row  gap-6 px-6 py-4 lg:px-8">
        <div className="w-full lg:w-1/2">
          {/* Text-balance suggestion to keep the heading going into proper rows as the text goes grows/shrinks seamless */}
          <h1 className="text-4xl md:text-6xl text-balance w-full">
            Feeling The Comfort Of Resting Comfortably Using FurniPro
          </h1>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 gap-4">
          <p className="text-xl">
            Comfort in your own home shouldn’t be something that bothers you.
            Make that the problem of the past by looking through our curated
            collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button className="bg-black text-white px-6 py-4  rounded-full text-base w-full hover:bg-[#0e0f0ecc]">
              Get Started
            </button>
            <button className="bg-[#dfd6c8] px-6 py-4  rounded-full w-full hover:bg-[#a79e91]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
