import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const logos = [
  { href: "https://fashionlive.com", src: "/assets/images/unauth/Screenshot 2025-05-20 153723.png", alt: "Fashion Live" },
  { href: "https://handcrafted.com", src: "/assets/images/unauth/Screenshot 2025-05-20 153816.png", alt: "Hand Crafted" },
  { href: "https://mestonix.com", src: "/assets/images/unauth/Screenshot 2025-05-20 153833.png", alt: "Mestonix" },
  { href: "https://sunshine.com", src: "/assets/images/unauth/Screenshot 2025-05-20 153852.png", alt: "Sunshine" },
  { href: "https://pure.com", src: "/assets/images/unauth/Screenshot 2025-05-20 153911.png", alt: "Pure" },
];

const BannerBrand = () => {
  return (
    <section className="fade-right reveal brand mt-5 mb-5">
      <div className="brand-logos d-flex justify-content-between align-items-center my-5" style={{ width: "85%", margin: "0 auto" }}>
        {
          logos.map((logo, index) => (
            <Link key={index} href={logo.href} target="_blank">
              <Image src={logo.src} alt={logo.alt} className="brand-logo img-fluid" width={200} height={100} />
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default BannerBrand
