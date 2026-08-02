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

    // Set up GSAP ScrollTrigger animations for sections & cards in this page
    const ctx = gsap.context(() => {
      // 1. Reveal headers & titles with masked line effect
      const headings = containerRef.current?.querySelectorAll('h1, h2, h3, .animate-heading');
      headings?.forEach((heading) => {
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
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // 2. Parallax and subtle skew effect on card backgrounds and image wrappers
      const cardContainers = containerRef.current?.querySelectorAll('.bg-white, .bg-slate-50, .border-slate-200');
      cardContainers?.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 30,
            opacity: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 60%',
              scrub: 0.5,
            },
          }
        );
      });

      // 3. Image parallax reveal effect inside cards (especially GSC report images & charts)
      const images = containerRef.current?.querySelectorAll('img');
      images?.forEach((img) => {
        gsap.fromTo(
          img,
          {
            scale: 0.96,
            opacity: 0.85,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
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
