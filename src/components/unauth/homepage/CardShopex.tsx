import React from 'react'
import Image from 'next/image'
import { BaseCardItem } from '@/types/base-card-item';
interface CardShopexProps {
    item: BaseCardItem;
}
const CardShopex = ({ item }: CardShopexProps) => {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div className="shopex-offer__card">
                <div className="shopex-offer__card-content">
                    <Image
                        src={item.img || "/assets/images/unauth/default_image.jpg"}
                        alt={item.name}
                        className="shopex-offer__card-img"
                        width={300}
                        height={300}
                    />
                    <h3 className="shopex-offer__card-title">{item.name}</h3>
                    <span>{item.desc}</span>
                </div>
            </div>
        </div>
    )
}

export default CardShopex
