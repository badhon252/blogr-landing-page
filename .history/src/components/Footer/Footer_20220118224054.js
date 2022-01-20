import logo from "../../images/logo.svg";
import React from "react";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row py-5 container">
          <div className="col-md-3">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-3">
            <li>
              <a href="/" className="py-3">
                Product
              </a>
            </li>
            <li>
              <a href="/" className="">
                Overview
              </a>
            </li>
            <li>
              <a href="/" className="">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="">
                MarketPlace
              </a>
            </li>
            <li>
              <a href="/" className="">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="">
                Integrations
              </a>
            </li>
          </div>
          <div className="col-md-3">
            <li>
              <a href="/" className="py-3">
                Company
              </a>
            </li>
            <br />
            <li>
              <a href="/" className="">
                About
              </a>
            </li>
            <li>
              <a href="/" className="">
                Team
              </a>
            </li>
            <li>
              <a href="/" className="">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="">
                Careers
              </a>
            </li>
          </div>
          <div className="col-md-3">
            <li>
              <a href="/" className="py-5 h5">
                Connect
              </a>
            </li>
            <br />
            <li>
              <a href="/" className="">
                Connect
              </a>
            </li>
            <li>
              <a href="/" className="">
                Newslatter
              </a>
            </li>
            <li>
              <a href="/" className="">
                LinkIn
              </a>
            </li>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
