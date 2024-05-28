"use client";
import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";
import Image from "next/image";
import StepsComponent from "@/components/steps";
import withAuth from "@/utils/withAuth";

const HowItWorksPage = () => {
  return (
    <NestedLayout hideOnMobile={true}>
      <div className="dl-border-b-2 sm:dl-border-b-0 dl-mb-8 sm:dl-mb-0 dl-flex dl-items-center dl-py-5 dl-container dl-mx-auto dl-gap-2">
        <a href="/home" className="dl-flex sm:dl-hidden">
          <Image
            alt="arrow_left"
            width={17}
            height={14}
            src="/orders/arrow_left.svg"
          />
        </a>
        <a href="/home" className="dl-hidden sm:dl-block dl-text-sm">
          Inicio
        </a>
        <Image
          className="dl-hidden sm:dl-block"
          alt="breadcrumb_arrow"
          width={6}
          height={11}
          src="/orders/arrow.svg"
        />
        <p className="dl-hidden sm:dl-block dl-text-black sm:dl-text-brand-primary-medium dl-font-bold dl-text-sm">
          Cómo funciona
        </p>
        <p className="dl-text-base dl-font-semibold sm:dl-hidden">
          ¿Cómo funciona?
        </p>
      </div>
      <div className="dl-hidden sm:dl-block">
        <PrincipalBanner
          title="Insuma puntos"
          subtitle="Canjea productos con los puntos acumulados por tus compras. Recompensamos tu esfuerzo diario."
          showPoints={true}
        />
      </div>

      <StepsComponent buttonText="canjear" title="Canjea rápido y fácil" />

      <NeedHelp />
    </NestedLayout>
  );
};

export default withAuth(HowItWorksPage);
