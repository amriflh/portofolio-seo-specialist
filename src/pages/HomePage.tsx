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
              src="https://static.wixstatic.com/media/419f05_1bf969065e1848c3bb32f8ee81e33290~mv2.webp" 
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
            <p className="text-slate-300 mb-8 leading-relaxed">
              Saya merancang landing page berkonversi tinggi dan optimasi Google Business Profile. Konten yang saya buat ramah SEO dan tampil di AI Overview (SGE) Google.
            </p>

            {/* Social Media & GitHub Links */}
            <div className="mb-8">
              <span className="text-[#FFB800] text-xs font-bold uppercase tracking-wider block mb-3">
                Media Sosial & Portofolio:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.instagram.com/amridigital.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ahmad-amri-falah-54a232291/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/amriflh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://x.com/amridigitalai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="Twitter / X"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter (X)</span>
                </a>

                <a
                  href="https://www.threads.com/@amridigital.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="Threads"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24c-6.27 0-11.336-4.756-11.336-11.83 0-7.391 5.378-12.17 11.336-12.17 6.302 0 11.218 4.887 11.218 11.954 0 7.332-5.118 12.046-11.218 12.046zm.106-2.02c4.896 0 8.974-3.69 8.974-10.026 0-5.836-3.864-9.934-8.974-9.934-5.013 0-9.17 4.098-9.17 10.15 0 5.918 3.96 9.81 9.17 9.81zm2.348-5.385c-1.396.883-3.14 1.137-4.636.577-1.897-.71-2.912-2.585-2.56-4.58.337-1.91 1.986-3.328 3.923-3.385 1.745-.05 3.328.784 4.054 2.287.412.853.483 1.83.21 2.74-.32 1.07-1.1 1.933-2.148 2.361zm-1.828-1.874c.553-.227.962-.68 1.13-1.246.168-.567.086-1.17-.227-1.666-.353-.558-1.023-.83-1.673-.678-.853.2-1.42.986-1.334 1.86.085.874.838 1.54 1.717 1.54.127 0 .256-.013.387-.04z"/>
                  </svg>
                  <span>Threads</span>
                </a>

                <a
                  href="https://www.facebook.com/AMRIATIGA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1f3a2f] hover:bg-[#FFB800] text-slate-200 hover:text-[#2A4D3E] px-3.5 py-2 rounded-full text-xs font-bold border border-white/10 hover:border-[#FFB800] transition-all duration-300 group shadow-sm"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

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
