import React from "react";
import Banner from "../../Components/Banner/Banner";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <section>
        <Banner></Banner>
      </section>
      {/* total items show section */}
      <section>
        <CategorySlider></CategorySlider>
      </section>
      <section>
        <PopularProducts></PopularProducts>
      </section>
    </div>
  );
};

export default Home;
