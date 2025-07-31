import { ReactNode } from 'react';
import BannerDetail from '@/components/unauth/BannerDetail';
import "bootstrap/dist/css/bootstrap.min.css";
export default function UnauthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
     
       <BannerDetail />
      {children}
      
    </div>
  );
}
