import React from "react";
import aboutimage from "../images/aboutimage.jpg";
import hero from "../images/hero.jpg";
import categorycard4 from "../images/categorycard4.jpg";

const BelovedProductsByOurCustomers = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-full px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl pb-12">Beloved Products By Our Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-3">
          <img
            src={aboutimage}
            alt="/"
            className="col-span-3 h-[600px] w-full object-cover bg-center rounded-2xl"
          />
        </div>
        <img
          src={hero}
          alt="/"
          className="col-span-3 md:col-span-1 h-[600px] w-full object-cover bg-center rounded-2xl"
        />
        <img
          src={categorycard4}
          alt="/"
          className="col-span-3 md:col-span-2 h-[600px] w-full object-cover bg-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default BelovedProductsByOurCustomers;
