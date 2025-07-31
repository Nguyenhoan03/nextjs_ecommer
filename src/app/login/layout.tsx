import { ReactNode } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
      {children}
    </div>
  );
}
