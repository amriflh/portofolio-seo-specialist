import React from 'react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { ArrowLeft, ArrowUpRight, Briefcase, AlertCircle, CheckCircle, ChevronRight, ShoppingBag, FileText, TrendingUp, Lightbulb, Info, Mail } from 'lucide-react';

interface TokoKuePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TokoKuePage: React.FC<TokoKuePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-600 font-sans antialiased selection:bg-[#F5A623] selection:text-white">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F8FAFC]/80 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#214634] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </button>
          <div className="flex items-center gap-4">
            <a href="#kontak" className="bg-[#214634] hover:bg-[#214634]/90 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-sm transition-all">
              Mari Berdiskusi
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-4 block">Studi Kasus SEO & Konten</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#214634] leading-[1.2] tracking-tight mb-8">
            Strategi Konten Artikel Toko Kue A Tiga: Meningkatkan Visibilitas Brand dan Mendorong Pertumbuhan Penjualan Kue Kering
          </h1>
          
          <div className="inline-flex items-center gap-4 bg-white px-6 py-4 rounded-full border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="text-[#F5A623] w-5 h-5" />
              <span className="text-sm font-medium text-slate-500">Projek Pribadi:</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <p className="text-sm font-bold text-[#214634]">Toko Kue Kering A Tiga</p>
            <a href="https://langsungcuan.biz.id/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-[#F5A623] hover:text-[#214634] transition-colors">
              (langsungcuan.biz.id) <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-8">

        {/* Section 1 */}
        <section id="client-overview" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mb-6">1. Tentang Klien & Tantangan Awal</h2>
            <p className="text-base md:text-lg leading-relaxed mb-10">Toko Kue Kering A Tiga adalah UMKM yang berfokus pada penjualan berbagai macam kue kering homemade berkualitas. Bisnis ini beroperasi melalui platform online <code className="bg-slate-100 text-[#214634] px-2 py-1 rounded-md text-sm font-mono font-medium">langsungcuan.biz.id</code>.</p>
            
            <h4 className="text-lg md:text-xl font-bold text-[#214634] mb-6 flex items-center gap-2">
              <AlertCircle className="text-[#F5A623] w-5 h-5" /> Tantangan SEO Utama yang Saya Hadapi:
            </h4>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#214634] block mb-1">Visibilitas Rendah:</strong>
                    <span className="text-sm">Saya menemukan bahwa Toko Kue Kering A Tiga kesulitan mendapatkan peringkat yang baik di hasil pencarian Google untuk keyword transaksional terkait produk kue kering.</span>
                  </div>
                </div>
              </li>
              <li className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#214634] block mb-1">Persaingan Kompetitif:</strong>
                    <span className="text-sm">Saya mengidentifikasi adanya persaingan tinggi dari pemain lama dan baru di pasar kue kering online, terutama untuk keyword bervolume tinggi seperti <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">"jual kue kering lebaran"</code> dan <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">"kue kering Jakarta"</code> yang didominasi oleh marketplace besar.</span>
                  </div>
                </div>
              </li>
              <li className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#214634] block mb-1">Branding & Kepercayaan:</strong>
                    <span className="text-sm">Sebagai UMKM, saya melihat perlunya membangun kepercayaan dan brand awareness yang lebih kuat di ranah digital untuk menarik calon pembeli.</span>
                  </div>
                </div>
              </li>
              <li className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex gap-4">
                  <CheckCircle className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#214634] block mb-1">Ketergantungan pada Keyword Tempat:</strong>
                    <span className="text-sm">Berdasarkan riset awal yang saya lakukan dengan mewawancarai pelanggan dan menganalisis perilaku pengguna smartphone, saya menemukan bahwa mayoritas (9 dari 10) calon pelanggan mencari produk dengan menyertakan lokasi, seperti <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-xs">"jual kue kering di Jakarta Pusat"</code>.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="strategy" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mb-6">2. Strategi SEO yang Saya Terapkan</h2>
          <p className="text-base md:text-lg leading-relaxed mb-12 max-w-3xl">Untuk mengatasi tantangan tersebut, saya telah merancang dan mengimplementasikan strategi SEO komprehensif yang berfokus pada peningkatan relevansi, otoritas, dan pengalaman pengguna.</p>

          <div className="space-y-16">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Tahap A</span>
              <h4 className="text-xl md:text-2xl font-bold text-[#214634] mb-4">Riset Keyword Mendalam & Pemilihan Target</h4>
              <p className="mb-4 leading-relaxed">
                Saya telah melakukan riset keyword secara mendalam menggunakan <strong>Google Keyword Planner</strong> dan analisis <strong>"People Also Ask"</strong> di Google. Fokus utama adalah mengidentifikasi keyword yang paling relevan dengan intensi pengguna.
                Berdasarkan wawancara langsung dengan pelanggan dan analisis perilaku pengguna smartphone, saya menemukan bahwa 9 dari 10 orang mencari kue kering di Google menggunakan kombinasi keyword produk dan lokasi (contoh: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"jual kue kering enak di Kramat Jati"</code>) atau keyword transaksional langsung (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"beli kue nastar online"</code>).
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <ChevronRight className="text-[#F5A623] w-5 h-5 mt-1 shrink-0" />
                  <span><strong>Keyword Transaksional Berbasis Lokasi (Long-tail):</strong> Seperti <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"jual kue kering homemade murah di Kramat Jati"</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"distributor kue kering berkualitas Jakarta Selatan"</code>, dan <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"jual kue nastar premium Jakarta Selatan"</code>.</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-[#F5A623] w-5 h-5 mt-1 shrink-0" />
                  <span><strong>Keyword Produk Spesifik:</strong> Saya juga menargetkan jenis kue tertentu, misalnya <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"jual nastar premium enak"</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"harga kastengel keju per kilo"</code>.</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight className="text-[#F5A623] w-5 h-5 mt-1 shrink-0" />
                  <span><strong>Keyword Informatif (untuk Konten Pendukung):</strong> Seperti <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"tips memilih kue lebaran berkualitas anti gagal"</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-[#214634]">"cara menyimpan kue kering agar awet dan renyah"</code>.</span>
                </li>
              </ul>
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border-l-4 border-[#F5A623]">
                <p className="text-sm font-medium text-[#214634]"><strong>Mengapa strategi keyword ini saya pilih?</strong> Dengan menargetkan keyword long-tail berbasis lokasi dan transaksional, saya dapat menjangkau audiens yang sudah memiliki niat beli tinggi dan berada di area layanan Toko Kue Kering A Tiga.</p>
              </div>
            </div>

            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Tahap B</span>
              <h4 className="text-xl md:text-2xl font-bold text-[#214634] mb-4">Optimasi On-Page Menyeluruh</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="text-[#214634] mt-1 w-5 h-5 shrink-0" />
                  <span className="text-sm"><strong>Judul & Meta Deskripsi:</strong> Judul H1 unik dan meta deskripsi menarik dengan keyword target.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="text-[#214634] mt-1 w-5 h-5 shrink-0" />
                  <span className="text-sm"><strong>Struktur Heading (H2-H6):</strong> Heading hierarkis untuk keterbacaan mesin pencari.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="text-[#214634] mt-1 w-5 h-5 shrink-0" />
                  <span className="text-sm"><strong>Optimasi Konten:</strong> Konten informatif dengan natural keyword density.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="text-[#214634] mt-1 w-5 h-5 shrink-0" />
                  <span className="text-sm"><strong>Internal Linking:</strong> Jaringan internal link kuat antar halaman produk & artikel.</span>
                </li>
              </ul>
            </div>

            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Tahap C</span>
              <h4 className="text-xl md:text-2xl font-bold text-[#214634] mb-4">Pengembangan Konten Relevan & Berkualitas</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <ShoppingBag className="text-[#214634] w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#214634] block mb-1">Halaman Produk Detail:</strong>
                    <span className="text-sm">Setiap produk memiliki halaman sendiri dengan deskripsi lengkap, foto berkualitas tinggi, dan tombol CTA.</span>
                  </div>
                </li>
                <li className="flex gap-4 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                    <FileText className="text-[#214634] w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-[#214634] block mb-1">Artikel Blog Pendukung:</strong>
                    <span className="text-sm">Artikel blog relevan seperti "7 Kue Kering Wajib Ada Saat Lebaran di Jakarta".</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Peringkat Keyword */}
        <section className="bg-[#214634] rounded-3xl p-8 md:p-12 shadow-md text-white">
          <h4 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
            <TrendingUp className="text-[#F5A623] w-8 h-8" />
            Detail Peningkatan Peringkat Keyword Target Utama:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <li className="bg-white/10 rounded-2xl p-5 border border-white/10 flex flex-col justify-center">
              <span className="text-slate-300 text-sm mb-2">Keyword <code className="text-white bg-white/20 px-1 py-0.5 rounded">"jual kue kering homemade kramat jati"</code>:</span>
              <span className="text-lg">Berhasil ditingkatkan ke <strong className="text-[#F5A623]">Posisi #9.96</strong></span>
            </li>
            <li className="bg-white/10 rounded-2xl p-5 border border-white/10 flex flex-col justify-center">
              <span className="text-slate-300 text-sm mb-2">Keyword <code className="text-white bg-white/20 px-1 py-0.5 rounded">"kue kering a tiga"</code> (Branding):</span>
              <span className="text-lg">Peringkat diperkuat di <strong className="text-[#F5A623]">Posisi #8.42</strong></span>
            </li>
            <li className="bg-white/10 rounded-2xl p-5 border border-white/10 flex flex-col justify-center">
              <span className="text-slate-300 text-sm mb-2">Keyword <code className="text-white bg-white/20 px-1 py-0.5 rounded">"jual kue kering homemade ciracas"</code>:</span>
              <span className="text-lg">Berhasil ditingkatkan ke <strong className="text-[#F5A623]">Posisi #8.28</strong></span>
            </li>
            <li className="bg-white/10 rounded-2xl p-5 border border-white/10 flex flex-col justify-center">
              <span className="text-slate-300 text-sm mb-2">Keyword <code className="text-white bg-white/20 px-1 py-0.5 rounded">"jual kue nastar premium Jakarta Selatan"</code>:</span>
              <span className="text-lg">Berhasil masuk ke <strong className="text-[#F5A623]">Halaman 1 Google</strong></span>
            </li>
          </ul>
        </section>

        {/* Section 3: Closing Proof */}
        <section id="hasil-closing" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mb-4">3. Dampak Konten: Studi Kasus Closing</h2>
          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl">Upaya SEO yang saya lakukan tidak hanya berhenti pada peningkatan traffic dan peringkat, tetapi juga berdampak pada interaksi dan potensi penjualan.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-64 md:h-80 bg-slate-100 rounded-2xl overflow-hidden mb-6 border border-slate-200/50 relative flex items-center justify-center">
                <img src="https://langsungcuan.biz.id/gambarbebas/20250531-025141_orderan%20ke%20dua.jpg" alt="Screenshot Bukti Closing Facebook 1" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-[#214634] mb-3">Closing Produk dari Postingan Artikel</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Postingan Facebook yang mempromosikan produk Kue Kering A Tiga (terkait dengan konten website yang saya optimasi) berhasil menarik minat pembeli yang berujung pada closing.
              </p>
              <div className="mt-auto">
                <a href="https://www.facebook.com/kuekeringatiga/posts/pfbid0371d3nvigD6xvfxZ8Yw5aRFZLos9dwog8e6EGuMx8wsE9kHyQLWmtsjEd7Hu1oqnFl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#214634] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#214634]/90 transition-colors w-full sm:w-auto">
                  <span>Lihat Postingan Asli</span> <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-64 md:h-80 bg-slate-100 rounded-2xl overflow-hidden mb-6 border border-slate-200/50 relative flex items-center justify-center">
                <img src="https://langsungcuan.biz.id/gambarbebas/20250531-025141_Orderan%20pertama.jpg" alt="Screenshot Bukti Closing Facebook 2" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="text-xl font-bold text-[#214634] mb-3">Interaksi Positif & Potensi Closing Lanjutan</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Postingan lain menunjukkan interaksi positif dan pertanyaan dari calon pembeli, yang merupakan indikasi kuat potensi closing lebih lanjut dari strategi konten yang saya terapkan.
              </p>
              <div className="mt-auto">
                <a href="https://www.facebook.com/kuekeringatiga/posts/pfbid0y7pB7L8W5NJLiSd2yKy1KnDpN5doyU4rNHRRZEELu3VbBKtnQ8Rw15vu9g9BwBrLl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#214634] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#214634]/90 transition-colors w-full sm:w-auto">
                  <span>Lihat Postingan Asli</span> <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Top Performing Table */}
        <section id="top-performing-content" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mb-4">4. Halaman Artikel & Produk Unggulan (Peringkat 1-10 Google)</h2>
          <p className="text-base leading-relaxed mb-8 max-w-4xl">Berikut adalah daftar halaman dari <code className="bg-slate-100 text-[#214634] px-1.5 py-0.5 rounded text-sm">langsungcuan.biz.id</code> yang berhasil saya bawa ke peringkat 1-10 di Google untuk keyword transaksional spesifik (Data per 2025-05-31):</p>
          
          <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 mb-6">
            <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500">Judul Halaman / URL</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500">Estimasi Keyword Target Utama</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Posisi</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Klik</th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">CTR (%)</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium"><a href="https://langsungcuan.biz.id/kue-kering-a-tiga" target="_blank" rel="noopener noreferrer" className="text-[#214634] hover:text-[#F5A623] underline decoration-slate-300 underline-offset-4">kue-kering-a-tiga</a></td>
                  <td className="py-4 px-6"><span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mr-1">Kue Kering (Umum/Brand)</span></td>
                  <td className="py-4 px-6 text-right font-bold text-[#214634]">8.42</td>
                  <td className="py-4 px-6 text-right text-slate-600">14</td>
                  <td className="py-4 px-6 text-right text-slate-600">0.15%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium"><a href="https://langsungcuan.biz.id/produk/37/jual-kue-kering-homemade-murah-dan-terlengkap-di-kramat-jati" target="_blank" rel="noopener noreferrer" className="text-[#214634] hover:text-[#F5A623] underline decoration-slate-300 underline-offset-4">.../jual-kue-kering-homemade...di-kramat-jati</a></td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mr-1">Jual Kue Kering Homemade</span>
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">Kramat Jati</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#214634]">9.96</td>
                  <td className="py-4 px-6 text-right text-slate-600">8</td>
                  <td className="py-4 px-6 text-right text-[#F5A623] font-bold">3.54%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium"><a href="https://langsungcuan.biz.id/produk/33/jual-kue-kering-homemade-murah-dan-terlengkap-di-ciracas" target="_blank" rel="noopener noreferrer" className="text-[#214634] hover:text-[#F5A623] underline decoration-slate-300 underline-offset-4">.../jual-kue-kering-homemade...di-ciracas</a></td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mr-1">Jual Kue Kering Homemade</span>
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">Ciracas</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#214634]">8.28</td>
                  <td className="py-4 px-6 text-right text-slate-600">4</td>
                  <td className="py-4 px-6 text-right text-slate-600">2.88%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium"><a href="https://langsungcuan.biz.id/produk/36/jual-kue-kering-homemade-murah-dan-terlengkap-di-duren-sawit" target="_blank" rel="noopener noreferrer" className="text-[#214634] hover:text-[#F5A623] underline decoration-slate-300 underline-offset-4">.../jual-kue-kering-homemade...di-duren-sawit</a></td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mr-1">Jual Kue Kering Homemade</span>
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">Duren Sawit</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#214634]">9.93</td>
                  <td className="py-4 px-6 text-right text-slate-600">3</td>
                  <td className="py-4 px-6 text-right text-slate-600">1.8%</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-medium"><a href="https://langsungcuan.biz.id/produk/28/jual-kue-kering-homemade-murah-dan-terlengkap-di-menteng" target="_blank" rel="noopener noreferrer" className="text-[#214634] hover:text-[#F5A623] underline decoration-slate-300 underline-offset-4">.../jual-kue-kering-homemade...di-menteng</a></td>
                  <td className="py-4 px-6">
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mr-1">Jual Kue Kering Homemade</span>
                    <span className="inline-block bg-[#F8FAFC] border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">Menteng</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#214634]">9.74</td>
                  <td className="py-4 px-6 text-right text-slate-600">2</td>
                  <td className="py-4 px-6 text-right text-[#F5A623] font-bold">3.45%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border-l-4 border-[#214634] flex gap-4 items-start">
            <Lightbulb className="text-[#F5A623] w-6 h-6 shrink-0 mt-0.5" />
            <p className="text-sm font-medium text-slate-600 italic">
              Halaman-halaman di atas menunjukkan keberhasilan strategi saya dalam menargetkan keyword berbasis lokasi. Saya melihat masih terdapat potensi untuk mengoptimasi keyword transaksional lain seperti "jual keripik" atau "distributor kue kering" agar bisa masuk ke halaman pertama.
            </p>
          </div>
        </section>

        {/* Section 5: Conclusion */}
        <section id="conclusion-next-steps" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] mb-6">5. Kesimpulan & Pembelajaran Utama</h2>
          <div className="space-y-4">
            <div className="bg-[#F8FAFC] border-l-4 border-[#F5A623] p-6 rounded-r-2xl">
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#214634]">Pentingnya Riset Lokal:</strong> Wawancara langsung dengan pelanggan dan analisis pencarian lokal memberikan insight tak ternilai untuk mengarahkan strategi ke target yang tepat sasaran.</p>
            </div>
            <div className="bg-[#F8FAFC] border-l-4 border-[#F5A623] p-6 rounded-r-2xl">
              <p className="text-slate-700 leading-relaxed"><strong className="text-[#214634]">Konsistensi Konten Berkualitas:</strong> Pembuatan halaman produk yang detail dan artikel pendukung yang relevan secara konsisten membantu membangun otoritas dan kepercayaan.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="kontak" className="bg-[#214634] text-white pt-16 pb-12 border-t-4 border-[#F5A623] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Punya tantangan serupa untuk bisnis Anda?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">Mari berdiskusi tentang bagaimana strategi SEO dan konten yang tepat dapat membantu meningkatkan visibilitas dan pertumbuhan bisnis Anda di era digital.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="mailto:falahamri93@gmail.com" className="w-full sm:w-auto bg-[#F5A623] text-[#214634] font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-transform">
              Kirim Email Sekarang
            </a>
            <button onClick={() => onNavigate('home')} className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-full hover:border-white transition-all cursor-pointer">
              Lihat Portofolio Lainnya
            </button>
          </div>
          
          <p className="text-sm text-slate-400">© 2026 Ahmad Amri Falah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
