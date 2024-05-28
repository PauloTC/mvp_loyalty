"use client";
import { DlModal } from "@alicorpdigital/dali-react";
import Image from "next/image";
import { useState } from "react";
import { DlButton } from "@alicorpdigital/dali-react";

type Props = {
  open?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
};

export const ModalRating = (props: Props) => {
  const { open, onClose, onSubmit } = props;

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

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
    <DlModal open={open} onClose={onClose}>
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
          ¿Qué tan satisfecho/a estás con Insuma puntos?
        </h2>
        <ul className="dl-flex dl-mb-10">
          {RatingOptions.map((option, index) => (
            <li
              className={`dl-transition-all dl-border dl-flex-1 dl-flex dl-items-center dl-justify-between dl-flex-col dl-pt-2 ${
                selectedOption === index
                  ? "dl-bg-my-gray dl-border-gray-300 dl-rounded-lg"
                  : "dl-border-transparent"
              }`}
              key={index}
            >
              <button
                style={{ outline: "none" }}
                className="dl-flex dl-items-center dl-flex-col dl-text-xs dl-pb-3.5"
                onClick={() => setSelectedOption(index)}
              >
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
        <DlButton
          style={{ outline: "none" }}
          disabled={selectedOption === null}
          onClick={onSubmit}
        >
          Enviar
        </DlButton>
      </div>
    </DlModal>
  );
};
