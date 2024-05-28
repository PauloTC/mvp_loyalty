"use client";
import { DlButton, DlCheckOut } from "@alicorpdigital/dali-react";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "../../contexts/AuthContext";

import { ProductProps } from "@/services/products";
import { sendProducts } from "@/services/form";
import { sendGTMEvent } from "@next/third-parties/google";
import "./styles.css";
import {
  ModalConfirmation,
  ModalCongratulation,
  ModalLoader,
} from "@/components/modals";
import { useRouter } from "next/navigation";

type Props = {
  items: ProductProps[];
  onChange: (item: ProductProps) => void;
  totalAmount: number;
};

const MyOrders = (props: Props) => {
  const { items, onChange, totalAmount } = props;
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
  const [openCongratulation, setOpenCongratulation] = useState<boolean>(false);
  const [openLoader, setOpenLoader] = useState(false);

  const numberWithCommas = (points: number) => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRemainingPoints = () => {
    let total = 0;
    items.forEach((item) => {
      total += (item.value || 0) * item.points;
    });
    return user?.score - total;
  };

  const handleRemainingProducts = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.value || 0;
    });
    return total;
  };

  const handleLoader = () => {
    setOpenConfirmation(false);
    setOpenLoader(true);
    handleSubmitProducts();
    handlerRedemptionConfirmation();
    setTimeout(() => {
      setOpenLoader(false);
      setOpenCongratulation(true);
    }, 2000);
  };

  const handlerRedemptionConfirmation = () => {
    const storageData = localStorage.getItem("user");
    if (storageData) {
      const user = JSON.parse(storageData);
      sendGTMEvent({
        event: "pedidoUser",
        usuario: user.username,
        nombreUsuario: user.name,
        fecha: new Date().toLocaleString(),
      });
    }
  };

  const handleSubmitProducts = () => {
    const products = items.map((item) => `(${item.value} unid) ${item.name}`);
    const data = {
      business: user.business,
      code: user.username,
      name: user.name,
      products: products.join(" + "),
      quantity: totalAmount.toString(),
    };
    sendProducts(data);
  };

  return (
    <>
      <div className="my-orders dl-flex dl-flex-col dl-h-fit dl-overflow-hidden dl-fixed dl-bottom-0 dl-left-0 dl-w-full dl-rounded-t-2xl lg:dl-static lg:dl-rounded-2xl lg:dl-border">
        <h4 className="dl-hidden lg:dl-flex dl-text-2xl dl-font-semibold dl-mb-5 dl-px-6 dl-pt-4">
          Mis pedidos
        </h4>

        <div className="my-orders-background dl-flex lg:dl-hidden">
          <div className="dl-body-nano">
            Te quedarían:{" "}
            <span className="dl-subtitle-xxs">
              {handleRemainingPoints()} pts
            </span>
          </div>
          <div>
            <svg
              width="39"
              height="24"
              viewBox="0 0 39 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3435 7.1635L12.6464 11.8377C12.7805 12.1096 13.0565 12.2814 13.3589 12.2814H18.1566C18.8676 12.2814 19.2199 13.1453 18.7132 13.6437L15.1598 17.1493C14.9743 17.3321 14.8901 17.5946 14.9337 17.8508L15.8271 23.0671C15.9378 23.717 15.258 24.2122 14.6749 23.906L10.002 21.4439C9.77125 21.3221 9.49372 21.3221 9.26296 21.4439L4.59007 23.906C4.00693 24.2122 3.32712 23.717 3.43783 23.0671L4.33124 17.8508C4.3749 17.5946 4.2907 17.3321 4.10516 17.1493L0.550208 13.6452C0.0434717 13.1453 0.397408 12.283 1.10684 12.283H5.90446C6.20695 12.283 6.48292 12.1111 6.61701 11.8393L8.91994 7.16506C9.2115 6.57454 10.0535 6.57454 10.3435 7.16506V7.1635Z"
                fill="#FFB600"
              />
              <path
                d="M21.9443 0.247227L23.2114 2.8368C23.2851 2.98736 23.4361 3.08301 23.6028 3.08301H26.2424C26.6338 3.08301 26.8268 3.56125 26.5495 3.83756L24.5944 5.77886C24.4926 5.87982 24.447 6.02507 24.4698 6.16677L24.9612 9.05746C25.0226 9.41702 24.6471 9.69157 24.3276 9.52153L21.7565 8.15766C21.6284 8.09035 21.4774 8.09035 21.3493 8.15766L18.7781 9.52153C18.457 9.69157 18.0831 9.41702 18.1446 9.05746L18.636 6.16677C18.6606 6.02507 18.6132 5.87982 18.5114 5.77886L16.5562 3.83756C16.2772 3.56125 16.472 3.08301 16.8634 3.08301H19.503C19.6697 3.08301 19.8207 2.98736 19.8944 2.8368L21.1615 0.247227C21.3212 -0.0804558 21.7846 -0.0804558 21.9443 0.247227Z"
                fill="#FFB600"
              />
              <path
                d="M35.1407 6.03594L36.0395 7.881C36.0918 7.98827 36.1989 8.05642 36.3171 8.05642H38.1895C38.4671 8.05642 38.604 8.39716 38.4073 8.59403L37.0205 9.97719C36.9483 10.0491 36.9159 10.1526 36.9321 10.2536L37.2807 12.3132C37.3243 12.5694 37.0578 12.765 36.8313 12.6438L35.0075 11.6721C34.9166 11.6241 34.8095 11.6241 34.7187 11.6721L32.8949 12.6438C32.6671 12.765 32.4019 12.5694 32.4455 12.3132L32.794 10.2536C32.8115 10.1526 32.7779 10.0491 32.7056 9.97719L31.3188 8.59403C31.1209 8.39716 31.2591 8.05642 31.5367 8.05642H33.409C33.5273 8.05642 33.6343 7.98827 33.6866 7.881L34.5855 6.03594C34.6987 5.80247 35.0274 5.80247 35.1407 6.03594Z"
                fill="#FFB600"
              />
            </svg>
          </div>
        </div>
        {items.length ? (
          <>
            <div className="dl-hidden lg:dl-flex dl-flex-col dl-gap-6 dl-px-6 dl-pb-6">
              {items.map((item, index) => {
                return (
                  <DlCheckOut
                    key={index}
                    title={item.name}
                    src={item.image}
                    inputAmountProps={{
                      onChange: (value) => onChange({ ...item, value }),
                      value: item.value,
                    }}
                    onDelete={() => {
                      onChange({ ...item, value: 0 });
                    }}
                  >
                    <p className="dl-subtitle-xxs">
                      {numberWithCommas(item.points)}pts
                    </p>
                  </DlCheckOut>
                );
              })}
            </div>

            <div className="dl-flex dl-justify-between dl-justify-items-center dl-p-6 dl-border-t dl-border-[#DEDEDE]">
              <div>
                <p className="dl-body-quarck">
                  {handleRemainingProducts()} {handleRemainingProducts() > 1 ? "productos" : "producto"}
                </p>
                <div className="dl-subtitle-xs">
                  {numberWithCommas(totalAmount)}pts
                </div>
              </div>
              <DlButton onClick={() => setOpenConfirmation(true)}>
                Canjear
              </DlButton>
            </div>

            <div className="my-orders-background dl-hidden lg:dl-flex">
              <div className="dl-body-nano">
                Te quedarían:{" "}
                <span className="dl-subtitle-xxs">
                  {handleRemainingPoints()} pts
                </span>
              </div>
              <div>
                <svg
                  width="39"
                  height="24"
                  viewBox="0 0 39 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3435 7.1635L12.6464 11.8377C12.7805 12.1096 13.0565 12.2814 13.3589 12.2814H18.1566C18.8676 12.2814 19.2199 13.1453 18.7132 13.6437L15.1598 17.1493C14.9743 17.3321 14.8901 17.5946 14.9337 17.8508L15.8271 23.0671C15.9378 23.717 15.258 24.2122 14.6749 23.906L10.002 21.4439C9.77125 21.3221 9.49372 21.3221 9.26296 21.4439L4.59007 23.906C4.00693 24.2122 3.32712 23.717 3.43783 23.0671L4.33124 17.8508C4.3749 17.5946 4.2907 17.3321 4.10516 17.1493L0.550208 13.6452C0.0434717 13.1453 0.397408 12.283 1.10684 12.283H5.90446C6.20695 12.283 6.48292 12.1111 6.61701 11.8393L8.91994 7.16506C9.2115 6.57454 10.0535 6.57454 10.3435 7.16506V7.1635Z"
                    fill="#FFB600"
                  />
                  <path
                    d="M21.9443 0.247227L23.2114 2.8368C23.2851 2.98736 23.4361 3.08301 23.6028 3.08301H26.2424C26.6338 3.08301 26.8268 3.56125 26.5495 3.83756L24.5944 5.77886C24.4926 5.87982 24.447 6.02507 24.4698 6.16677L24.9612 9.05746C25.0226 9.41702 24.6471 9.69157 24.3276 9.52153L21.7565 8.15766C21.6284 8.09035 21.4774 8.09035 21.3493 8.15766L18.7781 9.52153C18.457 9.69157 18.0831 9.41702 18.1446 9.05746L18.636 6.16677C18.6606 6.02507 18.6132 5.87982 18.5114 5.77886L16.5562 3.83756C16.2772 3.56125 16.472 3.08301 16.8634 3.08301H19.503C19.6697 3.08301 19.8207 2.98736 19.8944 2.8368L21.1615 0.247227C21.3212 -0.0804558 21.7846 -0.0804558 21.9443 0.247227Z"
                    fill="#FFB600"
                  />
                  <path
                    d="M35.1407 6.03594L36.0395 7.881C36.0918 7.98827 36.1989 8.05642 36.3171 8.05642H38.1895C38.4671 8.05642 38.604 8.39716 38.4073 8.59403L37.0205 9.97719C36.9483 10.0491 36.9159 10.1526 36.9321 10.2536L37.2807 12.3132C37.3243 12.5694 37.0578 12.765 36.8313 12.6438L35.0075 11.6721C34.9166 11.6241 34.8095 11.6241 34.7187 11.6721L32.8949 12.6438C32.6671 12.765 32.4019 12.5694 32.4455 12.3132L32.794 10.2536C32.8115 10.1526 32.7779 10.0491 32.7056 9.97719L31.3188 8.59403C31.1209 8.39716 31.2591 8.05642 31.5367 8.05642H33.409C33.5273 8.05642 33.6343 7.98827 33.6866 7.881L34.5855 6.03594C34.6987 5.80247 35.0274 5.80247 35.1407 6.03594Z"
                    fill="#FFB600"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="dl-hidden lg:dl-block dl-px-6 dl-pb-6 dl-text-center">
            <div className="dl-relative dl-h-36 dl-rounded-lg dl-overflow-hidden">
              <Image
                alt="empty_order"
                fill
                style={{ objectFit: "cover" }}
                src="/orders/empty_order.svg"
              />
            </div>
            <p className="dl-mt-7.5 dl-text-base dl-leading-8">
              ¡Agrega tus productos!
            </p>
          </div>
        )}
      </div>
      <ModalConfirmation
        open={openConfirmation}
        onClose={() => setOpenConfirmation(false)}
        onOk={handleLoader}
      />
      <ModalCongratulation
        open={openCongratulation}
        onOk={() => {
          setOpenCongratulation(false);
          router.push("/");
        }}
      />
      {openLoader && <ModalLoader />}
    </>
  );
};

export default MyOrders;
