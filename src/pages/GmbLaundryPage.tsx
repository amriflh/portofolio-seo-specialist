import React from 'react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedCard } from '../components/AnimatedSection';
import { PageRoute } from '../types';
import { ArrowLeft, TrendingUp, Target, AlertCircle, ThumbsUp, ThumbsDown, Check, X, GraduationCap, Briefcase, Users, Handshake, MessageSquare, Search, Star } from 'lucide-react';

interface GmbLaundryPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const GmbLaundryPage: React.FC<GmbLaundryPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-600 font-sans antialiased selection:bg-[#F5A623]/30 selection:text-[#214634]">
      
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 text-[#214634] font-bold hover:text-[#F5A623] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Kembali ke Portofolio</span>
          </button>
          <div className="flex items-center gap-4">
            <a href="#latar-belakang" className="hidden md:inline text-sm font-semibold text-slate-600 hover:text-[#214634] transition-colors">Studi Kasus</a>
            <a href="#hasil" className="hidden md:inline text-sm font-semibold text-slate-600 hover:text-[#214634] transition-colors">Hasil Akhir</a>
            <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[#F5A623] text-slate-900 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-yellow-500 transition-all shadow-md">
              Hubungi Saya
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm mb-4">
            <TrendingUp className="text-[#F5A623] w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623]">Studi Kasus SEO Lokal</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#214634] leading-[1.2] tracking-tight">
            Meraih Peringkat #1 di Google Maps, Hasilkan Ratusan Prospek, dan Tingkatkan Panggilan Masuk
          </h1>
          
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 mt-4 max-w-3xl mx-auto">
            Studi Kasus: Optimasi Google My Business <br className="hidden sm:block" />
            <span className="text-[#214634] font-extrabold">Laundry Express Mamamu</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Bagaimana strategi SEO lokal yang tepat mentransformasi visibilitas GMB, menghasilkan <strong className="text-[#214634] font-bold">peningkatan traffic 220%</strong> dan meraih <strong className="text-[#214634] font-bold">peringkat #1</strong> di Google Maps hanya dalam 3 bulan.
          </p>
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center justify-center text-center group">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Peringkat GMB</p>
              <h2 className="text-5xl font-extrabold text-[#214634] mb-1 group-hover:scale-110 transition-transform">#1</h2>
              <small className="text-sm text-slate-500 font-medium">Top 3 Local Pack</small>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center justify-center text-center group">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Kenaikan Traffic</p>
              <h2 className="text-5xl font-extrabold text-[#214634] mb-1 group-hover:scale-110 transition-transform">158%</h2>
              <small className="text-sm text-slate-500 font-medium">Dalam 3 Bulan</small>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 flex flex-col items-center justify-center text-center group">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Konversi</p>
              <h2 className="text-5xl font-extrabold text-[#214634] mb-1 group-hover:scale-110 transition-transform">254+</h2>
              <small className="text-sm text-slate-500 font-medium">Pelanggan Baru</small>
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-12">

        {/* Latar Belakang */}
        <section id="latar-belakang" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-slate-100">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="md:w-1/3">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F8FAFC] border border-slate-200 mb-6 text-[#214634]">
                <Target className="w-7 h-7" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Konteks</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight">Tantangan Awal & Kebutuhan Solusi</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-base text-slate-600 leading-relaxed">Laundry Express Mamamu, sebuah bisnis laundry lokal yang menjanjikan di Jakarta, menghadapi tantangan klasik: layanan berkualitas tinggi namun <strong className="text-red-500 font-semibold">visibilitas online yang minim</strong>. Di tengah sengitnya persaingan pasar laundry, mereka kesulitan menjangkau calon pelanggan potensial yang semakin bergantung pada pencarian Google untuk menemukan layanan terdekat.</p>
              
              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200">
                <p className="font-semibold text-[#214634] mb-4">Sebelum intervensi SEO, profil Google My Business (GMB) mereka:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong className="text-red-500 font-semibold">Kurang Teroptimasi:</strong> Informasi bisnis tidak lengkap, tidak ada pemanfaatan fitur GMB seperti Posts atau Q&A, dan minim kata kunci relevan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong className="text-red-500 font-semibold">Sulit Ditemukan:</strong> Tidak muncul di halaman pertama Google Maps atau Local Pack untuk pencarian "laundry terdekat" atau "laundry express Jakarta".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong className="text-red-500 font-semibold">Interaksi Rendah:</strong> Sedikitnya ulasan pelanggan dan tidak adanya respons aktif dari bisnis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="text-red-500 w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-slate-600"><strong className="text-red-500 font-semibold">Ketergantungan pada Metode Konvensional:</strong> Pertumbuhan pelanggan lebih banyak mengandalkan word-of-mouth yang jangkauannya terbatas.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-base text-slate-600 leading-relaxed">Kondisi ini mengindikasikan adanya <strong className="text-[#214634] font-bold">peluang besar yang belum termanfaatkan</strong>. Optimalisasi GMB menjadi solusi strategis untuk mendongkrak kehadiran digital, meningkatkan jangkauan lokal, dan secara signifikan mengubah GMB menjadi kanal akuisisi pelanggan yang produktif bagi Laundry Express Mamamu.</p>
            </div>
          </div>
        </section>

        {/* Analisa Kompetitor */}
        <section id="analisa-kompetitor" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-slate-100">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Riset Pasar</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight mb-4">Membedah Lanskap Persaingan</h2>
            <p className="text-slate-600 text-base">Untuk merumuskan strategi SEO lokal yang efektif, pemahaman mendalam terhadap kompetitor utama di area layanan Laundry Express Mamamu adalah krusial. Analisis difokuskan pada performa GMB mereka, mengidentifikasi kekuatan, kelemahan, dan celah strategis yang dapat dimanfaatkan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kompetitor 1 */}
            <article className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover:border-[#F5A623] transition-colors duration-300">
              <h4 className="text-xl font-bold text-[#214634] border-b-2 border-[#F5A623] pb-2 inline-block mb-3">Kompetitor A: "Pressto Laundry Cikini"</h4>
              <p className="text-sm text-slate-500 italic mb-6">Jaringan laundry dengan beberapa outlet, dikenal karena kecepatan.</p>
              
              <div className="space-y-6">
                <div>
                  <strong className="block text-[#214634] font-bold mb-3 flex items-center gap-2"><ThumbsUp className="text-green-600 w-4 h-4" /> Kekuatan:</strong>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Brand yang sudah terkenal.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Jumlah ulasan cukup banyak (&gt;100) dengan rating rata-rata 3.8.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Jam operasional jelas dan sering update.</li>
                  </ul>
                </div>
                <div>
                  <strong className="block text-[#214634] font-bold mb-3 flex items-center gap-2"><ThumbsDown className="text-red-500 w-4 h-4" /> Kelemahan:</strong>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Ulasan Jasa</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Banyaknya Komplain dari pelayanan jasa express yang sangat lambat</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Tidak aktif memanfaatkan GMB Posts untuk promosi atau update.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Respons terhadap ulasan (terutama negatif) lambat atau tidak ada.</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Kompetitor 2 */}
            <article className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover:border-[#F5A623] transition-colors duration-300">
              <h4 className="text-xl font-bold text-[#214634] border-b-2 border-[#F5A623] pb-2 inline-block mb-3">Kompetitor B: "Zona Laundry Express 7"</h4>
              <p className="text-sm text-slate-500 italic mb-6">Jaringan laundry dengan beberapa outlet, dikenal karena kecepatan.</p>
              
              <div className="space-y-6">
                <div>
                  <strong className="block text-[#214634] font-bold mb-3 flex items-center gap-2"><ThumbsUp className="text-green-600 w-4 h-4" /> Kekuatan:</strong>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Nama GMB mengandung keyword "Express".</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Jumlah ulasan cukup banyak (&gt;150) dengan rating rata-rata 5.0.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><Check className="text-green-600 w-4 h-4 mt-0.5 shrink-0" /> Jam operasional jelas dan sering update.</li>
                  </ul>
                </div>
                <div>
                  <strong className="block text-[#214634] font-bold mb-3 flex items-center gap-2"><ThumbsDown className="text-red-500 w-4 h-4" /> Kelemahan:</strong>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Foto produk tidak diperbarui.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Deskripsi layanan GMB generik, kurang detail.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Tidak aktif memanfaatkan GMB Posts untuk promosi atau update.</li>
                    <li className="flex items-start gap-2 text-sm text-slate-600"><X className="text-red-500 w-4 h-4 mt-0.5 shrink-0" /> Tidak ada layanan antar jemput</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-8 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              <strong className="text-[#214634] font-bold">Kesimpulan & Peluang Strategis:</strong> Analisis ini mengungkapkan bahwa meskipun ada kompetitor dengan jumlah ulasan banyak, masih terdapat <strong className="text-[#214634] font-bold">celah signifikan dalam hal kelengkapan informasi, kualitas visual, Pelayanan yang belum ada, pemanfaatan fitur GMB secara menyeluruh, dan strategi keyword yang agresif dan Keyword tempat</strong>. Laundry Express Mamamu berpeluang besar untuk unggul dengan menyajikan profil GMB yang lebih komprehensif, menarik secara visual, Pelayanan antar jemput, dan dioptimalkan secara cerdas untuk kata kunci lokal yang relevan.
            </p>
          </div>
        </section>

        {/* Segmentasi Pasar */}
        <section id="segmentasi" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-slate-100">
          <div className="mb-10 max-w-3xl">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Targeting</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight mb-4">Menjangkau Target Audiens yang Tepat</h2>
            <p className="text-slate-600 text-base">Strategi optimasi GMB dirancang untuk menarik segmen pasar utama yang menjadi fokus Laundry Express Mamamu, masing-masing dengan kebutuhan dan preferensi unik:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 text-center hover:border-[#214634] transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                <GraduationCap className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-3">Mahasiswa & Pekerja Muda</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Individu dengan mobilitas tinggi, mencari layanan laundry yang <strong className="text-[#214634] font-bold">cepat, praktis, dan terjangkau</strong> di sekitar area kampus atau perkantoran.</p>
            </article>
            
            <article className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 text-center hover:border-[#214634] transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                <Briefcase className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-3">Tamu Hotel & Wisatawan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Membutuhkan layanan laundry <strong className="text-[#214634] font-bold">ekspres dan profesional</strong> dengan kemudahan akses selama masa inap atau kunjungan singkat mereka.</p>
            </article>
            
            <article className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 text-center hover:border-[#214634] transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                <Users className="w-8 h-8 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-3">Warga Lokal & Keluarga</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Mencari solusi laundry yang <strong className="text-[#214634] font-bold">fleksibel, andal, dan berlokasi strategis</strong> dekat dengan tempat tinggal untuk kebutuhan laundry rutin.</p>
            </article>
          </div>
        </section>

        {/* Alur Kerja */}
        <section id="strategi" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all border border-slate-100">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Proses Internal</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight mb-4">Alur Kerja Engagement Pelanggan untuk Ulasan Berkualitas</h2>
            <p className="text-slate-600 text-base">Membangun reputasi online yang solid melalui ulasan pelanggan yang otentik dan positif adalah pilar penting dalam strategi GMB. Kami merancang dan mengimplementasikan alur kerja yang sistematis untuk mendorong feedback konstruktif:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#214634]">
                  <Handshake className="w-6 h-6 text-[#214634]" />
                </div>
                <span className="text-3xl font-extrabold text-[#F5A623]/30">01</span>
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-2">Koordinasi Internal</h3>
              <p className="text-sm text-slate-600">Sinergi erat dengan tim admin Laundry Express Mamamu untuk menyelaraskan strategi dan memastikan eksekusi permintaan feedback berjalan mulus.</p>
            </article>

            <article className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#214634]">
                  <MessageSquare className="w-6 h-6 text-[#214634]" />
                </div>
                <span className="text-3xl font-extrabold text-[#F5A623]/30">02</span>
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-2">Permintaan Feedback Proaktif</h3>
              <p className="text-sm text-slate-600">Admin mengirimkan pesan WhatsApp personal pasca-layanan, menanyakan kepuasan dan secara halus mengarahkan pelanggan untuk memberikan ulasan di GMB.</p>
            </article>

            <article className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#214634]">
                  <Search className="w-6 h-6 text-[#214634]" />
                </div>
                <span className="text-3xl font-extrabold text-[#F5A623]/30">03</span>
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-2">Panduan Keyword Intent</h3>
              <p className="text-sm text-slate-600">Memberikan contoh kalimat ulasan yang natural, mengandung keyword target (mis. "laundry express Mamamu paling cepat", "hasil laundry bersih dan wangi").</p>
            </article>

            <article className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-[#214634]">
                  <Star className="w-6 h-6 text-[#214634]" />
                </div>
                <span className="text-3xl font-extrabold text-[#F5A623]/30">04</span>
              </div>
              <h3 className="text-lg font-bold text-[#214634] mb-2">Ulasan Berkualitas & Relevan</h3>
              <p className="text-sm text-slate-600">Pelanggan yang terpandu cenderung memberikan ulasan positif yang detail dan relevan, memperkuat sinyal positif ke algoritma Google dan calon pelanggan lain.</p>
            </article>
          </div>
        </section>

        {/* Optimasi Langkah demi Langkah */}
        <section id="optimasi" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-12 max-w-3xl">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Eksekusi</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight mb-4">Langkah Demi Langkah Transformasi GMB</h2>
            <p className="text-slate-600 text-base">Proses optimasi GMB dilakukan secara komprehensif dan bertahap, menyentuh setiap aspek penting untuk memaksimalkan visibilitas dan konversi:</p>
          </div>

          <div className="space-y-16">
            {/* Tahap 1 */}
            <article className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
              <div className="md:w-1/2 space-y-4">
                <div className="inline-flex items-center justify-center bg-[#F5A623] text-white w-10 h-10 rounded-full font-bold shadow-sm mb-2">1</div>
                <h3 className="text-xl md:text-2xl font-bold text-[#214634]">Optimalisasi Profil Inti & NAP</h3>
                <p className="text-slate-600 leading-relaxed">Menyempurnakan Nama Bisnis dengan menyisipkan keyword strategis ("Laundry Express Mamamu Jakarta"). Memastikan konsistensi dan akurasi NAP (Name, Address, Phone Number) di GMB dan direktori lokal lainnya.</p>
              </div>
              <div className="md:w-1/2 w-full">
                <figure className="bg-[#F8FAFC] p-4 rounded-3xl border border-slate-200 shadow-sm relative group overflow-hidden">
                  <span className="absolute top-6 left-6 z-10 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-md">SEBELUM</span>
                  <img src="https://static.wixstatic.com/media/419f05_5740078fda85478894c82679396b3732~mv2.webp" alt="Contoh profil GMB sebelum optimasi nama dan detail" loading="lazy" className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500 opacity-80 grayscale-[30%]" />
                  <figcaption className="text-center text-xs text-slate-500 mt-4 font-medium">Nama bisnis dan detail sebelum disempurnakan.</figcaption>
                </figure>
              </div>
            </article>

            {/* Tahap 2 */}
            <article className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 md:p-10">
              <div className="inline-flex items-center justify-center bg-[#F5A623] text-white w-10 h-10 rounded-full font-bold shadow-sm mb-4">2</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#214634] mb-4">Pengisian Detail Bisnis & Layanan</h3>
              <p className="text-slate-600 mb-4">Melengkapi seluruh informasi bisnis:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2"><Check className="text-[#F5A623] mt-0.5 shrink-0 w-5 h-5" /> Kategori bisnis yang paling relevan dan spesifik.</li>
                <li className="flex items-start gap-2"><Check className="text-[#F5A623] mt-0.5 shrink-0 w-5 h-5" /> Deskripsi bisnis yang kaya keyword, informatif, dan persuasif.</li>
                <li className="flex items-start gap-2"><Check className="text-[#F5A623] mt-0.5 shrink-0 w-5 h-5" /> Jam operasional yang akurat, termasuk jam khusus hari libur.</li>
                <li className="flex items-start gap-2"><Check className="text-[#F5A623] mt-0.5 shrink-0 w-5 h-5" /> Atribut bisnis (mis. Wi-Fi, parkir, metode pembayaran).</li>
                <li className="flex items-start gap-2 md:col-span-2"><Check className="text-[#F5A623] mt-0.5 shrink-0 w-5 h-5" /> Daftar layanan (Services) yang detail, menjelaskan setiap jenis layanan laundry yang ditawarkan beserta estimasi harga jika memungkinkan.</li>
              </ul>
            </article>

            {/* Tahap 3 */}
            <article className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-16">
              <div className="md:w-1/2 space-y-4">
                <div className="inline-flex items-center justify-center bg-[#F5A623] text-white w-10 h-10 rounded-full font-bold shadow-sm mb-2">3</div>
                <h3 className="text-xl md:text-2xl font-bold text-[#214634]">Optimalisasi Konten Visual & GMB Posts</h3>
                <p className="text-slate-600 leading-relaxed">Mengunggah foto-foto berkualitas tinggi (logo, sampul, interior, eksterior, tim, hasil kerja). Membuat dan menjadwalkan GMB Posts secara rutin (promo, info baru, event, tips) untuk menjaga profil tetap aktif dan menarik engagement.</p>
              </div>
              <div className="md:w-1/2 w-full">
                <figure className="bg-[#F8FAFC] p-4 rounded-3xl border border-slate-200 shadow-sm relative group overflow-hidden">
                  <span className="absolute top-6 left-6 z-10 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-md">SESUDAH</span>
                  <img src="https://static.wixstatic.com/media/419f05_637eb9715b39483dbc02e5f1738a8d74~mv2.png" alt="Contoh tampilan GMB setelah optimasi fitur dan informasi" loading="lazy" className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                  <figcaption className="text-center text-xs text-slate-500 mt-4 font-medium">Tampilan profil GMB yang lebih lengkap dan optimal.</figcaption>
                </figure>
              </div>
            </article>

            {/* Tahap 4 */}
            <article className="bg-[#214634] text-white rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center bg-[#F5A623] text-white w-10 h-10 rounded-full font-bold shadow-sm mb-4">4</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Manajemen Ulasan & Fitur Q&A</h3>
                <p className="text-[#F8FAFC]/90 leading-relaxed max-w-4xl">Menerapkan strategi proaktif untuk mendapatkan ulasan positif (seperti dijelaskan sebelumnya). Merespons semua ulasan (positif dan negatif) secara cepat, profesional, dan personal. Mengaktifkan dan memantau fitur Q&A, serta proaktif menambahkan pertanyaan umum beserta jawabannya.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Hasil Performa */}
        <section id="hasil" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="block text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2">Metrik Keberhasilan</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#214634] leading-tight mb-4">Dampak Nyata: Lonjakan Performa Signifikan</h2>
            <p className="text-slate-600 text-base">Implementasi strategi optimasi GMB yang holistik dan terukur memberikan dampak transformasional pada performa online Laundry Express Mamamu, tercermin dalam metrik-metrik kunci berikut:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <article className="bg-[#F8FAFC] rounded-3xl border border-slate-200 overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="p-6 bg-white border-b border-slate-100">
                <img src="https://static.wixstatic.com/media/419f05_cefbb417539c400e88ed632c5c7b2639~mv2.png" alt="Grafik peningkatan interaksi GMB setelah optimasi" loading="lazy" className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#214634] mb-3">647 Total Interaksi GMB</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Dalam periode 6 bulan pasca-optimasi, menunjukkan lonjakan engagement pelanggan yang signifikan melalui klik ke website, permintaan rute, dan panggilan telepon.</p>
              </div>
            </article>
            
            <article className="bg-[#F8FAFC] rounded-3xl border border-slate-200 overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="p-6 bg-white border-b border-slate-100">
                <img src="https://static.wixstatic.com/media/419f05_25687a9c4844403b9ba4074c238f24a7~mv2.png" alt="Grafik peningkatan konversi langsung dari GMB" loading="lazy" className="w-full h-auto rounded-xl group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#214634] mb-3">254+ Konversi Pelanggan Baru</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Jumlah pelanggan baru yang berhasil diakuisisi langsung dari profil GMB, membuktikan efektivitas GMB sebagai mesin konversi.</p>
              </div>
            </article>
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 text-center border border-slate-200 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
              Pencapaian ini menggarisbawahi bahwa optimasi GMB yang dilakukan secara strategis, detail, dan berkelanjutan adalah investasi krusial yang menghasilkan <strong className="text-[#214634] font-bold">Return on Investment (ROI) yang tinggi</strong> untuk pertumbuhan bisnis lokal di era digital saat ini.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontak" className="bg-[#214634] relative overflow-hidden py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Tertarik meraih hasil serupa untuk bisnis Anda?</h2>
          <p className="text-[#F8FAFC]/80 text-lg max-w-2xl mx-auto">Mari berdiskusi tentang bagaimana strategi SEO lokal dapat mentransformasi kanal akuisisi pelanggan Anda.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="https://wa.me/62895326089411" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F5A623] text-slate-900 font-bold text-base px-8 py-3.5 rounded-full hover:bg-yellow-500 transition-all shadow-lg">
              Mulai Proyek Baru
            </a>
            <button onClick={() => onNavigate('home')} className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-[#F8FAFC]/20 text-white font-bold text-base px-8 py-3.5 rounded-full hover:bg-white/10 transition-all cursor-pointer">
              Lihat Studi Kasus Lain
            </button>
          </div>

          <div className="pt-16 border-t border-white/10 mt-16">
            <p className="text-[#F8FAFC]/60 text-sm">© 2026 Portofolio Ahmad. Studi Kasus Optimasi Google My Business.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
