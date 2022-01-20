import React from "react";
import phones from "../../images/illustration-phones.svg";
export default function Fact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <img src={phones} alt="" />
        </div>
        <div className="col-md-6 py-5 my-5">
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
