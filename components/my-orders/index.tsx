"use client";
import { DlCheckOut } from '@alicorpdigital/dali-react';
import React from "react";
import Image from "next/image";
import './styles.css';

const MyOrders = () => {
  const itemsDone = [
    {
      title: 'Levadura instantánea Nicolini 500g',
      src: '/products/nicolini.png',
      children: <p className='dl-subtitle-xxs'>808pts</p>
    },
    {
      title: 'Mejorador de masas Nicolini 5Kg',
      src: '/products/nicolini.png',
      children: <p className='dl-subtitle-xxs'>808pts</p>
    },
    {
      title: 'Mejorador de masas Nicolini 5Kg',
      src: '/products/nicolini.png',
      children: <p className='dl-subtitle-xxs'>808pts</p>
    },
    {
      title: 'Mejorador de masas Nicolini 5Kg',
      src: '/products/nicolini.png',
      children: <p className='dl-subtitle-xxs'>808pts</p>
    }
  ]

  return (
    <div className="my-orders dl-border dl-rounded-2xl dl-pt-4 dl-pb-10 dl-flex dl-flex-col dl-px-6">
      <h4 className="dl-text-2xl dl-font-semibold dl-mb-5">Mis pedidos</h4>

      {/* <div className='dl-flex dl-flex-col dl-gap-4'>
        {itemsDone.map(item => {
          return (
            <DlCheckOut key={item.title} {...item} />
          )
        })}
      </div> */}
      <div className='dl-relative dl-h-36 dl-rounded-lg dl-overflow-hidden'>
        <Image
          alt="empty_order"
          fill
          style={{ objectFit: 'cover' }}
          src="/orders/empty_order.svg"
        />
      </div>
      <p className="dl-self-center dl-mt-7.5 dl-text-base dl-leading-8">
        ¡Agrega tus productos!
      </p>
    </div>
  );
}

export default MyOrders;
