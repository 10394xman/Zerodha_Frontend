import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="support-hero">
      <div className="d-flex justify-content-between p-4">
        <p className="fs-3">Support Portal</p>
        <button className="btn btn-primary ">My tickets</button>
      </div>
      <div className="pb-4 px-4">
        <input type="text" className="form-control p-3" placeholder="Search..." />
      </div>
    </section>
  );
}

export default Hero;
