'use client';
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/auth/Login.scss"
import { useDebounce } from "@/hooks/useDebounce";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const debounceEmail = useDebounce(email, 200)
  const debouncePassword = useDebounce(password, 200)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: debounceEmail,
          password: debouncePassword,
        }),
      });

      const data = await response.json(); 

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      
      toast.success("Đăng nhập thành công ✅", { autoClose: 2000 });
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);

    } catch (err: any) {
      toast.error("Login failed! " + err.message, { autoClose: 2000 });
    }
  };

  return (
    <div>
      <section className="login-section d-flex align-items-center justify-content-center mt-5">
        <div className="login-box">
          <h2 className="login-title text-center mb-3">Login</h2>
          <p className="login-subtitle text-center mb-4">
            Please login using account detail below.
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control login-input"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control login-input"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <Link href="#" className="login-forgot">
                Forgot your password?
              </Link>
            </div>
            <button type="submit" className="login-btn w-100 mb-3">
              Sign In
            </button>
            <div className="text-center login-bottom-text">
              Don’t have an Account?
              <Link href="/register" className="login-create ms-1">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* ToastContainer cần được render */}
      <ToastContainer position="top-right" />

      <section className="fade-right reveal brand mt-5 mb-5">
        <div className="brand-logos d-flex justify-content-between align-items-center my-5" style={{ width: "85%", margin: "0 auto" }} >
          <Link href="https://fashionlive.com" target="_blank">
            <img src="./images/Screenshot 2025-05-20 153723.png" alt="Fashion Live"
              className="brand-logo img-fluid" />
          </Link>
          <Link href="https://handcrafted.com" target="_blank">
            <img src="./images/Screenshot 2025-05-20 153816.png" alt="Hand Crafted"
              className="brand-logo img-fluid" />
          </Link>
          <Link href="https://mestonix.com" target="_blank">
            <img src="./images/Screenshot 2025-05-20 153833.png" alt="Mestonix" className="brand-logo img-fluid" />
          </Link>
          <Link href="https://sunshine.com" target="_blank">
            <img src="./images/Screenshot 2025-05-20 153852.png" alt="Sunshine" className="brand-logo img-fluid" />
          </Link>
          <Link href="https://pure.com" target="_blank">
            <img src="./images/Screenshot 2025-05-20 153911.png" alt="Pure" className="brand-logo img-fluid" />
          </Link>
        </div>
      </section>
    </div>
  );
}
