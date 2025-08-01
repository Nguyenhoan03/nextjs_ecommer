"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "@/styles/admin/Sidebar.scss"; 
import {
  RiArrowDownSLine,
  RiDashboardLine,
  RiBox3Line,
  RiFileList2Line,
  RiAdminLine,
} from "react-icons/ri";

export default function Sidebar() {
  const pathname = usePathname();
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const routes = [
    { name: "Dashboard", path: "dashboard", icon: <RiDashboardLine /> },
    { name: "Products", path: "products", icon: <RiBox3Line /> },
    { name: "Orders", path: "orders", icon: <RiFileList2Line /> },
  ];

  const toggleAdminMenu = () => setIsAdminOpen(!isAdminOpen);

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Admin</div>

      <ul className="sidebar__menu">
        {routes.map((route, index) => (
          <li key={index}>
            <Link
              href={`/admin/${route.path}`}
              className={`sidebar__link ${pathname.includes(route.path) ? "active" : ""}`}
            >
              <span className="sidebar__icon">{route.icon}</span>
              <span>{route.name}</span>
            </Link>
          </li>
        ))}

        <li className="sidebar__dropdown">
          <button className="sidebar__dropdown-toggle" onClick={toggleAdminMenu}>
            <div className="sidebar__dropdown-label">
              <RiAdminLine className="sidebar__icon" />
              <span>Administrator</span>
            </div>
            <RiArrowDownSLine
              className={`sidebar__arrow ${isAdminOpen ? "open" : ""}`}
            />
          </button>

          {isAdminOpen && (
            <ul className="sidebar__submenu">
              <li className="sidebar__sub-label">User & Role</li>
              <li>
                <Link href="/admin/roles" className="sidebar__sublink">
                  Manager Role
                </Link>
              </li>
              <li>
                <Link href="/admin/users" className="sidebar__sublink">
                  Manager Account
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
