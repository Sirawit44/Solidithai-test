import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext); 
}

export default function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}
