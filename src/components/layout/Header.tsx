import React from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass, FaChevronDown, FaEnvelope, FaPhone, FaBars } from "react-icons/fa6";
import HeaderTranslate from '@/components/layout/header/HeaderTranslate';
import "@/styles/layout/_header.scss";

const Header = () => {
  return (
    <header>
      <div className="top-bar d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center top-bar-content">
            <div className="col-md-6 d-flex align-items-center top-bar-left gap-3">
              <span><FaEnvelope /> mhhasanul@gmail.com</span>
              <span><FaPhone /> (12345)67890</span>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end align-items-center top-bar-right gap-3">
              <HeaderTranslate />
            </div>
          </div>
        </div>
      </div>

      <div className="top-bar-mobile d-flex d-lg-none justify-content-between align-items-center px-3 py-1"
        style={{ background: "#a259d9", color: "#fff", fontSize: "15px" }}>
        <span><FaEnvelope /> nmh@gmail.com </span>
        <span className="span_phonenumber"><FaPhone /> (12345)67890</span>
        <div className="col-md-6 d-flex justify-content-md-end align-items-center top-bar-right gap-3">
          <HeaderTranslate />
        </div>
      </div>

      <div className="nav-bar">
        <div className="container">
          <div className="row mobile_setting align-items-center nav-bar-content d-flex">
            <div className="d-flex mobile__header d-lg-none justify-content-between align-items-center py-2">
              <button className="navbar-toggler border-0 bg-transparent p-0 ms-2" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
                <FaBars className="fs-2" />
              </button>
              <div className="logo text-center flex-grow-1" style={{ fontSize: "2rem", fontWeight: "bold" }}><Link href="/" style={{ textDecoration: "none", color: 'black' }}> Hekto </Link></div>
              <div className="d-flex align-items-center gap-3 me-2">
                <Link href="#" className="text-dark"><FaMagnifyingGlass className="fs-4" /></Link>
              </div>
            </div>
            <div className="col-6 col-lg-1 logo logo_desktop d-none d-lg-block"><Link href="/" style={{ textDecoration: "none", color: 'black' }}> Hekto </Link> </div>
            <div className="col-12 col-lg-7 d-none d-md-block">
              <nav className="main-nav collapse d-lg-flex align-items-center gap-4" id="mainNavCollapse">


                <span className="d-flex align-items-center gap-1">
                  <Link href="/">
                    Home
                  </Link>
                </span>



                <Link href="#">Pages</Link>
                <Link href="#">Products</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Shop</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
            <div className="col-12 col-lg-3 search-box__icon d-none d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
              <form className="search-box d-flex w-100">
                <input type="text" className="form-control" placeholder=" " />
                <button type="submit" className="btn">
                  <FaMagnifyingGlass />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas offcanvas-start text-white" tabIndex={-1} id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
          <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column gap-2">

            <span className="d-flex align-items-center gap-1">
              <Link href="/">
                Home
              </Link>
            </span>

            <Link className="nav-link" href="#">Pages</Link>
            <Link className="nav-link" href="#">Products</Link>
            <Link className="nav-link" href="#">Blog</Link>
            <Link className="nav-link" href="#">Shop</Link>
            <Link className="nav-link" href="#">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;