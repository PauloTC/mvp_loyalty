import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";
import Image from "next/image";

export default function HowItWorksPage() {
  return (
    <NestedLayout hideOnMobile={true}>
      <ul className=" dl-mb-8 sm:dl-mb-0 dl-flex dl-py-5 dl-container dl-gap-2">
        <a href="/home" className="dl-flex sm:dl-hidden">
          <Image
            alt="arrow_left"
            width={17}
            height={14}
            src="/orders/arrow_left.svg"
          />
        </a>
        <li className="dl-hidden sm:dl-block dl-text-sm">Inicio</li>
        <Image
          className="dl-hidden sm:dl-block"
          alt="breadcrumb_arrow"
          width={6}
          height={11}
          src="/orders/arrow.svg"
        />
        <li className="dl-hidden sm:dl-block dl-text-black sm:dl-text-brand-primary-medium dl-font-bold dl-text-sm">
          Cómo funciona
        </li>
        <li className="dl-text-base dl-font-semibold sm:dl-hidden">
          ¿Cómo funciona?
        </li>
      </ul>
      <div className="dl-hidden sm:dl-block">
        <PrincipalBanner />
      </div>
      <section className="dl-container dl-mx-auto">
        <h4 className="dl-text-2xl dl-font-bold dl-mb-6">
          Canjea rápido y fácil
        </h4>
        <ul className="dl-flex dl-flex-col md:dl-flex-row dl-justify-between dl-mb-18 dl-gap-8">
          <li>
            <p className="dl-text-sm dl-mb-3">
              1. Acumula puntos comprando desde Insuma fuera del horario de
              visita del vendedor.
            </p>
            <div
              className="
              dl-flex dl-flex-col
              dl-border dl-rounded-lg 
              dl-h-56 dl-justify-center
              dl-items-center"
            >
              <div className="dl-flex dl-divide-x-2 dl-mb-8">
                <div className="dl-flex dl-flex-col dl-pr-8 dl-pb-2 dl-justify-center">
                  <span className="dl-text-sm dl-mb-2">Productos</span>
                  <Image width={82} height={24} alt="insuma" src="/logo.png" />
                </div>
                <div className="dl-flex dl-items-center dl-pl-4 dl-gap-2.5">
                  <div className="dl-flex dl-flex-col">
                    <span className="dl-text-sm">Compra</span>
                    <b style={{ color: "#EC3A0E" }} className="dl-text-4xl">
                      S/1
                    </b>
                  </div>
                  <p className="dl-text-3xl">=</p>
                  <div className="dl-flex dl-flex-col">
                    <span className="dl-text-sm">Recibe</span>
                    <b style={{ color: "#EC3A0E" }} className="dl-text-4xl">
                      1pt
                    </b>
                  </div>
                </div>
              </div>
              <div className="dl-flex">
                <div
                  className="dl-rounded-lg dl-w-12 dl-h-10 dl-flex dl-justify-center dl-items-center"
                  style={{ backgroundColor: "#FFF9F2" }}
                >
                  <Image
                    alt="warning"
                    width={24}
                    height={24}
                    src="/orders/warning.svg"
                  />
                </div>
                <p className="dl-w-48 sm:dl-w-72 dl-text-sm dl-w-66 dl-ml-2">
                  Las compras hechas los días que te visita tu vendedor
                  <b>no acumularán puntos</b>
                </p>
              </div>
            </div>
          </li>
          <li className="dl-flex dl-flex-col dl-justify-between">
            <p className="dl-text-sm dl-mb-3">
              2. ¡Listo! Tus puntos estarán disponibles en 3 días hábiles.
            </p>
            <Image
              alt="box_starts"
              width={590}
              height={225}
              src="/orders/empty_order.svg"
            />
          </li>
          <a
            href="/canjea-tus-puntos"
            className="
            sm:dl-hidden
            dl-text-white dl-rounded-lg
            dl-h-12 dl-flex dl-justify-center dl-items-center
            dl-bg-brand-primary-medium "
          >
            Canjear
          </a>
        </ul>
      </section>

      <NeedHelp />
    </NestedLayout>
  );
}
