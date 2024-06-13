import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const ProductListing = ({ product }) => {
  return (
    <div className=" rounded-xl relative">
      <div className="">
        <div className="mb-4 overflow-hidden inline-block rounded-2xl">
          {/* Should link to individual product..  */}
          <a href={`/products/${product._id}`}>
            <img
              src={product.image}
              alt="product image"
              className="h-[420px] w-[620px] object-cover bg-center rounded-2xl hover:scale-110  duration-500 transition-transform"
            />
          </a>
        </div>
        <div className="flex flex-row justify-between items-baseline">
          <h3 className="text-3xl pb-2">{product.name}</h3>
          <MdFavoriteBorder className="text-2xl" />
        </div>
        <div className="mb-4 text-xl">{product.subtitle}</div>
        <h3 className="text-black font-bold mb-2">{product.price}</h3>
      </div>
    </div>
  );
};

export default ProductListing;
