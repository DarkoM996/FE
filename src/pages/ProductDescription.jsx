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
          {/* Smaller Images in line here for now */}
          <div className="grid grid-cols-3 gap-6 py-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[200px] object-cover rounded-3xl"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[200px] object-cover rounded-3xl"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[200px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
        {/* Text Container */}
        <div>
          <div>
            <h1>Product Name</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              blanditiis porro voluptatibus dolores ducimus sequi nostrum quae
              quas libero vitae. Quia distinctio inventore ipsam quo enim
              recusandae quisquam omnis culpa?
            </p>
            <div className="flex flex-row">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
