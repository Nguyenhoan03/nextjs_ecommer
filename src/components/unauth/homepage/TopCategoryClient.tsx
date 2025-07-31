'use client'
import { topCategoriesSwiperConfig } from '@/config/SwiperConfig';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CardTopCategory from './CardTopCategory';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const topCategories = [
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  {
    img: '/assets/images/unauth/image 3.png',
    name: 'Mini LCW Chair',
    price: '$56.00',
    link: '#',
  },
  // ...thêm các category khác nếu muốn
];

const TopCateroryClient = () => {
  return (
    <section  className="fade-up reveal top-categories mt-5 mb-5">
        <h2 className="top-categories__title text-center mb-4">Top Categories</h2>
        <div className="container top-category__swiper mt-5">
          <Swiper {...topCategoriesSwiperConfig}>
            {topCategories.map((cat, idx) => (
              <SwiperSlide key={idx}>
                <CardTopCategory item={cat} />
              </SwiperSlide>
            ))}
            <div className="swiper-pagination swiper-pagination__topcategories"></div>
          </Swiper>
        </div>
      </section>
  )
}

export default TopCateroryClient
