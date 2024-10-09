import Image from "next/image";
import { DlSnackbar } from "@alicorpdigital/dali-react";
import { useState } from 'react';

export default function NeedHelp() {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  return (
    <section
      className="
        dl-mb-0
        dl-pb-0
        dl-flex
        dl-justify-center
        dl-relative
        dl-px-0
        dl-w-full
        lg:dl-mb-14
        dl-flex-1
        dl-bg-my-gray lg:dl-bg-transparent
      "
    >
      <div className="dl-hidden sm:dl-block dl-self-end dl-pb-9 dl-absolute dl-left-1/3 ">
        <Image
          alt="second_star"
          width={23}
          height={22}
          src="/home/second_star.svg"
        />
      </div>
      <div className="lg:dl-container dl-h-auto dl-flex">
        <div className="
          dl-flex
          dl-flex-col
          dl-py-6
          dl-h-auto
          dl-rounded-xl
          dl-bg-my-gray
          dl-w-full
          dl-justify-center
          sm:dl-items-center
        ">
          <h4 className="dl-text-2xl dl-font-bold dl-mb-1">¿Necesitas ayuda?</h4>
          <p className="dl-text-sm dl-mb-6">
            Despeja todas tus dudas y prepárate para ganar.
          </p>
          <span
            className="
                dl-flex
                dl-gap-2
                dl-self-end
                sm:dl-self-center
                dl-font-semibold
                dl-text-base
                dl-cursor-pointer
                dl-text-brand-primary-medium"
            // href="https://wa.link/vd5a1e"
            // target='_blank'
            onClick={() => setOpenSnackbar(true)}
          >
            <Image
              src={"/home/whatsapp.svg"}
              alt="whatsapp"
              height={16}
              width={16}
            />
            Consultar
          </span>
        </div>
      </div>
      <div className="dl-hidden sm:dl-block dl-ml-4 dl-absolute dl-right-1/3 dl-top-16">
        <Image
          alt="first_star"
          height={15}
          width={16}
          src="/home/first_star.svg"
        />
      </div>

      <DlSnackbar
        onClose={() => setOpenSnackbar(false)}
        variant="warning"
        open={openSnackbar}
      >
        Gracias por tu interés en Insuma Puntos, pero el programa ha finalizado.
      </DlSnackbar>
    </section>
  );
}
