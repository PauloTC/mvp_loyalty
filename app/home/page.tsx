import Image from "next/image";
import NestedLayout from "@/components/layout/nestedlayout";

export default async function HomePage() {
  return (
    <NestedLayout>
      <section
        className="dl-flex dl-justify-between xl:dl-justify-center"
        style={{ backgroundColor: "#F2F7FF" }}
      >
        <div
          style={{ height: 304 }}
          className="dl-items-center dl-flex dl-gap-14 dl-container"
        >
          <div style={{ maxWidth: 457 }} className="dl-full-width">
            <h3 className="dl-hidden sm:dl-block dl-font-bold dl-text-xl lg:dl-text-3.5xl dl-mb-2">
              Canjea rápido y fácil{" "}
            </h3>
            <p className="dl-hidden sm:dl-block dl-text-base dl-mb-6">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit...
            </p>
            <div
              className="
                dl-flex dl-flex-col 
                dl-bg-gradient-to-r dl-from-cyan-500 
                dl-to-blue-500 dl-rounded-2xl
                dl-justify-center dl-px-8 dl-full-width md:dl-w-52 lg:dl-w-96"
              style={{ height: 104 }}
            >
              <span className="dl-text-my-white">Puntos disponibles</span>
              <p className="dl-text-1.5xl lg:dl-text-4.5xl dl-font-bold dl-text-my-white">
                1,785 pts
              </p>
            </div>
          </div>

          <Image
            className="dl-hidden md:dl-flex"
            width={703}
            height={240}
            src="/home/home_banner.png"
            alt="banner"
          />
        </div>
      </section>
      <section
        className="
        dl-mb-10
        sm:dl-mb-25
        dl-bg-my-gray 
        dl-py-8 
        sm:dl-py-6 
        dl-mx-auto
        dl-full-width
        sm:dl-w-9/12 dl-rounded-xl"
      >
        <div className="dl-container dl-flex dl-flex-col sm:dl-items-center">
          <h4 className="dl-text-2xl dl-font-bold dl-mb-1">
            ¿Necesitas ayuda?
          </h4>
          <p className="dl-text-sm dl-mb-6">
            Despeja todas tus dudas y prepárate para ganar.
          </p>
          <a
            className="
              dl-self-end
              sm:dl-self-center
              dl-font-semibold
              dl-text-base
              dl-text-brand-primary-medium"
            href="https://wa.link/kq1qx2"
          >
            Consultar
          </a>
        </div>
      </section>
    </NestedLayout>
  );
}
