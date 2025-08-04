import Link from 'next/link'
import React from 'react'
import '@/styles/unauth/contact.scss'
import Image from 'next/image'
import BannerBrand from "@/components/layout/BannerBrand";
const page = () => {
  return (
    <div>
      <section className="container mt-5 info__contacts">
            <div className="row info__contact">
                <div className="col-sm-6">
                    <h2 className="info__contact__title">Information About us</h2>
                    <p className="info__contact__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                        neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget
                        dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div>
                        <span className="info__contact__color"></span>
                        <span className="info__contact__color"></span>
                        <span className="info__contact__color"></span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h2 className="info__contact__title">Contact Way</h2>
                    <div className="info__contact__ways">
                        <div className="info__contact__row">
                            <div className="info__contact__way">
                                <span className="info__contact__icon icon-purple"></span>
                                <div style={{marginTop: -10}}>
                                    <div className="info__contact__way-title">Tel: 877-67-88-99</div>
                                    <div className="info__contact__way-content">E-Mail: shop@store.com</div>
                                </div>
                            </div>
                            <div className="info__contact__way">
                                <span className="info__contact__icon icon-pink"></span>
                                <div style={{marginTop: -10}}>
                                    <div className="info__contact__way-title">Support Forum</div>
                                    <div className="info__contact__way-content">For over 24hr</div>
                                </div>
                            </div>
                        </div>
                        <div className="info__contact__row">
                            <div className="info__contact__way">
                                <span className="info__contact__icon icon-orange"></span>
                                <div style={{marginTop: -10}}>
                                    <div className="info__contact__way-title">Support Forum</div>
                                    <div className="info__contact__way-content">For over 24hr</div>
                                </div>
                            </div>
                            <div className="info__contact__way">
                                <span className="info__contact__icon icon-green"></span>
                                <div style={{marginTop: -10}}>
                                    <div className="info__contact__way-title">Free standard shipping</div>
                                    <div className="info__contact__way-content">on all orders.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="contact-touch-section container my-5">
            <div className="row align-items-center justify-content-center">
              
                <div className="col-lg-6 col-md-12 mb-4">
                    <h2 className="contact-touch-title">Get In Touch</h2>
                    <p className="contact-touch-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet
                        erat vitae eget dolor los vitae lobortis quis bibendum quam.
                    </p>
                    <form className="contact-touch-form">
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Your Name*" required />
                            </div>
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Your E-mail" required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Subject*" required />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows="4" placeholder="Type Your Message*"
                                required></textarea>
                        </div>
                        <button type="submit" className="btn contact-touch-btn"><Link href=""> Send Mail </Link></button>
                    </form>
                </div>
                
                <div className="col-lg-6 col-md-12 text-center">
                    <Image src="/assets/images/unauth/g10.png" alt="Contact Illustration" width={500} height={500} className="img-fluid contact-touch-img" />
                </div>
            </div>
        </section>


        
          <BannerBrand />
    </div>
  )
}

export default page
