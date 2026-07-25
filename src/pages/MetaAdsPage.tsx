import React, { useRef } from 'react';
import { PageRoute } from '../types';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  TrendingDown, 
  BarChart2, 
  Lightbulb, 
  Target, 
  ShieldAlert, 
  ShieldCheck, 
  Mail, 
  Linkedin,
  Video,
  Globe,
  MessageCircle
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MetaAdsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const MetaAdsPage: React.FC<MetaAdsPageProps> = ({ onNavigate }) => {
  const slider1Ref = useRef<HTMLDivElement>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);
  const sliderAssetsSpiralRef = useRef<HTMLDivElement>(null);
  const sliderAssetsBuahRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const chartData = {
    labels: ['Minggu 1 Sep', 'Minggu 2 Sep', 'Minggu 3 Sep', 'Minggu 4 Sep', 'Minggu 1 Okt', 'Minggu 2 Okt'],
    datasets: [
      {
        label: 'Gross Revenue (Reconciliation)',
        data: [1598729, 1723207, 668524, 217944, 164806, 0],
        backgroundColor: '#214634',
        borderRadius: 6,
      },
      {
        label: 'Loss due to Returns/Spam',
        data: [6400, 188001, 191201, 220001, 131200, 513600],
        backgroundColor: '#EF4444',
        borderRadius: 6,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Financial Health: Revenue vs Operational Loss (Sep - Okt 2025)',
        font: { size: 15, weight: 'bold' as const, family: 'Inter' },
        color: '#214634',
        padding: { bottom: 20 }
      },
      legend: {
        position: 'bottom' as const,
        labels: { usePointStyle: true, padding: 15, font: { family: 'Inter', size: 12 } }
      },
      tooltip: {
        backgroundColor: 'rgba(33, 70, 52, 0.95)',
        padding: 12,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            label += new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(context.raw);
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return 'Rp ' + (value / 1000000).toFixed(1) + 'jt';
          },
          font: { family: 'Inter', size: 11 },
          color: '#64748b'
        }
      },
      x: {
        ticks: { font: { family: 'Inter', size: 11 }, color: '#64748b' }
      }
    }
  };

  const kawatSpiralAssets = [
    "https://static.wixstatic.com/media/419f05_a788bf6831cb402a97b11f66a39f4826~mv2.webp",
    "https://static.wixstatic.com/media/419f05_9dbdeb54260c4251a2dc0539aedd7fe1~mv2.webp",
    "https://static.wixstatic.com/media/419f05_e4feec788766405e805bb179ac7bab7a~mv2.webp",
    "https://static.wixstatic.com/media/419f05_d6f526591772458d8aa3c6f3fb675628~mv2.webp",
    "https://static.wixstatic.com/media/419f05_5d06dfaff01c4746901252bd7d90fee8~mv2.webp",
    "https://static.wixstatic.com/media/419f05_607eab5384a7412e83d5a6be92c0e324~mv2.webp",
    "https://static.wixstatic.com/media/419f05_4295ce36affe4e32a6e3abcc6732f04a~mv2.webp",
    "https://static.wixstatic.com/media/419f05_dcc007de19d0480d92abb301825f67f9~mv2.webp",
    "https://static.wixstatic.com/media/419f05_56c78b0eb8e04f029755d3613d8a5ab6~mv2.webp",
    "https://static.wixstatic.com/media/419f05_4a283941064b4658a4b7727210ca785b~mv2.webp",
    "https://static.wixstatic.com/media/419f05_6a9d33c0b8e24c6096fc2dfb7c6862ab~mv2.webp",
    "https://static.wixstatic.com/media/419f05_0d7ae48057fe42fc840b64584ac996ea~mv2.webp",
    "https://static.wixstatic.com/media/419f05_778b70b36ced40e28bb3e6fb2cda9e21~mv2.webp",
    "https://static.wixstatic.com/media/419f05_e274d76c47b34657a59b5a0a2c616607~mv2.webp",
    "https://static.wixstatic.com/media/419f05_814320f1558c4d4e90083ba9b72b81d8~mv2.webp",
    "https://static.wixstatic.com/media/419f05_20e046246a66472fb03cc71226df84a3~mv2.webp"
  ];

  const kantongBuahAssets = [
    "https://static.wixstatic.com/media/419f05_9e5a704e367d4c869ffd08a839a703a7~mv2.webp",
    "https://static.wixstatic.com/media/419f05_20e046246a66472fb03cc71226df84a3~mv2.webp",
    "https://static.wixstatic.com/media/419f05_1c7089f055af4dd58de7608f019d9eaf~mv2.webp",
    "https://static.wixstatic.com/media/419f05_6d69486fed4249b8975bdd76f97c1fbb~mv2.webp",
    "https://static.wixstatic.com/media/419f05_81db8bc972104bacaa1a33c271f7e531~mv2.webp",
    "https://static.wixstatic.com/media/419f05_50d184ba6b104b5f8f8a8bc9834a4982~mv2.webp"
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-700 font-sans antialiased selection:bg-[#F5A623] selection:text-[#214634]">
      
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')} 
            className="inline-flex items-center gap-2 text-[#214634] font-semibold text-sm hover:text-[#F5A623] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </button>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#214634] text-white text-sm font-semibold hover:bg-[#214634]/90 transition-all shadow-sm">
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#214634]/5 text-[#214634] text-xs font-bold uppercase tracking-wider border border-[#214634]/10">
                Data Validated: Agu - Okt 2025
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#214634] leading-[1.2] tracking-tight">
                Mengubah Budget Iklan Menjadi <br /><span className="text-[#F5A623]">Profit Nyata & Terukur</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Studi kasus dropshipping Kantong Buah & Kawat Spiral. Mencapai CPA Rp 19.000 dan mengelola return rate 22% menjadi profitable melalui optimasi berbasis data real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F5A623] text-[#214634] font-bold text-sm hover:bg-[#F5A623]/90 transition-all shadow-md">
                  Hubungi Saya untuk Kolaborasi <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative w-full">
              <div className="relative w-full aspect-[4/3] max-w-md mx-auto bg-[#214634] rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex items-center justify-center p-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5A623]/20 flex items-center justify-center text-[#F5A623]">
                      <TrendingDown className="w-5 h-5 text-[#214634]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Lowest CPA Achieved</div>
                      <div className="text-2xl font-extrabold text-[#214634]">Rp 19.036</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 border-t border-slate-100 pt-3 font-medium">
                    Kawat Spiral (Interest Targeting)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Total Gross Sales</div>
              <div className="text-3xl font-extrabold text-[#214634] mb-1">~Rp 6.8 Juta</div>
              <div className="text-sm text-slate-600">Periode Agu - Okt 2025</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Risk Managed</div>
              <div className="text-3xl font-extrabold text-red-500 mb-1">Rp 1.5 Juta</div>
              <div className="text-sm text-slate-600">Potensi Loss akibat Spam Dikelola</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Ad Spend Efficiency</div>
              <div className="text-3xl font-extrabold text-[#214634] mb-1">High CTR</div>
              <div className="text-sm text-slate-600">Avg 2.49% on Winning Ads</div>
            </div>
            <div className="bg-[#214634]/5 rounded-2xl border border-[#214634]/10 flex items-center justify-center p-6">
              <div className="text-center">
                <BarChart2 className="w-8 h-8 text-[#F5A623] mx-auto mb-1" />
                <div className="text-sm font-bold text-[#214634]">Data-Driven</div>
                <div className="text-xs text-slate-600">Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selection Strategy */}
      <section id="strategi" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 lg:p-12">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Strategi Produk</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#214634] leading-tight mb-6">Mengapa Memilih 2 Produk Ini?</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Pemilihan produk bukan berdasarkan tren sesaat, melainkan hasil riset kompetitor, analisis margin, dan validasi supply chain.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Kawat Spiral */}
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-[#214634] mb-6">Kawat Spiral Pembersih Pipa</h3>
                
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Riset Iklan & Kompetitor</h4>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Problem-Aware Audience:</strong> Kompetitor menggunakan hook visual "pipa mampet" dengan CTR 1.8%.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Low Ad Fatigue:</strong> Produk evergreen, tidak musiman.</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Supplier & Margin Analysis</h4>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Harga Supplier:</strong> Rp 29.000 - 67.000/pcs.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Harga Jual Market:</strong> Rp 120.000 - 199.000.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Gross Margin:</strong> ~65-70%. Cukup tebal untuk menanggung CPA.</span></li>
                  </ul>
                </div>
              </div>

              {/* Kantong Buah */}
              <div className="bg-[#FFFBF0] rounded-2xl border border-[#FEF3C7] p-8">
                <h3 className="text-xl font-bold text-[#214634] mb-6">Kantong Buah Eco-Friendly</h3>
                
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Riset Iklan & Kompetitor</h4>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Trending Interest:</strong> Kata kunci "kantong buah" & "eco bag" di Meta Ads Library.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Emotional Hook:</strong> Menjual nilai fungsional dan environmental (melindungi dari hama).</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Supplier & Margin Analysis</h4>
                  <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Harga Supplier:</strong> Rp 24.500 - 125.000/set.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Harga Jual Market:</strong> Rp 125.000 - 239.000.</span></li>
                    <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" /> <span><strong>Learning Value:</strong> CTR 3.31% membuktikan product-market fit.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border-l-4 border-[#F5A623] p-6 lg:p-8">
              <h4 className="flex items-center gap-2 text-[#214634] font-bold mb-3">
                <Lightbulb className="text-[#F5A623] w-5 h-5" /> Core Philosophy in Product Selection
              </h4>
              <p className="text-sm lg:text-base text-slate-700 leading-relaxed">
                Pemilihan produk berdasarkan: <strong className="text-[#214634]">(1) Margin cukup untuk menyerap biaya iklan</strong>, <strong className="text-[#214634]">(2) Visual mudah dibuatkan creative</strong>, dan <strong className="text-[#214634]">(3) Supplier dengan reliabilitas pengiriman teruji</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                Winning Campaign
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#214634] leading-tight">Kawat Spiral Pembersih Pipa</h2>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-600 font-medium">
                  Target: Problem-Solution Audience
                </div>
                <div className="px-4 py-2 rounded-full bg-[#F8FAFC] border border-slate-200 text-slate-600 font-medium">
                  Budget: Rp 75.000/hari
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                <strong className="text-[#214634]">Strategi:</strong> Menggunakan targeting "Interest" yang spesifik menghasilkan CPA 60% lebih murah dibanding targeting broad. Creative video demo "Before-After" berhasil mencapai CTR 2.49%.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                  <Target className="text-[#F5A623] w-6 h-6 mb-3" />
                  <h4 className="font-bold text-[#214634] text-sm mb-1">Audience Winner</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Interest-based targeting<br /><strong className="text-green-600">CPA: Rp 19.036</strong></p>
                </div>
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                  <TrendingDown className="text-red-500 w-6 h-6 mb-3" />
                  <h4 className="font-bold text-[#214634] text-sm mb-1">Audience Loser</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Karyawan/Broad<br />CPA: Rp 47.753</p>
                </div>
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
                  <Lightbulb className="text-[#F5A623] w-6 h-6 mb-3" />
                  <h4 className="font-bold text-[#214634] text-sm mb-1">Key Learning</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Spesifik interest &gt; Broad audience</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div ref={slider1Ref} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4">
                  <div className="snap-center shrink-0 w-full relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3]">
                    <img src="https://static.wixstatic.com/media/419f05_a306be8b7eee478db0fac090f38f137f~mv2.webp" alt="Screenshot Meta Ads 1" className="w-full h-full object-contain" />
                  </div>
                  <div className="snap-center shrink-0 w-full relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3]">
                    <img src="https://static.wixstatic.com/media/419f05_7515071b35734c09875a9fcb000807ee~mv2.webp" alt="Screenshot Meta Ads 2" className="w-full h-full object-contain" />
                  </div>
                </div>
                <button onClick={() => scrollSlider(slider1Ref, -1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => scrollSlider(slider1Ref, 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Funnel: Kawat Spiral */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 lg:p-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Creative Funnel</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#214634] leading-tight mb-4">Alur Aset: Kawat Spiral</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Journey lengkap audiens: <strong className="text-[#214634]">Landing Page → Shortform Content → WhatsApp Closing</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-5 text-center">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-[#214634] text-sm mb-1">Landing Page</h4>
                <p className="text-xs text-slate-600">Halaman konversi dengan CTA kuat</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-5 text-center">
                <Video className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-[#214634] text-sm mb-1">Shortform Video</h4>
                <p className="text-xs text-slate-600">Konten hook & demo produk</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-5 text-center">
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-[#214634] text-sm mb-1">WhatsApp</h4>
                <p className="text-xs text-slate-600">Closing & validasi order</p>
              </div>
            </div>

            <div className="relative group">
              <div ref={sliderAssetsSpiralRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4">
                {kawatSpiralAssets.map((src, index) => (
                  <div key={index} className="snap-center shrink-0 w-64 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[3/4] shadow-sm">
                    <img src={src} alt={`Asset Kawat Spiral ${index + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              <button onClick={() => scrollSlider(sliderAssetsSpiralRef, -1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollSlider(sliderAssetsSpiralRef, 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Kantong Buah */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-start">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-wider">
                Micro-Niche Testing
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#214634] leading-tight">Kantong Buah Eco-Friendly</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Campaign ini dijalankan sebagai testing niche baru dengan budget mikro. CTR 3.31% memvalidasi minat audiens yang kuat.
              </p>
              
              <div className="bg-[#FFFBF0] rounded-2xl border border-[#FEF3C7] p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Est. Ad Spend</p>
                    <p className="font-extrabold text-[#214634] text-lg">Rp 350.000</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Est. Orders (WA)</p>
                    <p className="font-extrabold text-[#214634] text-lg">~15 Pesanan</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">CTR Tertinggi</p>
                    <p className="font-extrabold text-green-600 text-lg">3.31%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div ref={slider2Ref} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4">
                  <div className="snap-center shrink-0 w-full relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3]">
                    <img src="https://static.wixstatic.com/media/419f05_b49547db46854b4890c38fa1f4627606~mv2.webp" alt="Screenshot Meta Ads Kantong Buah" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assets Funnel: Kantong Buah */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#FFFBF0] rounded-3xl border border-[#FEF3C7] shadow-sm p-8 lg:p-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-yellow-800 mb-2 block">Creative Funnel</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#214634] leading-tight mb-4">Alur Aset: Kantong Buah</h2>
            </div>

            <div className="relative group">
              <div ref={sliderAssetsBuahRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4">
                {kantongBuahAssets.map((src, index) => (
                  <div key={index} className="snap-center shrink-0 w-64 relative rounded-2xl overflow-hidden border border-[#FEF3C7] bg-white aspect-[3/4] shadow-sm">
                    <img src={src} alt={`Asset Kantong Buah ${index + 1}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
              <button onClick={() => scrollSlider(sliderAssetsBuahRef, -1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollSlider(sliderAssetsBuahRef, 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow border border-slate-200 flex items-center justify-center text-[#214634] cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: Risk Management & Financial Chart */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" /> Risk Management
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#214634] leading-tight">Mitigasi Spam & Fake Order</h2>
              
              <p className="text-base text-slate-600 leading-relaxed">
                Pada Oktober 2025, terjadi lonjakan fake order. Melalui analisis mutasi saldo harian, saya mengidentifikasi pola penipuan dan menerapkan sistem validasi bertahap.
              </p>

              <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
                <h4 className="flex items-center gap-2 text-red-700 font-bold mb-4 text-sm">
                  <ShieldCheck className="w-5 h-5" /> Action Plan yang Diterapkan:
                </h4>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Audit harian mutasi saldo untuk deteksi dini retur mencurigakan.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Validasi alamat lengkap & captcha di Landing Page.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Wajib konfirmasi via Voice Note WA sebelum pengiriman.</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 lg:p-8">
                <div className="relative h-[300px] lg:h-[350px] w-full">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Footer */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F5A623] mb-2 block">Keahlian</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#214634] mb-4">Skills & Tools Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['Meta Ads Manager', 'Audience Research', 'Financial Reconciliation', 'Risk Management', 'Landing Page Optimization', 'WA Closing Strategy', 'Creative Testing'].map((skill) => (
              <span key={skill} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <footer className="bg-[#214634] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Siap Mengoptimalkan Performa Iklan Anda?</h2>
            <p className="text-slate-300 text-base lg:text-lg mb-10 max-w-2xl mx-auto">Saya terbuka untuk diskusi mengenai strategi ads, audit akun, atau posisi media buyer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:falahamri93@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F5A623] text-[#214634] font-bold text-sm hover:bg-[#F5A623]/90 transition-all shadow-md">
                <Mail className="w-4 h-4" /> Kirim Email
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};
