import React from 'react';

interface ToolItem {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  brandColor: string;
}

export const ToolsSection: React.FC = () => {
  const tools: ToolItem[] = [
    {
      name: 'Google Trends',
      category: 'Riset & Tren',
      description: 'Menganalisis popularitas tren pencarian dan pola musiman kata kunci.',
      brandColor: '#4285F4',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 3.5L12 11L8.5 7.5L2 14" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 3.5H19.5V8" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 18.5H22" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="19.5" cy="3.5" r="2" fill="#34A853"/>
          <circle cx="12" cy="11" r="2" fill="#FBBC05"/>
        </svg>
      )
    },
    {
      name: 'Google Keyword Planner',
      category: 'Keyword Research',
      description: 'Riset volume pencarian, estimasi biaya, dan ide keyword relevan.',
      brandColor: '#FBBC04',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 2.5C6.529 2.5 2.5 6.529 2.5 11.5C2.5 16.471 6.529 20.5 11.5 20.5C16.471 20.5 20.5 16.471 20.5 11.5C20.5 6.529 16.471 2.5 11.5 2.5Z" stroke="#4285F4" strokeWidth="2"/>
          <path d="M21.5 21.5L18 18" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M7 12L10 15L16 9" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Semrush',
      category: 'SEO Suite',
      description: 'Analisis kompetitor, audit backlinks, position tracking & riset keyword.',
      brandColor: '#FF642D',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FF642D"/>
          <path d="M12 4.5C12 4.5 7 8.5 7 13.5C7 16.26 9.24 18.5 12 18.5C14.76 18.5 17 16.26 17 13.5C17 8.5 12 4.5 12 4.5ZM12 16.5C10.62 16.5 9.5 15.38 9.5 14C9.5 12.3 11 10.2 12 9.1C13 10.2 14.5 12.3 14.5 14C14.5 15.38 13.38 16.5 12 16.5Z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Meta Business Suite',
      category: 'Digital Ads & Social',
      description: 'Kelola iklan Facebook/Instagram Ads, audience targeting, & analisis campaign.',
      brandColor: '#0081FB',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M16.5 6C14.82 6 13.25 6.94 12 8.35C10.75 6.94 9.18 6 7.5 6C4.46 6 2 8.46 2 11.5C2 15.7 6.3 18.8 12 21C17.7 18.8 22 15.7 22 11.5C22 8.46 19.54 6 16.5 6ZM12 18.5C7.5 16.7 4 14.2 4 11.5C4 9.57 5.57 8 7.5 8C8.83 8 10.1 8.8 11.2 10.12L12 11.08L12.8 10.12C13.9 8.8 15.17 8 16.5 8C18.43 8 20 9.57 20 11.5C20 14.2 16.5 16.7 12 18.5Z" fill="#0081FB"/>
        </svg>
      )
    },
    {
      name: 'Canva',
      category: 'Desain & Konten',
      description: 'Pembuatan mikro aset visual, banner promosi, & infografis artikel SEO.',
      brandColor: '#00C4CC',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#00C4CC"/>
          <path d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18C13.8 18 15.4 17.2 16.5 15.9L14.8 14.6C14.1 15.5 13.1 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8C13.1 8 14.1 8.5 14.8 9.4L16.5 8.1C15.4 6.8 13.8 6 12 6Z" fill="white"/>
          <circle cx="17" cy="12" r="2" fill="#7D2AE8"/>
        </svg>
      )
    },
    {
      name: 'Google Flow',
      category: 'AI Video & Konten Visual',
      description: 'Platform kreasi video & konten visual AI dari Google Labs yang menggabungkan kekuatan Veo, Imagen, & Gemini.',
      brandColor: '#4285F4',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#E8F0FE"/>
          <path d="M6 7C6 5.89543 6.89543 5 8 5H16C17.1046 5 18 5.89543 18 7V17C18 18.1046 17.1046 19 16 19H8C6.89543 19 6 18.1046 6 17V7Z" stroke="#4285F4" strokeWidth="2"/>
          <path d="M10 9.5L15 12L10 14.5V9.5Z" fill="#EA4335"/>
          <path d="M17.5 5.5L18 6.5L19 7L18 7.5L17.5 8.5L17 7.5L16 7L17 6.5L17.5 5.5Z" fill="#FBBC04"/>
          <path d="M6.5 15.5L7 16.5L8 17L7 17.5L6.5 18.5L6 17.5L5 17L6 16.5L6.5 15.5Z" fill="#34A853"/>
        </svg>
      )
    },
    {
      name: 'Google Stitch',
      category: 'AI UI & Prototyping',
      description: 'Alat desain antarmuka (UI) berbasis AI Google Labs untuk mengubah teks, gambar, & sketsa menjadi UI & kode frontend.',
      brandColor: '#7C3AED',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#F3E8FF"/>
          <path d="M7 6H17C18.1046 6 19 6.89543 19 8V16C19 17.1046 18.1046 18 17 18H7C5.89543 18 5 17.1046 5 16V8C5 6.89543 5.89543 6 7 6Z" stroke="#7C3AED" strokeWidth="2"/>
          <path d="M5 10H19" stroke="#7C3AED" strokeWidth="1.5"/>
          <path d="M9 10V18" stroke="#7C3AED" strokeWidth="1.5"/>
          <circle cx="14" cy="14" r="1.5" fill="#EC4899"/>
          <path d="M16 7.5L16.5 8.5L17.5 9L16.5 9.5L16 10.5L15.5 9.5L14.5 9L15.5 8.5L16 7.5Z" fill="#F59E0B"/>
        </svg>
      )
    },
    {
      name: 'WordPress',
      category: 'CMS & Web Development',
      description: 'Pengelolaan konten website, pembuatan halaman landed, & arsitektur blog SEO.',
      brandColor: '#21759B',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#21759B"/>
          <path d="M12 3.2C7.14 3.2 3.2 7.14 3.2 12C3.2 14.15 3.97 16.12 5.25 17.65L9.12 7.11H10.82L12.5 12.89L14.18 7.11H15.88L18.75 17.65C20.03 16.12 20.8 14.15 20.8 12C20.8 7.14 16.86 3.2 12 3.2ZM12 19.8C10.75 19.8 9.58 19.45 8.58 18.84L11.12 11.89L12.8 16.89L13.8 13.89L12 19.8Z" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'Code Editor & Backend',
      description: 'Framework backend tangguh untuk pengembangan aplikasi web kustom & API.',
      brandColor: '#FF2D20',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#FF2D20" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 22V12M12 12L22 7M12 12L2 7" stroke="#FF2D20" strokeWidth="2"/>
          <path d="M17 9.5L12 12" stroke="#FF2D20" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Visual Studio Code',
      category: 'Code Editor Utama',
      description: 'IDE utama untuk penulisan kode landing page, skrip automasi, & optimasi teknis.',
      brandColor: '#007ACC',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5L22 5V19L17.5 21.5L8.5 13.5L4 17L2 15.5V8.5L4 7L8.5 10.5L17.5 2.5Z" fill="#007ACC"/>
          <path d="M17.5 2.5L8.5 10.5L4 7L2 8.5V15.5L4 17L8.5 13.5L17.5 21.5V2.5Z" fill="#007ACC" fillOpacity="0.8"/>
          <path d="M17.5 6.5V17.5L21 15.5V8.5L17.5 6.5Z" fill="#1F9CF0"/>
        </svg>
      )
    },
    {
      name: 'Screaming Frog SEO Spider',
      category: 'Technical Audit',
      description: 'Crawl mendalam untuk audit error status code, broken links, & meta tags.',
      brandColor: '#52B848',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#1B4D24"/>
          <path d="M12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5ZM9.5 10.5C10.33 10.5 11 11.17 11 12C11 12.83 10.33 13.5 9.5 13.5C8.67 13.5 8 12.83 8 12C8 11.17 8.67 10.5 9.5 10.5ZM14.5 10.5C15.33 10.5 16 11.17 16 12C16 12.83 15.33 13.5 14.5 13.5C13.67 13.5 13 12.83 13 12C13 11.17 13.67 10.5 14.5 10.5Z" fill="#52B848"/>
          <circle cx="9.5" cy="12" r="1" fill="white"/>
          <circle cx="14.5" cy="12" r="1" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Yoast SEO',
      category: 'On-Page SEO',
      description: 'Optimasi keterbacaan, fokus kata kunci, sitemap XML, & schema markup WordPress.',
      brandColor: '#A4286A',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#A4286A"/>
          <path d="M7 7L11 17H13L17 7H14.5L12 14L9.5 7H7Z" fill="white"/>
          <circle cx="17" cy="8" r="2.5" fill="#F5A623"/>
        </svg>
      )
    },
    {
      name: 'Google Analytics',
      category: 'Web Analytics',
      description: 'Pelacakan perilaku pengunjung, analisis conversion funnel, & trafik pengguna.',
      brandColor: '#F9AB00',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FFF7E6"/>
          <rect x="5" y="14" width="3.5" height="5" rx="1" fill="#F9AB00"/>
          <rect x="10.25" y="9" width="3.5" height="10" rx="1" fill="#E37400"/>
          <rect x="15.5" y="4" width="3.5" height="15" rx="1" fill="#EA4335"/>
        </svg>
      )
    },
    {
      name: 'Google Search Console',
      category: 'Webmaster & Monitoring',
      description: 'Monitoring performa pencarian Google, indexing halaman, & kesehatan sitemap.',
      brandColor: '#4585F4',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#E8F0FE"/>
          <path d="M12 4L4 8V12C4 16.5 7.5 20.3 12 21.5C16.5 20.3 20 16.5 20 12V8L12 4Z" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 9" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Google PageSpeed Insights',
      category: 'Performa & Core Web Vitals',
      description: 'Mengukur kecepatan loading, Core Web Vitals, & optimasi UX seluler.',
      brandColor: '#0086F4',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="2"/>
          <path d="M12 12L16 8" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="2" fill="#34A853"/>
          <path d="M6.5 12C6.5 8.96 8.96 6.5 12 6.5" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="tools" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-100">
      <div className="text-center mb-12">
        <span className="text-[#FFB800] font-bold text-sm md:text-base block mb-2 uppercase tracking-wider">
          Tech Stack & Software
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          Tools Yang Digunakan
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Kombinasi perangkat lunak riset, analisis, desain, dan pengembangan terbaik untuk mengeksekusi strategi digital SEO berkinerja tinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#FFB800]/60 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  {tool.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                  {tool.category}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#2A4D3E] transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {tool.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tool.brandColor }}
              ></span>
              <span className="text-[11px] font-medium text-slate-400">Siap Digunakan</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
