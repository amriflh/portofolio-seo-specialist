import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  MessageSquare, 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink,
  PhoneCall,
  Sparkles,
  Globe,
  Building2,
  Target,
  ShoppingBag,
  MapPin,
  FileText
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavSection = (sectionId: string) => {
    setIsOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageSwitch = (route: PageRoute) => {
    setIsOpen(false);
    onNavigate(route);
  };

  const isHome = currentPage === 'home';

  const caseStudies: { id: PageRoute; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'alatan',
      title: 'Alatan Indonesia',
      desc: 'Portofolio SEO & Web Development',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      id: 'kost-wanita',
      title: 'Kost Wanita Islam',
      desc: 'Dominasi Ranking GMB & SEO Lokal',
      icon: <Building2 className="w-5 h-5 text-amber-400" />,
      color: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads Dropship',
      desc: 'Optimasi Iklan & Validasi Data',
      icon: <Target className="w-5 h-5 text-blue-400" />,
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      id: 'toko-kue',
      title: 'Toko Kue A Tiga',
      desc: 'SEO Konten & Traffic Penjualan',
      icon: <ShoppingBag className="w-5 h-5 text-rose-400" />,
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    },
    {
      id: 'gmb-laundry',
      title: 'GMB Laundry Express',
      desc: 'Peringkat #1 Google Maps',
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      id: 'konten-laundry',
      title: 'Pemasaran Konten Laundry',
      desc: 'Digital Marketing & Content Strategy',
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <>
      {/* Top Header Bar matching HomePage floating rounded-full pill theme */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full py-3 px-4 sm:px-6 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto bg-[#2A4D3E] text-white rounded-full px-5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between shadow-xl border border-white/10">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            {!isHome && (
              <button
                onClick={() => onNavigate('home')}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-[#FFB800] hover:text-[#2A4D3E] transition-all cursor-pointer flex items-center justify-center mr-1"
                title="Kembali ke Beranda"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div 
              onClick={() => onNavigate('home')} 
              className="cursor-pointer group flex flex-col"
            >
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#FFB800] transition-colors">
                  Ahmad Amri Falah
                </span>
                <span className="bg-[#FFB800] text-[#2A4D3E] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider hidden xs:inline-block">
                  SEO
                </span>
              </div>
              <span className="text-xs text-slate-300 font-medium hidden sm:block">
                SEO & Content Strategist
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/10 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => handleNavSection('tentang')}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/15 hover:text-[#FFB800] transition-all cursor-pointer"
            >
              Tentang
            </button>
            <button
              onClick={() => handleNavSection('pengalaman')}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/15 hover:text-[#FFB800] transition-all cursor-pointer"
            >
              Pengalaman
            </button>
            <button
              onClick={() => handleNavSection('portofolio')}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/15 hover:text-[#FFB800] transition-all cursor-pointer"
            >
              Portofolio
            </button>
            <button
              onClick={() => handleNavSection('layanan')}
              className="px-5 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/15 hover:text-[#FFB800] transition-all cursor-pointer"
            >
              Layanan
            </button>
          </nav>

          {/* Right Action & Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/62895326089411"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#FFB800] text-[#2A4D3E] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all shadow-md cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>

            {/* Mobile Menu Button - Highly Visible, Touch-Friendly (Mobile / Tablet Only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center gap-2 bg-[#FFB800] text-[#2A4D3E] px-4 py-2 rounded-full font-black text-sm shadow-lg hover:bg-yellow-300 active:scale-95 transition-all cursor-pointer border-2 border-amber-300"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <>
                  <X className="w-5 h-5 stroke-[2.5]" />
                  <span className="text-xs font-black uppercase">TUTUP</span>
                </>
              ) : (
                <>
                  <Menu className="w-5 h-5 stroke-[2.5]" />
                  <span className="text-xs font-black uppercase tracking-wide">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay with Large Readable Typography */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#2A4D3E] border-b border-white/10 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-xl font-extrabold text-white tracking-tight">
                    Navigasi Portofolio
                  </h2>
                  <p className="text-xs text-amber-300 font-medium">
                    Pilih halaman atau bagian tujuan Anda
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5 bg-white/10 text-white hover:bg-rose-500 hover:text-white px-4 py-2 rounded-full font-bold text-sm transition-all border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
                <span>Tutup</span>
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 scrollbar-thin">
              
              {/* Quick Jump Main Sections */}
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Menu Utama (Teks Besar & Jelas)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      if (currentPage !== 'home') {
                        onNavigate('home');
                        setIsOpen(false);
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsOpen(false);
                      }
                    }}
                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                      currentPage === 'home' 
                        ? 'bg-[#FFB800] text-[#2A4D3E] font-black border-amber-300 shadow-md' 
                        : 'bg-white/10 text-white hover:bg-white/20 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl ${currentPage === 'home' ? 'bg-[#2A4D3E] text-[#FFB800]' : 'bg-white/10 text-amber-300'}`}>
                        <Home className="w-6 h-6" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black tracking-tight">
                        Beranda
                      </span>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-80" />
                  </button>

                  <button
                    onClick={() => handleNavSection('tentang')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 text-left transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/10 text-amber-300">
                        <User className="w-6 h-6" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black tracking-tight">
                        Tentang Saya
                      </span>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-80" />
                  </button>

                  <button
                    onClick={() => handleNavSection('pengalaman')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 text-left transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/10 text-amber-300">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black tracking-tight">
                        Pengalaman
                      </span>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-80" />
                  </button>

                  <button
                    onClick={() => handleNavSection('portofolio')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 text-left transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/10 text-amber-300">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black tracking-tight">
                        Portofolio
                      </span>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-80" />
                  </button>

                  <button
                    onClick={() => handleNavSection('layanan')}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 border border-white/10 text-left transition-all sm:col-span-2"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-xl bg-white/10 text-amber-300">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <span className="text-xl sm:text-2xl font-black tracking-tight">
                        Layanan SEO & Content
                      </span>
                    </div>
                    <ChevronRight className="w-6 h-6 opacity-80" />
                  </button>
                </div>
              </div>

              {/* Case Studies / Subpages */}
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <FolderGit2 className="w-4 h-4" />
                  <span>Halaman Studi Kasus & Portofolio Lengkap</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {caseStudies.map((cs) => {
                    const isActive = currentPage === cs.id;
                    return (
                      <button
                        key={cs.id}
                        onClick={() => handlePageSwitch(cs.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#FFB800] text-[#2A4D3E] border-amber-300 shadow-lg'
                            : 'bg-slate-900/80 text-white hover:bg-slate-800 border-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl border ${isActive ? 'bg-[#2A4D3E] text-[#FFB800] border-[#2A4D3E]' : cs.color}`}>
                            {cs.icon}
                          </div>
                          <div>
                            <h3 className={`text-lg sm:text-xl font-bold leading-snug ${isActive ? 'text-[#2A4D3E]' : 'text-white'}`}>
                              {cs.title}
                            </h3>
                            <p className={`text-xs ${isActive ? 'text-[#2A4D3E]/80 font-medium' : 'text-slate-400'}`}>
                              {cs.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-[#2A4D3E]' : 'text-slate-500'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="p-5 sm:p-6 bg-[#2A4D3E] border-t border-white/10 shadow-2xl flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="text-center sm:text-left">
                <p className="text-white font-bold text-base">Siap Meningkatkan Ranking & Traffic?</p>
                <p className="text-slate-300 text-xs">Konsultasi langsung via WhatsApp</p>
              </div>

              <a
                href="https://wa.me/62895326089411"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFB800] text-[#2A4D3E] font-black text-lg hover:bg-yellow-300 transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-6 h-6 fill-current" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Quick Navigation Bar for Mobile Thumbs */}
      <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex items-center justify-between bg-[#2A4D3E]/95 text-white backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl border border-white/20">
        <button
          onClick={() => {
            if (currentPage !== 'home') {
              onNavigate('home');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs cursor-pointer"
        >
          <Home className="w-4 h-4 text-[#FFB800]" />
          <span>{currentPage === 'home' ? 'Atas' : 'Beranda'}</span>
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB800] text-[#2A4D3E] font-black text-sm shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[2.5]" />
          <span>MENU NAVIGASI</span>
        </button>

        <a
          href="https://wa.me/62895326089411"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-full bg-emerald-500 text-white font-bold shadow-md hover:bg-emerald-400 transition-all cursor-pointer"
          aria-label="WhatsApp Contact"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
        </a>
      </div>
    </>
  );
};
