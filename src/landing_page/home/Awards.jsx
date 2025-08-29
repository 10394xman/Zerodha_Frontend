import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/media/images/largestBroker.svg" alt="awards image" />
        </div>
        <div className="col-lg-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            We are the largest stock broker in India with over 10 million
            clients.
          </p>
          <ul>
            <li>Best Brokerage Firm</li>
            <li>Fastest Growing Broker</li>
            <li>Most Innovative Broker</li>
          </ul>
          <img src="/media/images/pressLogos.png" alt="award image" style={{ width: '90%' }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
