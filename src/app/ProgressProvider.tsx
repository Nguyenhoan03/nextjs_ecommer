'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function ProgressProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Khi pathname thay đổi, route mới đang load
    setIsLoading(true);
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="loader" />
        </div>
      )}
      {children}

      <style jsx global>{`
        /* Loader animation */
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #00bfff;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* NProgress bar */
        #nprogress .bar {
          background: #00bfff;
          height: 3px;
        }
      `}</style>
    </>
  );
}
