import React from 'react';
import { PageRoute } from '../types';
import { ArrowLeft, ArrowUpRight, CheckCircle, Info, Lightbulb, MessageSquare, Rocket, Store, Calendar, Tag, Mail } from 'lucide-react';

interface KontenLaundryPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const KontenLaundryPage: React.FC<KontenLaundryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-slate-600 selection:bg-[#F5A623] selection:text-[#214634]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#214634] transition-colors bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a href="#studi-kasus" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-[#214634] transition-colors">Studi Kasus</a>
            <a href="#kontak" className="bg-[#F5A623] text-[#214634] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-colors shadow-sm">
              Hubungi Saya
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-36 pb-16 px-6 max-w-7xl mx-auto relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-14 overflow-hidden">
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#214634] leading-[1.1] tracking-tight mb-6">
              Pemasaran Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#214634] to-[#F5A623]">& SEO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Transformasi SEO & Konten Laundry Dari Peningkatan Peringkat Signifikan hingga Konversi Nyata Menjadi Pelanggan (dengan Bukti Closing)
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-slate-200">
                <Store className="text-slate-500 w-5 h-5" />
                <span className="text-sm text-slate-600">
                  <strong>Projek Pribadi Saya:</strong>{' '}
                  <a href="https://langsungcuan.biz.id/" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors">langsungcuan.biz.id</a>
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-slate-200">
                <Calendar className="text-slate-500 w-5 h-5" />
                <span className="text-sm text-slate-600">
                  <strong>Data Diambil:</strong> 31 Mei 2025
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-square bg-[#214634] rounded-full flex items-center justify-center p-8 shadow-2xl">
              <Rocket className="text-[#F5A623] w-28 h-28 drop-shadow-lg z-10 relative" />
              <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-4 shadow-lg border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Traffic</p>
                  <p className="text-sm font-extrabold text-[#214634]">Meningkat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-12">
        
        {/* Intro */}
        <section id="introduction">
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center border border-slate-200 text-2xl">
                🚀
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#214634] tracking-tight">
                Ini Dia Cara Saya Bikin Konten SEO yang Benar-Benar Menghasilkan!
              </h2>
            </div>
            
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Di portofolio ini, saya mau cerita detail gimana strategi SEO jitu yang saya kombinasikan dengan perbaikan UI/UX (tampilan dan pengalaman pengguna) berhasil bikin halaman-halaman layanan laundry di <code className="px-2 py-1 bg-[#F8FAFC] border border-slate-200 text-[#214634] text-sm rounded-lg font-mono">langsungcuan.biz.id</code> jadi makin oke performanya. Fokus utama saya adalah membuat calon pelanggan nyaman dari awal mereka mencari di Google sampai akhirnya mereka pesan laundry, khususnya dengan kata kunci yang memang orang pakai pas mau order.
              </p>
              <p>
                Semua data yang saya pakai di sini saya ambil langsung dari Google Search Console per tanggal 31 Mei 2025. Jadi, ini bukti nyata kalau kerjaan optimasi saya beneran bisa narik calon pelanggan yang lagi butuh laundry berkualitas.
              </p>
            </div>
          </div>
        </section>

        {/* Laundry Keyword Analysis */}
        <section id="laundry-analysis" className="space-y-8">
          <div className="bg-[#214634] rounded-3xl p-8 md:p-12 border border-slate-800 text-center relative overflow-hidden text-white">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-sm border border-white/20 text-3xl">
                📊
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Yuk, Kita Bedah Performa Kata Kunci Layanan Laundry-nya!
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Nah, di bawah ini saya kasih lihat rincian performa halaman-halaman yang sudah saya optimalkan untuk kata kunci seputar laundry. Angka-angka penting yang kita lihat bareng itu Klik, Tayangan (berapa kali muncul di Google), CTR (seberapa banyak yang ngeklik), dan Posisi rata-rata di Google.
              </p>
            </div>
          </div>

          {/* Group 1 */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Kelompok Kata Kunci
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#214634] flex items-center gap-3">
                  <span className="text-3xl">⚡</span> "Laundry Express" & "Laundry Kilat"
                </h3>
              </div>
              <p className="text-slate-600 mb-8 text-lg">Ini saya targetkan buat orang-orang di Jakarta yang lagi buru-buru dan butuh laundry cepat.</p>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-slate-200">
                      <th className="py-4 px-6 font-bold text-[#214634]">Halaman (URL Singkat)</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Klik</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Tayangan</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">CTR</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Posisi</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Catatan SEO & Tampilan dari Saya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/18/laundry-express-7-jam-terbaik-dan-terpercaya-di-jakarta-pusat" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../laundry-express-7-jam...jakarta-pusat</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">9</td>
                      <td className="py-4 px-6 align-top text-slate-600">762</td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs">1.18%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">8.33</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Posisinya udah oke. Biar CTR-nya naik, meta deskripsinya perlu lebih nonjolin "7 Jam Terbaik". Halamannya juga harus ada tombol ajakan (CTA) yang pamerin soal kecepatan.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/Laundy-Express-Mamamu" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../Laundy-Express-Mamamu</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">6</td>
                      <td className="py-4 px-6 align-top text-slate-600">1431</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0.42%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">9.44</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Munculnya sering, tapi yang ngeklik dikit. Coba perjelas apa sih untungnya "Mamamu Laundry Express" di cuplikan Google. Meta-nya juga dibikin lebih nyambung sama yang orang cari pas ngetik "laundry express".</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/19/laundry-express-12-jam-terbaik-dan-terpercaya-di-cikini" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../laundry-express-12-jam...di-cikini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">4</td>
                      <td className="py-4 px-6 align-top text-slate-600">472</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0.85%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">5.19</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Posisinya mantap banget! Biar CTR-nya makin bagus, pasang Keunggulan Unik (USP) "12 Jam Cikini" di meta. Pastikan juga halaman landing-nya bikin orang pengen order.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/50/laundry-kilat-di-sekitar-hotel-mercure-cikini" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../laundry-kilat-di-sekitar-hotel-mercure-cikini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">1</td>
                      <td className="py-4 px-6 align-top text-slate-600">129</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0.78%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">7.91</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Ini targetnya spesifik banget (Hotel Mercure Cikini). Posisinya lumayan. Perkuat ajakan di meta buat tamu hotel. Tampilan halamannya juga harus gampang dipakai turis/tamu.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/19/jasa-laundry-kilat-antarjemput-12-jam-di-cikini" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../jasa-laundry-kilat-antarjemput-12-jam-cikini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">0</td>
                      <td className="py-4 px-6 align-top text-slate-600">75</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">6.21</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Posisinya udah top, tapi kok 0 klik? Ini perlu dicek lagi. Pastikan meta-nya menarik dan gak ada masalah teknis pas muncul di Google.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/kategori/2/jasa-laundry-express" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../kategori/2/jasa-laundry-express</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">0</td>
                      <td className="py-4 px-6 align-top text-slate-600">82</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">8.82</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Ini halaman kategori. Posisinya oke. Coba judul & deskripsi meta-nya dibikin lebih menggoda biar diklik. Tampilan kategori juga harus jelas, bisa disaring, dan gampang ngarahin ke layanan spesifik.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 border-l-4 border-l-[#F5A623] flex items-start gap-4">
                <Lightbulb className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
                  <strong className="text-[#214634] not-italic font-bold">Analisis & Saran Saya untuk "Laundry Express & Kilat":</strong> Beberapa halaman udah punya posisi bagus. PR utamanya sekarang adalah naikin CTR. Caranya? Bikin cuplikan (judul & deskripsi meta) lebih menarik. Terus, pastikan halaman landing-nya enak dilihat dan gampang dipakai, terutama tonjolkan soal cepatnya layanan dan mudahnya pesan.
                </p>
              </div>
            </div>
          </div>

          {/* Group 2 */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Kelompok Kata Kunci
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#214634] flex items-center gap-3">
                  <span className="text-3xl">🚚</span> "Laundry Antar Jemput" & "Laundry di RSCM"
                </h3>
              </div>
              <p className="text-slate-600 mb-8 text-lg">Ini buat nyasar pelanggan yang pengen praktis, laundry-nya dijemput dan diantar. Termasuk target khusus kayak keluarga pasien di RSCM.</p>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-slate-200">
                      <th className="py-4 px-6 font-bold text-[#214634]">Halaman (URL Singkat)</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Klik</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Tayangan</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">CTR</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Posisi</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Catatan SEO & Tampilan dari Saya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/2/ARTICLES/20/jasa-laundry-antar-jemput-untuk-keluarga-pasien-rscm-solusi-praktis-saat-menunggu-rawat-inap" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../ARTICLES/20/jasa-laundry-antar-jemput...rscm...</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">29</td>
                      <td className="py-4 px-6 align-top text-slate-600">282</td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">10.28%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full text-xs">13.27</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed"><strong className="text-[#214634]">Ini Juara!</strong> CTR-nya tinggi banget. Wajib dikejar biar masuk halaman 1 Google. Artikelnya harus punya tombol ajakan yang jelas banget ke layanan laundry.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/30/jasa-laundry-express-antar-jemput-24-jam-terbaik-di-jakarta" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/30/jasa-laundry-express-antar-jemput-24-jam...</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">5</td>
                      <td className="py-4 px-6 align-top text-slate-600">744</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0.67%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full text-xs">13.52</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Ini gabungan Express & Antar Jemput. Perlu dioptimasi lagi biar nangkring di halaman 1. Pastikan keunggulan "24 jam Antar Jemput" kelihatan jelas di meta dan isi halamannya.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/48/laundry-antar-jemput-di-dekat-novotel-jakarta-cikini" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/48/laundry-antar-jemput-dekat-novotel-cikini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">5</td>
                      <td className="py-4 px-6 align-top text-slate-600">105</td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">4.76%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">09.08</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">CTR & posisinya udah bagus buat target hotel. Tampilan halamannya harus enak dibuka di HP, info jangkauan ke Novotel juga harus jelas.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/45/layanan-laundry-antar-jemput-untuk-kenyamanan-pasien-dan-pengunjung-di-rumah-sakit-umum-pusat-nasional-dr-cipto-mangunkusumo" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/45/layanan-laundry-antar-jemput...rscm...</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">3</td>
                      <td className="py-4 px-6 align-top text-slate-600">87</td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs">3.45%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">8.6</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Targetnya RSCM (Dr. Cipto). Posisi & CTR-nya oke. Tampilannya harus informatif, bikin orang merasa dipahami (empatik), dan gampang buat keluarga pasien kalau mau pesan.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/2/ARTICLES/20/jasa-laundry-antar-jemput-untuk-keluarga-pasien-rscm-rawat-inap" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../ARTICLES/20/...rscm-rawat-inap (varian)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">3</td>
                      <td className="py-4 px-6 align-top text-slate-600">27</td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">11.11%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-slate-100 text-slate-500 font-medium px-3 py-1 rounded-full text-xs">24.78</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Ini varian URL/judul buat RSCM. CTR-nya tinggi banget! Tapi posisinya jauh, kayaknya ada masalah duplikasi konten atau SEO-nya kurang kuat. Penting banget pasang canonical tag.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 border-l-4 border-l-[#F5A623] flex items-start gap-4">
                <Lightbulb className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
                  <strong className="text-[#214634] not-italic font-bold">Analisis & Saran Saya untuk "Laundry Antar Jemput & RSCM":</strong> Artikel yang nargetin "laundry untuk keluarga pasien RSCM" ini potensinya gede banget, CTR-nya tinggi. Halaman layanan antar jemputnya harus nunjukin kalau pesannya gampang, area layanannya jelas, dan kontak gampang dihubungi. Coba deh bikin halaman khusus "Layanan Laundry RSCM" biar lebih fokus dan pengalamannya lebih pas buat mereka.
                </p>
              </div>
            </div>
          </div>

          {/* Group 3 */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Kelompok Kata Kunci
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#214634] flex items-center gap-3">
                  <span className="text-3xl">📍</span> "Laundry di Sekitar" & "Laundry Terdekat"
                </h3>
              </div>
              <p className="text-slate-600 mb-8 text-lg">Ini buat nangkep orang yang nyari laundry berdasarkan lokasi dekat mereka, biasanya sih dari HP.</p>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-slate-200">
                      <th className="py-4 px-6 font-bold text-[#214634]">Halaman (URL Singkat)</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Klik</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Tayangan</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">CTR</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Posisi</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Catatan SEO & Tampilan dari Saya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/53/laundry-antar-jemput-di-sekitar-hotel-cikini-jakarta" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/53/laundry-sekitar-hotel-cikini-jakarta</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">1</td>
                      <td className="py-4 px-6 align-top text-slate-600">32</td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs">3.12%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">6.5</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Posisinya bagus banget. Coba meta-nya dibikin lebih menarik lagi. Tampilannya harus ada info Hotel Cikini & gampang diakses. Mungkin bisa tambahin peta.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/52/laundry-antar-jemput-di-sekitar-hotel-ibis-budget-cikini" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/52/laundry-sekitar-hotel-ibis-budget-cikini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">1</td>
                      <td className="py-4 px-6 align-top text-slate-600">37</td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs">2.7%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full text-xs">11.3</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Usahain biar masuk halaman 1. Tekankan keunggulan buat tamu hotel (misalnya cepat, ada diskon khusus) di meta dan isi halamannya.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/produk/54/laundry-terdekat-di-cikini-jakarta-solusi-cepat-murah-untuk-warga-dan-wisatawan" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../produk/54/laundry-terdekat-cikini-jakarta...</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">0</td>
                      <td className="py-4 px-6 align-top text-slate-600">37</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">6.86</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">"Laundry Terdekat Cikini" - Posisinya udah keren! Tapi kok 0 klik? Ini aneh. Coba judul & deskripsi meta-nya dibikin super menarik. Pastikan juga Google My Business-nya optimal & datanya sama semua.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 border-l-4 border-l-[#F5A623] flex items-start gap-4">
                <Lightbulb className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
                  <strong className="text-[#214634] not-italic font-bold">Analisis & Saran Saya untuk "Laundry di Sekitar/Terdekat":</strong> Halaman yang nargetin lokasi dekat (hotel, area tertentu) ini posisinya udah bagus, penting banget buat SEO Lokal. Tampilan halaman ini harus ada alamat jelas, nomor kontak yang bisa langsung diklik buat nelpon, jam buka, dan bagusnya lagi, ada peta interaktif. Optimasi Google Business Profile itu kuncinya!
                </p>
              </div>
            </div>
          </div>

          {/* Group 4 */}
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" /> Kelompok Kata Kunci
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#214634] flex items-center gap-3">
                  <span className="text-3xl">💰</span> "Berapa Harga Laundry 1 Kilo"
                </h3>
              </div>
              <p className="text-slate-600 mb-8 text-lg">Ini buat jawab pertanyaan orang yang lagi cari-cari info harga laundry kiloan.</p>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-slate-200">
                      <th className="py-4 px-6 font-bold text-[#214634]">Halaman (URL Singkat)</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Klik</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Tayangan</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">CTR</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Posisi</th>
                      <th className="py-4 px-6 font-bold text-[#214634]">Catatan SEO & Tampilan dari Saya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/2/ARTICLES/13/berapa-harga-laundry-1-kilo-tips-lengkap" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../ARTICLES/13/berapa-harga-laundry-1-kilo...</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">8</td>
                      <td className="py-4 px-6 align-top text-slate-600">2282</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0.35%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full text-xs">16.75</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Munculnya sering banget! Ini kata kunci yang niatnya tinggi. Wajib dikejar biar masuk halaman 1. Judul & meta-nya dioptimasi biar CTR naik. Tampilan artikelnya juga harus jelas dan ngarahin ke daftar harga.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/Price-List-Laundry-Kiloan" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../Price-List-Laundry-Kiloan</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">0</td>
                      <td className="py-4 px-6 align-top text-slate-600">31</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-extrabold px-3 py-1 rounded-full text-xs">5.45</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Posisinya udah bagus banget buat "Price List". Pastikan gampang diakses dari artikel "berapa harga...". Tampilan daftar harganya harus transparan, gampang dibaca, dan ada tombol buat order.</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 align-top">
                        <a href="https://langsungcuan.biz.id/Berapa-Harga-Laundry-Per-Kilonya-Laundry-Express-Mamamu" target="_blank" rel="noopener noreferrer" className="text-[#214634] font-semibold hover:text-[#F5A623] transition-colors flex items-center gap-2">
                          <span className="inline-block max-w-[200px] truncate">.../Berapa-Harga-Laundry-Per-Kilonya-Laundry-Express-Mamamu</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                      <td className="py-4 px-6 align-top font-medium text-slate-700">0</td>
                      <td className="py-4 px-6 align-top text-slate-600">27</td>
                      <td className="py-4 px-6 align-top"><span className="bg-red-100 text-red-600 font-medium px-3 py-1 rounded-full text-xs">0%</span></td>
                      <td className="py-4 px-6 align-top"><span className="bg-emerald-100 text-emerald-700 font-bold px-3 py-1 rounded-full text-xs">7.37</span></td>
                      <td className="py-4 px-6 align-top text-slate-600 leading-relaxed">Ini varian kata kunci harga. Posisinya oke. Pastikan isinya jawab pertanyaan dengan jelas dan ada ajakan kuat ke layanan atau daftar harga.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 border-l-4 border-l-[#F5A623] flex items-start gap-4">
                <Lightbulb className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
                  <strong className="text-[#214634] not-italic font-bold">Analisis & Saran Saya untuk "Berapa Harga Laundry 1 Kilo":</strong> Artikel info harga ini banyak yang lihat, artinya orang emang butuh info ini. Tampilan artikelnya harus kasih info harga yang jelas (misalnya, tabel perbandingan paket), terus ada ajakan buat lihat layanan atau daftar harga detail. Ini "pintu masuk" penting biar orang jadi pelanggan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="studi-kasus">
          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center border border-slate-200 text-2xl">
                📈
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#214634] tracking-tight">
                Nih, Dampak Kontennya & Bukti Ada yang Order!
              </h2>
            </div>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10">
              Strategi SEO yang bagus itu bukan cuma bikin peringkat naik dan traffic banyak, tapi juga harus ada yang beneran jadi pelanggan. Ini contoh bukti pesanan yang masuk. Artinya, konten yang saya optimalkan dan bikin gampang dicari di Google itu beneran bantu dapetin pelanggan buat layanan laundry-nya.
            </p>

            {/* Proof Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Card 1 */}
              <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  <h4 className="text-lg md:text-xl font-bold text-[#214634]">Bukti Orderan Laundry #1</h4>
                </div>
                
                <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-white flex items-center justify-center min-h-[250px]">
                  <img src="https://langsungcuan.biz.id/gambarbebas/20250531-050152_orderan%201.jpg" alt="Bukti Pesanan Laundry 1" className="w-full h-auto object-cover max-h-[350px]" />
                </div>
                
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  Ini screenshot konfirmasi orderan laundry dari pelanggan. Kelihatan kan, calon pelanggan nemu layanan ini dari Google terus langsung pesan.
                </p>
                
                <div className="pt-4 border-t border-slate-200/60">
                  <p className="text-sm text-slate-500 italic">
                    <strong className="text-[#214634] not-italic font-semibold">Sumber:</strong> Catatan Transaksi / Chat sama Pelanggan
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200 flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="text-emerald-500 w-5 h-5" />
                  <h4 className="text-lg md:text-xl font-bold text-[#214634]">Bukti Orderan Laundry #2</h4>
                </div>
                
                <div className="rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-white flex items-center justify-center min-h-[250px]">
                  <img src="https://langsungcuan.biz.id/gambarbebas/20250531-050152_orderan%202.jpg" alt="Bukti Pesanan Laundry 2" className="w-full h-auto object-cover max-h-[350px]" />
                </div>
                
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  Satu lagi contoh orderan yang berhasil masuk. Gara-gara gampang nongol di Google buat kata kunci penting kayak "laundry antar jemput" atau "laundry express terdekat", pelanggan ini jadi nyantol.
                </p>
                
                <div className="pt-4 border-t border-slate-200/60">
                  <p className="text-sm text-slate-500 italic">
                    <strong className="text-[#214634] not-italic font-semibold">Sumber:</strong> Catatan Transaksi / Chat sama Pelanggan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
              <Info className="text-emerald-500 w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-emerald-800 text-sm md:text-base italic leading-relaxed">
                <strong className="text-emerald-900 not-italic font-bold">Catatan Penting:</strong> Bukti closing kayak gini nunjukin kalau investasi di SEO itu gak sia-sia, karena hasilnya nyata: pelanggan nambah, pemasukan juga naik.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="kontak" className="bg-[#214634] text-slate-300 py-16 relative overflow-hidden rounded-t-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">Mari Ngobrol & Kolaborasi</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto">
            <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="bg-[#F5A623] text-[#214634] font-bold text-base px-8 py-4 rounded-full hover:bg-yellow-400 transition-all shadow-md inline-flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" /> Hubungi Saya
            </a>
            <a href="mailto:falahamri93@gmail.com" className="bg-transparent border border-slate-500 text-white font-bold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Email Saya
            </a>
          </div>

          <div className="space-y-2 text-sm text-slate-400">
            <p>© 2025 Ahmad Amri Falah - Portofolio SEO Saya.</p>
            <p>Studi Kasus untuk <a href="https://langsungcuan.biz.id/" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] font-medium hover:underline transition-all">langsungcuan.biz.id</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};
