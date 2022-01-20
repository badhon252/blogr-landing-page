import React from "react";

export default function HeaderContent() {
  return (
    <div>
      <div className="py-5 header-param">
        <h1 className="pt-5">A modern publishing platform</h1>
        <p className="header-p py-3 ">
          Grow your audience and build your online brand
        </p>
        <ul className="navbar-nav ms-auto">
          <li className="nav-login">
            <a className="nav-link" href="/">
              <button type="button" class="btn">
                Login
              </button>
            </a>
          </li>{" "}
          <li className="nav-signup">
            <a className="nav-link" href="/">
              <button type="button" class="btn btn-light">
                Sign Up
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
