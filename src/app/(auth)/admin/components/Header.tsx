'use client'

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const currentPage = usePathname().split('/').pop()?.replace(/^./, c => c.toUpperCase()) || '';

  return (
    <header className="admin-header">
      <div className="header-left">
        <h3 className="page-title capitalize">{currentPage}</h3>
      </div>
      <div className="header-right">
        <span className="user-info">admin@example.com</span>
      </div>
    </header>
  );
}
