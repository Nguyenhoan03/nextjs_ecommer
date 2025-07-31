import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { fetcher } from '@/libs/axios';
import BannerSlider from '@/components/unauth/homepage/BannerSlider';
import FeaturedProductClient from '@/components/unauth/homepage/FeaturedProductClient';
import LeatestProductsClient from '@/components/unauth/homepage/LeatestProductsClient';
import CardShopex from '@/components/unauth/homepage/CardShopex';
import Button from '@/components/ui/Button';
import CardTrending from '@/components/unauth/homepage/CardTrending';
import DiscountItemClient from '@/components/unauth/homepage/DiscountItemClient';
import TopCateroryClient from '@/components/unauth/homepage/TopCategoryClient';
import '@/styles/unauth/homepage/CardLeatest.scss';
import '@/styles/unauth/homepage/CardFeatured.scss';
import '@/styles/unauth/homepage/home.scss';
export const metadata: Metadata = {
  title: 'Index page',
  description: 'Description of the index page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};


const shopexOffers = [
  {
    img: '/assets/images/unauth/free-delivery 1.png',
    name: 'Free Delivery',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    img: '/assets/images/unauth/cashback 1.png',
    name: 'Money Back',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    img: '/assets/images/unauth/free-delivery 1.png',
    name: 'Secure Payment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    img: '/assets/images/unauth/cashback 1.png',
    name: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
]

export default async function IndexPage() {
  const apiData = await fetcher<HomeProductResponse>(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/products/home`);
  return (
    <main className="container">
      <div className="banner_slide">
        <BannerSlider />
      </div>

      <FeaturedProductClient dataFeatured={apiData?.featured || []} />

      <LeatestProductsClient dataLeatest={apiData?.leatest || {}} />


      <section className="fade-right reveal mt-5">
        <div className="shopex-offer">
          <h2 className="shopex-offer__title text-center">What Shopex Offer!</h2>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center gx-4 gy-4">
            {shopexOffers.map((offer, idx) => (
              <CardShopex item={offer} key={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="fade-up reveal mt-5 mb-5">
        <div className="image_adv">
          <div className="image_adv__inner">
            <div className="image_adv__img-wrap">
              <img src="/assets/images/unauth/Group 153.png" alt="Advertisement" className="image_adv__img" />
            </div>
            <div className="image_adv__content">
              <h2 className="image_adv__title">Unique Features Of leatest & Trending Poducts</h2>
              <ul className="image_adv__features">
                <li><span className="dot dot--pink"></span> All frames constructed with hardwood solids and
                  laminates</li>
                <li><span className="dot dot--purple"></span> Reinforced with double wood dowels, glue, screw -
                  nails corner blocks and machine nails</li>
                <li><span className="dot dot--green"></span> Arms, backs and seats are structurally reinforced
                </li>
              </ul>
              <div className="image_adv__actions">
                {/* <button className="image_adv__btn">Add To Cart</button> */}
                <Button className="image_adv__btn"><Link href={"/"}> Add To Cart </Link></Button>

                <div className="image_adv__product">
                  <span className="image_adv__product-name">B&B Italian Sofa</span>
                  <span className="image_adv__product-price">$32.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fade-up reveal mt-5 trending-products">
        <h2 className="trending-products__title text-center">Trending Products</h2>
        <div className="trending-product__content container">
          <div className="row justify-content-center">
            {apiData?.trending.map((item, idx) => (
              <CardTrending item={item} key={idx} />
            ))}
          </div>
        </div>
      </section>


      <section className="fade-left reveal mt-5 mb-5">
        <div className="discount-feature container">
          <div className="row discount-feature__content justify-content-center">

            <div className="discount-feature__card col-12 col-md-4 mb-4 mb-md-0" style={{ background: '#FFF6FB' }}>
              <div className="discount-feature__card-body d-flex flex-column flex-md-row align-items-center justify-content-between h-100">
                <div className="discount-feature__info text-md-start text-center">
                  <p className="discount-feature__title">23% off in all products</p>
                  <p style={{ marginTop: '-15px', paddingLeft: '20px' }}>
                    <Link href="#" className="discount-feature__link">Shop Now</Link>
                  </p>
                </div>
                <Image src="/assets/images/unauth/image 1162.png" alt="" width={312} height={173} className="discount-feature__img ms-md-3 mt-3 mt-md-0" />
              </div>
            </div>

            <div className="discount-feature__card col-12 col-md-4 mb-4 mb-md-0" style={{ background: '#F3F6FF' }}>
              <div className="discount-feature__card-body d-flex flex-column flex-md-row align-items-center justify-content-between h-100">
                <div className="discount-feature__info text-md-start text-center">
                  <p className="discount-feature__title">23% off in all products</p>
                  <p style={{ marginTop: '-15px', paddingLeft: '20px' }}>
                    <Link href="#" className="discount-feature__link">View Collection</Link>
                  </p>
                </div>
                <Image src="/assets/images/unauth/image 1161.png" alt="" width={312} height={173} className="discount-feature__img ms-md-3 mt-3 mt-md-0" />
              </div>
            </div>

            <div className="discount-feature__product-list col-12 col-md-3">
              <div className="discount-feature__product d-flex align-items-center mb-4">
                <Image src="/assets/images/unauth/image 19.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
              <div className="discount-feature__product d-flex align-items-center mb-4">
                <Image src="/assets/images/unauth/image 28.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
              <div className="discount-feature__product d-flex align-items-center">
                <Image src="/assets/images/unauth/image 30.png" alt="" width={50} height={50} className="discount-feature__product-img me-3" />
                <div>
                  <div className="discount-feature__product-name">Executive Seat chair</div>
                  <div className="discount-feature__product-price">$32.00</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      <DiscountItemClient />


      <TopCateroryClient />


      <section className="fade-left reveal img-banner mt-5 mb-5">
        <div className="img-banner__content">
          <h2 className="img-banner__title">Get Leatest Update By Subscribe
            0ur Newslater</h2>
          <Button className="img-banner__btn">
            <Link href="" className="text-white text-decoration-none">Shop now</Link>
          </Button>
        </div>
      </section>

      <section className="fade-right reveal brand mt-5 mb-5">
        <div className="brand-logos d-flex justify-content-between align-items-center my-5">
          <Link href="https://fashionlive.com" target="_blank">
            <img src="./assets/images/unauth/Screenshot 2025-05-20 153723.png" alt="Fashion Live"
              className="brand-logo img-fluid" />
          </Link>
          <Link href="https://handcrafted.com" target="_blank">
            <img src="./assets/images/unauth/Screenshot 2025-05-20 153816.png" alt="Hand Crafted"
              className="brand-logo img-fluid" />
          </Link>
          <Link href="https://mestonix.com" target="_blank">
            <img src="./assets/images/unauth/Screenshot 2025-05-20 153833.png" alt="Mestonix" className="brand-logo img-fluid" />
          </Link>
          <Link href="https://sunshine.com" target="_blank">
            <img src="./assets/images/unauth/Screenshot 2025-05-20 153852.png" alt="Sunshine" className="brand-logo img-fluid" />
          </Link>
          <Link href="https://pure.com" target="_blank">
            <img src="./assets/images/unauth/Screenshot 2025-05-20 153911.png" alt="Pure" className="brand-logo img-fluid" />
          </Link>
        </div>
      </section>


      <section className="fade-up reveal leatest-blog mt-5 mb-5">
        <h2 className="leatest-blog__title">Leatest Blog</h2>
        <div className="leatest-blog__list">
          <div className="leatest-blog__item">
            <Link href="/blog/1" className="leatest-blog__link">
              <Image src="/assets/images/unauth/Frame 4 (1).png" alt="Blog 1" className="leatest-blog__img" width={350} height={200} />
              <div className="leatest-blog__info">
                <div className="leatest-blog__meta">
                  <span className="leatest-blog__author">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector.png" alt="" width={16} height={16} />
                    </span> SaberAli
                  </span>
                  <span className="leatest-blog__date">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector (1).png" alt="" width={16} height={16} />
                    </span> 21 August,2020
                  </span>
                </div>
                <div className="leatest-blog__name">Top esssential Trends in 2021</div>
                <div className="leatest-blog__desc">
                  More off this less hello samlande lied much over tightly circa horse taped mighty
                </div>
                <span className="leatest-blog__readmore">Read More</span>
              </div>
            </Link>
          </div>

          <div className="leatest-blog__item">
            <Link href="/blog/1" className="leatest-blog__link">
              <Image src="/assets/images/unauth/Frame 3 (1).png" alt="Blog 2" className="leatest-blog__img" width={350} height={200} />
              <div className="leatest-blog__info">
                <div className="leatest-blog__meta">
                  <span className="leatest-blog__author">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector.png" alt="" width={16} height={16} />
                    </span> Surfauxion
                  </span>
                  <span className="leatest-blog__date">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector (1).png" alt="" width={16} height={16} />
                    </span> 21 August,2020
                  </span>
                </div>
                <div className="leatest-blog__name">Top essential trends in 2021</div>
                <div className="leatest-blog__desc">
                  More off this less hello samlande lied much over tightly circa horse taped mighty
                </div>
                <span className="leatest-blog__readmore">Read More</span>
              </div>
            </Link>
          </div>
          <div className="leatest-blog__item">
            <Link href="/blog/1" className="leatest-blog__link">
              <Image src="/assets/images/unauth/Frame 3.png" alt="Blog 3" className="leatest-blog__img" width={350} height={200} />
              <div className="leatest-blog__info">
                <div className="leatest-blog__meta">
                  <span className="leatest-blog__author">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector.png" alt="" width={16} height={16} />
                    </span> SaberAli
                  </span>
                  <span className="leatest-blog__date">
                    <span className="icon">
                      <Image src="/assets/images/unauth/Vector (1).png" alt="" width={16} height={16} />
                    </span> 21 August,2020
                  </span>
                </div>
                <div className="leatest-blog__name">Top esssential Trends in 2021</div>
                <div className="leatest-blog__desc">
                  More off this less hello samlande lied much over tightly circa horse taped mighty
                </div>
                <span className="leatest-blog__readmore">Read More</span>
              </div>
            </Link>
          </div>

        </div>
      </section>
      {/* {showBackToTop && (
        <Button
          id="backToTopBtn"
          className="back-to-top"
          aria-label="Lên đầu trang"
          onClick={handleBackToTop}
        >
          <FaArrowUp />
        </Button>
      )} */}
    </main>
  );
}
