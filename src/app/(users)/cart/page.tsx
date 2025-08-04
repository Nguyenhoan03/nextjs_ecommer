'use client'
import React from 'react'
import "@/styles/auth/cart.scss"
import BannerBrand from '@/components/layout/BannerBrand'
const page = () => {
    
    return (
        <div>
            <section>
                    <div className="shopping-cart-section py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <form>
                                        <div className="table-responsive">
                                            <table className="table align-middle">
                                                <thead>
                                                    <tr>
                                                        <th className="fw-bold cart-title">Product</th>
                                                        <th className="fw-bold cart-title">Price</th>
                                                        <th className="fw-bold cart-title">Quantity</th>
                                                        <th className="fw-bold cart-title">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 34.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Ur diam consequat
                                                                        </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 35.png" alt="Product"
                                                                    className="cart-img" />
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Vel faucibus
                                                                            posuere </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 36.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Ac vitae
                                                                            vestibulum </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 34.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Elit massa diam
                                                                        </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 35.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Proin pharetra
                                                                            elementum </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 36.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Ac vitae
                                                                            vestibulum </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src="./images/Rectangle 36.png" alt="Product"
                                                                    className="cart-img"/>
                                                                    <div>
                                                                        <div className="cart-product-name"><a href=""> Ac vitae
                                                                            vestibulum </a></div>
                                                                        <div className="cart-product-desc">Color: Brown</div>
                                                                        <div className="cart-product-desc">Size: XL</div>
                                                                    </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">$32.00</td>
                                                        <td>
                                                            <div className="cart-qty-group">
                                                                <button type="button" className="qty-btn qty-btn-minus">-</button>
                                                                <span className="cart-qty-value">1</span>
                                                                <button type="button" className="qty-btn qty-btn-plus">+</button>
                                                            </div>
                                                        </td>
                                                        <td className="cart-total">£32.00 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-flex justify-content-between mt-4">
                                            <button type="button" className="btn cart-btn-update">Update Cart</button>
                                            <button type="button" className="btn cart-btn-clear">Clear Cart</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 shopping-cart-section__right">
                                    <h5 className="cart-totals-title text-center mb-4">Cart Totals</h5>
                                    <div className="cart-totals-box mb-4">
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="cart-totals-label">Subtotals:</span>
                                            <span className="cart-totals-value">£219.00</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                            <span className="cart-totals-label">Totals:</span>
                                            <span className="cart-totals-value">£325.00</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="cart-totals-note"><i className="fa fa-check-circle"></i> Shipping &amp;
                                                taxes calculated at checkout</span>
                                        </div>
                                        <button className="btn cart-btn-checkout w-100">Proceed To Checkout</button>
                                    </div>
                                    <h6 className="cart-calc-title text-center mb-4">Calculate Shopping</h6>
                                    <div className="cart-calc-box">
                                        <input type="text" className="form-control mb-2" placeholder="Bangladesh"/>
                                            <input type="text" className="form-control mb-2" placeholder="Mirpur Dhaka - 1200"/>
                                                <input type="text" className="form-control mb-3" placeholder="Postal Code"/>
                                                    <button className="btn cart-btn-calc w-100">Calculate Shipping</button>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                       <BannerBrand />
                    </div>
                    )
}

                    export default page
