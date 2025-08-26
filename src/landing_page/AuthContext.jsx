import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth status on mount
  useEffect(() => {
    axios.get("http://localhost:8000/api/verify", { withCredentials: true })
      .then(res => {
        if (res.data.success && res.data.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const login = async (email, password) => {
    const res = await axios.post("http://localhost:8000/api/login", { email, password }, { withCredentials: true });
    if (res.data.success && res.data.user) {
      setUser(res.data.user);
      return { success: true };
    } else {
      setUser(null);
      return { success: false, message: res.data.message };
    }
  };

  const signup = async (email, password, username) => {
    const res = await axios.post("http://localhost:8000/api/signup", { email, password, username }, { withCredentials: true });
    if (res.data.success && res.data.user) {
      setUser(res.data.user);
      return { success: true };
    } else {
      setUser(null);
      return { success: false, message: res.data.message };
    }
  };

  const logout = async () => {
    await axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
