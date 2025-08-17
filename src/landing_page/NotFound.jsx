import React from "react";
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1>404 Not Found</h1>
        <p className="mt-5">
          Sorry the page you are looking for does not exist
        </p>
        <Link to="/" className="btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
