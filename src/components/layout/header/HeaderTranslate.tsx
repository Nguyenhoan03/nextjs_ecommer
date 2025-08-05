"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser, FaHeart, FaCartShopping, FaChevronDown } from "react-icons/fa6";
import { Menu, MenuItem, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { setUser, logout } from "@/redux/slice/authSlice";
import { Badge } from "@mui/material";
import { setCartCount } from "@/redux/slice/cartSlice";
import { fetcher } from "@/libs/axios";
const HeaderTranslate = () => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { count } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store", credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          dispatch(setUser(data));
        }
      } catch {
        dispatch(logout());
      }
    };
    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    const fetchCartCount = async () => {
      if (!isLoggedIn) return;
      try {
        const res = await fetcher<number>(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/cart`, {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJubWhAZ21haWwuY29tIiwiaWF0IjoxNzU0NDAzMDQxLCJleHAiOjE3NTQ0ODk0NDF9.Ph2hSwum9NoDlq-8StJl4S9zaTyo0RCJlxhRN52b0Ms`,
          },
          credentials: "include",
        });
        if (res) {
          dispatch(setCartCount(res));
        }
      } catch (error: any) {
        console.error("Error fetching cart count:", error);
        if (error instanceof Error) {
          console.error("Error message:", error.message);
        }
      }
    };

    fetchCartCount();
  }, [isLoggedIn, dispatch]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <div className="flex items-center gap-6 text-white text-sm headerTranslate">
      {/* User section */}
      {isLoggedIn && user ? (
        <>
          <Tooltip title="Thông tin tài khoản">
            <IconButton
              onClick={handleClick}
              style={{ color: "white" }}
              className="relative align-center justify-center"
            >
              <FaUser />
              <span className="ml-2 username-text">
                {user.name} <FaChevronDown className="ml-1 text-xs" />
              </span>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            className="headerTranslate__menuItem"
          >
            <MenuItem onClick={handleClose}>
              <Link href="/account">👤 Thông tin tài khoản</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/orders">📦 Đơn hàng của tôi</Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <span className="text-red-500">🚪 Đăng xuất</span>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Link href="/login" className="flex items-center gap-2 hover:text-gray-200 transition">
          <FaUser /> <span>Đăng nhập</span>
        </Link>
      )}

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className="flex items-center gap-2 hover:text-gray-200 transition pl-5"
      >
        <FaHeart /> <span>Wishlist</span>
      </Link>

      {/* Cart */}
      <Link href="/cart" className="flex items-center gap-2 hover:text-gray-200 transition">
        <Badge badgeContent={count} color="error">
          <FaCartShopping /> {count}
        </Badge>
        <span>Cart</span>
      </Link>

    </div>
  );
};

export default HeaderTranslate;
