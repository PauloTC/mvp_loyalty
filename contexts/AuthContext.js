"use client";
import { createContext, use, useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SESSION_STORAGE } from '@/constants';
// Crea el contexto con el tipo definido
export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const router = useRouter();
  const [user, setUser] = useState({ score: 0 });

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      const userParsed = JSON.parse(user);
      const consumed = sessionStorage.getItem(SESSION_STORAGE.Consumed);

      if (consumed) {
        userParsed.score -= parseInt(consumed);
      }

      setUser(userParsed);
    }
  }, []);

  const logout = () => {
    router.push("/login");
    setUser(null);
    localStorage.removeItem("user");
  };

  const data = {
    user,
    setUser,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
