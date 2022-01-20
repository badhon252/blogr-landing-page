import React from "react";
import MobileLogo from "../../images/illustration-editor-desktop.svg";
import "../styles/index.css";

export default function Intro() {
  return (
    <div>
      <h1 className="intro-h1 py-5">Design for the future</h1>
      <div className="row ms-auto py-5">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className=" py-5">
            <h3 className="py-3">Introducing an extensible editor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              eos harum, iure repellendus et est sed ipsa! Rerum eligendi quis
              nemo vel. Laudantium quod deserunt voluptatum minima quia
              explicabo unde?Laudantium quod deserunt voluptatum minima quia
              explicabo unde?
            </p>
          </div>
          <div className="py-5">
            <h3>Robust content management</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              eos harum, iure repellendus et est sed ipsa! Rerum eligendi quis
              nemo vel. Laudantium quod deserunt voluptatum minima quia
              explicabo unde? Laudantium quod deserunt voluptatum minima quia
              explicabo unde?
            </p>
          </div>
        </div>
        <div className="col-md-6 intro-img">
          <img src={MobileLogo} alt="This is MobileLogo svg img"></img>
          <div></div>
        </div>
      </div>
    </div>
  );
}
