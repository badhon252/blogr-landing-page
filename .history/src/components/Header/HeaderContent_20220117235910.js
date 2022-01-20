import React from "react";
import "../styles/index.css";
export default function HeaderContent() {
  return (
    <div>
      <div className="py-5 header-param">
        <h1 className="pt-5">A modern publishing platform</h1>
        <p className="header-p py-3 ">
          Grow your audience and build your online brand
        </p>
        <div className="px-5">
          <button type="button" class=" btn btn-light me-5">
            Start for free
          </button>
          <button type="button" class="btn btn-outline-dark">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
