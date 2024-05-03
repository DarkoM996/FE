import React from "react";
import CategoryItem from "./CategoryItem";

import categorycard from "../images/categorycard.jpg";
import categorycard2 from "../images/categorycard2.jpg";
import categorycard3 from "../images/categorycard3.jpg";
import categorycard4 from "../images/categorycard4.jpg";
import categorycard5 from "../images/categorycard5.jpg";
import categorycard6 from "../images/categorycard6.jpg";

const Categories = () => {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto h-full p-8 py-16 lg:h-full sm:px-8">
        <h2 className="text-4xl py-12">Select A Category</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 h-full gap-4 md:gap-8">
          <CategoryItem img={categorycard4} title="Living Room" />
          <CategoryItem img={categorycard2} title="Bathroom" />
          <CategoryItem img={categorycard5} title="Guest Room" />
          <CategoryItem img={categorycard} title="Office" />
          <CategoryItem img={categorycard3} title="Dining Room" />
          <CategoryItem img={categorycard6} title="Bedroom" />
        </div>
      </div>
    </>
  );
};

export default Categories;
