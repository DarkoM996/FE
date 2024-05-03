import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const FeaturedProduct = ({ img, title, subtitle }) => {
  return (
    <div className="relative flex flex-col justify-between h-auto w-full ">
      <div className="overflow-hidden inline-block rounded-2xl">
        <img
          src={img}
          alt="/"
          className="h-[420px] w-full object-cover bg-center rounded-2xl hover:scale-110  duration-500 transition-transform"
        />
      </div>
      <div className="relative py-4">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-2xl">{title}</h2>
          <MdFavoriteBorder className="text-2xl" />
        </div>
        <p className="text-xl">{subtitle}</p>
        <p className="font-bold pt-2">$1000</p>
      </div>
    </div>
  );
};

export default FeaturedProduct;
