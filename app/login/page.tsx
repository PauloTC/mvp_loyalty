"use client";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/login";
import Image from "next/image";
import { useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <div className="dl-flex  dl-flex-col md:dl-flex-row  dl-column dl-h-[100vh]">
      <div className=" dl-h-[10.125rem]  md:dl-w-4/5 md:dl-h-[100vh]  dl-flex dl-justify-center  dl-items-center dl-align-items dl-bg-[#F2F7FF]  ">
        <div className="dl-relative dl-block  dl-w-[148.27px] dl-h-[8.22rem] md:dl-w-[33.063rem] md:dl-h-[468.89px] ">
          <Image layout="fill" src="/login/Frame.svg" alt="insumaHands" />
        </div>
      </div>
      <div className="dl-px-5 md:dl-min-w-fit md:dl-w-2/5 md:dl-py-14 md:dl-px-[5.5rem] md:dl-flex md:dl-justify-center md:dl-items-center">
        <div className="md:dl-w-80">
          <div className="dl-pt-8 dl-px-4">
            <a href="/" className="dl-mb-8 dl-flex dl-items-center dl-gap-2">
              <i className=" dl-text-brand-primary-medium dl-icon dli-caret-left-bold dl-icon-sm"></i>
              <span className="dl-text-brand-primary-medium dl-font-semibold dl-font-alicorpSans dl-text-base">
                Atrás
              </span>
            </a>
            <p
              className="
              dl-font-bold
              dl-font-alicorpSans
              dl-mb-10
              dl-text-2xl dl-leading-[1.92rem]
              dl-text-[#202020]"
            >
              Iniciar sesión
            </p>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
