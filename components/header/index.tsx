"use client";
import classNames from "classnames";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DlIcon } from "@alicorpdigital/dali-react";
import { ModalRating } from "@/components/modals";

export default function HeaderComponent({ hideOnMobile }: any) {
  const { logout, user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const openRatingModal = () => {
    setOpenModal(true);
  };

  return (
    <>
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
        <a href="/home" className="dl-hidden md:dl-flex">
          <Image alt="logo" width={104} height={36} src="/logo.svg" />
        </a>

        <ul className="dl-flex dl-items-center">
          {user?.username && (
            <>
              <li className="dl-px-4 dl-hidden md:dl-flex">
                <a className="dl-font-semibold" href="#">
                  Historial de canjes
                </a>
              </li>
              <li className="dl-px-4 dl-hidden md:dl-flex">
                <button
                  onClick={openRatingModal}
                  style={{ outline: "none" }}
                  className="dl-font-semibold"
                >
                  Califícanos
                </button>
              </li>
            </>
          )}
          <li className="dl-px-4 dl-hidden md:dl-flex">
            <button
              onClick={logout}
              style={{ outline: "none" }}
              className="
                    dl-font-semibold
                    dl-text-brand-primary-medium 
                    dl-text-base"
            >
              {user?.name ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
          </li>
        </ul>

        {user?.username && (
          <div className="dl-flex dl-items-center dl-gap-2 dl-flex-1 md:dl-flex-none md:dl-pl-10 md:dl-border-l md:dl-border-blue-900">
            <figure>
              <Image
                alt="profile"
                src="/header/profile.svg"
                height={56}
                width={56}
              />
            </figure>
            <div>
              <p className="dl-leading-8 dl-capitalize dl-text-gray-800 dl-font-semibold dl-text-base dl-overflow-hidden dl-overflow-ellipsis dl-whitespace-nowrap dl-w-20">
                {user?.name}
              </p>
              <p className="dl-text-sm dl-text-gray-600 dl-leading-6">
                14983759203
              </p>
            </div>
          </div>
        )}

        <div className="dl-flex dl-items-center md:dl-hidden">
          <DlIcon size="lg" name="hamburger" />
        </div>
      </div>
      <ModalRating open={openModal} onSubmit={() => setOpenModal(false)} />
    </>
  );
}
