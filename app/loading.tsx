import dynamic from 'next/dynamic';

const OnPointsLogoAnimation = dynamic(() => import('./components/OnPointsLogoAnimation'), { ssr: false });

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252241]">
      <OnPointsLogoAnimation />
      <div className="w-64 mt-8 h-2 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-cyan-400 animate-loading-bar" style={{ width: '100%' }} />
      </div>
    </div>
  );
} 