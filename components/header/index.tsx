"use client";
import classNames from "classnames";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalRating } from "@/components/modals";
import { DlIcon, DlSidebar, DlSnackbar } from "@alicorpdigital/dali-react";
import { useRouter } from "next/navigation";
import "./styles.css";

export default function HeaderComponent({ hideOnMobile }: any) {
  const router = useRouter();
  const { logout, user } = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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
                <a className="dl-font-semibold" href="#">
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
              onClick={() => setOpenSnackbar(true)}
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
              <p className="dl-capitalize dl-text-gray-800 dl-font-semibold dl-text-sm dl-overflow-hidden dl-overflow-ellipsis dl-whitespace-nowrap dl-w-20">
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
      {!open && user?.username && (
        <div className="dl-flex md:dl-hidden dl-pt-4 dl-pb-6 dl-justify-center">
          <a href="/home">
            <Image alt="logo" width={60} height={20} src="/logo.svg" />
          </a>
        </div>
      )}
      <ModalRating
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => {
          setOpenModal(false);
          setOpenSnackbar(true);
        }}
      />
      <DlSnackbar
        onClose={() => setOpenSnackbar(false)}
        variant="warning"
        open={openSnackbar}
      >
        Gracias por tu interés en Insuma Puntos, pero el programa ha finalizado.
      </DlSnackbar>
      {open &&
        <DlSidebar
          className="header-sidebar"
          open={open}
          items={[
            // {
            //   key: "history-canjea",
            //   label: <span className='dl-font-semibold'>Historial de canjes</span>,
            //   onClick: () => router.push("/home"),
            // },
            {
              key: "how-work",
              label: <span className='dl-font-semibold'>¿Cómo funciona?</span>,
              onClick: () => {
                const element = document.querySelector('#how-work') as HTMLElement;
                window.scrollTo({ top: element?.offsetTop - 520, behavior: 'smooth' });
                setOpen(false);
              },
            },
            {
              key: "calificanos",
              label: <span className='dl-font-semibold'>Califícanos</span>,
              onClick: () => {
                setOpenModal(true);
                setOpen(false);
              },
            },
          ]}
          itemsFooter={[
            {
              key: "sign-out",
              onClick: logout,
              label: (
                <div className='sidebar-divider dl-font-semibold'>
                  Cerrar sesión
                </div>
              ),
            },
          ]}
        />
      }
    </>
  );
}
