import React, { createContext, useContext, useState } from "react";

import { JsonDB } from "generateDb";

import { api } from "@/lib/api";

type User = { id: string; username: string; name: string; avatar: string };
type AuthContextType = {
  user: User;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isLogin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUserJson = localStorage.getItem("user");
  let storedUser: User | undefined;

  if (storedUserJson) {
    storedUser = JSON.parse(storedUserJson) as User;
  }

  const [user, setUser] = useState<User>(
    storedUser ?? {
      id: "",
      name: "",
      username: "",
      avatar: "",
    },
  );
  const [isLogin, setIsLogin] = useState<boolean>(storedUser ? true : false);

  const login = async (userName: string, password: string) => {
    const response = await api.get(
      `/api/users?userName=${userName}&password=${password}`,
    );
    console.log(response);
    const users: JsonDB["users"] = await response.json();
    if (users.length > 0) {
      const user = {
        id: users[0].id,
        username: users[0].username,
        name: users[0].name,
        avatar: users[0].avatar,
      };
      setUser(user);
      setIsLogin(true);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setIsLogin(false);
    setUser({
      id: "",
      name: "",
      username: "",
      avatar: "",
    });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
