import React from "react";
import phones from "../../images/illustration-phones.svg";
export default function Fact() {
  return (
    <div className=" fact">
      <div className="row container">
        <div className="col-md-6 col-lg-6">
          <img className="w-100 fact-img" src={phones} alt="Phone images" />
        </div>
        <div className="col-md-6 col-lg-6 fact-params">
          <h3>State of the Art infrastructure</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            culpa veritatis ut molestias consectetur minus fugit, quaerat, quos
            assumenda officia unde rerum. Nam quaerat expedita iure, voluptates
            delectus quisquam quod. Nam quaerat expedita iure, voluptates
            delectus quisquam quod.
          </p>
        </div>
      </div>
    </div>
  );
}
