"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Menu, MenuItem, IconButton, Tooltip } from "@mui/material";

type User = {
  id: number;
  name: string;
  email: string;
};

const HeaderTranslate = () => {
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-6 text-white text-sm">
      {/* User section */}
      {user ? (
        <>
          <Tooltip title="Thông tin tài khoản">
            <IconButton onClick={handleClick} style={{ color: "white" }} className="relative">
              <FaUser />
              <span className="ml-2 username-text">{user.name}</span>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/account">👤 Thông tin tài khoản</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/orders">📦 Đơn hàng của tôi</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/logout" className="text-red-500">🚪 Đăng xuất</Link>
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
        className="flex items-center gap-2 hover:text-gray-200 transition"
      >
        <FaHeart /> <span>Wishlist</span>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className="flex items-center gap-2 hover:text-gray-200 transition"
      >
        <FaCartShopping /> <span>Cart</span>
      </Link>
    </div>
  );
};

export default HeaderTranslate;
