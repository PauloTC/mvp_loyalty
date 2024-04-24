import { ReactNode } from "react";
import { useContext } from "react";
import Footer from "../footer/footer";
import Image from "next/image";
import classNames from "classnames";
import { AuthContext } from "../../contexts/AuthContext";

type Props = {
  children: ReactNode;
  hideOnMobile: boolean;
};

const NestedLayout: React.FC<Props> = ({ children, hideOnMobile }) => {
  // const { logout } = useContext(AuthContext);

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
        <button
          // onClick={logout}
          style={{ outline: "none" }}
          className="
              dl-font-semibold dl-px-4
              dl-text-brand-primary-medium 
              dl-text-base"
        >
          Cerrar sesión
        </button>
      </div>
      <div>{children}</div>
      <Footer />
    </section>
  );
};

export default NestedLayout;
