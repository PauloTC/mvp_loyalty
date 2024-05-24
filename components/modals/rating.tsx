"use client";
import { DlModal } from "@alicorpdigital/dali-react";
import Image from "next/image";

export const ModalRating = (props: any) => {
  const RatingOptions = [
    {
      title: "Muy satisfecho/a",
      image: "/modals/nada satisfecho.svg",
    },
    {
      title: "Poco satisfecho",
      image: "/modals/poco satisfecho.svg",
    },
    {
      title: "Satisfecho",
      image: "/modals/satisfecho.svg",
    },
    {
      title: "Muy satisfecho",
      image: "/modals/muy satisfecho.svg",
    },
    {
      title: "Totalmente satisfecho",
      image: "/modals/totalmente satisfecho.svg",
    },
  ];

  return (
    <DlModal open={true}>
      <div className="dl-flex dl-flex-col dl-items-center">
        <div className="dl-mb-4">
          <Image
            alt="hands"
            height={133}
            width={190}
            src="/modals/umbrella.png"
          />
        </div>
        <h2 className="dl-text-center dl-text-2.5xl dl-font-bold dl-mb-8 dl-tracking-wide">
          ¿Qué tan satisfecho/a estás con insuma puntos?
        </h2>
        <ul className="dl-flex dl-mb-10">
          {RatingOptions.map((option, index) => (
            <li
              className="dl-flex-1 dl-flex dl-items-center dl-justify-between dl-flex-col"
              key={index}
            >
              <button className="dl-flex dl-items-center dl-flex-col dl-text-xs dl-pb-3.5">
                <Image
                  className="dl-mb-3"
                  alt="face"
                  height={47}
                  width={47}
                  src={option.image}
                />
                <span className="dl-block dl-flex-1 dl-max-w-20">
                  {option.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <button
          style={{ outline: "none" }}
          className="
            dl-w-44 dl-h-12
            dl-flex dl-justify-center
            dl-items-center
            dl-bg-brand-primary-medium dl-text-my-white
            dl-rounded-lg"
        >
          Enviar
        </button>
      </div>
    </DlModal>
  );
};
