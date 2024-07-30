import { ReactNode } from "react";
import Footer from "../footer/footer";
import HeaderComponent from "../header";

type Props = {
  children: ReactNode;
  hideOnMobile: boolean;
};

const NestedLayout: React.FC<Props> = ({ children, hideOnMobile }) => {
  return (
    <>
      <HeaderComponent hideOnMobile={hideOnMobile} />
      <div style={{ minHeight: 'calc(100vh - 73px - 52px)'}} className='dl-flex dl-flex-col'>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NestedLayout;
