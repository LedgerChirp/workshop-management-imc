import { useContext, createContext, useState } from "react";
import Cookies from "js-cookie";
import { ReactNode } from "react";

interface AuthContextType {
  user: any; // Replace `any` with a more specific type if possible
  setUser: (user: any) => void;
  token: string | null;
  setToken: (token: string | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: any; // Replace `any` with a more specific type if possible
  setError: (error: any) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
