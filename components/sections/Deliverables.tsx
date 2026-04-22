'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { fadeUp, staggerContainer, slideInLeft } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import ebookMockup from '@/app/assets/ebook_mockup.png';

export default function Deliverables() {
  const { ref, inView } = useSectionInView();

  const items = [
    {
      title: "200 Receitas Inéditas e Práticas",
      description: "Um acervo completo de receitas deliciosas criadas especialmente para facilitar sua vida e melhorar sua saúde alimentar.",
      icon: "solar:book-bookmark-bold-duotone",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Ingredientes Simples e Baratos",
      description: "Sem dietas malucas ou produtos difíceis de achar. Nós usamos ingredientes que você já tem na geladeira ou encontra em qualquer mercado.",
      icon: "solar:cart-large-minimalistic-bold-duotone",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      title: "Instruções Diretas ao Ponto",
      description: "Modo de preparo simplificado, feito para quem não tem muito tempo sobrando e quer acertar a receita de primeira.",
      icon: "solar:clock-circle-bold-duotone",
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    {
      title: "Acesso 100% Digital",
      description: "Leia de onde quiser: pelo celular, tablet ou computador. Baixe o guia e leve as receitas sempre com você na cozinha.",
      icon: "solar:smartphone-2-bold-duotone",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    }
  ];

  return (
    <section id="entregas" ref={ref} className="py-24 px-6 overflow-hidden relative bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white transform -skew-x-12 translate-x-32 hidden lg:block border-l border-slate-100 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary mb-4"
                >
                    <Icon icon="solar:box-minimalistic-bold" className="text-lg" />
                    <span>Tudo que está incluso</span>
                </motion.div>
                <motion.h2 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-dark mb-4"
                >
                    Veja o que você vai receber <span className="text-primary">imediatamente</span>
                </motion.h2>
                <motion.p 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="text-lg text-slate-500"
                >
                    Um pacote completo para resolver seus cafés da manhã de uma vez por todas.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                {/* Left: 3D Mockup Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative flex justify-center perspective-1000 order-last lg:order-first"
                >
                    <div className="relative w-full max-w-lg">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0"></div>
                        <Image 
                            src={ebookMockup}
                            alt="Ebook Mockup 200 Receitas"
                            width={500}
                            height={500}
                            className="relative z-10 w-full h-auto drop-shadow-2xl"
                            unoptimized
                        />
                        
                        {/* Floating elements to add dynamic feel */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -right-4 top-1/4 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <Icon icon="solar:check-read-bold" className="text-xl" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-dark leading-none">Acesso Imediato</p>
                                <p className="text-xs text-slate-500 mt-1">Enviado por email</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right: Items List */}
                <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {items.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={slideInLeft} 
                            className="flex gap-5 items-start p-5 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all border border-transparent hover:border-slate-100 group"
                        >
                            <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-3xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                <Icon icon={item.icon} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                    
                    <motion.div variants={fadeUp} className="pt-6 mt-6 border-t border-slate-200">
                        <a 
                            href="https://pay.kiwify.com.br/ksJjnPH" 
                            className="flex items-center justify-center gap-2 bg-primary text-white text-lg font-bold rounded-xl px-8 py-5 hover:bg-primaryHover transition-colors shadow-lg shadow-primary/30 w-full transform hover:scale-[1.02] active:scale-95"
                        >
                            Liberar Meu Acesso Agora (R$ 9,90)
                            <Icon icon="solar:arrow-right-bold" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
