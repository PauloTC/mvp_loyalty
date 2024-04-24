"use client";
import PrincipalBanner from "@/components/banner";
import NestedLayout from "@/components/layout";
import MyOrders from "@/components/my-orders";
import { DlCardProduct, DlIcon } from "@alicorpdigital/dali-react";

const items = [
  {
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    children: (
      <>
        <p className='dl-subtitle-xxs'>808pts</p>
        <div className='dl-flex dl-items-center dl-gap-1'>
          <DlIcon name='info' color='#E20867' />
          <p className='dl-comp-text-quarck'>12 ud es 1 caja</p>
        </div>
      </>
    )
  },
  {
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    children: (
      <>
        <p className='dl-subtitle-xxs'>808pts</p>
        <div className='dl-flex dl-items-center dl-gap-1'>
          <DlIcon name='info' color='#E20867' />
          <p className='dl-comp-text-quarck'>12 ud es 1 caja</p>
        </div>
      </>
    )
  },
  {
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    children: (
      <>
        <p className='dl-subtitle-xxs'>808pts</p>
        <div className='dl-flex dl-items-center dl-gap-1'>
          <DlIcon name='info' color='#E20867' />
          <p className='dl-co mp-text-quarck'>12 ud es 1 caja</p>
        </div>
      </>
    )
  },
  {
    title: 'Mejorador de masas Nicolini 5Kg',
    src: '/products/nicolini.png',
    children: (
      <>
        <p className='dl-subtitle-xxs'>808pts</p>
        <div className='dl-flex dl-items-center dl-gap-1'>
          <DlIcon name='info' color='#E20867' />
          <p className='dl-comp-text-quarck'>12 ud es 1 caja</p>
        </div>
      </>
    )
  }
]

const OrdersPage = () => {
  return (
    <NestedLayout>
      <PrincipalBanner />
      <section className='dl-flex dl-mb-16'>
        <div className="dl-container dl-grid dl-grid-cols-1 lg:dl-grid-cols-4 xl:dl-grid-cols-5 lg:dl-gap-14 dl-mx-auto">
          <div className='dl-gap-4 dl-grid dl-grid-cols-2 sm:dl-grid-cols-3 xl:dl-grid-cols-4 lg:dl-col-span-2 xl:dl-col-span-3'>
            {items.map(item => {
              return (
                <DlCardProduct key={item.title} {...item} />
              )
            })}
          </div>
          <div className='dl-hidden lg:dl-grid lg:dl-col-span-2'>
            <MyOrders />
          </div>
        </div>
      </section>
    </NestedLayout>
  );
};

export default OrdersPage;
