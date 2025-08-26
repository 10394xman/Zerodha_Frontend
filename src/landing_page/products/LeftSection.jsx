import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
function LeftSection({
  imageUrl,
  productName,
  productDesc,
  learnMore,
  googlePlay,
  appStore,
}) {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
    navigate("/auth");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesc}</p>
          <div className="row">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary">
                Try Demo
              </Link>
            ) : (
              <button onClick={handleLogin} className="btn btn-link nav-link">
                Try Demo
              </button>
            )}
            <a href="/auth?redirect=5174" style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "2rem" }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="row mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
