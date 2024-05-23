import React from "react";

import products from "../products";
import { MdFavoriteBorder } from "react-icons/md";

const ProductListings = () => {
  return (
    // This works and is based on the original 2024 React Traversy crash course. Now.. recreate the cards you want from the design in JSX and Tailwind.. and then you can just add dynamic data instead of the static HTML/JSX where its needed
    <section className=" px-4 py-10">
      <div className="max-w-screen-3xl mx-auto h-auto px-6 py-4 md:py-8 lg:py-16">
        <h2 className="text-4xl py-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div className=" rounded-xl relative">
              <div className="">
                <div className="mb-4 overflow-hidden inline-block rounded-2xl">
                  <img
                    src={product.image}
                    alt="product image"
                    className="h-[420px] w-[620px] object-cover bg-center rounded-2xl hover:scale-110  duration-500 transition-transform"
                  />
                </div>
                <div className="flex flex-row justify-between items-baseline">
                  <h3 className="text-2xl font-bold pb-4">{product.name}</h3>
                  <MdFavoriteBorder className="text-2xl" />
                </div>

                <div className="mb-5">{product.description}</div>
                <h3 className="text-black font-bold mb-2">{product.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListings;

// Working Code

{
  /* <section className="bg-blue-50 px-4 py-10">
<div className="container-xl lg:container m-auto">
  <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
    Browse Jobs
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Full-Time</div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <img
              src={product.image}
              alt="product image"
              className="w-[520px] h-[400px] object-cover"
            />
          </div>

          <div className="mb-5">
            We are seeking a talented Front-End Developer to join our team
            in Boston, MA. The ideal candidate will have strong skills in
            HTML, CSS, and JavaScript...
          </div>

          <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              Boston, MA
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</section> */
}
