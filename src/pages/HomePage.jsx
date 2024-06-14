import Hero from "../components/Hero";
import Categories from "../components/Categories";
import TrendingProducts from "../components/TrendingProducts";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ProductListings from "../components/ProductListings";
import Testimonials from "../components/Testimonials";
import BelovedProducts from "../components/BelovedProducts";
import CategorySection from "../components/CategorySection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductListings />
      {/* <CategorySection /> */}
      <BelovedProducts />
      <TrendingProducts />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
