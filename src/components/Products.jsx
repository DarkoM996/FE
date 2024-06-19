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
      {/* Left side */}
      <div className="flex flex-col justify-center items-start gap-2">
        {/* Filter Item */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl py-2">Product Categories</h2>
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1" className="text-xl ml-2">
            Living Room
          </label>
        </div>
        {/* Filter Item */}
        <div className="">
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2" className="text-xl ml-2">
            Dining Room
          </label>
        </div>
        {/* Filter Item */}
        <div className="">
          <input type="checkbox" id="3" value={3} />
          <label htmlFor="3" className="text-xl ml-2">
            Kitchen
          </label>
        </div>
        {/* Filter Item */}
        <div className="">
          <input type="checkbox" id="4" value={4} />
          <label htmlFor="3" className="text-xl ml-2">
            Bedroom
          </label>
        </div>
      </div>
      {/* Right side */}
      <div className="right"></div>
    </div>
  );
};

export default Products;
