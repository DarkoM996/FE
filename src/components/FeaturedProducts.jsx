import FeaturedProduct from "./FeaturedProduct";
import categorycard from "../images/categorycard.jpg";
import categorycard2 from "../images/categorycard2.jpg";
import categorycard3 from "../images/categorycard3.jpg";
import categorycard4 from "../images/categorycard4.jpg";

const FeaturedProducts = () => {
  return (
    <div className="max-w-screen-3xl mx-auto h-auto px-6 py-4 md:py-8 lg:py-16">
      <h2 className="text-4xl py-12">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeaturedProduct
          img={categorycard}
          title="Featured Product 1"
          subtitle="Dining Room"
        />
        <FeaturedProduct
          img={categorycard2}
          title="Featured Product 2"
          subtitle="Bathroom"
        />
        <FeaturedProduct
          img={categorycard3}
          title="Featured Product 3"
          subtitle="Kitchen"
        />
        <FeaturedProduct
          img={categorycard4}
          title="Featured Product 4"
          subtitle="Living Room"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
