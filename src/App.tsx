import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { HomePage } from './pages/HomePage';
import { KontenLaundryPage } from './pages/KontenLaundryPage';
import { GmbLaundryPage } from './pages/GmbLaundryPage';
import { KostWanitaPage } from './pages/KostWanitaPage';
import { TokoKuePage } from './pages/TokoKuePage';
import { MetaAdsPage } from './pages/MetaAdsPage';
import { AlatanPage } from './pages/AlatanPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentPage(route);
  };

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
    case 'alatan-indonesia':
      return <AlatanPage onNavigate={handleNavigate} />;
    case 'home':
    default:
      return <HomePage onNavigate={handleNavigate} />;
  }
}
