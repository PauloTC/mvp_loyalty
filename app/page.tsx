"use client";
import Image from "next/image";
import { DlInput } from "@alicorpdigital/dali-react";
import { DlCheckbox } from "@alicorpdigital/dali-react";
import { DlButton, DlButtonProps } from "@alicorpdigital/dali-react";


export default function Login() {
  return (
    <div className="dl-flex  dl-flex-col dl-column dl-h-[100vh]">
      
      <div className=" dl-h-[162px] dl-flex dl-justify-center  dl-items-center dl-align-items dl-bg-[#F2F7FF]  " >
      <img className=" dl-block  dl-w-[148.27px] dl-h-[131.52px]" src="./login/Frame.svg" alt="insumaHands"  />
      </div>
      <div className="dl-px-5 ">     
        <div className="dl-grid dl-gap-6 dl-pt-8 dl-px-4">
        <div className="dl-flex dl-items-center dl-gap-2">
          <i className=" dl-text-brand-primary-medium dl-icon dli-caret-left-bold dl-icon-sm"></i>
          <span className="dl-text-brand-primary-medium dl-font-semibold dl-font-alicorpSans dl-text-base">Atrás</span>
        </div>
        <span className="dl-font-bold dl-font-alicorpSans dl-text-2xl dl-leading-[1.92rem] dl-text-[#202020]">Iniciar sesión</span>
      </div>
      <form className="dl-py-10 dl-px-4 dl-grid dl-gap-6" action="">
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
      <DlCheckbox
      size="lg">
        He leído y  aceptado los <a className="dl-text-brand-primary-medium ">Términos & Condiciones</a>
      </DlCheckbox>
      <DlButton 
    block
      >
      Ingresar
      </DlButton>
      <DlCheckbox 
      size="lg">
      Recuérdame
      </DlCheckbox>
      <a className="dl-text-[#0064D1]" href="http://google.com">¿Olvidaste tu contraseña?</a>
      </form>

      </div>
 
      {/* <DlInput
        helperText="Helper text"
        label="Label"
        placeholder="Placeholder"
      /> */}
    </div>
  );
}
