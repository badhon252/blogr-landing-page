import React from "react";
import Nav from "./Nav";
import "../styles/index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Nav />
        <h1>A modern publishing platform</h1>
      </div>
    </div>
  );
}
