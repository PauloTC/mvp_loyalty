"use client";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface StepsComponentProps {
  title: string;
  buttonText: string;
}

export default function StepsComponent({ title }: StepsComponentProps) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleRedirection = () => {
    if (user?.username) {
      router.push("/canjea-tus-puntos");
    } else {
      router.push("/login");
    }
  };

  return (
    <section className="dl-container dl-mx-auto dl-mb-8">
      <h4 className="dl-text-2xl dl-font-bold dl-mb-6">{title}</h4>
      <ul className="dl-grid dl-grid-cols-1 lg:dl-grid-cols-2 dl-gap-8">
        <li className="dl-grow">
          <p className="dl-text-sm dl-mb-3">
            <b>1. Acumula puntos</b> comprando desde Insuma.
          </p>
          <div
            className="
              dl-flex dl-flex-col
              dl-border dl-rounded-lg
              dl-h-56 dl-justify-center
              dl-items-center"
          >
            <div className="dl-mb-4">
              <Image
                width={170}
                height={24}
                alt="insuma"
                src="/logo_step.png"
              />
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
          </div>
        </li>
        <li className="dl-grow dl-flex dl-flex-col dl-justify-between">
          <p className="dl-text-sm dl-mb-3">
            2. ¡Listo! <b>Tus puntos estarán disponibles en 3 días hábiles.</b>
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
  );
}
