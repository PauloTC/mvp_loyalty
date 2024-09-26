"use client";
import { DlModal, DlButton } from "@alicorpdigital/dali-react";
import { useContext, useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import { sendGTMEvent } from "@next/third-parties/google";
import { sendProducts } from "@/services/form";
import { AuthContext } from "@/contexts/AuthContext";
import "./styles.css";

type Props = {
  onOk?: () => void;
  open?: boolean;
};

const nps = [
  { name: "Muy <br /> fácil", slug: "muy-facil" },
  { name: "Fácil", slug: "facil" },
  { name: "Neutro", slug: "neutro" },
  { name: "Difícil", slug: "dificil" },
  { name: "Muy <br /> difícil", slug: "muy-dificil" },
];

export const ModalCongratulation = (props: Props) => {
  const { user } = useContext(AuthContext);
  const { onOk, open = false } = props;
  const [npsSelected, setNpsSelected] = useState<string>("");

  const handlerSendRateSatisfaction = () => {
    const storageData = sessionStorage.getItem("user");
    const data = {
      business: user.business,
      code: user.username,
      name: user.name,
      products: "",
      quantity: "",
      satisfied: "",
      npsSelected: npsSelected,
    };

    sendProducts(data);
    onOk?.();
    if (storageData) {
      const user = JSON.parse(storageData);
      sendGTMEvent({
        event: "PointsCanjeSatisfactionRated",
        nombreUsuario: user.name,
        calificationCanje: npsSelected,
      });
    }
  };

  useEffect(() => {
    if (open) setNpsSelected("");
  }, [open]);

  return (
    <DlModal open={open}>
      <div className="dl-flex dl-flex-col dl-items-center">
        <div className="dl-mb-4">
          <Image
            alt="hands"
            height={133}
            width={190}
            src="/modals/umbrella.png"
          />
        </div>
        <h2 className="dl-text-2xl dl-text-center dl-font-bold dl-mb-4 dl-tracking-wide">
          ¡Tu canje está siendo procesado!
        </h2>
        <p className="dl-text-center dl-text-sm max-dl-w-93 dl-text-neutrals-dark">
          Pronto nos comunicaremos contigo por whatsapp y actualizaremos tus
          puntos disponibles.
        </p>
        <div className="dl-nps dl-w-full">
          <p>
            ¿Qué tan fácil o difícil es <br /> canjear tus puntos?
          </p>

          <div className="dl-nps-container">
            {nps.map((nps) => (
              <div
                role="presentation"
                key={nps.slug}
                onClick={() => setNpsSelected(nps.slug)}
                className={cn("dl-nps-btn", {
                  "dl-nps-btn-selected": npsSelected === nps.slug,
                })}
                dangerouslySetInnerHTML={{ __html: nps.name }}
              />
            ))}
          </div>
        </div>
        <div className="dl-flex dl-justify-center dl-mt-8 dl-gap-4">
          <DlButton
            onClick={handlerSendRateSatisfaction}
            disabled={!npsSelected}
            className="
              dl-w-44 dl-h-12
              dl-justify-center
            "
          >
            Enviar
          </DlButton>
        </div>
      </div>
    </DlModal>
  );
};
