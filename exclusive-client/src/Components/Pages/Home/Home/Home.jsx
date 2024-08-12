import Banner_Part_2 from "../Banner_Part_2/Banner_Part_2";
import BestSales from "../BestSales/BestSales";
import Categories from "../Categories/Categories";
import FlashSales from "../FlashSales/FlashSales";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-5 lg:px-14 mt-20">
        <FlashSales />
      </div>
      <div className="px-5 lg:px-14 mt-20">
        <Categories />
      </div>
      <div className="px-5 lg:px-14 mt-20">
        <BestSales />
      </div>
      <div className="px-5 lg:px-14 mt-20 mb-20">
        <Banner_Part_2 />
      </div>
    </div>
  );
};

export default Home;
