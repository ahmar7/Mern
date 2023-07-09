import React from "react";

import Footer from "../layout/Footer/Footer";
import Header from "../layout/HomeHeader/header";
import HomeData from "../components/HomeComponents/HomeData";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeData />
      <Footer />
    </div>
  );
};

export default Home;
