import React from "react";
import TrendingProduct from "./TrendingProduct";
import products from "../products";

const TrendingProducts = () => {
  const recentProducts = products.slice(0, 4);

  return (
    <div className="max-w-screen-3xl mx-auto px-6 py-4 relative w-full h-full">
      <h2 className="text-4xl md:text-5xl py-12">Trending Products</h2>
      {/* 4 Trending Products Listed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentProducts.map((product) => (
          <TrendingProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
