import React from "react";
import image from "../images/categorycard.jpg";
import image2 from "../images/categorycard2.jpg";
import image3 from "../images/categorycard3.jpg";
import image4 from "../images/categorycard4.jpg";
import image5 from "../images/categorycard5.jpg";
import image6 from "../images/categorycard6.jpg";
import AsideMenu from "./AsideMenu";

const Products = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      {/* Grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* Aside */}
        <div className="hidden md:inline-block">
          <AsideMenu />
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={image}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
          <img
            src={image2}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
          <img
            src={image3}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
          <img
            src={image4}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
          <img
            src={image5}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
          <img
            src={image}
            alt="/"
            className="object-cover w-full h-[420px] bg-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
