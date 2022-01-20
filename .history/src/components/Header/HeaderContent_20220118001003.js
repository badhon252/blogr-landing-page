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
        {/* btn  */}
        <div className="px-5 py-5">
          <button type="button" class="btn btn-lg btn-light me-3">
            Start for free
          </button>
          <button type="button" class="btn btn-lg btn-outline-dark">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
