"use client";

import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classNames from "classnames";
import './styles.css';

interface BannerPointsProps {
  title: string;
  subtitle: string;
  showPoints: boolean;
}

export default function BannerPoints(props: BannerPointsProps) {
  const {
    title,
    subtitle,
    showPoints,
  } = props;
  const { user } = useContext(AuthContext);

  return (
    <section
      className='banner-points dl-mb-8 dl-relative'
      // className="dl-flex xl:dl-h-80 dl-mb-6 md:dl-mb-12"
    >
      <div
        className='
          dl-container
          dl-mx-auto
          dl-flex
          dl-items-center
          dl-justify-between
        '
      >
        <div className='dl-flex dl-items-center dl-gap-20'>
          <div>
            <span className='dl-subtitle-xxs'>Puntos disponibles</span>
            <p className='dl-title-md'>1,785 pts</p>
          </div>
          <Image
            alt="stars"
            width={84}
            height={52}
            src="/home/estrellas.svg"
          />
        </div>
        <div
          className='
            dl-w-px
            dl-h-20
            dl-bg-white
          '
        />
        <p className='dl-mr-24'>
          Canjea productos con los puntos acumulados por tus compras.<br />
          <strong>Tus puntos se actualizan cada 48 horas.</strong>
        </p>
      </div>

      <div
        style={{ transform: 'translateY(-50%)'}}
        className='
          dl-absolute
          dl-top-2/4
          dl-right-0
        '
      >
        <Image
          alt="stars"
          width={336}
          height={123}
          src="/home/stars-banner-points.svg"
        />
      </div>
    </section>
  );
}
