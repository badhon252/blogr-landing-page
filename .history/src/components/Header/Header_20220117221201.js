import React from "react";
import Nav from "./Nav";
import "../styles/index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <div className="justify-content-center">
          <h1>A modern publishing platform</h1>
          <p className="header-p">
            Grow your audience and build your online brand
          </p>
        </div>
      </div>
    </div>
  );
}
