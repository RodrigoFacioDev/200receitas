'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import { useState, useEffect } from 'react';

export default function Offer() {
  const { ref, inView } = useSectionInView();
  
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState<{ hours: number, minutes: number, seconds: number }>({ hours: 23, minutes: 47, seconds: 12 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const endTimeStr = localStorage.getItem('bfast_offer_end');
    let endTime: number;

    if (endTimeStr) {
      endTime = parseInt(endTimeStr, 10);
      if (endTime < Date.now()) {
          // Reset if expired
          endTime = Date.now() + 24 * 60 * 60 * 1000;
          localStorage.setItem('bfast_offer_end', endTime.toString());
      }
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem('bfast_offer_end', endTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section id="oferta" ref={ref} className="py-24 px-6 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Investimento único. Resultado para a vida toda.</h2>
                <p className="text-slate-400 text-lg">Acesso imediato a todo o material.</p>
            </div>

            <motion.div 
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={{
                    hidden: { opacity: 0, scale: 0.92 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' } }
                }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-6 right-0 bg-accent text-white text-xs font-semibold px-4 py-1 rounded-l-full shadow-sm">
                    LANÇAMENTO
                </div>

                <div className="flex flex-col items-center text-center border-b border-slate-100 pb-8 mb-8">
                    <span className="text-slate-400 line-through text-lg font-medium mb-1">De R$ 97,00 por apenas</span>
                    <div className="flex items-start justify-center gap-1 text-dark">
                        <span className="text-2xl font-semibold mt-2 text-primary">R$</span>
                        <span className="text-6xl md:text-7xl font-semibold tracking-tight text-primary">9</span>
                        <span className="text-2xl font-semibold mt-2 text-primary">,90</span>
                    </div>
                    <div className="mt-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium inline-block">
                        Você economiza R$ 87,10 hoje
                    </div>

                    {/* Timer */}
                    {mounted && (
                        <div className="mt-6 flex flex-col items-center gap-2">
                           <span className="text-xs font-semibold text-rose-500 uppercase tracking-widest">Oferta expira em:</span>
                           <div className="flex gap-2">
                              <div className="bg-slate-900 text-white font-mono text-xl md:text-2xl font-bold px-3 py-2 rounded-lg shadow-inner">{formatTime(timeLeft.hours)}</div>
                              <span className="text-xl font-bold text-slate-400 py-1">:</span>
                              <div className="bg-slate-900 text-white font-mono text-xl md:text-2xl font-bold px-3 py-2 rounded-lg shadow-inner">{formatTime(timeLeft.minutes)}</div>
                              <span className="text-xl font-bold text-slate-400 py-1">:</span>
                              <div className="bg-slate-900 text-white font-mono text-xl md:text-2xl font-bold px-3 py-2 rounded-lg shadow-inner text-rose-400">{formatTime(timeLeft.seconds)}</div>
                           </div>
                        </div>
                    )}
                </div>

                <motion.ul 
                  className="space-y-4 mb-10"
                  variants={staggerContainer}
                >
                    <motion.li variants={fadeUp} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                        <span className="text-base text-slate-600 text-left"><strong>200 receitas completas</strong> com modo de preparo detalhado</span>
                    </motion.li>
                    <motion.li variants={fadeUp} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                        <span className="text-base text-slate-600 text-left"><strong>Vídeos passo a passo</strong> para as receitas principais</span>
                    </motion.li>
                    <motion.li variants={fadeUp} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                        <span className="text-base text-slate-600 text-left"><strong>Lista de compras semanal</strong> otimizada para economizar</span>
                    </motion.li>
                    <motion.li variants={fadeUp} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                        <span className="text-base text-slate-600 text-left">Guia prático de <strong>substituições de ingredientes</strong></span>
                    </motion.li>
                    <motion.li variants={fadeUp} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                        <span className="text-base text-slate-600 text-left"><strong>Acesso vitalício</strong> com todas as atualizações gratuitas</span>
                    </motion.li>
                </motion.ul>

                <motion.a 
                    href="https://pay.kiwify.com.br/ksJjnPH"
                    whileHover={{ scale: 1.02 }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(22,163,74,0)', '0 0 0 12px rgba(22,163,74,0.15)', '0 0 0 0 rgba(22,163,74,0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-full bg-primary text-white text-lg font-medium rounded-xl py-5 hover:bg-primaryHover transition-colors shadow-lg flex items-center justify-center gap-2 group relative z-10"
                >
                    Quero transformar meu café da manhã
                    <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                {/* Trust Seals */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5 border border-slate-200 rounded px-2 py-1">
                       <Icon icon="solar:lock-password-linear" className="text-slate-400" />
                       <span className="text-[11px] text-slate-500 font-medium tracking-tight">SSL 256-bit</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-slate-200 rounded px-2 py-1">
                       <Icon icon="solar:shield-check-linear" className="text-primary" />
                       <span className="text-[11px] text-slate-500 font-medium tracking-tight">Compra segura</span>
                    </div>
                    <div className="flex items-center gap-1.5 border border-slate-200 rounded px-2 py-1">
                       <Icon icon="solar:refresh-circle-linear" className="text-accent" />
                       <span className="text-[11px] text-slate-500 font-medium tracking-tight">Reembolso garantido</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
