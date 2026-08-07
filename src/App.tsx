import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { HomePage } from './pages/HomePage';
import { KontenLaundryPage } from './pages/KontenLaundryPage';
import { GmbLaundryPage } from './pages/GmbLaundryPage';
import { KostWanitaPage } from './pages/KostWanitaPage';
import { TokoKuePage } from './pages/TokoKuePage';
import { MetaAdsPage } from './pages/MetaAdsPage';
import { AlatanPage } from './pages/AlatanPage';
import { motion, AnimatePresence } from 'motion/react';
import { SmoothScrollWrapper } from './components/SmoothScrollWrapper';
import { Navbar } from './components/Navbar';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentPage(route);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'konten-laundry':
        return <KontenLaundryPage onNavigate={handleNavigate} />;
      case 'gmb-laundry':
        return <GmbLaundryPage onNavigate={handleNavigate} />;
      case 'kost-wanita':
        return <KostWanitaPage onNavigate={handleNavigate} />;
      case 'toko-kue':
        return <TokoKuePage onNavigate={handleNavigate} />;
      case 'meta-ads':
        return <MetaAdsPage onNavigate={handleNavigate} />;
      case 'alatan':
      case 'alatan-indonesia':
        return <AlatanPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const isHome = currentPage === 'home';

  return (
    <div className="min-h-screen bg-[#2A4D3E] text-slate-100 font-sans antialiased overflow-x-hidden relative">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {isHome ? (
        renderPage()
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SmoothScrollWrapper>
              {renderPage()}
            </SmoothScrollWrapper>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}


