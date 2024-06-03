"use client";
import { useRouter } from "next/navigation";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (WrappedComponent: any) => {
  const WithAuthWrapper = (props: any) => {
    const Router = useRouter();
    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (!user?.username) {
        Router.replace("/login");
      }
    }, [user, Router]);

    return <WrappedComponent {...props} />;
  };

  WithAuthWrapper.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return WithAuthWrapper;
};

function getDisplayName(WrappedComponent: any) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
