import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, 
  ImageIcon, 
  LayoutTemplate, 
  Map, 
  Monitor, 
  BookOpen, 
  Home, 
  Newspaper, 
  Target, 
  ArrowRight 
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StickyProjectCardsProps {
  onNavigate: (page: string) => void;
}

export const StickyProjectCards: React.FC<StickyProjectCardsProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (min-width: 768px): Full 3D Stacked Cards Animation
      mm.add("(min-width: 768px)", () => {
        const validCards = cardsRef.current.filter((c): c is HTMLDivElement => c !== null);
        const totalCards = validCards.length;
        if (totalCards === 0) return;

        const segmentSize = 1 / totalCards;
        const cardYOffset = 6;
        const cardScaleStep = 0.04;

        // Initial setup
        validCards.forEach((card, i) => {
          gsap.set(card, {
            position: 'absolute',
            top: '52%',
            left: '50%',
            xPercent: -50,
            yPercent: -50 + i * cardYOffset,
            scale: 1 - i * cardScaleStep,
            transformOrigin: 'center bottom',
            zIndex: totalCards - i,
          });
        });

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 6}px`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            const activeIndex = Math.min(
              Math.floor(progress / segmentSize),
              totalCards - 1
            );
            const segProgress = (progress - activeIndex * segmentSize) / segmentSize;

            validCards.forEach((card, i) => {
              if (i < activeIndex) {
                // Card has passed and flies up
                gsap.set(card, {
                  yPercent: -220,
                  rotationX: 30,
                  opacity: 0.3,
                  scale: 0.95,
                });
              } else if (i === activeIndex) {
                // Active card translating up and out
                gsap.set(card, {
                  yPercent: gsap.utils.interpolate(-50, -220, segProgress),
                  rotationX: gsap.utils.interpolate(0, 30, segProgress),
                  scale: 1,
                  opacity: gsap.utils.interpolate(1, 0.3, segProgress),
                });
              } else {
                // Upcoming cards stepping up in scale and position
                const behindIndex = i - activeIndex;
                const currentYOffset = (behindIndex - segProgress) * cardYOffset;
                const currentScale = 1 - (behindIndex - segProgress) * cardScaleStep;

                gsap.set(card, {
                  yPercent: -50 + currentYOffset,
                  rotationX: 0,
                  scale: Math.max(0.75, currentScale),
                  opacity: 1,
                });
              }
            });
          },
        });
      });

      // Mobile (max-width: 767px): Sticky Stacking Cards
      mm.add("(max-width: 767px)", () => {
        const validCards = cardsRef.current.filter((c): c is HTMLDivElement => c !== null);
        validCards.forEach((card, i) => {
          gsap.set(card, {
            position: 'sticky',
            top: `${80 + i * 12}px`,
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            rotationX: 0,
            opacity: 1,
            zIndex: i + 1,
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="portofolio" 
      className="relative w-full min-h-screen bg-slate-50/50 py-16 md:py-0 overflow-hidden border-t border-slate-200 [perspective:1200px]"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A4D3E]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      {/* Header */}
      <div className="text-center pt-8 md:pt-12 mb-8 md:mb-0 relative z-20 pointer-events-none">
        <span className="text-[#FFB800] font-bold text-sm md:text-base uppercase tracking-widest block mb-1">Karya & Hasil</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Projek Pribadi</h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1 hidden md:block">Scroll ke bawah untuk menjelajahi portofolio</p>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-5xl mx-auto h-auto md:h-[calc(100vh-140px)] flex flex-col md:block items-center justify-center px-4 md:px-6 gap-6 md:gap-0 mt-4 md:mt-0">
        
        {/* Card 1: Laundry Express Mamamu */}
        <div 
          ref={(el) => (cardsRef.current[0] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80" alt="Laundry Express Mamamu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-3 left-3 bg-[#2A4D3E] text-white font-bold px-3 py-1 text-[11px] rounded-full shadow flex items-center gap-1.5 z-20">
                <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span> GMB
              </div>
              <div className="absolute bottom-3 right-3 bg-[#2A4D3E] text-white font-bold px-3 py-1 text-[11px] rounded-full shadow flex items-center gap-1.5 z-20">
                <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span> KONTEN
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#FFB800]/10 text-[#FFB800] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFB800] group-hover:text-[#2A4D3E] transition-all duration-300">
              <ImageIcon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">laundry express mamamu</h3>
            
            <div className="flex flex-wrap gap-3 w-full">
              <button 
                onClick={() => onNavigate('gmb-laundry')}
                className="flex-1 min-w-[130px] bg-slate-100 text-slate-800 px-5 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-[#FFB800] hover:text-[#2A4D3E] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
              >
                Lihat GMB <ExternalLink className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('konten-laundry')}
                className="flex-1 min-w-[130px] bg-slate-100 text-slate-800 px-5 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-[#FFB800] hover:text-[#2A4D3E] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
              >
                Lihat Konten <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Toko Kue Kering A TIGA */}
        <div 
          ref={(el) => (cardsRef.current[1] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80" alt="Toko Kue Kering A TIGA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-3 left-3 bg-[#2A4D3E] text-white font-bold px-3 py-1 text-[11px] rounded-full shadow flex items-center gap-1.5 z-20">
                <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span> Optimasi
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#2A4D3E]/10 text-[#2A4D3E] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2A4D3E] group-hover:text-white transition-all duration-300">
              <LayoutTemplate className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Toko Kue Kering A TIGA</h3>
            
            <button 
              onClick={() => onNavigate('toko-kue')}
              className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-[#FFB800] hover:text-[#2A4D3E] transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow cursor-pointer"
            >
              Lihat Detail <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Kost Wanita Islam */}
        <div 
          ref={(el) => (cardsRef.current[2] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80" alt="Kost Wanita Islam" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-3 left-3 bg-[#2A4D3E] text-white font-bold px-3 py-1 text-[11px] rounded-full shadow flex items-center gap-1.5 z-20">
                <span className="w-2 h-2 bg-[#FFB800] rounded-full"></span> Optimasi
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#FFB800]/10 text-[#FFB800] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFB800] group-hover:text-[#2A4D3E] transition-all duration-300">
              <Map className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Kost Wanita Islam</h3>
            
            <button 
              onClick={() => onNavigate('kost-wanita')}
              className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-xs md:text-sm hover:bg-[#FFB800] hover:text-[#2A4D3E] transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow cursor-pointer"
            >
              Lihat Detail <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 4: Portofolio Alatan */}
        <div 
          ref={(el) => (cardsRef.current[3] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Gambar Portofolio Alatan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#2A4D3E]/10 text-[#2A4D3E] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2A4D3E] group-hover:text-white transition-all duration-300">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Portofolio Alatan</h3>
            
            <button 
              onClick={() => onNavigate('alatan')}
              className="bg-[#2A4D3E] text-white px-6 py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#1f3a2f] transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg cursor-pointer"
            >
              Lihat Selengkapnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 5: Hasil Tulisan Saya */}
        <div 
          ref={(el) => (cardsRef.current[4] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80" alt="Hasil Tulisan Kompasiana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#FFB800]/10 text-[#FFB800] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFB800] group-hover:text-[#2A4D3E] transition-all duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Hasil Tulisan Saya</h3>
            
            <a 
              href="https://www.kompasiana.com/amriflh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FFB800] text-[#2A4D3E] px-6 py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e5a600] transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg"
            >
              Baca di Kompasiana <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Card 6: Portofolio Groperti */}
        <div 
          ref={(el) => (cardsRef.current[5] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" alt="Portofolio Groperti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#2A4D3E]/10 text-[#2A4D3E] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2A4D3E] group-hover:text-white transition-all duration-300">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Portofolio Groperti</h3>
            
            <a 
              href="https://groperti.com/blog/author/ahmad-amri-falah/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#2A4D3E] text-white px-6 py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#1f3a2f] transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg"
            >
              Lihat Portofolio <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Card 7: Portofolio Menulis */}
        <div 
          ref={(el) => (cardsRef.current[6] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80" alt="Portofolio Menulis Bonari News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#FFB800]/10 text-[#FFB800] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#FFB800] group-hover:text-[#2A4D3E] transition-all duration-300">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Portofolio Menulis</h3>
            
            <a 
              href="https://bonarinews.com/?s=ahmad+amri+falah" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FFB800] text-[#2A4D3E] px-6 py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e5a600] transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg"
            >
              Lihat Tulisan <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Card 8: Meta Ads */}
        <div 
          ref={(el) => (cardsRef.current[7] = el)}
          className="w-full md:w-[90%] lg:w-[85%] bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-200/80 shadow-2xl shadow-slate-900/10 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10 group overflow-hidden transition-shadow hover:shadow-[#2A4D3E]/15"
        >
          <div className="w-full md:w-1/2 relative">
            <div className="w-full aspect-[16/10] bg-slate-100 rounded-[24px] md:rounded-[28px] overflow-hidden relative border border-slate-100">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80" alt="Meta Ads sebagai Dropship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="w-12 h-12 bg-[#2A4D3E]/10 text-[#2A4D3E] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2A4D3E] group-hover:text-white transition-all duration-300">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 group-hover:text-[#2A4D3E] transition-colors capitalize">Meta Ads sebagai Dropship</h3>
            
            <button 
              onClick={() => onNavigate('meta-ads')}
              className="bg-[#FFB800] text-[#2A4D3E] px-6 py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#e5a600] transition-all duration-300 flex items-center gap-2 shadow hover:shadow-lg cursor-pointer"
            >
              Lihat Selengkapnya <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
