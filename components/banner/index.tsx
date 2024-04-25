"use client";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function PrincipalBanner() {
  const { user } = useContext(AuthContext);

  return (
    <section
      className="dl-flex dl-justify-center md:dl-justify-between xl:dl-justify-center dl-mb-6 md:dl-mb-12"
      style={{ backgroundColor: "#F2F7FF" }}
    >
      <div className="dl-w-full dl-items-center dl-flex dl-justify-center dl-gap-14 sm:dl-container sm:dl-h-76.5">
        <div className="dl-w-full sm:dl-w-120">
          <h3 className="dl-hidden sm:dl-block dl-font-bold dl-text-xl lg:dl-text-3.5xl dl-mb-2">
            Canjea rápido y fácil{" "}
          </h3>
          <p className="dl-hidden sm:dl-block dl-text-base dl-mb-6">
            Canjea productos con los puntos acumulados por tus compras.
            Recompensamos tu esfuerzo diario.
          </p>
          <div
            className="
                dl-flex
                dl-bg-gradient-to-r dl-from-cyan-500
                dl-to-blue-500
                dl-rounded-t-none
                dl-rounded-b-2xl
                sm:dl-rounded-2xl
                dl-items-center
                dl-justify-between dl-px-8 dl-w-full md:dl-w-80 lg:dl-w-96
                dl-h-30
                sm:dl-h-26"
          >
            <div className="dl-flex dl-flex-col">
              <span className="dl-text-my-white">Puntos disponibles</span>
              <p className="dl-text-1.5xl lg:dl-text-4.5xl dl-font-bold dl-text-my-white">
                {user?.score.toLocaleString()} pts
              </p>
            </div>
            <Image
              alt="stars"
              width={84}
              height={52}
              src="/home/estrellas.svg"
            />
          </div>
        </div>

        <Image
          className="dl-hidden md:dl-flex"
          width={703}
          height={240}
          src="/home/banner.svg"
          alt="banner"
        />
      </div>
    </section>
  );
}
