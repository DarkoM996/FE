import productsheroimg from "../images/categorycard.jpg";

const ProductsHero = () => {
  return (
    <div className="max-w-screen-3xl mx-auto relative w-full h-full px-6 py-4">
      {/* image background */}
      <div className="relative h-[600px]">
        {/* Image Container */}
        <img
          src={productsheroimg}
          alt="/"
          className="object-cover w-full  h-full rounded-3xl"
        />
        {/* Text Container */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start pl-8 py-24 bg-black/40 rounded-3xl text-white">
          <h1 className="text-5xl md:text-6xl">Products</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
