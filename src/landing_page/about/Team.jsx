import React from "react";

function Team() {
  return (
    <div className="container text-muted">
      <div className="row  mb-5 border-top">
        <h1 className="fs-4 text-center m-5">People</h1>
      </div>
      <div className="row " style={{ lineHeight: "1.8" }}>
        <div className="col-lg-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <h4 className="m-3">Nithin Kamath </h4>
          <h5> Founder, CEO</h5>
        </div>
        <div className="col-lg-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen <br />
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
