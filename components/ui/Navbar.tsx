'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-[2px] w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight text-dark flex items-center gap-2">
            <Icon icon="solar:cup-hot-linear" className="text-primary text-2xl" />
            BFAST
          </a>
          <a href="#oferta" className="hidden sm:inline-flex items-center justify-center bg-primary text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-primaryHover transition-colors shadow-sm">
            Garantir meu Guia
          </a>
        </div>
      </nav>
      {/* Mobile Sticky Button */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-50">
        <a href="#oferta" className="flex items-center justify-center gap-2 bg-primary text-white text-base font-medium rounded-xl px-4 py-4 shadow-lg active:scale-95 transition-transform">
          Quero meu Guia agora
          <Icon icon="solar:arrow-right-linear" />
        </a>
      </div>
    </>
  );
}
