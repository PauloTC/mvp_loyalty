import Image from "next/image";
import NestedLayout from "@/components/layout/nestedlayout";

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
      <section
        className="dl-flex dl-justify-center md:dl-justify-between xl:dl-justify-center dl-mb-6 md:dl-mb-12"
        style={{ backgroundColor: "#F2F7FF" }}
      >
        <div className="dl-w-full dl-items-center dl-flex dl-justify-center dl-gap-14 sm:dl-container sm:dl-h-76.5">
          <div className="dl-w-full sm:dl-w-120">
            <h3 className="dl-hidden sm:dl-block dl-font-bold dl-text-xl lg:dl-text-3.5xl dl-mb-2">
              Canjea rápido y fácil{" "}
            </h3>
            <p className="dl-hidden sm:dl-block dl-text-base dl-mb-6">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
            <div
              className="
                dl-flex
                dl-bg-gradient-to-r dl-from-cyan-500 
                dl-to-blue-500 
                dl-rounded-t-none
                dl-rounded-b-2xl
                sm:dl-rounded-2xl
                dl-items-center
                dl-justify-between dl-px-8 dl-w-full md:dl-w-80 lg:dl-w-96
                dl-h-30
                sm:dl-h-26"
            >
              <div className="dl-flex dl-flex-col">
                <span className="dl-text-my-white">Puntos disponibles</span>
                <p className="dl-text-1.5xl lg:dl-text-4.5xl dl-font-bold dl-text-my-white">
                  1,785 pts
                </p>
              </div>
              <Image
                alt="stars"
                width={84}
                height={52}
                src="/home/estrellas.svg"
              />
            </div>
          </div>

          <Image
            layout="responsive"
            className="dl-hidden md:dl-flex"
            width={703}
            height={240}
            src="/home/home_banner.png"
            alt="banner"
          />
        </div>
      </section>

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
