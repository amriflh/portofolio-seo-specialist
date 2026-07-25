import React, { useRef, useState } from 'react';
import { PageRoute } from '../types';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Search, 
  Pencil, 
  TrendingUp, 
  Layout, 
  FileText, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Bot, 
  Send, 
  X, 
  MessageSquare,
  Sparkles,
  Award
} from 'lucide-react';

interface AlatanPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AlatanPage: React.FC<AlatanPageProps> = ({ onNavigate }) => {
  const sliderEbookRef = useRef<HTMLDivElement>(null);
  const sliderWebinarRef = useRef<HTMLDivElement>(null);
  const sliderHomeRef = useRef<HTMLDivElement>(null);
  const sliderRegulasiRef = useRef<HTMLDivElement>(null);
  const sliderWebRef = useRef<HTMLDivElement>(null);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Halo! Ingin tahu lebih detail soal keberhasilan strategi Lead Magnet atau optimasi Laravel dari Ahmad? Tanya saya di sini!", isUser: false }
  ]);

  const scrollSlider = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => {
    if (ref.current) {
      const firstChild = ref.current.firstElementChild as HTMLElement;
      const scrollAmount = firstChild ? firstChild.offsetWidth + 16 : ref.current.clientWidth * 0.8;
      ref.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const query = chatInput.trim();
    setMessages(prev => [...prev, { text: query, isUser: true }]);
    setChatInput('');

    setTimeout(() => {
      const qLower = query.toLowerCase();
      let response = "Maaf, saya tidak mengerti. Anda bisa bertanya tentang lead magnet, distribusi regulasi, atau eksekusi teknikal Ahmad.";
      if (qLower.includes('alatan') || qLower.includes('pengalaman')) {
        response = "Di Alatan Indonesia, Ahmad merancang strategi funnel yang menghasilkan 14 prospek B2B/Pemerintahan dan mengelola 100+ unduhan regulasi.";
      } else if (qLower.includes('teknis') || qLower.includes('laravel') || qLower.includes('kode')) {
        response = "Ahmad menulis kode HTML/CSS secara manual pada CMS Laravel untuk menjaga struktur schema markup SEO agar tetap sempurna dan terindeks rapi.";
      } else if (qLower.includes('unduhan') || qLower.includes('ebook') || qLower.includes('regulasi') || qLower.includes('magnet')) {
        response = "Strategi Lead Magnet e-book Ahmad meraih 50 prospek hangat, sementara optimasi UX fitur 'share' berhasil mendongkrak unduhan regulasi dari 10 menjadi 100+ unduhan.";
      }
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased relative">
      
      {/* Top Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <button 
                onClick={() => onNavigate('home')} 
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-[#214634] hover:text-white transition-all text-xs md:text-sm font-semibold border border-slate-200 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Kembali</span>
              </button>
              <span className="font-bold text-base md:text-xl text-[#214634] tracking-tight hidden sm:block border-l border-slate-300 pl-3">
                Portofolio SEO & Web Dev
              </span>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="#pengalaman" className="hidden sm:block text-xs md:text-sm font-medium text-slate-600 hover:text-[#214634] transition-colors">Pengalaman</a>
              <a href="#studi-kasus" className="hidden sm:block text-xs md:text-sm font-medium text-slate-600 hover:text-[#214634] transition-colors">Studi Kasus</a>
              <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 border border-transparent text-xs md:text-sm font-bold rounded-full text-[#214634] bg-[#F5A623] hover:bg-yellow-400 transition-colors shadow-sm">
                Wawancara
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center mb-16 md:mb-24">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#214634] leading-[1.2] tracking-tight">
              Strategi Konten & SEO Teknis <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#214634] to-[#F5A623]">Penggerak Pertumbuhan</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Menjangkau audiens B2B, B2G dan pemerintahan melalui pendekatan data serta optimasi antarmuka untuk memberikan hasil organik yang terukur dan konversi nyata.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a href="#studi-kasus" className="px-8 py-3.5 rounded-full bg-[#214634] text-white font-semibold hover:bg-slate-800 transition-all shadow-md flex items-center justify-center gap-2">
                Lihat Rekam Jejak
              </a>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#214634]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Profesional bekerja dengan data" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#214634]/90 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-white/20">
                  <div className="flex items-center gap-3 text-white">
                    <TrendingUp className="text-[#F5A623] w-6 h-6" />
                    <div>
                      <p className="text-xs font-medium text-slate-200">Fokus Area</p>
                      <p className="text-sm md:font-semibold">Data-Driven SEO & Content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perangkat / Tools */}
        <section className="mb-24">
          <div className="text-center mb-6">
            <h3 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Perangkat & Teknologi</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
            {['VS Code', 'Google AI Studio', 'Google Flow', 'Google Search Console', 'Google Analytics', 'SEMrush', 'Google Form', 'Google Trends', 'Canva'].map((tool) => (
              <span key={tool} className="px-3 md:px-4 py-1.5 md:py-2 bg-white border border-slate-200 shadow-sm rounded-full text-xs md:text-sm font-medium text-slate-600">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Keahlian Utama */}
        <section className="mb-24">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#F5A623] font-bold tracking-wider uppercase text-xs md:text-sm">Keahlian Utama</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mt-2">Apa yang bisa saya lakukan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-[#214634]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#214634] mb-2">Riset Kata Kunci</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Identifikasi keyword potensial menggunakan SEMrush, Google Keyword Planner, dan data operasional.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-[#214634]">
                <Pencil className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#214634] mb-2">Content Writing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Penulisan artikel SEO informatif yang terstruktur untuk tampil di cuplikan fitur Google.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-[#214634]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#214634] mb-2">On-Page SEO</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Optimasi heading, meta tag, struktur URL, dan internal link untuk perayapan maksimal.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-[#214634]">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#214634] mb-2">Landing Page</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Desain tata letak berfokus pada konversi dengan penempatan CTA strategis.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-[#214634]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#214634] mb-2">Content Strategy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Perencanaan arsitektur informasi dan kalender konten dari TOFU, MOFU, hingga BOFU.</p>
            </div>
          </div>
        </section>

        {/* Ruang Lingkup Pekerjaan */}
        <section className="mb-24">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#F5A623] font-bold tracking-wider uppercase text-xs md:text-sm">Ruang Lingkup</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mt-2">Apa Saja yang Telah Saya Kerjakan?</h2>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                'Pembuatan 15 Halaman Produk Alatan',
                'Pengembangan Halaman Alatan Edu',
                'Landing Page Event Webinar & Kelas Online',
                'Perancangan Halaman Lead Magnet E-Book',
                'Pembuatan Halaman Program Bimtek',
                'Optimasi Kecepatan & Display Home Alatan',
                'Optimasi Tampilan Dokumen Regulasi',
                'Desain Web: KonsultanTKDN.id & KonsultanPemerintah.com'
              ].map((scope, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-[#F5A623] w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium text-sm md:text-base">{scope}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pengalaman Nyata */}
        <section id="pengalaman" className="mb-24">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#F5A623] font-bold tracking-wider uppercase text-xs md:text-sm">Rekam Jejak</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mt-2">Pengalaman Nyata</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-md relative overflow-hidden mb-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#214634] text-white flex items-center justify-center flex-shrink-0 shadow-md font-bold text-xl">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-[#214634] leading-tight">Alatan Asasta Indonesia</h3>
                    <p className="text-[#F5A623] font-semibold text-xs md:text-sm mt-1">Content Strategist & Technical SEO</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-500 font-medium flex items-center gap-2 mb-6">
                  <Calendar className="w-4 h-4" /> 6 Bulan (Proyek Kontrak)
                </p>
              </div>

              <div className="lg:w-2/3 space-y-8">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Strategi Konten & Akuisisi Prospek</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#F5A623] w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed"><strong>Strategi TOFU, MOFU, BOFU:</strong> Merancang dan mengeksekusi strategi konten lintas funnel untuk 3 situs web perusahaan yang berhasil mendatangkan <strong>14 prospek organik</strong> dari audiens B2B dan pemerintahan (ASN/Pokja).</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#F5A623] w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed"><strong>Optimalisasi Lead Magnet:</strong> Melonjakkan unduhan regulasi pemerintahan dari 18 menjadi <strong>148 unduhan aktif</strong>, serta meraih <strong>32 unduhan ebook</strong> melalui penempatan CTA strategis.</p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Riset Data & Pemeliharaan Konten</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#214634] w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed"><strong>Riset Kata Kunci Tingkat Lanjut:</strong> Mengatasi keterbatasan Google Keyword Planner dengan mengumpulkan data pertanyaan riil dari tim CSO dan webinar.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#214634] w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed"><strong>Stabilitas GSC:</strong> Mempertahankan CTR bulanan di angka <strong>2%</strong> via Google Search Console.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portofolio Detail / Karya & Kinerja */}
        <section id="studi-kasus" className="mb-24">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#F5A623] font-bold tracking-wider uppercase text-xs md:text-sm">Portofolio Detail</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mt-2">Karya & Kinerja Eksekusi</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base">Transparansi data adalah kunci. Berikut adalah cuplikan kinerja organik, aset penangkap prospek, dan optimasi UI.</p>
          </div>

          {/* GSC Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="mb-3">
                <h3 className="font-bold text-[#214634] text-base md:text-lg">Situs Alatan</h3>
                <p className="text-xs text-slate-500">Tren Klik Organik (GSC)</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-50 flex-1 border border-slate-100 flex items-center justify-center p-2 min-h-[160px]">
                <img src="https://static.wixstatic.com/media/419f05_2bfdb07a98354779b409331c1cdba223~mv2.png" alt="Traffic GSC 1" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="mb-3">
                <h3 className="font-bold text-[#214634] text-base md:text-lg">Kinerja Kata Kunci</h3>
                <p className="text-xs text-slate-500">Impresi pada kueri spesifik</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-50 flex-1 border border-slate-100 flex items-center justify-center p-2 min-h-[160px]">
                <img src="https://static.wixstatic.com/media/419f05_eec189bd0a47477782cd69fc30ef4050~mv2.png" alt="Traffic GSC 2" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col h-full md:col-span-2 lg:col-span-1">
              <div className="mb-3">
                <h3 className="font-bold text-[#214634] text-base md:text-lg">Analisis SEMrush</h3>
                <p className="text-xs text-slate-500">Pemantauan kinerja kompetitor</p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-50 flex-1 border border-slate-100 flex items-center justify-center p-2 min-h-[160px]">
                <img src="https://static.wixstatic.com/media/419f05_87272df6207d4bb38010311ee10cdc49~mv2.webp" alt="SEMrush Analysis" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* E-Book Lead Magnet */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214634]/5 text-xs font-bold text-[#214634] uppercase tracking-wider mb-1">
                Akuisisi Prospek
              </div>
              <h3 className="font-extrabold text-[#214634] text-2xl md:text-3xl">Desain Landing Page E-Book (Lead Magnet)</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Merancang prototipe halaman e-book sebagai penarik prospek, dengan target KPI awal 50 unduhan.
              </p>
              <p className="text-[#214634] font-semibold text-sm md:text-base bg-[#F8FAFC] p-3 rounded-lg border border-slate-100 mt-2">
                💡 Hasil: Eksekusi landing page ini sukses memenuhi KPI dan menyumbang 50 prospek hangat bagi perusahaan.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div ref={sliderEbookRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none">
                  <div className="snap-center shrink-0 w-[90%] md:w-[85%] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[4/3] flex items-center justify-center p-4">
                    <img src="https://static.wixstatic.com/media/419f05_48d699d4e4db489ba2c77b040766cedc~mv2.webp" alt="Cover Ebook 1" className="w-full h-full object-contain" />
                  </div>
                  <div className="snap-center shrink-0 w-[90%] md:w-[85%] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[4/3] flex items-center justify-center p-4">
                    <img src="https://static.wixstatic.com/media/419f05_9f07648bb0064f858f27d53853d049fa~mv2.webp" alt="Mockup Navigasi" className="w-full h-full object-contain" />
                  </div>
                </div>
                <button onClick={() => scrollSlider(sliderEbookRef, -1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollSlider(sliderEbookRef, 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Event & Webinar */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row-reverse gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214634]/5 text-xs font-bold text-[#214634] uppercase tracking-wider mb-1">
                Manajemen Kampanye
              </div>
              <h3 className="font-extrabold text-[#214634] text-2xl md:text-3xl">Pusat Informasi Event & Webinar</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Mengelola siklus promosi digital untuk event webinar dan kelas bimbingan teknis (Bimtek) secara reguler.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div ref={sliderWebinarRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none">
                  {[
                    "https://static.wixstatic.com/media/419f05_e58ba6f6a76a4703a4500f0cfe1f8f9c~mv2.webp?w=800&q=80",
                    "https://static.wixstatic.com/media/419f05_463cd6385d924d3db969bd90b90fdfd7~mv2.webp?w=800&q=80",
                    "https://static.wixstatic.com/media/419f05_2f7b025caaa040eb967da1bdb7fb8725~mv2.webp?w=800&q=80",
                    "https://static.wixstatic.com/media/419f05_e467d131babc43149225158f270cc513~mv2.webp?w=800&q=80"
                  ].map((src, i) => (
                    <div key={i} className="snap-center shrink-0 w-[90%] md:w-[85%] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[4/3]">
                      <img src={src} alt={`Event ${i+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollSlider(sliderWebinarRef, -1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollSlider(sliderWebinarRef, 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Home Display Before/After */}
          <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-sm mb-8 flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#214634]/5 text-xs font-bold text-[#214634] uppercase tracking-wider mb-1">
                Optimasi UI/UX & Kinerja
              </div>
              <h3 className="font-extrabold text-[#214634] text-2xl md:text-3xl">Pembaruan Tampilan Beranda</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Optimasi teknis dengan dampak visual. Kinerja loading meningkat signifikan dan akses E-Book diposisikan langsung di beranda.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div ref={sliderHomeRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none">
                  <div className="snap-center shrink-0 w-[90%] md:w-[85%] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[4/3]">
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow z-20">SEBELUM OPTIMASI</div>
                    <img src="https://static.wixstatic.com/media/419f05_3961794593ad4da8917c0528afa898ef~mv2.webp?w=800&q=80" alt="Home Sebelum" className="w-full h-full object-cover opacity-70" />
                  </div>
                  <div className="snap-center shrink-0 w-[90%] md:w-[85%] rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 relative aspect-[4/3]">
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow z-20">SESUDAH OPTIMASI</div>
                    <img src="https://static.wixstatic.com/media/419f05_6c3ecffa2db84bd1bd465752cbeb59b1~mv2.webp?w=800&q=80" alt="Home Sesudah" className="w-full h-full object-cover" />
                  </div>
                </div>
                <button onClick={() => scrollSlider(sliderHomeRef, -1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollSlider(sliderHomeRef, 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical SEO Laravel Schema */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-6 items-center">
            <div className="lg:w-1/3 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-wider">
                Technical SEO
              </div>
              <h3 className="font-bold text-[#214634] text-xl md:text-2xl">Skema Manual di Laravel</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Penulisan tag HTML dan penyesuaian kelas CSS secara presisi pada lingkungan backend CMS Laravel. Ini mencegah kerusakan struktur bawaan sembari memastikan perayapan markup artikel Googlebot berjalan optimal.
              </p>
            </div>
            <div className="lg:w-2/3 w-full rounded-2xl overflow-hidden bg-[#1E1E1E] relative p-2 border border-slate-800">
              <img src="https://static.wixstatic.com/media/419f05_fe1a6083ac8d46ccb7d0700a405e7e54~mv2.png" alt="Code Snippet HTML CSS" className="w-full object-contain rounded-lg" />
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer id="kontak" className="bg-[#214634] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Mencari Spesialis SEO yang <br className="hidden sm:block" />
            <span className="text-[#F5A623]">Membawa Hasil Terukur?</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-lg mb-10 max-w-2xl mx-auto">
            Portofolio ini bukti nyata eksekusi teknikal dan strategis. Mari diskusikan bagaimana pendekatan data-driven saya dapat mempercepat pertumbuhan lalu lintas organik perusahaan Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:falahamri93@gmail.com" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5A623] text-[#214634] font-bold text-base hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-2">
              Jadwalkan Wawancara
            </a>
            <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-slate-500 text-white font-semibold text-base hover:border-white transition-all flex items-center justify-center gap-2">
              WhatsApp Saya
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Chat Widget for Ahmad's Portfolio */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex flex-col items-end">
        {isChatOpen && (
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[300px] sm:w-80 mb-4 overflow-hidden flex flex-col h-[380px] transition-all duration-300">
            <div className="bg-[#214634] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative">
                  <Bot className="w-5 h-5 text-[#F5A623]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-[#214634]"></span>
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight">Asisten AI Ahmad</h4>
                  <p className="text-[10px] text-slate-300">Tanya seputar pengalamannya</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3 text-xs md:text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex items-start gap-2 max-w-[85%] ${msg.isUser ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`p-3 rounded-xl shadow-sm ${msg.isUser ? 'bg-[#214634] text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-slate-200">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Tanya sesuatu..." 
                  className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs focus:outline-none" 
                  required 
                />
                <button type="submit" className="w-8 h-8 rounded-full bg-[#214634] text-[#F5A623] flex items-center justify-center flex-shrink-0 cursor-pointer">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)} 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#214634] text-[#F5A623] shadow-2xl flex items-center justify-center hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          {isChatOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 animate-pulse" />}
        </button>
      </div>

    </div>
  );
};
