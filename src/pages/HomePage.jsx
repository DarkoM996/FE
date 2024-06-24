import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ProductListings from "../components/ProductListings";
import Testimonials from "../components/Testimonials";
import BelovedProducts from "../components/BelovedProducts";
import CategorySection from "../components/CategorySection";
import TrendingProducts from "../components/TrendingProducts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductListings isHome={true} />
      {/* <CategorySection /> */}
      <BelovedProducts />
      <TrendingProducts />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
