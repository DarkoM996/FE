import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

const TrendingProduct = ({ img, title }) => {
  return (
    <div className="relative flex flex-col justify-between h-auto w-full ">
      <img
        src={img}
        alt="/"
        className="h-[420px] w-full object-cover bg-center rounded-2xl hover:scale-100"
      />
      <div className="relative py-4">
        <div className="flex justify-between items-center pb-2 ">
          <h4 className="text-3xl">{title}</h4>
          <MdFavoriteBorder className="text-2xl" />
        </div>
        <p className="text-xl">Subtitle</p>
        <p className="font-bold pt-2">$1000</p>
      </div>
    </div>
  );
};

export default TrendingProduct;
