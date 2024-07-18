"use client";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classNames from "classnames";

interface PrincipalBannerProps {
  title: string;
  subtitle: string;
}

export default function PrincipalBanner({
  title,
  subtitle,
}: PrincipalBannerProps) {
  const { user } = useContext(AuthContext);

  return (
    <section
      className="dl-flex dl-justify-center xl:dl-h-80 dl-mb-6 md:dl-mb-12"
      style={{ backgroundColor: "#F2F7FF" }}
    >
      <div
        className={classNames(
          "dl-py-12",
          "dl-container",
          // "dl-mx-auto",
          "dl-w-full",
          "dl-flex",
          "dl-items-center",
          "dl-flex-col",
          "xl:dl-flex-row",
          "xl:dl-justify-between"
        )}
      >
        <div
          className={classNames(
            "dl-text-center",
            "xl:dl-text-left",
            "dl-w-full",
            "sm:dl-w-135"
          )}
        >
          <h3
            className={classNames(
              "dl-block",
              "sm:dl-block",
              "dl-text-left",
              "dl-font-bold",
              "dl-text-3.5xl",
              "dl-mb-2"
            )}
          >
            {title}
          </h3>
          <p
            className={classNames(
              "dl-block",
              "sm:dl-block",
              "dl-text-left",
              "dl-text-sm",
              "dl-mb-6",
              "lg:dl-text-base",
              "lg:dl-mb-10",
            )}
          >
            {subtitle}
          </p>

          <a
            href={user && user.username ? "/home" : "/login"}
            className={classNames(
              "dl-hidden dl-mx-auto dl-w-full md:dl-ml-0 dl-text-white xl:dl-flex dl-items-center dl-justify-center dl-rounded-lg lg:dl-max-w-72 dl-bg-link-blue dl-h-12"
            )}
          >
            Ir a canjear
          </a>
        </div>

        <Image
          className={classNames(
            "dl-flex",
            "xl:dl-flex"
          )}
          width={640}
          height={240}
          src="/home/banner.png"
          alt="banner"
        />
        <a
          href={user && user.username ? "/home" : "/login"}
          className="
              dl-mt-8 dl-mx-auto
              xl:dl-ml-0 dl-text-white
              dl-flex xl:dl-hidden
              dl-items-center dl-justify-center
              dl-rounded-lg dl-w-full
              dl-bg-link-blue dl-h-12"
        >
          Ir a canjear
        </a>
      </div>
    </section>
  );
}
