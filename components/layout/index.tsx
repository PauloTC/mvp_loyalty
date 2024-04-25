import { ReactNode } from "react";
import Footer from "../footer/footer";
import HeaderComponent from "../header";

type Props = {
  children: ReactNode;
  hideOnMobile: boolean;
};

const NestedLayout: React.FC<Props> = ({ children, hideOnMobile }) => {
  return (
    <section>
      <HeaderComponent hideOnMobile={hideOnMobile} />
      <div>{children}</div>
      <Footer />
    </section>
  );
};

export default NestedLayout;
