import React from "react";
import Nav from "./Nav";
import "../styles/index.css";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <HeaderContent />
      </div>
    </div>
  );
}
