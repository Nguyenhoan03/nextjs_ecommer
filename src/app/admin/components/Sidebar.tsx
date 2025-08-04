'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <aside className="app-sidebar sticky" id="sidebar">
      <div className="main-sidebar-header bg-white">
        <Link href="/admin/dashboard" className="header-logo">
          <img src="/common/imgs/logo.png" alt="logo" className="desktop-logo" />
          <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-dark" />
          <img src="/common/imgs/logo.png" alt="logo" className="desktop-dark" />
          <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-logo" />
          <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-white" />
          <img src="/common/imgs/logo.png" alt="logo" className="desktop-white" />
        </Link>
      </div>

      <div className="main-sidebar" id="sidebar-scroll">
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>

          <ul className="main-menu">
            <li className="slide__category"><span className="category-name">Main</span></li>

            <li className={`slide has-sub ${isActive('/admin/news') ? 'active open' : ''}`}>
              <a href="#" className={`side-menu__item ${isActive('/admin/news') ? 'active' : ''}`}>
                <svg className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375..." />
                </svg>
                <span className="side-menu__label">Data Homepage</span>
                <i className="ri-arrow-down-s-line side-menu__angle"></i>
              </a>

              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="#">Data Homepage</a>
                </li>
                <li className={`slide ${isActive('/admin/news') ? 'active' : ''}`}>
                  <Link href="/admin/news" className="side-menu__item">News</Link>
                </li>
                <li className={`slide ${isActive('/admin/projects') ? 'active' : ''}`}>
                  <Link href="/admin/projects" className="side-menu__item">Projects</Link>
                </li>
                <li className={`slide ${isActive('/admin/info') ? 'active' : ''}`}>
                  <Link href="/admin/info" className="side-menu__item">Info</Link>
                </li>

                <li className={`slide has-sub ${isActive('/admin/recruits') ? 'active open' : ''}`}>
                  <a href="#" className="side-menu__item">
                    <span className="side-menu__label">Recruits</span>
                    <i className={`ri-arrow-down-s-line side-menu__angle ${isActive('/admin/recruits') ? 'rotate' : ''}`}></i>
                  </a>
                  <ul className="slide-menu child1">
                    <li className="slide">
                      <Link href="/admin/category_recruits" className="side-menu__item">Danh mục</Link>
                    </li>
                    <li className="slide">
                      <Link href="/admin/recruits" className="side-menu__item">Danh sách</Link>
                    </li>
                  </ul>
                </li>

                <li className={`slide ${isActive('/admin/policies') ? 'active' : ''}`}>
                  <Link href="/admin/policies" className="side-menu__item">Policies</Link>
                </li>
              </ul>
            </li>

            <li className="slide has-sub">
              <a href="#" className="side-menu__item">
                <svg className="w-6 h-6 side-menu__icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75..." />
                </svg>
                <span className="side-menu__label">Administrator</span>
              </a>

              <ul className="slide-menu child1">
                <li className="slide side-menu__label1"><a href="#">User & Role</a></li>
                <li className="slide">
                  <Link href="/admin/role" className="side-menu__item">Manager Role</Link>
                </li>
                <li className="slide">
                  <Link href="/admin/user" className="side-menu__item">Manager Account</Link>
                </li>
                <li className="slide">
                  <Link href="/admin/contacts" className="side-menu__item">Manager Contact</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="slide-right" id="slide-right">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
