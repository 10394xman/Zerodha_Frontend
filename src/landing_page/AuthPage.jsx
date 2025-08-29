import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgot, setIsForgot] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [forgotForm, setForgotForm] = useState({ identifier: "", newPassword: "" });
  const [error, setError] = useState("");
  const [flash, setFlash] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const { login, signup } = useAuth();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleForgotChange = (e) => setForgotForm({ ...forgotForm, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setFlash("");
    try {
      let result;
      if (isLogin) {
        result = await login(form.email, form.password);
      } else {
        result = await signup(form.email, form.password, form.username);
      }
      if (result.success) {
        setFlash(isLogin ? "Login successful!" : "Signup successful!");
        setTimeout(() => navigate("/", { replace: true }), 1200);
      } else {
        setError(result.message || "Authentication failed");
      }
    } catch {
      setError("Server error. Please try again.");
    }
  };

  // Optionally, you can keep forgot password logic as is, or move to context if desired
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    setError(""); setFlash("");
    try {
      // This can be moved to context if you want full centralization
      const res = await fetch("https://zerodha-backend-hgfc.onrender.com/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(forgotForm),
      });
      const data = await res.json();
      if (data.success) {
        setFlash("Password reset successful! Please login.");
        setTimeout(() => { setIsForgot(false); setIsLogin(true); }, 1200);
      } else {
        setError(data.message || "Reset failed");
      }
    } catch {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {flash && <div className="auth-flash">{flash}</div>}
        {isForgot ? (
          <>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotSubmit}>
              <input
                type="text"
                name="identifier"
                placeholder="Email or Username"
                value={forgotForm.identifier}
                onChange={handleForgotChange}
                required
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={forgotForm.newPassword}
                onChange={handleForgotChange}
                required
              />
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="auth-btn">Reset Password</button>
            </form>
            <div className="auth-toggle">
              <span onClick={() => { setIsForgot(false); setIsLogin(true); }}>Back to Login</span>
            </div>
          </>
        ) : (
          <>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="auth-btn">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <div className="auth-toggle">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <span onClick={() => setIsLogin(false)}>Sign Up</span>
                  <br />
                  <span style={{ color: "#125ea2", cursor: "pointer" }} onClick={() => setIsForgot(true)}>
                    Forgot Password?
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span onClick={() => setIsLogin(true)}>Login</span>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;