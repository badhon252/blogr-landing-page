import React from "react";
import Logo from "../../images/illustration-laptop-desktop.svg";
import "../styles/index.css";

export default function Info() {
  return (
    <div className="container-fluid">
      <div className="row ms-auto pt-5 mt-5">
        <div className="col-md-6 intro-img">
          <img src={Logo} alt="This is MobileLogo svg img"></img>
          <div></div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div className=" py-5">
            <h3 className="py-3">Introducing an extensible editor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              eos harum, iure repellendus et est sed ipsa! Rerum eligendi quis
              nemo vel. Laudantium quod deserunt voluptatum minima quia
              explicabo unde?Laudantium quod deserunt voluptatum minima quia
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
      </div>
    </div>
  );
}
