import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BelovedProductsByOurCustomers from "../components/BelovedProductsByOurCustomers";
import TrendingProducts from "../components/TrendingProducts";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ProductListings from "../components/ProductListings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductListings />
      <BelovedProductsByOurCustomers />
      <TrendingProducts />
      <FrequentlyAskedQuestions />
    </>
  );
};

export default HomePage;
