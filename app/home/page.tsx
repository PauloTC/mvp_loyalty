import Image from "next/image";

export default async function HomePage() {
  return (
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
  );
}
