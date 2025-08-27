import React from "react";

function Education() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img
            src="/media/images/education.svg"
            alt=""
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4 mb-5">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            Varsity<i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="" style={{ textDecoration: "none" }}>
            TradingQ&A<i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
