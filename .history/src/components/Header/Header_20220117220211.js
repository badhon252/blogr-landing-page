import React from "react";
import Nav from "./Nav";
import "../styles/index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <Nav />
        <Nav />
        <Nav />
        <Nav />
      </div>
    </div>
  );
}
