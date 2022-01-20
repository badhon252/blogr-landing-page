import React from "react";
import MobileLogo from "../../images/illustration-editor-mobile.svg";
import "../styles/index.css";

export default function Intro() {
  return (
    <div>
      <h1 className="intro-h1 py-4">Design for the future</h1>
      <div className="row ms-auto py-5">
        <div className="col-md-2"></div>
        <div className="col-md-4 py-5">
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              eos harum, iure repellendus et est sed ipsa! Rerum eligendi quis
              nemo vel. Laudantium quod deserunt voluptatum minima quia
              explicabo unde?
            </p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              eos harum, iure repellendus et est sed ipsa! Rerum eligendi quis
              nemo vel. Laudantium quod deserunt voluptatum minima quia
              explicabo unde?
            </p>
          </div>
        </div>
        <div className="col-md-6 py-5">
          <img src={MobileLogo} alt="This is MobileLogo svg img"></img>
          <div></div>
        </div>
      </div>
    </div>
  );
}
