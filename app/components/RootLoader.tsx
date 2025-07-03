'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const OnPointsLogoAnimation = dynamic(() => import('./OnPointsLogoAnimation'), { ssr: false });

export default function RootLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Only show loader if not already shown in this session
    const loaderShown = sessionStorage.getItem('onpoints-loader-shown');
    if (loaderShown) {
      setShowLoader(false);
      return;
    }
    // Otherwise, show loader and set flag
    const timer = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem('onpoints-loader-shown', 'true');
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#252241]">
        <OnPointsLogoAnimation />
        <div className="w-64 mt-8 h-2 bg-gray-700 rounded overflow-hidden">
          <div className="h-full bg-cyan-400 animate-loading-bar" style={{ width: '100%' }} />
        </div>
      </div>
    );
  }

  return <>{children}</>;
} 