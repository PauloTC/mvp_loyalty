"use client";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classNames from "classnames";

interface PrincipalBannerProps {
  title: string;
  subtitle: string;
  showPoints: boolean;
}

export default function PrincipalBanner({
  title,
  subtitle,
  showPoints,
}: PrincipalBannerProps) {
  const { user } = useContext(AuthContext);

  return (
    <section
      // className="dl-flex md:dl-h-80 dl-justify-center xl:dl-justify-center dl-mb-6 md:dl-mb-12"
      className="dl-flex md:dl-h-80 dl-mb-6 md:dl-mb-12"
      style={{ backgroundColor: "#F2F7FF" }}
    >
      <div
        className={classNames(
          // showPoints ? "" : "dl-flex-col",
          // showPoints ? "dl-p-0" : "dl-py-12",
          // "dl-w-full",
          // "dl-justify-center",
          // "dl-gap-14",
          "dl-container",
          "dl-mx-auto",
          "dl-flex",
          "dl-items-center",
          // "dl-h-auto",
          // "sm:dl-py-0",
          // "sm:dl-flex-row"
        )}
      >
        <div
          className={classNames(
            "dl-text-center",
            "sm:dl-text-left",
            "dl-w-full",
            "sm:dl-w-135"
          )}
        >
          <h3
            className={classNames(
              showPoints ? "dl-hidden" : "dl-block",
              "sm:dl-block",
              "dl-font-bold",
              "dl-text-xl",
              "lg:dl-text-3.5xl",
              "dl-mb-2"
            )}
          >
            {title}
          </h3>
          <p
            className={classNames(
              showPoints ? "dl-hidden" : "dl-block",
              "sm:dl-block",
              "dl-text-base",
              "dl-mb-6"
            )}
          >
            {subtitle}
          </p>

          {showPoints ? (
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
          ) : (
            <a
              href="/login"
              className={classNames(
                "dl-hidden dl-mx-auto md:dl-ml-0 dl-text-white sm:dl-flex dl-items-center dl-justify-center dl-rounded-lg dl-w-full dl-max-w-72 dl-bg-link-blue dl-h-12"
              )}
            >
              Ir a canjear
            </a>
          )}
        </div>

        <Image
          className={classNames(
            showPoints ? "dl-hidden" : "dl-flex",
            "xl:dl-flex"
          )}
          width={640}
          height={240}
          src="/home/banner.svg"
          alt="banner"
        />

        {!showPoints && (
          <a
            href="/login"
            className="
                dl-mt-8 dl-mx-auto
                md:dl-ml-0 dl-text-white
                dl-flex sm:dl-hidden
                dl-items-center dl-justify-center
                dl-rounded-lg dl-w-full dl-max-w-72
                dl-bg-link-blue dl-h-12"
          >
            Ir a canjear
          </a>
        )}
      </div>
    </section>
  );
}
