import React from "react";
import picture1 from "../images/newsstandimage2.jpg";
import picture2 from "../images/newsstandimage3.jpg";
import picture3 from "../images/newsstandimage4.jpg";

const BelovedProducts = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      <h2 className="text-4xl md:text-5xl py-12">Beloved Products</h2>
      {/* Grid of 3 popular products from the customers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image container */}
        <div>
          <img
            src={picture1}
            alt="/"
            className="w-full h-[600px] object-cover"
          />
        </div>
        {/* Image container */}
        <div className="relative">
          <img
            src={picture2}
            alt="/"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          {/* Name of product + Button that links to other parts of the web app */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/50 rounded-3xl">
            <h3 className="text-3xl text-white">Name of Product</h3>
            <button className="p-4 bg-white text-black rounded-full">
              Click Me
            </button>
          </div>
        </div>
        {/* Image container */}
        <div>
          <img
            src={picture3}
            alt="/"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BelovedProducts;
