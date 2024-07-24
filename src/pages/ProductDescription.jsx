import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

const ProductDescription = () => {
  const { id: productId } = useParams();

  const product = products.find((p) => p.id === productId);
  console.log(product);

  return (
    <div className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-4">
      ProductDescription
    </div>
  );
};

export default ProductDescription;
