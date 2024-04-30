"use client";
import { DlCardProduct, DlIcon } from '@alicorpdigital/dali-react';
import React from "react";
import { ProductProps } from '@/services/products';
import './styles.css';

type Props = {
  products: ProductProps[];
  onChange: (item: ProductProps) => void;
}

const MyProducts = (props: Props) => {
  const { products, onChange } = props;

  const numberWithCommas = (points: number) => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {products.map((item, index) => {
        return (
          <DlCardProduct
            key={index}
            src={item.image}
            title={item.name}
            className='my-products'
            inputAmountProps={{
              value: item.value,
              onChange: (value) => onChange({ ...item, value }) ,
            }}
          >
            <p className='dl-subtitle-xxs'>{numberWithCommas(item.points)}pts</p>
            {item.unit &&
              <div className='dl-flex dl-items-center dl-gap-1'>
                <DlIcon name='info' color='#E20867' />
                <p className='dl-comp-text-quarck'>{item.unit}</p>
              </div>
            }
          </DlCardProduct>
        )
      })}
    </>
  );
}

export default MyProducts;
