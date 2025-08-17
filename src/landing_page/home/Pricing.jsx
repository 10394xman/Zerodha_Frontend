import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 p-3">
      <div className="row p-5">
        <div className="col-4 p-5">
          <h1 className="fs-4 mb-5">Unbeatable pricing</h1>
          <p>
            {" "}
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="mx-5" style={{ textDecoration: "none" }}>
            See pricing<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5">
          <div className="row text-center">
            <div className="col-6 p-3 border">
              <h1 className="mb-5">₹0</h1>
              <p>
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col-6 p-3 border">
              <h1 className="mb-5">₹20</h1>
              <p>Intraday and F&O  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
