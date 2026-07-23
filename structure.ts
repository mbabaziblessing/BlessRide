import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  uid: string;
  email: string | null;
  role: "passenger" | "driver" | "admin";
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, _password: string) => {
    // Mock Firebase Auth signIn call
    setUser({ uid: "123", email, role: "passenger" });
  };

  const signUp = async (email: string, _password: string) => {
    // Mock Firebase Auth signUp call
    setUser({ uid: "123", email, role: "passenger" });
  };

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}