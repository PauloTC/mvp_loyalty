import { ReactNode } from "react";
import Footer from "../footer/footer";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  hideOnMobile: boolean;
};

const NestedLayout: React.FC<Props> = ({ children, hideOnMobile }) => {
  return (
    <section>
      <div
        className={classNames(
          hideOnMobile ? "dl-hidden sm:dl-flex" : "",
          "dl-flex",
          "dl-container",
          "dl-mx-auto",
          "dl-py-5",
          "sm:dl-py-6",
          "dl-justify-between"
        )}
      >
        <Image alt="logo" width={82} height={24} src="/logo.png" />
        <a
          href="/"
          style={{ outline: "none" }}
          className="
            dl-font-semibold dl-px-4
            dl-text-brand-primary-medium 
            dl-text-base"
        >
          Cerrar sesión
        </a>
      </div>
      <div>{children}</div>
      <Footer />
    </section>
  );
};

export default NestedLayout;
