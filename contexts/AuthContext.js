"use client";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// Crea el contexto con el tipo definido
export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/login");
  };

  const data = {
    user,
    setUser,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
