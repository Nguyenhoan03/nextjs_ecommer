import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BaseCardItem } from '@/types/base-card-item';

interface CardLeatestProps {
  item: BaseCardItem;
}

const CardLeatest = ({ item }: CardLeatestProps) => {
  return (
    <div className="latest-products__item">
      <Link href={`/products/${item.name}`} className="latest-products__link">
        <div className="latest-products__img-wrapper position-relative">
          <Image
            src={item.thumbnail ? "/assets/images/unauth/" + item.thumbnail : "/assets/images/unauth/default_image.jpg"}
            alt={item.name}
            width={300}
            height={270}
            className="latest-products__img"
          />
          {item.badge && <span className="latest-products__badge">{item.badge}</span>}
          <div className="latest-products__actions">
            <button className="latest-products__action-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button className="latest-products__action-btn">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="latest-products__action-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="latest-products__info">
          <span className="latest-products__name">{item.name}</span>
          <span className="latest-products__prices">
            <span className="latest-products__price">{item.salePrice}</span>
            <span className="latest-products__price--old">{item.price}</span>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CardLeatest;