import axiosInstance from "@/services/utils/axiosInstance";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface User {
  email: string;
}

interface AuthContextProps {
  user: User | null;
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("authToken")
  );
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Load user from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const authToken = localStorage.getItem("authToken");

    if (storedUser && authToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      axiosInstance.defaults.headers.Authorization = `Bearer ${authToken}`;
    }
  }, []);

  // function for login
  const login = ({ data }: { data: { email: string; password: string } }) => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("User not found. Please sign up first.");
      return;
    }

    // Parse stored user data
    const parsedUser: User = JSON.parse(storedUser);

    // Validate Email
    if (
      parsedUser.email.trim().toLowerCase() !== data.email.trim().toLowerCase()
    ) {
      alert("Invalid email. Please try again.");
      return;
    }

    // Save user session data
    localStorage.setItem("user", JSON.stringify(parsedUser));
    axiosInstance.defaults.headers.Authorization = `Bearer someAuthToken`;

    setUser(parsedUser);
    setIsAuthenticated(true);
    navigate("/");
  };

  // function for logout
  const logout = () => {
    // localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    delete axiosInstance.defaults.headers.Authorization;
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
