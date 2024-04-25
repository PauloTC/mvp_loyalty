"use client";
import { DlModal } from "@alicorpdigital/dali-react";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

export function ConfirmationModal() {
  const redemptionConfirmationHandler = () => {
    const storageData=localStorage.getItem('user');
    if(storageData){
      const user = JSON.parse(storageData);
      sendGTMEvent({event:'pedidoUser',usuario:user.username,fecha:new Date().toLocaleString()});
    }    
  };
  return (
    <DlModal open={true}>
      <div className="dl-flex dl-flex-col dl-items-center">
        <div className="dl-mb-4">
          <Image alt="hands" height={133} width={190} src="/modals/hands.png" />
        </div>
        <h2 className="dl-text-2.5xl dl-font-bold dl-mb-8 dl-tracking-wide">
          ¿Confirmamos?
        </h2>
        <p className="dl-text-center dl-text-sm dl-w-93 dl-text-neutrals-dark">
          Canjearemos tus puntos por los productos seleccionados.
        </p>
        <div className="dl-flex dl-justify-center dl-mt-8 dl-gap-4">
          <button
            style={{ outline: "none" }}
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
            onClick={redemptionConfirmationHandler}
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
}
