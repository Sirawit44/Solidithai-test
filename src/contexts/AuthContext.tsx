import { createContext, useContext, useState, ReactNode } from "react";
// import axiosInstance from '../api/axiosInstance';
import axios from "axios";

interface AuthUser {
  id: string;
  email: string;
  password: string;
}

interface AuthContextType {
  authUser: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (firstname: string, lastname:string, age:number, gender:string, email: string, password: string, confirmPassword: string) => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/login', { email, password });
    setAuthUser(response.data);
};

  const logout = () => {
    setAuthUser(null);
  };

  const signup = async (firstname: string, lastname:string, age:number, gender:string, email: string, password: string, confirmPassword: string) => {
    const response = await axios.post('/api/register', { firstname, lastname, age, gender, email, password, confirmPassword});
    setAuthUser(response.data);
};

  return (
    <AuthContext.Provider value={{ authUser, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context == undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
}
