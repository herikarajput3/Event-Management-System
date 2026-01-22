import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../services/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);

  const register = async (formData) => {
    const res = await axiosInstance.post("/auth/register", formData);

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  };

  const login = async (credentials) => {
    const res = await axiosInstance.post("/auth/login", credentials);

    const { user, token } = res.data;

    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const loadUser = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await axiosInstance.get("/users/me");
      setUser(res.data.user);
    } catch (err) {
      if (err.isAuthError) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
