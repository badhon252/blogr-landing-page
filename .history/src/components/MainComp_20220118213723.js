import React from "react";
import Fact from "./Facility/Fact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Info from "./Info/Info";
import Intro from "./Intro/Intro";

const Maincomp = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Fact />
      <Info />
      <Footer />
    </div>
  );
};

export default Maincomp;
