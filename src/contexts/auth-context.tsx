import { loginUser } from "@/services/api/auth.service";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthContextProps {
  loading: boolean;
  isAuthenticated: boolean;
  login: (data: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("status")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const storedStatus = localStorage.getItem("status");
    if (storedStatus) {
      setIsAuthenticated(true);
    }
  }, []);

  // function for login
  const login = async (data: any) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      if (response?.status === "Active") {
        setLoading(false);
        localStorage.setItem("status", response?.status);
        localStorage.setItem("user", JSON.stringify(response?.identity));
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // function for logout
  const logout = () => {
    localStorage.removeItem("status");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ loading, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
