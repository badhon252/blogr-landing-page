import React from "react";

export default function HeaderContent() {
  return (
    <div>
      <div className="py-5 header-param">
        <h1 className="pt-5">A modern publishing platform</h1>
        <p className="header-p py-3 ">
          Grow your audience and build your online brand
        </p>
        <button type="button" class="btn btn-light ">
          Sign Up
        </button>
        <button type="button" class="btn btn-outline-light">
          Login
        </button>
      </div>
    </div>
  );
}
