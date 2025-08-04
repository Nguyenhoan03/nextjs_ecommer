'use client';
import React, { useState } from "react";
import Link from "next/link";
import "@/styles/auth/Login.scss"
import { useDebounce } from "@/hooks/useDebounce";
import { toast } from 'react-toastify';
import { useRouter, useSearchParams } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "@/redux/store";
import { setUser } from "@/redux/slice/authSlice";
import BannerBrand from "@/components/layout/BannerBrand";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useAppDispatch();
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
      dispatch(setUser(data.user));
      toast.success("Đăng nhập thành công", { autoClose: 2000 });
      setTimeout(() => {
        const redirect = searchParams.get("redirect") || "/";
        router.push(redirect);
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



      <BannerBrand />
    </div>
  );
}
