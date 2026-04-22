'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { fadeUp } from '@/lib/animations';
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
    <section id="oferta" ref={ref} className="py-24 px-6 bg-slate-50 relative">
        <div className="absolute inset-0 bg-white opacity-50 z-0"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-dark mb-4">Escolha a Melhor Opção Para Você</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                    Acesso imediato ao material. Pagamento único, sem mensalidades.
                </p>
                
                {/* Timer */}
                {mounted && (
                    <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className="mt-8 flex flex-col items-center gap-2">
                       <span className="text-sm font-semibold text-rose-500 uppercase tracking-widest bg-rose-50 px-4 py-1 rounded-full">Preço promocional encerra em:</span>
                       <div className="flex gap-2 items-center mt-2">
                          <div className="bg-dark text-white font-mono text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">{formatTime(timeLeft.hours)}</div>
                          <span className="text-2xl font-bold text-slate-400 pb-1">:</span>
                          <div className="bg-dark text-white font-mono text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">{formatTime(timeLeft.minutes)}</div>
                          <span className="text-2xl font-bold text-slate-400 pb-1">:</span>
                          <div className="bg-dark text-white font-mono text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-xl shadow-lg text-rose-400">{formatTime(timeLeft.seconds)}</div>
                       </div>
                    </motion.div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                
                {/* Basic Offer */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col h-full"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-dark mb-2">Oferta Básica</h3>
                        <p className="text-slate-500">O guia completo para transformar suas manhãs.</p>
                    </div>

                    <div className="mb-8 border-b border-slate-100 pb-8 text-left">
                        <span className="text-slate-400 line-through text-sm font-medium mb-1 block">De R$ 47,00</span>
                        <div className="flex items-start text-dark">
                            <span className="text-xl font-semibold mt-1">R$</span>
                            <span className="text-5xl font-bold tracking-tight">9</span>
                            <span className="text-xl font-semibold mt-1">,90</span>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-bold" className="text-slate-400 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-600"><strong>Guia 200 Receitas Saudáveis</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-bold" className="text-slate-400 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-600">Acesso via celular, tablet e PC</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-bold" className="text-slate-400 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-600">Suporte por email</span>
                        </li>
                        <li className="flex items-start gap-3 opacity-40">
                            <Icon icon="solar:close-circle-bold" className="text-slate-300 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-400 line-through">Plano Alimentar 30 Dias</span>
                        </li>
                        <li className="flex items-start gap-3 opacity-40">
                            <Icon icon="solar:close-circle-bold" className="text-slate-300 text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-400 line-through">Guia de Marmitas Práticas</span>
                        </li>
                    </ul>

                    <a 
                        href="https://pay.kiwify.com.br/ksJjnPH"
                        className="w-full bg-slate-100 text-slate-700 text-lg font-bold rounded-xl py-4 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Quero a Oferta Básica
                    </a>
                </motion.div>

                {/* Premium Offer */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-primary/30 relative flex flex-col h-full transform md:scale-105 z-10"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        A MAIS ESCOLHIDA ⭐
                    </div>

                    <div className="mb-8 mt-2">
                        <h3 className="text-2xl font-bold text-white mb-2 text-center">Oferta Premium</h3>
                        <p className="text-slate-400 text-center">O pacote completo com todos os bônus para acelerar seus resultados.</p>
                    </div>

                    <div className="mb-8 border-b border-slate-700 pb-8 text-center bg-white/5 rounded-2xl p-6">
                        <span className="text-slate-400 line-through text-sm font-medium mb-1 block">De R$ 160,00</span>
                        <div className="flex justify-center items-start text-white">
                            <span className="text-xl font-semibold mt-1 text-primary">R$</span>
                            <span className="text-6xl font-bold tracking-tight text-white">19</span>
                            <span className="text-xl font-semibold mt-1 text-primary">,90</span>
                        </div>
                        <div className="mt-3 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold inline-block border border-primary/20">
                            Mais de 80% de desconto
                        </div>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-300"><strong>Guia 200 Receitas Saudáveis</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:star-fall-bold" className="text-accent text-xl shrink-0 mt-0.5" />
                            <span className="text-white font-medium">BÔNUS: Plano Alimentar 30 Dias</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:star-fall-bold" className="text-accent text-xl shrink-0 mt-0.5" />
                            <span className="text-white font-medium">BÔNUS: Guia de Marmitas Práticas</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:star-fall-bold" className="text-accent text-xl shrink-0 mt-0.5" />
                            <span className="text-white font-medium">BÔNUS: Lista de Supermercado Base</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Icon icon="solar:check-circle-bold" className="text-primary text-xl shrink-0 mt-0.5" />
                            <span className="text-slate-300">Acesso Vitalício + Atualizações Garantidas</span>
                        </li>
                    </ul>

                    <motion.a 
                        href="https://pay.kiwify.com.br/ksJjnPH"
                        whileHover={{ scale: 1.02 }}
                        animate={{ boxShadow: ['0 0 0 0 rgba(22,163,74,0)', '0 0 0 15px rgba(22,163,74,0.15)', '0 0 0 0 rgba(22,163,74,0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full bg-primary text-white text-lg font-bold rounded-xl py-5 hover:bg-primaryHover transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        Quero a Oferta Premium Agora
                        <Icon icon="solar:cart-large-minimalistic-bold" className="text-xl" />
                    </motion.a>
                </motion.div>

            </div>
            
            {/* Trust Seals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-70">
                <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg px-3 py-1.5 bg-white">
                   <Icon icon="solar:lock-password-bold-duotone" className="text-slate-400 text-lg" />
                   <span className="text-xs text-slate-500 font-bold tracking-tight">Compra Segura</span>
                </div>
                <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg px-3 py-1.5 bg-white">
                   <Icon icon="solar:shield-check-bold-duotone" className="text-primary text-lg" />
                   <span className="text-xs text-slate-500 font-bold tracking-tight">Privacidade Protegida</span>
                </div>
                <div className="flex items-center gap-1.5 border border-slate-200 rounded-lg px-3 py-1.5 bg-white">
                   <Icon icon="solar:refresh-circle-bold-duotone" className="text-accent text-lg" />
                   <span className="text-xs text-slate-500 font-bold tracking-tight">7 Dias de Garantia</span>
                </div>
            </div>
        </div>
    </section>
  );
}
