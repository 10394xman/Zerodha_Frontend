import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="/media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
            style={{ width: "100%" }}
          />
          <h1>Invest in everything</h1>
          <p className="mt-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
