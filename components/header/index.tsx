"use client";
import classNames from "classnames";
import Image from "next/image";
import { use, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

export default function HeaderComponent({ hideOnMobile }: any) {
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div
      className={classNames(
        hideOnMobile ? "dl-hidden sm:dl-flex" : "",
        "dl-flex",
        "dl-container",
        "dl-mx-auto",
        "dl-py-5",
        "sm:dl-py-4.5",
        "dl-justify-between"
      )}
    >
      <a href="/home">
        <Image alt="logo" width={104} height={36} src="/logo.svg" />
      </a>
      <button
        onClick={logout}
        style={{ outline: "none" }}
        className="
              dl-font-semibold dl-px-4
              dl-text-brand-primary-medium 
              dl-text-base"
      >
        {user?.name ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
}
