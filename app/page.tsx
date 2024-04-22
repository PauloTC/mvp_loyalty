"use client";
import Image from "next/image";
import { DlInput } from "@alicorpdigital/dali-react";
import { DlCheckbox } from "@alicorpdigital/dali-react";
import { DlButton, DlButtonProps } from "@alicorpdigital/dali-react";
import { DlModal, DlModalProps } from "@alicorpdigital/dali-react";
import React, { useState } from "react";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    
    <div className="dl-flex  dl-flex-col md:dl-flex-row  dl-column dl-h-[100vh]">
      
      <div className=" dl-h-[10.125rem]  md:dl-w-4/5 md:dl-h-[100vh]  dl-flex dl-justify-center  dl-items-center dl-align-items dl-bg-[#F2F7FF]  " >
      <img className=" dl-block  dl-w-[148.27px] dl-h-[8.22rem] md:dl-w-[33.063rem] md:dl-h-[468.89px] " src="./login/Frame.svg" alt="insumaHands"  />
     
      </div>
      <div className="dl-px-5 md:dl-min-w-fit md:dl-w-2/5 md:dl-py-14 md:dl-px-[5.5rem] md:dl-flex md:dl-justify-center md:dl-items-center">     
        <div className="md:dl-w-80">
          <div className="dl-grid dl-gap-6 dl-pt-8 dl-px-4 ">
              <div className="dl-flex dl-items-center dl-gap-2">
                <i className=" dl-text-brand-primary-medium dl-icon dli-caret-left-bold dl-icon-sm"></i>
                <span className="dl-text-brand-primary-medium dl-font-semibold dl-font-alicorpSans dl-text-base">Atrás</span>
              </div>
             <span className="dl-font-bold dl-font-alicorpSans dl-text-2xl dl-leading-[1.92rem] dl-text-[#202020]">Iniciar sesión</span>
          </div>
     <form className="dl-py-10  dl-px-4 dl-grid dl-gap-6" >

            <div className="dl-grid dl-gap-4">
                <DlInput
                size="lg"
                label="Nombre de usuario"
                placeholder="Ingresa el usuario"
                />
                <DlInput
                
                     size="lg"
                label="Contraseña"
                placeholder="Ingresa la contraseña"
                />
             </div>
             <div className="dl-flex dl-items-start sm:dl-items-center dl-gap-2">
             <DlCheckbox
             size="lg"
             >
             </DlCheckbox>
               <span>He leído y  aceptado los <a className="dl-text-link-blue dl-underline" href="#">Términos & Condiciones</a></span>
             </div>
 

           <DlButton 
            block
           >
           Ingresar
           </DlButton>
           <DlCheckbox 
           size="lg">
           Recuérdame
           </DlCheckbox>
           <a className="dl-text-link-blue" href="#"  onClick={() => setModalOpen(true)}>¿Olvidaste tu contraseña?</a>
           </form>

        </div>

      </div>

      <DlModal
      description="Para ayudarte a recuperar tu contraseña, se te redirigirá a WhatsApp.
      ¿Deseas continuar?"
      open={modalOpen}
      okText="Ir a whatsapp"
      onCancel={handleCloseModal}
      closeable
      backgroundImage="/login/WsppImage.png"
      title="Recuperar contraseña"

/>
    </div>

  );
}
