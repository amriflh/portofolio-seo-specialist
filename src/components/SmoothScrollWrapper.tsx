import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on page mount
    window.scrollTo(0, 0);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Helper to check if element is inside excluded section ("Projek Pribadi")
    const isExcluded = (el: Element): boolean => {
      return !!el.closest('#portofolio, .no-scroll-anim, [data-no-scroll="true"]');
    };

    // Set up GSAP ScrollTrigger animations for sections & cards in this page
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // 1. Reveal headers & titles with masked line / skew reveal effect (excluding Projek Pribadi)
      const headings = (Array.from(
        containerRef.current.querySelectorAll('h1, h2, h3, h4, .animate-heading')
      ) as HTMLElement[]).filter((el) => !isExcluded(el));

      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          {
            y: 35,
            opacity: 0,
            skewY: 1.5,
          },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 2. Grid cards & containers animation with staggered reveal (excluding Projek Pribadi)
      const gridContainers = (Array.from(
        containerRef.current.querySelectorAll('.grid')
      ) as HTMLElement[]).filter((el) => !isExcluded(el));

      gridContainers.forEach((grid) => {
        const items = (Array.from(grid.children) as HTMLElement[]).filter((child) => !isExcluded(child));
        if (items.length > 0) {
          gsap.fromTo(
            items,
            {
              y: 40,
              opacity: 0,
              scale: 0.96,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });

      // 3. Standalone cards / experience blocks not inside a direct grid
      const standaloneCards = (Array.from(
        containerRef.current.querySelectorAll('.bg-slate-50, .bg-white, .border-slate-200')
      ) as HTMLElement[]).filter((el) => !isExcluded(el) && !el.closest('.grid'));

      standaloneCards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 30,
            opacity: 0.85,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 4. Text paragraphs (excluding Projek Pribadi)
      const paragraphs = (Array.from(
        containerRef.current.querySelectorAll('p, .text-block')
      ) as HTMLElement[]).filter((el) => !isExcluded(el) && !el.closest('.grid') && !el.closest('h1, h2, h3, h4'));

      paragraphs.forEach((p) => {
        gsap.fromTo(
          p,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: p,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 5. Image reveal effect (excluding Projek Pribadi)
      const images = (Array.from(
        containerRef.current.querySelectorAll('img')
      ) as HTMLImageElement[]).filter((el) => !isExcluded(el));

      images.forEach((img) => {
        gsap.fromTo(
          img,
          {
            scale: 0.96,
            opacity: 0.85,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);



    return () => {
      ctx.revert();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="smooth-scroll-container w-full min-h-screen">
      {children}
    </div>
  );
};
