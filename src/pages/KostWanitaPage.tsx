import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { ArrowLeft, ArrowUpRight, Check, MapPin, Trophy, Key, Star, ChevronLeft, ChevronRight, MessageSquare, Wrench } from 'lucide-react';

interface KostWanitaPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const KostWanitaPage: React.FC<KostWanitaPageProps> = ({ onNavigate }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const waImages = [
    "https://static.wixstatic.com/media/419f05_7a6abc25c6bf41528cde24ad90c185b1~mv2.webp",
    "https://static.wixstatic.com/media/419f05_6fbe7ab1e309430d874419045cb3f9a9~mv2.webp",
    "https://static.wixstatic.com/media/419f05_dadcd3b73f50488e842a188f5891fda0~mv2.webp",
    "https://static.wixstatic.com/media/419f05_8dbff3d8d3194b5db117204deadc0001~mv2.webp",
    "https://static.wixstatic.com/media/419f05_60db65900e62476a8d4f11e9e555d51d~mv2.webp",
    "https://static.wixstatic.com/media/419f05_69910a18e7db4ef48ccfc616859cc370~mv2.webp",
    "https://static.wixstatic.com/media/419f05_f90f4d9166ad4a0181755f6c9d65010b~mv2.webp",
    "https://static.wixstatic.com/media/419f05_0e17c2d1c851400480e8e226edee2b3f~mv2.webp",
    "https://static.wixstatic.com/media/419f05_a52f0e41ffb14cb082b00b6159215c0a~mv2.webp",
    "https://static.wixstatic.com/media/419f05_63ec9880ac4f48edaacc4469b1b08935~mv2.webp",
    "https://static.wixstatic.com/media/419f05_e47216bc7468479192c16e7596fb9cf5~mv2.webp",
    "https://static.wixstatic.com/media/419f05_9318e756a7e34d45a524d9e18afce8d2~mv2.webp"
  ];

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 260 : 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-600 font-sans antialiased selection:bg-[#F5A623] selection:text-[#214634]">
      
      {/* Sticky top button */}
      <div className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4 flex justify-between items-center bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/50">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 bg-white text-[#214634] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 lg:pb-16">
        <div className="bg-[#214634] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 lg:p-20 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-[20rem] sm:w-[30rem] md:w-[40rem] h-[20rem] sm:w-[30rem] md:h-[40rem] bg-[#F5A623]/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-4 sm:mb-6 tracking-tight">
              Mendominasi Pencarian Lokal untuk <span className="text-[#F5A623]">Kost Wanita Islam</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#F8FAFC]/90 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              Strategi optimasi mesin pencari hyperlocal yang tidak hanya berfokus pada peningkatan trafik organik, tetapi juga memastikan terisinya daftar tunggu (wishlist) penyewa hingga penuh secara berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <a href="#hasil" className="bg-[#F5A623] text-[#214634] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:opacity-90 transition duration-300 shadow-lg text-center">
                Lihat Hasil Konversi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: Optimasi Web */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16" id="optimasi-web">
        <div className="bg-white border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-md hover:shadow-lg transition-shadow duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-4">
                SEO On-Page
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214634] mb-4 sm:mb-6 tracking-tight">Optimasi Web Kost Wanita Islam</h2>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                Menangani restrukturisasi teknis dan SEO On-Page untuk institusi pemerintahan. Proyek ini menuntut arsitektur informasi yang rapi, peningkatan Core Web Vitals, serta pemenuhan standar E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span>Peningkatan kecepatan muat halaman (PageSpeed) untuk aksesibilitas publik.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span>Pemetaan ulang hierarki URL dan internal linking strategis.</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span>Optimasi metadata dokumen untuk kata kunci kebijakan spesifik.</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="https://langsungcuan.biz.id/kost-wanita-mamamu" target="_blank" rel="noopener noreferrer" className="bg-[#214634] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold hover:opacity-90 transition shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base">
                  Kunjungi Website <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative mt-4 lg:mt-0">
              <div className="relative bg-white border border-slate-200 p-2 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg">
                <div className="bg-[#F8FAFC] rounded-t-2xl sm:rounded-t-3xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-slate-100">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="mx-auto bg-white border border-slate-200 px-3 py-1 text-xs text-slate-400 rounded-full w-1/2 text-center truncate">kost wanita islam</div>
                </div>
                <img src="https://static.wixstatic.com/media/419f05_65c443f694544aa785cc8f6fd5cbe7b2~mv2.webp" alt="Screenshot Website kost wanita islam" className="w-full h-auto rounded-b-[1.25rem] sm:rounded-b-[1.5rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Tools & Scope */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:gap-12">
          
          <div className="text-center max-w-4xl mx-auto w-full">
            <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-[#F8FAFC] border border-slate-200 text-[#214634] mb-4 shadow-sm">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#214634] mb-3 sm:mb-4">Tools & Ekosistem</h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              Alat ukur dan analisis industri yang saya gunakan secara harian untuk memantau performa, audit teknis, dan pelaporan berbasis data yang akurat.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {['Google Search Console', 'Google Analytics 4', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google AI Studio', 'Google Flow'].map((tool) => (
                <span key={tool} className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white border border-slate-200 text-[#214634] rounded-full text-xs sm:text-sm font-bold shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-md">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-2">
                Metodologi
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#214634] mb-3 sm:mb-4">Ruang Lingkup Pekerjaan</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Pendekatan SEO komprehensif mulai dari fondasi teknis hingga dominasi visibilitas di halaman pertama mesin pencari.
              </p>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] border border-slate-200 flex items-center justify-center mt-1 mr-4 font-bold text-[#214634]">1</div>
                <div>
                  <strong className="text-[#214634] text-base sm:text-lg block mb-1">Audit Teknis SEO</strong>
                  <span className="text-slate-600 text-sm sm:text-base leading-relaxed">Memastikan website <i>crawlable</i> dan <i>indexable</i> tanpa error.</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] border border-slate-200 flex items-center justify-center mt-1 mr-4 font-bold text-[#214634]">2</div>
                <div>
                  <strong className="text-[#214634] text-base sm:text-lg block mb-1">Riset & Pemetaan Keyword</strong>
                  <span className="text-slate-600 text-sm sm:text-base leading-relaxed">Menargetkan kata kunci dengan <i>search intent</i> komersial tinggi.</span>
                </div>
              </li>
              <li className="flex items-start md:col-span-2 md:w-1/2 md:mx-auto">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F8FAFC] border border-slate-200 flex items-center justify-center mt-1 mr-4 font-bold text-[#214634]">3</div>
                <div>
                  <strong className="text-[#214634] text-base sm:text-lg block mb-1">Optimasi On-Page</strong>
                  <span className="text-slate-600 text-sm sm:text-base leading-relaxed">Penyempurnaan konten, meta tag, struktur heading, dan UX.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Google My Business */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-1 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
              <img src="https://static.wixstatic.com/media/419f05_5d0e14217f2c4f95a0544c3c489f57ec~mv2.webp" alt="Optimasi Google My Business Kost" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="order-2 mt-4 lg:mt-0">
              <div className="inline-flex items-center gap-2 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4" /> Google My Business
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214634] mb-4 sm:mb-6 tracking-tight">"Map Pack" untuk Visibilitas Hyperlocal</h2>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                Untuk bisnis seperti Kost Wanita Islam, keputusan pelanggan sangat bergantung pada kedekatan lokasi dan ulasan (reviews). Strategi saya berpusat pada optimasi Profil Bisnis Google secara maksimal.
              </p>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                Pekerjaan meliputi optimasi deskripsi berbasis kata kunci lokal, pengunggahan foto fasilitas dengan <i>geo-tagging</i>, menjaga konsistensi NAP (Name, Address, Phone) di berbagai direktori, serta membangun template manajemen ulasan yang responsif.
              </p>
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5A623]"></div>
                <p className="text-[#214634] font-bold text-base sm:text-lg leading-relaxed">
                  💡 Hasil: Profil kost muncul di 3 teratas (Map Pack) pada pencarian radius spesifik, mendorong interaksi telepon dan pesan langsung yang signifikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Content SEO & Ranking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 mt-4 lg:mt-0">
              <div className="inline-flex items-center gap-2 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-4">
                Content SEO & Ranking
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214634] mb-4 sm:mb-6 tracking-tight">Dominasi Halaman 1 dengan Konten Berkualitas</h2>
              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
                Strategi content marketing yang berfokus pada <i>search intent</i> calon penyewa kost. Artikel komprehensif dengan pendekatan E-E-A-T berhasil menempatkan website di posisi teratas untuk kata kunci kompetitif lokal.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 text-slate-500">
                    <Trophy className="text-[#F5A623] w-4 h-4" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">Posisi Rata-rata</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#214634]">#1-3</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Google Search</div>
                </div>
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 text-slate-500">
                    <Key className="text-[#F5A623] w-4 h-4" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide">Kata Kunci</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#214634]">20+</div>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Page 1 Ranking</div>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Artikel "Rekomendasi 20+ Kost Wanita di Cikini" ranking halaman 1</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Optimasi long-tail keywords dengan <i>search intent</i> tinggi</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Internal linking strategis untuk meningkatkan page authority</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-[#F5A623] text-lg sm:text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">Konten evergreen yang terus mendatangkan traffic organik konsisten</span>
                </li>
              </ul>

              <a href="https://langsungcuan.biz.id/2/ARTICLES/67/kost-wanita-di-cikini-20-opsi-terbaik-termasuk-laundry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#214634] font-bold hover:text-[#F5A623] transition group text-sm sm:text-base">
                Lihat Artikel <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="order-1 lg:order-2 relative mt-6 lg:mt-0">
              <div className="relative bg-[#214634] border border-slate-700 p-2 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-xl overflow-hidden">
                <img src="https://static.wixstatic.com/media/419f05_92049c63835449d79c5dc8558f25ffb3~mv2.webp" alt="Ranking Google Kost Wanita Islam" className="w-full h-auto rounded-[1.25rem] sm:rounded-[2rem] object-cover" />
              </div>
              
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white border border-slate-200 rounded-full py-2 px-4 sm:py-3 sm:px-6 shadow-lg text-[#214634]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Star className="text-[#F5A623] fill-current w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">Top Ranking</div>
                    <div className="text-sm sm:text-base font-extrabold leading-none">Page 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Hasil Screenshot WA Carousel */}
      <section id="hasil" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[#F5A623] text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="w-4 h-4" /> Leads Generation
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214634] mb-4 sm:mb-6 tracking-tight">Bukti Konversi Nyata</h2>
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
              Trafik organik yang berhasil diubah menjadi <i>leads</i>. Geser untuk melihat kumpulan <i>screenshot</i> permintaan kamar dan antrean <i>wishlist</i> dari calon penyewa yang menghubungi via WhatsApp berkat optimasi pencarian Google.
            </p>
          </div>

          <div className="relative max-w-[1400px] mx-auto group">
            <button 
              onClick={() => scrollSlider('left')} 
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white text-[#214634] rounded-full shadow-lg items-center justify-center hover:bg-slate-50 border border-slate-200 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollSlider('right')} 
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white text-[#214634] rounded-full shadow-lg items-center justify-center hover:bg-slate-50 border border-slate-200 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 sm:pb-12 snap-x snap-mandatory scrollbar-none px-4"
            >
              {waImages.map((src, index) => (
                <div key={index} className="snap-center shrink-0 w-[240px] sm:w-[280px] md:w-[320px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-md border-4 border-[#1A382A] bg-[#1A382A] relative group cursor-pointer">
                  <img src={src} alt={`Screenshot Chat WA ${index + 1}`} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
