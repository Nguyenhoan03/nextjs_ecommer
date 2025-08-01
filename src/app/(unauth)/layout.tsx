import { ReactNode } from 'react';
import BannerDetail from '@/components/unauth/BannerDetail';

export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
     
       <BannerDetail />
      {children}
      
    </div>
  );
}
