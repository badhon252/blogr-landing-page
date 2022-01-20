import React from "react";
import Fact from "./Facility/Fact";
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
    </div>
  );
};

export default Maincomp;
