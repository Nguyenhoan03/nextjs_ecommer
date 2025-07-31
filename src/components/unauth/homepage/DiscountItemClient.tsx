'use client'
import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import TabsCustom from './TabsCustom'
import Link from 'next/link'
const DiscountItemClient = () => {
    const [discountTab, setDiscountTab] = useState<number>(0);
    const handleDiscountTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setDiscountTab(newValue);
    };

    return (
        <section className="fade-right reveal discount-item mt-5 mb-5">
            <h2 className="discount-item__title text-center mb-4">Discount Item</h2>
            <div className="discount-item__tabs d-flex justify-content-center align-items-center gap-4">
                <TabsCustom
                    tabs={["Wood Chair", "Plastic Chair", "Sofa Collection"]}
                    value={discountTab}
                    onChange={handleDiscountTabChange}
                    className="discount-item__tabs d-flex justify-content-center align-items-center gap-4 mb-4"
                />
            </div>
            <div className="discount-item__content-wrapper">

                <div className="discount-item__content discount-item__content--active" id="discount-tab-wood">
                    <div className="discount-item__info">
                        <h3 className="discount-item__big-title">20% Discount Of All Products</h3>
                        <div className="discount-item__product-name">Eams Sofa Compact</div>
                        <div className="discount-item__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec,
                            bibendum condimentum.
                        </div>
                        <div className="discount-item__features">
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Material expose like metals</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Clear lines and geometric figures</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Simple neutral colours.</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Material expose like metals</span>
                            </div>
                        </div>
                        <Button className="discount-item__btn"><Link href="" > Shop Now </Link></Button>
                    </div>
                    <div className="discount-item__img-wrapper">
                        <div className="discount-item__img-bg">
                            <img src="./assets/images/unauth/Group 154 (1).png" alt="" className="discount-item__img" />
                        </div>
                    </div>
                </div>

                <div className="discount-item__content" id="discount-tab-plastic">
                    <div className="discount-item__info">
                        <h3 className="discount-item__big-title">15% Discount On Plastic Chairs</h3>
                        <div className="discount-item__product-name">Modern Plastic Chair</div>
                        <div className="discount-item__desc">
                            Plastic chairs with modern design, lightweight and durable for your home.
                        </div>
                        <div className="discount-item__features">
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>High quality plastic</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Easy to clean</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Various colors</span>
                            </div>
                        </div>
                        <Button className="discount-item__btn"><Link href="" > Shop Now </Link></Button>

                    </div>
                    <div className="discount-item__img-wrapper">
                        <div className="discount-item__img-bg">
                            <img src="./assets/images/unauth/Component 3.png" style={{ borderRadius: "50%" }} alt=""
                                className="discount-item__img" />
                        </div>
                    </div>
                </div>

                <div className="discount-item__content" id="discount-tab-sofa">
                    <div className="discount-item__info">
                        <h3 className="discount-item__big-title">30% Discount On Sofa Collection</h3>
                        <div className="discount-item__product-name">Luxury Sofa Set</div>
                        <div className="discount-item__desc">
                            Upgrade your living room with our premium sofa collection at a great price.
                        </div>
                        <div className="discount-item__features">
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Premium fabric</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Modern design</span>
                            </div>
                            <div className="discount-item__feature">
                                <span className="discount-item__check"><i className="fa-solid fa-check"></i></span>
                                <span>Comfortable seating</span>
                            </div>
                        </div>
                        <Button className="discount-item__btn"><Link href="" > Shop Now </Link></Button>
                    </div>
                    <div className="discount-item__img-wrapper">
                        <div className="discount-item__img-bg">
                            <img src="./assets/images/unauth/Component 4.png" style={{ borderRadius: "50%" }} alt=""
                                className="discount-item__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscountItemClient
