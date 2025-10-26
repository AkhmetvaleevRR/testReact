import { createContext, useContext, useState, useEffect } from "react";

import type { ReactNode } from "react";

interface UserContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType | undefined => {
  const context = useContext(UserContext);
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userName: string) => {
    setUser(userName);
    localStorage.setItem("user", JSON.stringify(userName));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value: UserContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <UserContext value={value}>{children}</UserContext>;
};
