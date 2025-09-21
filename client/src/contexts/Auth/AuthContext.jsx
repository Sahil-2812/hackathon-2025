// src/contexts/Auth/AuthContext.js
import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.get("http://localhost:8000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setIsAuth(true);
      setUser(res.data.user);
      setSession(res.data.session);
    } catch (error) {
      console.error("Invalid token", error);
      handleLogout();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
    setUser(null);
    setSession(null);
  };

  useEffect(() => {
    fetchProfile();
    const interval = setInterval(() => {
      if (session?.exp && session.exp * 1000 <= Date.now()) handleLogout();
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [fetchProfile, session]);

  if (isLoading) return <Loader />;

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
