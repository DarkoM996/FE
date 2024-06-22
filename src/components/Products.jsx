import React from "react";
import image from "../images/categorycard.jpg";
import image2 from "../images/categorycard2.jpg";
import image3 from "../images/categorycard3.jpg";
import image4 from "../images/categorycard4.jpg";
import image5 from "../images/categorycard5.jpg";
import image6 from "../images/categorycard6.jpg";
import AsideMenu from "./AsideMenu";
import products from "./../products";
import TrendingProducts from "./TrendingProducts";

const Products = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      {/* Left side filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 w-full px-6">
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-2xl">Filter By:</h2>
          <button className="p-4 bg-primary_lighterShade-300 hover:bg-primary_lighterShade-500 text-black rounded-full border border-primary_lighterShade-400 w-[160px]">
            Living Room
          </button>
        </div>
        {/* Right side filter*/}
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-2xl">Sort By:</h2>
          <button className="p-4 bg-primary_lighterShade-300 hover:bg-primary_lighterShade-500 text-black rounded-full border border-primary_lighterShade-400 w-[160px]">
            Most Popular
          </button>
        </div>
        {/* Products below */}
      </div>
      <TrendingProducts />
    </div>
  );
};

export default Products;
