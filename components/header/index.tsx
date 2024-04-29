"use client";
import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function HeaderComponent({ hideOnMobile }: any) {
  const { logout, user } = useContext(AuthContext);

  return (
    <div
      className={classNames(
        hideOnMobile ? "dl-hidden sm:dl-flex" : "",
        "dl-flex",
        "dl-container",
        "dl-mx-auto",
        "dl-py-5",
        "sm:dl-py-6",
        "dl-justify-between"
      )}
    >
      <a href="/home">
        <Image alt="logo" width={82} height={24} src="/logo.png" />
      </a>
      <button
        onClick={logout}
        style={{ outline: "none" }}
        className="
              dl-font-semibold dl-px-4
              dl-text-brand-primary-medium 
              dl-text-base"
      >
        {user?.username ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
    </div>
  );
}
