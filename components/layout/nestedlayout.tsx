import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NestedLayout: React.FC<Props> = ({ children }) => {
  return (
    <section>
      <p>Header</p>
      <div>{children}</div>
      <p>Footer</p>
    </section>
  );
};

export default NestedLayout;
