"use client";
import { DlModal } from "@alicorpdigital/dali-react";
import Image from "next/image";
import "./styles.css";

type Props = {
  onClose?: () => void;
  onOk?: () => void;
  open?: boolean;
};

export const ModalConfirmation = (props: Props) => {
  const { onClose, onOk, open = false } = props;

  return (
    <DlModal open={open}>
      <div className="dl-flex dl-flex-col dl-items-center">
        <div className="dl-mb-4">
          <Image alt="hands" height={133} width={190} src="/modals/hands.svg" />
        </div>
        <h2 className="dl-text-2.5xl dl-font-bold dl-mb-8 dl-tracking-wide">
          ¿Confirmamos?
        </h2>
        <p className="dl-text-center dl-text-sm dl-text-neutrals-dark">
          Canjearemos tus puntos por los productos seleccionados.
        </p>
        {/* <div className="dl-flex dl-justify-center dl-mt-8 dl-gap-4"> */}
        <div className="dl-flex dl-flex-col-reverse lg:dl-flex-row dl-mt-8 dl-gap-4">
          <button
            style={{ outline: "none" }}
            onClick={onClose}
            className="
            dl-w-44 dl-h-12
            dl-flex dl-text-brand-primary-medium
            dl-justify-center
            dl-items-center"
          >
            Cancelar
          </button>
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
