"use client";
import PrincipalBanner from "@/components/banner";
import NestedLayout from "@/components/layout";
import MyOrders from "@/components/my-orders";
import { DlCardProduct, DlIcon, DlSnackbar } from "@alicorpdigital/dali-react";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../contexts/AuthContext";
import { useRouter } from 'next/navigation';

type ItemProp = {
  id: string;
  title: string;
  src: string;
  value: number;
  points: number;
  information?: string;
}

const items: ItemProp[] = [
  {
    id: 'item1',
    value: 0,
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    points: 880,
    information: '12 ud es 1 caja',
  },
  {
    id: 'item2',
    value: 0,
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    points: 1200,
    information: '12 ud es 1 caja',
  },
  {
    id: 'item3',
    value: 0,
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    points: 600,
    information: '12 ud es 1 caja',
  },
  {
    id: 'item4',
    value: 0,
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    points: 560,
    information: '12 ud es 1 caja',
  }
]

const OrdersPage = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [itemList, setItemList] = useState<ItemProp[]>(items);
  const [selectedItems, setSelectedItems] = useState<ItemProp[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleTotalAmount = () => {
    let total = 0;
    itemList.forEach(item => {
      total += (item.value * item.points);
    })
    return total;
  }

  const handleSelectItem = (item: ItemProp) => {
    let items = [...itemList];
    let total = 0;

    items = items.map(i => {
      if (i.id === item.id) {
        return {
          ...i,
          value: item.value
        }
      }
      return i;
    })

    items.forEach(item => {
      total += (item.value * item.points);
    })

    if (total > user.score) {
      setOpenSnackbar(true);
      items = items.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            value: item.value - 1
          }
        }
        return i;
      })
    }

    setItemList(items);
  }

  useEffect(() => {
    const items = itemList.filter(item => item.value > 0);
    setSelectedItems(items);
  }, [itemList]);

  return (
    <NestedLayout hideOnMobile={true}>
      <div className="dl-hidden lg:dl-block">
        <PrincipalBanner />
      </div>
      <section
        className='dl-flex dl-items-center dl-p-6 dl-subtitle-xxs dl-gap-2 lg:dl-hidden'
        onClick={() => router.push('/home')}
      >
        <DlIcon name='arrow-left' color='#EC3A0E' />
        Canjea tus puntos
      </section>
      <section className='dl-flex dl-mb-16'>
        <div className="dl-container dl-grid dl-grid-cols-1 lg:dl-grid-cols-4 xl:dl-grid-cols-5 lg:dl-gap-14 xl:dl-gap-20 dl-mx-auto">
          <div className='dl-gap-2 dl-grid dl-grid-cols-2 sm:dl-grid-cols-3 xl:dl-grid-cols-4 lg:dl-col-span-2 xl:dl-col-span-3 dl-pb-12 lg:dl-pb-0'>
            {itemList.map((item, index) => {
              return (
                <DlCardProduct
                  key={index}
                  {...item}
                  inputAmountProps={{
                    value: item.value,
                    onChange: (value) => {
                      handleSelectItem({ ...item, value })
                    },
                  }}
                >
                  <p className='dl-subtitle-xxs'>{item.points}pts</p>
                  <div className='dl-flex dl-items-center dl-gap-1'>
                    <DlIcon name='info' color='#E20867' />
                    <p className='dl-comp-text-quarck'>{item.information}</p>
                  </div>
                </DlCardProduct>
              )
            })}
          </div>
          <div className='lg:dl-grid lg:dl-col-span-2'>
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
        Haz superado tu límite de puntos disponibles.
      </DlSnackbar>
    </NestedLayout>
  );
};

export default OrdersPage;
