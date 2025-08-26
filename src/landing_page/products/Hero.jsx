import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5 p-3 border-bottom mb-5">
      <div className="row text-muted">
        <h1>Zerodha Products</h1>
        <h3 className="mt-3"> Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3">
          Check out our
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            investment offerings<i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
