import React from "react";
import Banner from "../../Components/Banner/Banner";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";

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
    </div>
  );
};

export default Home;
