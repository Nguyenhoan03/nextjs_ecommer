// app/cart/page.tsx  (client)
'use client';
import React, { useEffect, useState } from "react";
import "@/styles/auth/cart.scss";
import BannerBrand from '@/components/layout/BannerBrand';

interface ProductCartProps {
    id: number;
    name: string;
    slug?: string;
    sale_price: number;
    quantity: number;
    thumbnail?: string;
}

export default function CartPage() {
    const [loading, setLoading] = useState(true);
    const [productCart, setProductCart] = useState<ProductCartProps[]>([]);
    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const fetchCart = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/cart", {
                    credentials: "include",
                    cache: "no-store",
                });

                if (!res.ok) {
                    if (res.status === 401) {
                        setError("Unauthorized. Vui lòng đăng nhập.");
                    } else {
                        setError("Load cart thất bại.");
                    }
                    return;
                }

                const data = await res.json();
                if (cancelled) return;

                setCount(data.count ?? 0);
                setProductCart(Array.isArray(data.productCart) ? data.productCart : []);
            } catch (err) {
                console.error(err);
                setError("Lỗi mạng.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchCart();
        return () => { cancelled = true; };
    }, []);

    if (loading) {
        return (
            <div className="container py-5">
                <div className="skeleton h-6 w-full mb-2 bg-gray-200 rounded" />
                <div className="skeleton h-6 w-full mb-2 bg-gray-200 rounded" />
                <div className="skeleton h-6 w-full mb-2 bg-gray-200 rounded" />
            </div>
        );
    }

    if (error) {
        return <div className="container py-5"><p className="text-danger">{error}</p></div>;
    }

    const updateQuantity = async (id: number, quantity: number) => {
        if (quantity < 1) return;
        try {
            setProductCart(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            );

        } catch (error) {
            console.log(error);
        }
    }

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
                                                {productCart.length === 0 && (
                                                    <tr><td colSpan={4}>Cart is empty</td></tr>
                                                )}

                                                {productCart.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <img src={item.thumbnail ?? "/assets/images/placeholder.png"} alt={item.name} className="cart-img" />
                                                                <div>
                                                                    <div className="cart-product-name">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart-price">${item.sale_price}</td>
                                                        <td className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                            >−</button>

                                                            <span>{item.quantity}</span>

                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                            >+</button>
                                                        </td>

                                                        <td className="cart-total">${(item.sale_price * item.quantity)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>

                            {/* right summary */}
                            <div className="col-lg-4 shopping-cart-section__right">
                                <h5 className="cart-totals-title text-center mb-4">Cart Totals</h5>
                                <div className="cart-totals-box mb-4">
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="cart-totals-label">Subtotals:</span>
                                        <span className="cart-totals-value">
                                            ${productCart.reduce((s, it) => s + it.sale_price * it.quantity, 0)}
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="cart-totals-label">Totals:</span>
                                        <span className="cart-totals-value">${productCart.reduce((s, it) => s + it.price * it.quantity, 0)}</span>
                                    </div>
                                    <div className="mb-3">
                                        <span className="cart-totals-note"><i className="fa fa-check-circle" /> Shipping & taxes calculated at checkout</span>
                                    </div>
                                    <button className="btn cart-btn-checkout w-100">Proceed To Checkout</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <BannerBrand />
        </div>
    );
}
