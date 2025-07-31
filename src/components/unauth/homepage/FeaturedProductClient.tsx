'use client'
import { featuredSwiperConfig } from '@/config/SwiperConfig';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardFeatured from './CardFeatured';
import "@/styles/unauth/homepage/CardFeatured.scss";
type Props = {
  dataFeatured: Product[];
};
const FeaturedProductClient = ({ dataFeatured }: Props) => {
  return (
    <div className="featured_product mt-5">
      <h2 className="text-center mb-4 featured-products__title">Featured Products</h2>
      <Swiper {...featuredSwiperConfig}>
        {dataFeatured.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CardFeatured item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProductClient;