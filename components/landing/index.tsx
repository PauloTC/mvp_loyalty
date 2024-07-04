"use client";
import PrincipalBanner from "@/components/banner";
import StepsComponent from "../steps";
import NeedHelp from "../help";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LandingComponent() {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.username) {
      router.push("/home");
    }
  }, [user]);

  return (
    <>
      <PrincipalBanner
        title="Impulsamos el crecimiento de tu negocio"
        subtitle="Queremos recompensar ese gran esfuerzo diario. Ahora podrás canjear productos sin costo."
      />
      <StepsComponent  />
      <NeedHelp />

      <a
        style={{ backgroundColor: "#32BA46" }}
        className="dl-h-16 dl-w-16 dl-text-white dl-fixed dl-right-3 dl-bottom-5 md:dl-bottom-28  md:dl-right-11 dl-flex dl-justify-center dl-items-center dl-rounded-full"
        href="https://wa.link/3b4ooe"
        target='_blank'
      >
        <Image height={32} width={32} src="/home/icon.svg" alt="whatsapp" />
      </a>
    </>
  );
}
