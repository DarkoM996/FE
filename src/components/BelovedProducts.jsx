import React from "react";
import picture1 from "../images/newsstandimage2.jpg";
import picture2 from "../images/newsstandimage3.jpg";
import picture3 from "../images/newsstandimage4.jpg";
import { Link } from "react-router-dom";

const BelovedProducts = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      <h2 className="text-4xl md:text-5xl py-12">Beloved Products</h2>
      {/* Grid of 3 popular products from the customers */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Image container */}
        <div className="relative col-span-3 h-[500px]">
          <img
            src={picture1}
            alt="/"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Name of a product + Button that links to other parts of the web app */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center bg-black/40 rounded-3xl">
            <h3 className="text-3xl text-white">Name Of Product</h3>
            <Link
              to="/products/1"
              className="px-8 py-4 bg-black text-white hover:bg-primary_darkerShade-800 rounded-full"
            >
              Click Me
            </Link>
          </div>
        </div>
        {/* Image container */}
        <div className="relative col-span-3 h-[500px]">
          <img
            src={picture2}
            alt="/"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Name of product + Button that links to other parts of the web app */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/40 rounded-3xl">
            <h3 className="text-3xl text-white">Name of Product</h3>
            <Link
              to="/products/2"
              className="px-8 py-4 bg-black text-white  hover:bg-primary_darkerShade-800 rounded-full "
            >
              Click Me
            </Link>
          </div>
        </div>
        {/* Image container */}
        <div className="relative col-span-3 lg:col-span-6 h-[500px]">
          <img
            src={picture3}
            alt="/"
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Name of product + Button that links to other parts of the web app */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/40 rounded-3xl">
            <h3 className="text-3xl text-white">Name of Product</h3>
            <Link
              to="/products/3"
              className="px-8 py-4 bg-black text-white hover:bg-primary_darkerShade-800 rounded-full"
            >
              Click Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelovedProducts;
