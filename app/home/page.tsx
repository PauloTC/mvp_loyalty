"use client";
import NestedLayout from "@/components/layout";
import { useRouter } from "next/navigation";
import NeedHelp from "@/components/help";
import withAuth from "@/utils/withAuth";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getProducts, ProductProps } from "@/services/products";
import MyOrders from "@/components/my-orders";
import MyProducts from "@/components/my-products";
import BannerPoints from "@/components/banner-points";
import { DlDivider, DlSnackbar } from "@alicorpdigital/dali-react";
import StepsComponent from "@/components/steps";

const HomePage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [itemList, setItemList] = useState<ProductProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<ProductProps[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleTotalAmount = () => {
    let total = 0;
    itemList.forEach((item) => {
      total += (item.value || 0) * item.points;
    });
    return total;
  };

  const handleSelectItem = (item: ProductProps) => {
    let items = [...itemList];
    let total = 0;

    items = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          value: item.value,
        };
      }
      return i;
    });

    items.forEach((item) => {
      total += (item.value || 0) * item.points;
    });

    if (total > user.score) {
      setOpenSnackbar(true);
      items = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            value: (item.value || 0) - 1,
          };
        }
        return i;
      });
    }

    setItemList(items);
  };

  const handleGetProducts = async () => {
    const products = await getProducts();
    const filtered = products.filter(
      (product) => product.business === user?.business
    );
    const items = filtered.map((product) => ({ ...product, value: 0 }));
    setItemList(items);
  };

  useEffect(() => {
    const items = itemList.filter((item) => (item.value || 0) > 0);
    setSelectedItems(items);
  }, [itemList]);

  useEffect(() => {
    if (user) handleGetProducts();
  }, [user]);

  useEffect(() => {
    router.push('/');
  }, [])

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            newWorker?.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        })
        .catch((error) => {
          console.log("Registro de Service Worker fallido:", error);
        });
    }
  }, []);
  return (
    <NestedLayout hideOnMobile={false}>
      <div className="dl-hidden lg:dl-block">
        <BannerPoints />
      </div>

      <section className="dl-container dl-mx-auto dl-flex lg:dl-gap-24">
        <div className="dl-w-full">
          <div className="dl-font-semibold dl-mb-4">Productos Disponibles</div>
          <div className="dl-grid dl-gap-4 dl-grid-cols-products">
            <MyProducts products={itemList} onChange={handleSelectItem} />
          </div>
        </div>
        <div className="lg:dl-w-full lg:dl-max-w-md">
          <MyOrders
            items={selectedItems}
            onChange={handleSelectItem}
            totalAmount={handleTotalAmount()}
            onItemsDone={() => {
              setSelectedItems([]);
              handleGetProducts();
            }}
          />
        </div>
      </section>

      <div className="sm:dl-container dl-my-10 mx-auto">
        <DlDivider className="" />
      </div>

      <StepsComponent />

      <NeedHelp />
      <DlSnackbar
        onClose={() => setOpenSnackbar(false)}
        variant="warning"
        open={openSnackbar}
        className={selectedItems.length ? "dl-mb-40 lg:dl-mb-0" : ""}
      >
        {/* Haz superado tu límite de puntos disponibles. */}
        No tienes puntos suficientes para agregar este producto.
      </DlSnackbar>
    </NestedLayout>
  );
};

export default withAuth(HomePage);
