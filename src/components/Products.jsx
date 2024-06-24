import React from "react";
import TrendingProducts from "./TrendingProducts";
import ProductListings from "./ProductListings";

const Products = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      {/* Left side filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 w-full">
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-2xl">Filter By:</h2>
          <button className="p-4 bg-primary_lighterShade-300 hover:bg-primary_lighterShade-500 text-black rounded-full border border-primary_lighterShade-400 w-[160px]">
            Living Room
          </button>
        </div>
        {/* Right side filter*/}
        {/* This filter thing could be potentially removed as to keep the design and web app more simple for starters */}
        <div className="flex flex-row justify-center items-center gap-2">
          <h2 className="text-2xl">Sort By:</h2>
          <button className="p-4 bg-primary_lighterShade-300 hover:bg-primary_lighterShade-500 text-black rounded-full border border-primary_lighterShade-400 w-[160px]">
            Most Popular
          </button>
        </div>
        {/* Products below */}
      </div>
      <ProductListings />
    </div>
  );
};

export default Products;
