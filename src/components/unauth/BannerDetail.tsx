'use client';
import React from 'react'
import { useParams } from 'next/navigation';
import '@/styles/layout/banner_detail.scss';
import Link from 'next/link';
const BannerDetail = () => {
    const param = useParams();
    const title = decodeURIComponent(param.slug as string);
    return (
        <div className="banner-shoplist">
            <div className="banner-shoplist__content container align-items-center">
                <p className="banner-shoplist__title">{title}</p>
                <ul className="d-flex gap-2 text-align-start">
                    <li><Link href="/" className='text-black text-base font-lato'>Home</Link></li>
                    <li><Link href="#" className='text-black text-base font-lato'>. Page</Link></li>
                    <li><Link href="/category/slug" className="breadcrumb-link">. {title}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BannerDetail
