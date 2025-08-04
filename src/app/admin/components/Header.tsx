
import Link from 'next/link';

export default function Header() {
  const user = { username: 'admin' };

  return (
    <header className="app-header sticky" id="header">
      <div className="main-header-container container-fluid">
        <div className="header-content-left">
          <div className="header-element">
            <div className="horizontal-logo">
              <Link href="/admin/dashboard" className="header-logo">
                <img src="/common/imgs/logo.png" alt="logo" className="desktop-logo" />
                <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-dark" />
                <img src="/common/imgs/logo.png" alt="logo" className="desktop-dark" />
                <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-logo" />
                <img src="/common/imgs/logo_toggle.png" alt="logo" className="toggle-white" />
                <img src="/common/imgs/logo.png" alt="logo" className="desktop-white" />
              </Link>
            </div>
          </div>

          <div className="header-element mx-lg-0 mx-2">
            <a aria-label="Hide Sidebar" className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" data-bs-toggle="sidebar" href="#">
              <span></span>
            </a>
          </div>
        </div>

        <ul className="header-content-right">
          <li className="header-element d-md-none d-block">
            <a href="#" className="header-link" data-bs-toggle="modal" data-bs-target="#header-responsive-search">
              <i className="bi bi-search header-link-icon"></i>
            </a>
          </li>

          <li className="header-element header-theme-mode">
            <a href="#" className="header-link layout-setting">
              <span className="light-layout">
                {/* light icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72..." />
                </svg>
              </span>
              <span className="dark-layout">
                {/* dark icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 header-link-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25..." />
                </svg>
              </span>
            </a>
          </li>

          <li className="header-element header-fullscreen">
            <Link href="#" className="header-link">
              <svg className="w-6 h-6 full-screen-open header-link-icon" /* ... */ />
              <svg className="w-6 h-6 full-screen-close header-link-icon d-none" /* ... */ />
            </Link>
          </li>

          <li className="header-element dropdown">
            <a href="#" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
              <div className="d-flex align-items-center">
                <img src="/backend/assets/images/faces/15.jpg" alt="img" className="avatar avatar-sm" />
              </div>
            </a>

            <ul className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile" style={{ minWidth: '12rem' }}>
              <li>
                <a className="dropdown-item d-flex align-items-center">
                  <i className="fe fe-user p-1 rounded-circle bg-primary-transparent ut me-2 fs-16"></i>
                  {user.username}
                </a>
              </li>
              <li>
                <Link href="/admin/user/change-password" className="dropdown-item d-flex align-items-center">
                  <i className="fe fe-shield p-1 rounded-circle bg-primary-transparent ut me-2 fs-16"></i>
                  Change Password
                </Link>
              </li>
              <li>
                <Link href="/admin/logout" className="dropdown-item d-flex align-items-center">
                  <i className="fe fe-lock p-1 rounded-circle bg-primary-transparent ut me-2 fs-16"></i>
                  Log Out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
