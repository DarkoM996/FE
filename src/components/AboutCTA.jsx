import ctabackgroundimage from "../images/hannah-busing-nME9TubZtSo-unsplash.jpg";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="max-w-screen-3xl mx-auto w-full h-full relative px-6 py-4 md:py-8 lg:py-16">
      {/* Image background for this section */}
      <div className="relative h-screen">
        <img
          src={ctabackgroundimage}
          alt="/"
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Text container */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-black/40 rounded-3xl text-white">
          <h2 className="text-5xl lg:text-6xl text-center text-balance">
            Explore a wide range of furniture for you
          </h2>
          <Link
            to="/products"
            className="px-8 py-4 bg-black border border-primary_lighterShade-400 rounded-full text-white hover:bg-primary_darkerShade-900"
          >
            Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCTA;
