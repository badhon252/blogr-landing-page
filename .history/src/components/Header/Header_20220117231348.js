import React from "react";
import Nav from "./Nav";
import "../styles/index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <div className="pt-5 header-param">
          <h1 className="pb-5">A modern publishing platform</h1>
          <p className="header-p pb-5">
            Grow your audience and build your online brand
          </p>
        </div>
      </div>
    </div>
  );
}
