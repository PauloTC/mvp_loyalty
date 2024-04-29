"use client";
import Image from "next/image";

interface StepsComponentProps {
  title: string;
}

export default function StepsComponent({ title }: StepsComponentProps) {
  return (
    <section className="dl-container dl-mx-auto">
      <h4 className="dl-text-2xl dl-font-bold dl-mb-6">{title}</h4>
      <ul className="dl-flex dl-flex-col md:dl-flex-row dl-justify-between dl-mb-18 dl-gap-8">
        <li className="dl-grow">
          <p className="dl-text-sm dl-mb-3">
            1. Acumula puntos comprando desde Insuma fuera del horario de visita
            del vendedor.
          </p>
          <div
            className="
              dl-flex dl-flex-col
              dl-border dl-rounded-lg 
              dl-h-56 dl-justify-center
              dl-items-center"
          >
            <div className="dl-mb-4">
              <Image width={82} height={24} alt="insuma" src="/logo.png" />
            </div>
            <div className="dl-flex dl-divide-x-2 dl-mb-4">
              <div className="dl-flex dl-flex-col dl-pr-2 dl-pb-2 dl-justify-center dl-w-36">
                <span className="dl-text-sm dl-mb-2">
                  Día que te visita tu vendedor
                </span>
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
            <div className="dl-flex dl-divide-x-2">
              <div className="dl-flex dl-flex-col dl-pr-2 dl-pb-2 dl-justify-center dl-w-36">
                <span className="dl-text-sm dl-mb-2">
                  Días que NO te visita tu vendedor
                </span>
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
                    2pt
                  </b>
                </div>
              </div>
            </div>
            {/* <div className="dl-flex">
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
                Las compras hechas los días que te visita tu vendedor {""}
                <b>no acumularán puntos</b>
              </p>
            </div> */}
          </div>
        </li>
        <li className="dl-grow dl-flex dl-flex-col dl-justify-between">
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
  );
}
