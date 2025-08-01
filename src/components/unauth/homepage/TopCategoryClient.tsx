'use client'
import { topCategoriesSwiperConfig } from '@/config/SwiperConfig';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CardTopCategory from './CardTopCategory';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Prop {
  dataTopCategory: HomeProductResponse['topcategory'];
}

const TopCateroryClient = ({dataTopCategory}: Prop) => {
  return (
    <section  className="fade-up reveal top-categories mt-5 mb-5">
        <h2 className="top-categories__title text-center mb-4">Top Categories</h2>
        <div className="container top-category__swiper mt-5">
          <Swiper {...topCategoriesSwiperConfig}>
            {dataTopCategory.map((cat, idx) => (
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
