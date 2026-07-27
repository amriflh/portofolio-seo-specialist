import React from 'react';
import { PageRoute } from '../types';
import { StickyProjectCards } from '../components/StickyProjectCards';
import { ToolsSection } from '../components/ToolsSection';
import { 
  Play, 
  MapPin, 
  Search, 
  PenTool, 
  TrendingUp, 
  Layout, 
  FileText, 
  ArrowRight, 
  Briefcase, 
  Award, 
  ExternalLink, 
  Image as ImageIcon, 
  LayoutTemplate, 
  Map, 
  Monitor, 
  BookOpen, 
  Home, 
  Newspaper, 
  Target, 
  Phone, 
  Mail 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <nav className="bg-[#2A4D3E] text-white rounded-full px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg">
          <div 
            onClick={() => onNavigate('home')} 
            className="font-bold text-xl flex items-center gap-2 cursor-pointer"
          >
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#tentang" className="hover:text-[#FFB800] transition">Tentang</a>
            <a href="#pengalaman" className="hover:text-[#FFB800] transition">Pengalaman</a>
            <a href="#portofolio" className="hover:text-[#FFB800] transition">Portofolio</a>
            <a href="#layanan" className="hover:text-[#FFB800] transition">Layanan</a>
          </div>
          <a 
            href="https://wa.me/62895326089411" 
            target="_blank" 
            rel="noreferrer" 
            className="bg-white text-[#2A4D3E] px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition shadow-sm"
          >
            Hubungi Saya
          </a>
        </nav>
      </div>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block border-2 border-slate-200 px-4 py-2 relative mb-6">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-slate-200"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-slate-200"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-200"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-slate-200"></div>
            <span className="text-slate-600 font-medium">Halo Semua!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
            Saya <span className="text-[#FFB800]">Ahmad Amri Falah</span><br />
            SEO & Content Strategist
          </h1>
          
          <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed">
            Mengubah visibilitas menjadi konversi nyata. Saya meraih peringkat #1 Google Maps dan meningkatkan panggilan bisnis klien hingga 35%.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#portofolio" 
              className="bg-[#2A4D3E] text-white pl-6 pr-2 py-2 rounded-full font-medium flex items-center gap-4 hover:bg-[#1f3a2f] transition shadow-md"
            >
              Lihat Portofolio
              <div className="bg-white text-[#2A4D3E] w-10 h-10 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </div>
            </a>
            <a 
              href="https://langsungcuan.biz.id/" 
              target="_blank" 
              rel="noreferrer" 
              className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-full font-medium hover:border-slate-400 transition"
            >
              Kunjungi Website
            </a>
          </div>
        </div>
        
        <div className="relative h-[500px] flex justify-center items-center">
          <div className="absolute w-[380px] h-[380px] bg-[#FFB800] rounded-[43%_57%_70%_30%_/_30%_30%_70%_70%] -z-10 animate-blob"></div>
          
          <div className="w-[320px] h-[420px] bg-slate-200 rounded-[100px] overflow-hidden border-8 border-white shadow-xl relative flex items-center justify-center">
            <img 
              src="https://static.wixstatic.com/media/419f05_d5417751fe2d4a5eba05a358926cb846~mv2.jpg" 
              alt="Foto Profil Ahmad Amri Falah" 
              className="w-full h-full object-cover" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://langsungcuan.biz.id/gambarbebas/20250621-023904_landing%20page%20muncul%20di%20halaman%20pertama%20.png';
              }}
            />
          </div>

          <div className="absolute top-20 right-10 bg-[#FFB800] text-slate-900 font-bold px-4 py-2 rounded-full shadow-lg transform rotate-6 text-sm animate-float">
            SEO Specialist
          </div>
          <div className="absolute bottom-20 left-10 bg-[#2A4D3E] text-white font-bold px-4 py-2 rounded-full shadow-lg transform -rotate-3 flex items-center gap-2 text-sm animate-float-reverse">
            <span className="w-2 h-2 bg-[#FFB800] rounded-full animate-pulse"></span>
            Content Strategist
          </div>
        </div>
      </header>

      {/* Marquee Ticker */}
      <div className="bg-[#FFB800] py-4 overflow-hidden transform -rotate-1 relative z-20 w-[105%] -ml-4 border-y-4 border-[#2A4D3E] shadow-md">
        <div className="animate-scroll text-[#2A4D3E] font-bold text-xl uppercase tracking-wider whitespace-nowrap">
          <div className="flex items-center gap-10 pr-10">
            <span>SEO Strategy</span> <span className="text-2xl">•</span>
            <span>Content Writing</span> <span className="text-2xl">•</span>
            <span>Local SEO</span> <span className="text-2xl">•</span>
            <span>WordPress</span> <span className="text-2xl">•</span>
            <span>Keyword Research</span> <span className="text-2xl">•</span>
            <span>Google Bisnisku</span> <span className="text-2xl">•</span>
            <span>Landing Page</span> <span className="text-2xl">•</span>
          </div>
          <div className="flex items-center gap-10 pr-10">
            <span>SEO Strategy</span> <span className="text-2xl">•</span>
            <span>Content Writing</span> <span className="text-2xl">•</span>
            <span>Local SEO</span> <span className="text-2xl">•</span>
            <span>WordPress</span> <span className="text-2xl">•</span>
            <span>Keyword Research</span> <span className="text-2xl">•</span>
            <span>Google Bisnisku</span> <span className="text-2xl">•</span>
            <span>Landing Page</span> <span className="text-2xl">•</span>
          </div>
        </div>
      </div>

      {/* Stats Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-extrabold text-[#FFB800] mb-2">#1</h3>
            <p className="text-slate-600 font-medium">Google Maps</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-extrabold text-[#FFB800] mb-2">254</h3>
            <p className="text-slate-600 font-medium">Panggilan Per Bulan</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-extrabold text-[#FFB800] mb-2">#5</h3>
            <p className="text-slate-600 font-medium">Halaman Pertama</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl font-extrabold text-[#FFB800] mb-2">10%</h3>
            <p className="text-slate-600 font-medium">Kenaikan Traffic</p>
          </div>
        </div>
      </section>

      {/* Keahlian / Services */}
      <section id="layanan" className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-12">
          <span className="text-[#FFB800] font-bold text-lg block mb-2">Keahlian Utama</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Apa yang bisa saya lakukan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">SEO Lokal</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Optimasi Google Business Profile, local citation, dan strategi pencarian berbasis lokasi yang terbukti meraih peringkat #1.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Riset Kata Kunci</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Identifikasi keyword potensial menggunakan SEMrush, Google Keyword Planner, dan Ubersuggest untuk target yang terukur.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <PenTool className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Content Writing</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Penulisan artikel SEO yang tampil di AI Overview Google (SGE) dan memberikan nilai edukasi nyata bagi pembaca.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">On-Page SEO</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Optimasi heading, meta tag, internal link dengan WordPress & Yoast SEO untuk performa ranking yang optimal.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Landing Page</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Desain landing page berkonversi tinggi dengan AI, diarahkan ke WhatsApp atau form pembelian dengan copywriting tepat.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-[#2A4D3E] hover:text-white transition duration-300">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#2A4D3E]">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
            <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed text-sm">
              Perencanaan kalender konten berbasis data untuk mendukung pertumbuhan digital bisnis secara konsisten dan terukur.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Yang Digunakan Section */}
      <ToolsSection />

      {/* Tentang Saya */}
      <section id="tentang" className="bg-[#2A4D3E] py-24 my-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute w-[350px] h-[350px] bg-[#FFB800] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"></div>
            <div className="w-[300px] h-[400px] bg-slate-200 rounded-[80px] overflow-hidden border-8 border-white relative z-10 flex items-center justify-center">
              <img 
                src="https://static.wixstatic.com/media/419f05_de1dc71f9a4741b98278948b998e96ad~mv2.jpeg" 
                alt="Amri Falah" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://langsungcuan.biz.id/gambarbebas/20250621-023904_landing%20page%20muncul%20di%20halaman%20pertama%20.png';
                }}
              />
            </div>
            
            <div className="absolute top-1/4 -left-4 bg-[#2A4D3E] border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full z-20 shadow-md">
              Universitas Mercu Buana
            </div>
            <div className="absolute bottom-1/4 -right-4 bg-[#FFB800] text-slate-900 text-xs font-bold px-4 py-2 rounded-full z-20 shadow-md">
              S1 Ilmu Komunikasi
            </div>
          </div>

          <div>
            <span className="text-[#FFB800] font-bold text-lg block mb-2">Tentang Saya</span>
            <h2 className="text-4xl font-extrabold text-white mb-6">Strategi konten yang menghasilkan konversi nyata.</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Saya adalah spesialis SEO dan pemasaran konten dengan pengalaman terbukti. Saya fokus meningkatkan traffic organik dan membantu UKM memperluas eksposur digital melalui Google Bisnisku dan SEO lokal.
            </p>
            <p className="text-slate-300 mb-10 leading-relaxed">
              Saya merancang landing page berkonversi tinggi dan optimasi Google Business Profile. Konten yang saya buat ramah SEO dan tampil di AI Overview (SGE) Google.
            </p>

            <div className="flex items-center gap-8">
              <a 
                href="https://langsungcuan.biz.id/" 
                target="_blank" 
                rel="noreferrer" 
                className="border-2 border-[#FFB800] text-[#FFB800] pl-6 pr-2 py-2 rounded-full font-medium flex items-center gap-4 hover:bg-[#FFB800] hover:text-[#2A4D3E] transition group"
              >
                Kunjungi Website Saya
                <div className="bg-[#FFB800] text-[#2A4D3E] group-hover:bg-white w-8 h-8 rounded-full flex items-center justify-center transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Riwayat Kerja / Pengalaman */}
      <section id="pengalaman" className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#FFB800] font-bold text-lg block mb-2">Riwayat Kerja</span>
            <h2 className="text-4xl font-extrabold text-slate-900">Pengalaman Nyata</h2>
          </div>

          <div className="space-y-8">
            {/* Alatan Asasta Indonesia */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#2A4D3E]/10 shadow-md flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-[#2A4D3E] text-white p-4 rounded-2xl shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Alatan Asasta Indonesia</h3>
                <p className="text-[#2A4D3E] font-bold mb-2">Content Strategist & Technical SEO Specialist</p>
                <p className="text-slate-500 text-sm mb-4">Des 2025 - Sekarang</p> 
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li>• <strong>Strategi Lead Gen:</strong> Merancang konten TOFU, MOFU, BOFU yang menghasilkan 14 prospek organik B2B/Pemerintahan (ASN/Pokja) dan meningkatkan unduhan regulasi dari 18 menjadi 148.</li>
                  <li>• <strong>Riset & Optimasi:</strong> Melakukan riset kata kunci melalui data CSO & Webinar untuk melampaui limitasi Google Keyword Planner serta menjaga CTR GSC di angka 2% melalui penyesuaian intensi audiens.</li>
                  <li>• <strong>Technical SEO:</strong> Menulis kode HTML/CSS manual pada CMS Laravel untuk optimasi skema artikel dan meningkatkan skor PageSpeed Insights melalui pembaruan UI & kecepatan teknis.</li>
                  <li>• <strong>Lead Magnet & Community:</strong> Mengelola 32 unduhan eBook via strategi CTA yang terintegrasi dengan data CSO untuk pendistribusian informasi komunitas perusahaan.</li>
                  <li>• <strong>Maintenance Konten:</strong> Rutin mengoptimasi artikel lama dan halaman jasa guna memastikan relevansi konten tetap tinggi terhadap perubahan intensi pencarian audiens target.</li>
                </ul>
                <button 
                  onClick={() => onNavigate('alatan')} 
                  className="inline-flex items-center gap-2 text-[#2A4D3E] font-bold hover:text-[#FFB800] transition cursor-pointer"
                >
                  Lihat Studi Kasus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Laundry Express Mamamu */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start opacity-90">
              <div className="bg-slate-800 text-white p-4 rounded-2xl shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Laundry Express Mamamu</h3>
                <p className="text-[#FFB800] font-bold mb-2">Spesialis Strategi Konten, SEO Lokal & Media Sosial</p>
                <p className="text-slate-500 text-sm mb-4">Jan 2021 - Sekarang</p>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li>• Pengembangan strategi konten SEO lokal yang komprehensif dan terukur.</li>
                  <li>• Optimasi Google Business Profile, meraih peringkat #1 Google Maps dan 254 panggilan/bulan.</li>
                  <li>• Penulisan artikel LinkedIn untuk mendorong engagement brand profesional.</li>
                </ul>
                <button 
                  onClick={() => onNavigate('gmb-laundry')} 
                  className="inline-flex items-center gap-2 text-[#2A4D3E] font-bold hover:text-[#FFB800] transition cursor-pointer"
                >
                  Lihat Studi Kasus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Toko Kue A Tiga */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start opacity-90">
              <div className="bg-[#FFB800] text-[#2A4D3E] p-4 rounded-2xl shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Toko Kue A Tiga</h3>
                <p className="text-[#2A4D3E] font-bold mb-2">SEO Content Specialist & Landing Page Builder</p>
                <p className="text-slate-500 text-sm mb-4">Jan 2021 - Sekarang</p>
                <ul className="text-slate-600 space-y-2 mb-6 text-sm">
                  <li>• Website dari tidak terindeks ke halaman 1 Google untuk 3 kata kunci produk dalam 2 bulan.</li>
                  <li>• Membuat Landing Page WA yang mengkonversi dan memperbarui konten secara berkala.</li>
                  <li>• Meningkatkan web traffic organik 2% melalui internal linking dari artikel ke landing page.</li>
                </ul>
                <button 
                  onClick={() => onNavigate('toko-kue')} 
                  className="inline-flex items-center gap-2 text-[#2A4D3E] font-bold hover:text-[#FFB800] transition cursor-pointer"
                >
                  Lihat Studi Kasus <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Groperti */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start opacity-80">
              <div className="bg-slate-200 text-slate-600 p-4 rounded-2xl shrink-0">
                <PenTool className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">Groperti</h3>
                <p className="text-slate-600 font-bold mb-2">Content Writer Intern, SEO Properti</p>
                <p className="text-slate-500 text-sm mb-4">Okt 2024 - Jan 2025</p>
                <ul className="text-slate-600 space-y-2 text-sm">
                  <li>• Menulis konten blog perusahaan properti sesuai keyword target dalam strategi SEO.</li>
                  <li>• Menulis judul dan meta description untuk meningkatkan CTR organik.</li>
                  <li>• Memastikan topik tulisan relevan dengan target audiens properti.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-[#FFB800] font-bold text-lg block mb-2">Pelatihan & Sertifikasi</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Kredensial Terverifikasi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-[#2A4D3E] text-white p-3 rounded-xl"><Award className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900">SEO Fundamentals Exam</h4>
              <p className="text-slate-500 text-sm">Semrush Academy, Sep 2024</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-[#FFB800] text-[#2A4D3E] p-3 rounded-xl"><Award className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900">Google My Business Basics</h4>
              <p className="text-slate-500 text-sm">Google Skill Workshop, Agu 2024</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-[#2A4D3E] text-white p-3 rounded-xl"><Award className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900">SEO Course Completed</h4>
              <p className="text-slate-500 text-sm">MySkill, Jun 2024</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-[#FFB800] text-[#2A4D3E] p-3 rounded-xl"><Award className="w-6 h-6" /></div>
            <div>
              <h4 className="font-bold text-slate-900">Impactful Writer Certification</h4>
              <p className="text-slate-500 text-sm">Impactful Writer, Feb 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projek Pribadi Section with GSAP Sticky Stacked Cards Animation */}
      <StickyProjectCards onNavigate={onNavigate} />

      {/* Footer */}
      <footer className="bg-[#2A4D3E] text-white py-16 text-center border-t-8 border-[#FFB800]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4">Siap membawa bisnis Anda ke halaman pertama Google?</h2>
          <p className="text-slate-300 mb-8">Mari berkolaborasi dan tingkatkan konversi digital Anda.</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="bg-[#FFB800] text-[#2A4D3E] px-8 py-3 rounded-full font-bold hover:bg-white transition flex items-center gap-2">
              <Phone className="w-5 h-5" /> WhatsApp Saya
            </a>
            <a href="mailto:falahamri93@gmail.com" className="bg-white text-[#2A4D3E] p-3 rounded-full hover:bg-gray-100 transition flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-slate-400 text-sm">© 2026 Ahmad Amri Falah. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};
