import Image from "next/image";
import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";

export default function HomePage() {
  const actions = [
    {
      title: "Canjea tus puntos",
      description: "Productos Alicorp",
      image: "/home/canjea.png",
      to: "/canjea-tus-puntos",
    },
    {
      title: "Historial de Canjes",
      description: "Dale seguimiento",
      image: "/home/historial.png",
      to: "/home",
    },
    {
      title: "¿Cómo funciona?",
      description: "Canjea rápido y fácil",
      image: "/home/funciona.png",
      to: "/como-funciona",
    },
  ];

  return (
    <NestedLayout hideOnMobile={false}>
      <PrincipalBanner
        title="Insuma puntos"
        showPoints={true}
        subtitle="Canjea productos con los puntos acumulados por tus compras. Recompensamos tu esfuerzo diario."
      />
      <ul className="dl-mb-10  md:dl-mb-16 dl-container dl-items-center dl-flex dl-flex-wrap dl-justify-between dl-gap-8 xl:dl-gap-14 dl-flex-col sm:dl-flex-row dl-mx-auto">
        {actions.map((action, index) => (
          <li key={index} className="dl-w-80">
            <h3 className="dl-text-base dl-font-semibold dl-mb-2">
              {action.title}
            </h3>
            <div className="dl-border dl-max-h-36 dl-rounded-lg">
              <Image
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

      <NeedHelp />
    </NestedLayout>
  );
}
