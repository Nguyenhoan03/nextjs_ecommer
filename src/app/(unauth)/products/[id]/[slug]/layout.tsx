import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Product Layout',
  description: 'Product layout description',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function ProductLayout({ children}: { children: Readonly<React.ReactNode> }) {
  return (
    <div className="">
      {children}
      </div>
  );
}
