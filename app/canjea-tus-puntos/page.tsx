"use-client";
import NestedLayout from "@/components/layout";
import PrincipalBanner from "@/components/banner";
import Image from "next/image";

export default function OrdersPage() {
  return (
    <NestedLayout hideOnMobile={true}>
      <PrincipalBanner />

      <section className="dl-container dl-mb-16">
        <h3 className="dl-mb-4">Productos disponibles</h3>
        <div className="dl-border dl-rounded-2xl dl-pt-4 dl-pb-10 dl-max-w-96 dl-flex dl-flex-col dl-px-6">
          <h4 className="dl-text-2xl dl-font-semibold dl-mb-5">Mis pedidos</h4>
          <Image
            alt="empty_order"
            width={336}
            height={133}
            src="/orders/empty_order.svg"
          />
          <p className="dl-self-center dl-mt-7.5 dl-text-base dl-leading-8">
            ¡Agrega tus productos!
          </p>
        </div>
      </section>
    </NestedLayout>
  );
}
