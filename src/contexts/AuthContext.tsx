import { createContext, useContext, useState, ReactNode } from "react";
import authAPI from "../APIs/authAPI";

interface AuthUser {
  id: string;
  email: string;
}

interface AuthContextType {
  authUser: AuthUser | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await authAPI.login(credentials);
      setAuthUser(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
