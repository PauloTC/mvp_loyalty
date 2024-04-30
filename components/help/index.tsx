import Image from "next/image";

export default function NeedHelp() {
  return (
    <section
      className="
        dl-mb-10
        dl-flex
        dl-justify-center
        dl-relative
        dl-py-8 
        sm:dl-mb-25
        sm:dl-py-6 
        dl-mx-auto
        dl-container
        dl-rounded-xl"
    >
      <div className="dl-hidden sm:dl-block dl-mr-5 dl-self-end dl-pb-3 dl-absolute">
        <Image
          alt="second_star"
          width={23}
          height={22}
          src="/home/second_star.svg"
        />
      </div>
      <div
        className="
        dl-flex dl-flex-col 
        sm:dl-items-center 
        dl-bg-my-gray dl-w-full 
        dl-justify-center dl-h-39"
      >
        <h4 className="dl-text-2xl dl-font-bold dl-mb-1">¿Necesitas ayuda?</h4>
        <p className="dl-text-sm dl-mb-6">
          Despeja todas tus dudas y prepárate para ganar.
        </p>
        <a
          className="
              dl-flex
              dl-gap-2
              dl-self-end
              sm:dl-self-center
              dl-font-semibold
              dl-text-base
              dl-text-brand-primary-medium"
          href="https://wa.link/vd5a1e"
        >
          <Image
            src={"/home/whatsapp.svg"}
            alt="whatsapp"
            height={16}
            width={16}
          />
          Consultar
        </a>
      </div>
      <div className="dl-hidden sm:dl-block dl-ml-4 dl-absolute">
        <Image
          alt="first_star"
          height={15}
          width={16}
          src="/home/first_star.svg"
        />
      </div>
    </section>
  );
}
