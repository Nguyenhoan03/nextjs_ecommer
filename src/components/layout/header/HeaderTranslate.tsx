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
    if (!isLoggedIn) return;

    const fetchCartCount = async () => {
      try {
        const res = await fetch("/api/cart", { credentials: "include", cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        dispatch(setCartCount(data.count ?? 0));
      } catch (error) {
        console.error("Error fetching cart count:", error);
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
              <Link href="/account" style={{textDecoration:"none",color:"black"}}>👤 Thông tin tài khoản</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/orders" style={{textDecoration:"none",color:"black"}}>📦 Đơn hàng của tôi</Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <span className="text-black">🚪 Đăng xuất</span>
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
        className="flex items-center text-decoration-none text-white gap-2 hover:text-gray-200 transition pl-5"
      >
        <FaHeart /> <span>Wishlist</span>
      </Link>

      {/* Cart */}
      <Link href="/cart" className="flex text-white items-center gap-2 hover:text-gray-200 transition">
        <Badge badgeContent={count} color="error" className="p-1">
          <FaCartShopping /> 
        </Badge>

      </Link>

    </div>
  );
};

export default HeaderTranslate;
