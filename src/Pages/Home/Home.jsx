import React from "react";
import Banner from "../../Components/Banner/Banner";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import ExperienceBanner from "../../Components/ExperienceBanner/ExperienceBanner";

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
      {/* popular products section */}
      <section>
        <PopularProducts></PopularProducts>
      </section>
      {/* experience banner section */}
      <section>
        <ExperienceBanner></ExperienceBanner>
      </section>
    </div>
  );
};

export default Home;
