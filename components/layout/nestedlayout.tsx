import { ReactNode } from "react";
import Footer from "../footer/footer";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const NestedLayout: React.FC<Props> = ({ children }) => {
  return (
    <section>
      <div className="dl-container dl-py-5 sm:dl-py-6">
        <Image alt="logo" width={82} height={24} src="/logo.png" />
      </div>
      <div>{children}</div>
      <Footer />
    </section>
  );
};

export default NestedLayout;
