"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetcher } from "@/libs/axios";
import BannerBrand from "@/components/layout/BannerBrand";

interface RegisterResponse {
    name: string;
    email: string;
    password: string;
    phone: number;
    address?: string;
}

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password || !phone) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        try {
            const res = await fetcher<RegisterResponse>(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: { name, email, password, phone, address },
            });

            if (res) {
                toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
            }
        } catch (error: any) {
            toast.error(error.message || "Có lỗi xảy ra, vui lòng thử lại");
        }
    };

    return (
        <div>
            <section className="register-section d-flex align-items-center justify-content-center mt-5">
                <div className="register-box">
                    <h2 className="register-title text-center mb-3">Register</h2>
                    <p className="register-subtitle text-center mb-4">
                        Please fill in the information below to create an account.
                    </p>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control register-input"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control register-input"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control register-input"
                                placeholder="Password"
                                required
                                minLength={6}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control register-input"
                                placeholder="Phone Number"
                                required
                                pattern="\d{10,15}"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control register-input"
                                placeholder="Address (optional)"
                            />
                        </div>
                        <button type="submit" className="btn login-btn w-100 mb-3 border-t-pink-800">
                            Create Account
                        </button>
                        <div className="text-center register-bottom-text">
                            Already have an account?
                            <Link href="/login" className="login-create ms-1" prefetch={true}>
                                Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </section>

          
            <BannerBrand />
        </div>
    );
};

export default RegisterPage;
