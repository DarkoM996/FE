import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ProductDescription = () => {
  const { id: productId } = useParams();

  const product = products.find((p) => p.id === productId);

  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4">
      <Link className="px-6 py-4 bg-primary_lighterShade-400 border rounded-full ">
        Go Back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 py-8">
        {/* Image Container */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-3xl"
          />
        </div>
        {/* Text Container */}
        <div className="flex flex-col justify-start items-start gap-8">
          {/* Mini section part 1 in here.. this is also done for design choices */}
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">{product.name}</h1>
            <p className="text-base leading-normal">{product.description}</p>
            {/* Mini div for this section */}
            <div className="flex flex-row justify-center items-center gap-4 text-xl">
              {/* Separate div for the stars */}
              <div className="flex flex-row justify-center">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              <p>8 reviews</p>
            </div>
          </div>
          {/* Mini section #2 */}
          <div className="flex flex-col justify-start items-start gap-4">
            {/* This is split into a horizontal row */}
            <div className="flex flex-row justify-center items-center gap-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl">$200.00</h2>
              <div>
                ${product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </div>
            </div>
            {/* Button will be a separate part.. */}
            <button
              className="px-6 py-4 bg-black rounded-full text-white"
              type="button"
              disabled={product.countInStock === 0}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
