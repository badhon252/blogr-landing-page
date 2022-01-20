import React from "react";
import Fact from "./Facility/Fact";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";

const Maincomp = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Fact />
    </div>
  );
};

export default Maincomp;
