import React from "react";
//destructure props and then its children i.e properties of the prop object will be available
function RightSection(
  {imageUrl,
  productName,
  productDesc,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
            <a href={learnMore} style={{ textDecoration: "none"}}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
