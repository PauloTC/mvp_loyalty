import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export function withAuth(Component: any) {
  return (props) => {
    const router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (!user) {
        router.push("/login");
      }
    }, [user]);

    return <Component {...props} />;
  };
}
