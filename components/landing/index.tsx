"use client";
import PrincipalBanner from "@/components/banner";
import StepsComponent from "../steps";
import NeedHelp from "../help";

export default function LandingComponent() {
  return (
    <>
      <PrincipalBanner
        title="Impulsamos el crecimiento de tu negocio"
        subtitle="Queremos recompensar ese gran esfuerzo diario. Ahora podrás canjear productos sin costo."
        showPoints={false}
      />
      <StepsComponent title="¿Cómo  funciona?" />
      <NeedHelp />
    </>
  );
}
