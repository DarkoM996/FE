import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import TrendingProducts from "./components/TrendingProducts";
import BelovedProductsByOurCustomers from "./components/BelovedProductsByOurCustomers";
import FeaturedProducts from "./components/FeaturedProducts";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <TrendingProducts />
      <BelovedProductsByOurCustomers />
      <FeaturedProducts />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default App;
