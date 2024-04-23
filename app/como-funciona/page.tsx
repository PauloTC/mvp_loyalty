import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";
import Image from "next/image";

export default async function HowItWorksPage() {
  return (
    <NestedLayout>
      <PrincipalBanner />
      <section className="dl-container dl-mx-auto">
        <h4 className="dl-text-2xl dl-font-bold dl-mb-6">¿Cómo funciona?</h4>
        <ul className="dl-flex dl-justify-between dl-mb-18 dl-gap-8">
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

              <p className="dl-text-sm dl-w-66">
                Las compras hechas los días que te visita tu vendedor
                <b>no acumularán puntos</b>
              </p>
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
        </ul>
      </section>

      <NeedHelp />
    </NestedLayout>
  );
}
