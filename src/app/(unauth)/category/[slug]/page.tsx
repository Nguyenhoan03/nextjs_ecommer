import React from 'react'
import "@/styles/unauth/CategoryProduct.scss";
import Link from 'next/link';
const page = () => {
  return (
    <div>
      <div className="container mt-5 mb-5">
            <div className="d-flex shoplist__filter row justify-content-between reveal">
                <div className="col-12 col-lg-4 ">
                    <div className="header-title">Ecommerce Accesories & Fashion item</div>
                    <div className="header-sub">About 9,620 results (0.62 seconds)</div>
                </div>
                <div className="filters col-12 col-lg-7">
                    <div className="filters-row d-flex flex-wrap align-items-center gap-2">
                        <label>Per Page:</label>
                        <input type="text" style={{width:50,paddingLeft: 10}} />
                        <label className="mx-2">Sort By:</label>
                        <select>
                            <option>Best Match</option>
                            <option>Price Low</option>
                            <option>Price High</option>
                        </select>
                    </div>
                    <div className="filters-viewsearch d-flex align-items-center gap-2">
                        <label>View:</label>
                        <span className="view-icons"><i className="fas fa-th-large"></i> <i className="fas fa-th-list"></i></span>
                        <input className="search-box" type="text" style={{width:170,paddingLeft: 10}} />
                    </div>
                </div>
            </div>


            <section className="grid__product container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 latest-products__item">
                        <div className="latest-products__img-wrapper position-relative">
                            <img src="./images/image 23.png" alt="Comfort Handy Craft" className="latest-products__img img-fluid" />
                            <div className="latest-products__actions">
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-cart-shopping"></i></button>
                                <button className="latest-products__action-btn"><i className="fa-regular fa-heart"></i></button>
                                <button className="latest-products__action-btn"><i
                                        className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                        <div className="latest-products__info">
                            <span className="latest-products__name">Comfort Handy Craft</span>
                            <span className="product-colors">
                                <span className="color-dot color1"></span>
                                <span className="color-dot color2"></span>
                                <span className="color-dot color3"></span>
                            </span>
                            <span className="latest-products__prices">
                                <span className="latest-products__price">$42.00</span>
                                <span className="latest-products__price--old">$65.00</span>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </div>

        <div className="container mt-5 reveal">
            <section className="fade-right reveal brand mt-5 mb-5 ">
                <div className="brand-logos d-flex justify-content-between align-items-center my-5">
                    <Link href="#"><img src="./images/Screenshot 2025-05-20 153723.png" alt="Brand 1"
                            className="brand-logo img-fluid" /></Link>
                    <Link href="#"><img src="./images/Screenshot 2025-05-20 153816.png" alt="Brand 2"
                            className="brand-logo img-fluid" /></Link>
                    <Link href="#"><img src="./images/Screenshot 2025-05-20 153833.png" alt="Brand 3"
                            className="brand-logo img-fluid" /></Link>
                    <Link href="#"><img src="./images/Screenshot 2025-05-20 153852.png" alt="Brand 4"
                            className="brand-logo img-fluid" /></Link>
                    <Link href="#"><img src="./images/Screenshot 2025-05-20 153911.png" alt="Brand 5"
                            className="brand-logo img-fluid" /></Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default page
