"use client";
import BannerPoints from "@/components/banner-points";
import NestedLayout from "@/components/layout";
import MyOrders from "@/components/my-orders";
import MyProducts from "@/components/my-products";
import { getProducts, ProductProps } from "@/services/products";
import { DlIcon, DlSnackbar } from "@alicorpdigital/dali-react";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

const OrdersPage = () => {
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
      (product) => product.business === user.business
    );
    const items = filtered.map((product) => ({ ...product, value: 0 }));
    setItemList(items);
  };

  useEffect(() => {
    const items = itemList.filter((item) => (item.value || 0) > 0);
    setSelectedItems(items);
  }, [itemList]);

  useEffect(() => {
    handleGetProducts();
    console.log("user", user);
  }, [user]);

  return (
    <NestedLayout hideOnMobile={false}>
      <div className="dl-hidden lg:dl-block">
        <BannerPoints
          showPoints={true}
          title="Insuma puntos"
          subtitle="Canjea productos con los puntos acumulados por tus compras. Recompensamos tu esfuerzo diario."
        />
      </div>
      {/* <section
        className="dl-flex dl-items-center dl-p-6 dl-subtitle-xxs dl-gap-2 lg:dl-hidden"
        onClick={() => router.push("/home")}
      >
        <DlIcon name="arrow-left" color="#EC3A0E" />
        Canjea tus puntos
      </section> */}
      <section className="dl-flex dl-mb-16">
        <div className="dl-container dl-grid dl-grid-cols-1 lg:dl-grid-cols-5 xl:dl-grid-cols-8 lg:dl-gap-6 dl-mx-auto">
          <div className="dl-gap-1 dl-grid dl-grid-cols-2 sm:dl-grid-cols-3 xl:dl-grid-cols-4 lg:dl-col-span-3 xl:dl-col-span-5 dl-pb-12 lg:dl-pb-0">
            <MyProducts products={itemList} onChange={handleSelectItem} />
          </div>
          <div className="lg:dl-grid lg:dl-col-span-2 xl:dl-col-span-3">
            <MyOrders
              items={selectedItems}
              onChange={handleSelectItem}
              totalAmount={handleTotalAmount()}
            />
          </div>
        </div>
      </section>
      <DlSnackbar
        onClose={() => setOpenSnackbar(false)}
        variant="warning"
        open={openSnackbar}
      >
        {/* Haz superado tu límite de puntos disponibles. */}
        No tienes puntos suficientes para agregar este producto.
      </DlSnackbar>
    </NestedLayout>
  );
};

export default OrdersPage;
