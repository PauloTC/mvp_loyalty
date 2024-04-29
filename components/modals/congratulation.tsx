"use client";
import { DlModal } from "@alicorpdigital/dali-react";
import Image from "next/image";
import "./styles.css";

type Props = {
  onOk?: () => void;
  open?: boolean;
};

export const ModalCongratulation = (props: Props) => {
  const { onOk, open = false } = props;

  return (
    <DlModal open={open}>
      <div className="dl-flex dl-flex-col dl-items-center">
        <div className="dl-mb-4">
          <Image
            alt="hands"
            height={133}
            width={190}
            src="/modals/umbrella.png"
          />
        </div>
        <h2 className="dl-text-2.5xl dl-font-bold dl-mb-8 dl-tracking-wide">
          ¡Felicidades!
        </h2>
        <p className="dl-text-center dl-text-sm dl-w-93 dl-text-neutrals-dark">
          ¡Tu canje está siendo procesado! <br />
          Pronto nos comunicaremos contigo por whatsapp y actualizaremos tus
          puntos disponibles.
        </p>
        <div className="dl-flex dl-justify-center dl-mt-8 dl-gap-4">
          <button
            style={{ outline: "none" }}
            onClick={onOk}
            className="
            dl-w-44 dl-h-12
            dl-flex dl-justify-center
            dl-items-center
            dl-bg-brand-primary-medium dl-text-my-white
            dl-rounded-lg"
          >
            Confirmar
          </button>
        </div>
      </div>
    </DlModal>
  );
};
