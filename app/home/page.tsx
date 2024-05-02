import Image from "next/image";
import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import NeedHelp from "@/components/help";

export default function HomePage() {
  const actions = [
    {
      title: "Canjea tus puntos",
      description: "Premios disponibles",
      image: "/home/canjea.png",
      to: "/canjea-tus-puntos",
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

      <ul className="dl-container dl-mx-auto dl-flex dl-flex-col sm:dl-flex-row  dl-gap-8 sm:dl-gap-20 dl-mb-0 lg:dl-mb-12">
        {actions.map((action, index) => (
          <li key={index} className="dl-grow">
            <h3 className="dl-text-base dl-font-semibold dl-mb-2">
              {action.title}
            </h3>

            <div className="dl-border dl-rounded-lg">
              <div className="dl-relative dl-h-26 sm:dl-h-36">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={action.image}
                  alt={action.title}
                />
              </div>
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
