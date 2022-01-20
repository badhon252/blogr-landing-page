import React from "react";
import Nav from "./Nav";
import "../styles/index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <div className="py-5">
          <h1 className=" py-5">A modern publishing platform</h1>
          <p className="header-p pb-5">
            Grow your audience and build your online brand
          </p>
        </div>
      </div>
    </div>
  );
}
