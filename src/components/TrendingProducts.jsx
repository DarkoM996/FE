import React from "react";
import TrendingProduct from "./TrendingProduct";
import trendingproduct from "../images/trendingproduct.jpg";
import trendingproduct2 from "../images/trendingproduct2.jpg";
import trendingproduct3 from "../images/trendingproduct3.jpg";
import trendingproduct4 from "../images/trendingproduct4.jpg";

const TrendingProducts = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-full px-6 py-4">
      <h2 className="text-4xl pb-4 md:pb-8">Trending Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <TrendingProduct img={trendingproduct} title="Modern Chair" />
        <TrendingProduct img={trendingproduct2} title="Curtain" />
        <TrendingProduct
          img={trendingproduct3}
          title="Furniture For Living Room"
        />
        <TrendingProduct img={trendingproduct4} title="Sofa" />
      </div>
    </div>
  );
};

export default TrendingProducts;
