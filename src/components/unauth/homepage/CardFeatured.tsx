import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping, FaHeart, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { BaseCardItem } from '@/types/base-card-item';

interface CardFeaturedProps {
  item: BaseCardItem;
}
const CardFeatured = ({ item }: CardFeaturedProps) => {
  return (
    <div className="card__featured-product">
      <Link href={`/products/${item.id}/${item.slug}`} className="" prefetch={true}>
      <div className="card-actions">
        <button><FaCartShopping /></button>
        <button><FaHeart /></button>
        <button><FaMagnifyingGlassPlus /></button>
      </div>
      <div className="card__featured__viewdetail">
        <span className="card__featured__nav">View Details</span>
      </div>
      <Image
        src={item.thumbnail ? "/assets/images/unauth/" + item.thumbnail : "/assets/images/unauth/default_image.jpg"}
        alt={item.name}
        className="product-image img-fluid"
        width={300}
        height={300}
      />
      <div className="product-info">
        <h3 className="product-name">{item.name}</h3>
        <div className="color-options">
          <span className="color green"></span>
          <span className="color purple"></span>
          <span className="color blue"></span>
        </div>
        <p className="product-code">Code - {item.brand}</p>
        <p className="product-price">{item.price}</p>
      </div>
      </Link>
    </div>
  );
};

export default CardFeatured;
