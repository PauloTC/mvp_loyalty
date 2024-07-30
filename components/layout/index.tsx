import { ReactNode, useContext, useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderComponent from "../header";
import { AuthContext } from '@/contexts/AuthContext';

type Props = {
  children: ReactNode;
  hideOnMobile: boolean;
};

type User = {
  username: string;
  password: string;
  score: number;
  name?: string;
  business?: string;
};

const NestedLayout: React.FC<Props> = ({ children, hideOnMobile }) => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/paulotc/mvp_loyalty_db/users")
      .then((response) => response.json())
      .then((data) => {
        if (localStorage.getItem("user")) {
          const userLogin: User | undefined = data.find(
            (item: User) => item.username === user.username && item.password === user.password
          );
          if (userLogin) {
            setUser({
              username: userLogin.username,
              score: userLogin.score,
              name: userLogin.name,
              business: userLogin.business,
            });
            localStorage.setItem("user", JSON.stringify(userLogin));
          }
        }
      });
  }, []);

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
