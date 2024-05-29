"use client";
import classNames from "classnames";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalRating } from "@/components/modals";
import { DlIcon, DlSidebar } from "@alicorpdigital/dali-react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function HeaderComponent({ hideOnMobile }: any) {
  const router = useRouter();
  const { logout, user } = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open])

  return (
    <>
      <div
        style={{ borderBottom: "1px solid #E5E5E5" }}
        className={classNames(
          hideOnMobile && user.username ? "dl-hidden sm:dl-flex" : "",
          "dl-flex",
          "dl-container",
          "dl-mx-auto",
          "dl-py-5",
          "sm:dl-py-4.5",
          "dl-justify-between",
          "md:border-transparent"
        )}
      >
        <a
          href="/home"
          className={` ${user?.username ? "dl-hidden" : ""}  md:dl-flex`}
        >
          <Image alt="logo" width={104} height={36} src="/logo.svg" />
        </a>

        <ul className="dl-flex dl-items-center">
          {user?.username && (
            <>
              <li className="dl-px-4 dl-hidden md:dl-flex">
                <a className="dl-font-semibold" href="/historial">
                  Historial de canjes
                </a>
              </li>
              <li
                className="dl-px-4 dl-hidden md:dl-flex"
                onClick={() => setOpenModal(true)}
              >
                <a className="dl-font-semibold" href="#">
                  Califícanos
                </a>
              </li>
            </>
          )}
          <li
            className={`dl-px-4 ${
              user?.username ? "dl-hidden" : ""
            } md:dl-flex`}
          >
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
                height={40}
                width={40}
              />
            </figure>
            <div>
              <p className="dl-capitalize dl-text-gray-800 dl-font-semibold dl-text-sm dl-overflow-hidden dl-overflow-ellipsis dl-whitespace-nowrap dl-w-40">
                {user?.name}
              </p>
              <p className="dl-text-sm dl-text-gray-600 dl-leading-6">
                14983759203
              </p>
            </div>
          </div>
        )}

        {user?.username && (
          <div
            className={`dl-flex dl-items-center md:dl-hidden`}
            onClick={() => setOpen(!open)}
          >
            <DlIcon
              className="dl-text-red-600"
              size="lg"
              name={open ? "x" : "hamburger"}
            />
          </div>
        )}
      </div>

      <ModalRating
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => setOpenModal(false)}
      />
      <DlSidebar
        className="header-sidebar"
        open={open}
        items={[
          {
            key: "history-canjea",
            label: "Historial de canjes",
            onClick: () => router.push("/home"),
          },
          {
            key: "how-work",
            label: "¿Cómo funciona?",
            onClick: () => router.push("/como-funciona"),
          },
          {
            key: "calificanos",
            label: "Califícanos",
            onClick: () => {
              setOpenModal(true);
              setOpen(false);
            },
          },
        ]}
        itemsFooter={[
          {
            key: "sign-out",
            label: "Cerrar sesión",
            onClick: logout,
          },
        ]}
      />
    </>
  );
}
