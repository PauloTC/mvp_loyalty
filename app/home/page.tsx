import Image from "next/image";
import NestedLayout from "@/components/layout/nestedlayout";
import PrincipalBanner from "@/components/banner/banner";

export default async function HomePage() {
  const actions = [
    {
      title: "Canjea tus puntos",
      description: "Productos Alicorp",
      image: "/home/canjea.svg",
      to: "/canjea-tus-puntos",
    },
    {
      title: "Historial de Canjes",
      description: "Dale seguimiento",
      image: "/home/historial.svg",
      to: "/historial",
    },
    {
      title: "¿Cómo funciona?",
      description: "Canjea rápido y fácil",
      image: "/home/funciona.svg",
      to: "/como-funciona",
    },
  ];

  return (
    <NestedLayout>
      <PrincipalBanner />
      <ul className="dl-mb-10  md:dl-mb-16 dl-container dl-flex dl-flex-wrap dl-justify-between dl-gap-8 xl:dl-gap-14 dl-flex-col sm:dl-flex-row dl-mx-auto">
        {actions.map((action, index) => (
          <li key={index} className="dl-w-80">
            <h3 className="dl-text-base dl-font-semibold dl-mb-2">
              {action.title}
            </h3>
            <div className="dl-border dl-max-h-36 dl-rounded-lg">
              <Image
                layout="responsive"
                width={320}
                height={88}
                src={action.image}
                alt={action.title}
              />
              <div className="dl-border-t d-flex dl-items-center dl-px-4 dl-justify-between dl-h-14">
                <p className="dl-font-medium dl-text-sm">
                  {action.description}
                </p>
                <a
                  href={action.to}
                  className="dl-text-brand-primary-medium dl-font-semibold"
                >
                  Ver más
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section
        className="
        dl-mb-10
        dl-flex
        dl-justify-center
        dl-bg-my-gray 
        dl-py-8 
        sm:dl-mb-25
        sm:dl-py-6 
        dl-mx-auto
        dl-full-width
        sm:dl-w-9/12 dl-rounded-xl"
      >
        <div className="dl-hidden sm:dl-block dl-mr-5 dl-self-end dl-pb-3">
          <Image
            alt="second_star"
            width={23}
            height={22}
            src="/home/second_star.svg"
          />
        </div>
        <div className="dl-flex dl-flex-col sm:dl-items-center">
          <h4 className="dl-text-2xl dl-font-bold dl-mb-1">
            ¿Necesitas ayuda?
          </h4>
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
            href="https://wa.link/kq1qx2"
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
        <div className="dl-hidden sm:dl-block dl-ml-4">
          <Image
            alt="first_star"
            height={15}
            width={16}
            src="/home/first_star.svg"
          />
        </div>
      </section>
    </NestedLayout>
  );
}
