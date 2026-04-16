'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { fadeUp, fadeIn, staggerContainer } from '@/lib/animations';
import { testimonials } from '@/lib/data';
import { useSectionInView } from '@/hooks/useInView';
import RecipeCard from '../ui/RecipeCard';
import { heroRecipes } from '@/lib/data';

export default function Hero() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column */}
        <motion.div 
          className="flex flex-col items-start space-y-8 order-last lg:order-first"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Urgency Tag */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3 py-1.5 text-xs font-medium text-accent">
            <Icon icon="solar:bolt-linear" className="text-base" />
            <span>Mais de 4.200 pessoas já transformaram o café da manhã</span>
          </motion.div>
          
          {/* Headline */}
          <div className="space-y-4">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark leading-[1.1]">
              Café da manhã de hotel — <span className="text-primary">em 10 minutos</span>, todo dia, sem stress
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
              200 receitas práticas com ingredientes simples que você já tem em casa. Sem dietas malucas. Sem ingredientes caros.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.a 
              href="#oferta" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white text-base font-medium rounded-xl px-8 py-4 hover:bg-primaryHover transition-colors shadow-sm hover:shadow-md w-full sm:w-auto"
            >
              Quero meu Guia agora — R$ 37
            </motion.a>
            <motion.a 
              href="#solucao" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 text-base font-medium rounded-xl px-8 py-4 hover:bg-slate-50 hover:text-dark transition-colors shadow-sm w-full sm:w-auto"
            >
              Ver as receitas antes
              <Icon icon="solar:arrow-right-linear" />
            </motion.a>
          </motion.div>

          {/* Guarantee and Social Proof */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600">
                      <Icon icon="solar:shield-check-linear" className="text-lg" />
                  </div>
                  <span>7 dias de garantia incondicional — Risco Zero</span>
              </div>
              <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                      {testimonials.slice(0, 3).map((t, idx) => (
                          <div key={idx} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                              <Image src={t.image} alt={t.name} fill sizes="32px" className="object-cover" />
                          </div>
                      ))}
                  </div>
                  <span className="text-sm font-medium text-slate-600">4.200+ já garantiram</span>
              </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Mockup */}
        <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md mx-auto lg:ml-auto max-h-[260px] lg:max-h-none flex justify-center order-first lg:order-last perspective-1000"
        >
            <div className="relative z-10 w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform lg:rotate-y-[-5deg] lg:rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 z-20 bg-white shadow-lg border border-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5"
                >
                  <Icon icon="solar:star-bold" className="text-accent text-sm" />
                  <span className="text-xs font-bold text-dark">4.8 Avaliação</span>
                </motion.div>

                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-400">Guia Digital &amp; Vídeos</span>
                </div>
                
                <div className="p-6 md:p-8 space-y-6 bg-gradient-to-br from-white to-slate-50 relative">
                    <div className="absolute top-6 right-6 opacity-40">
                         <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" alt="Beautiful healthy breakfast" width={100} height={100} className="rounded-xl blur-lg scale-150 mix-blend-multiply" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 shadow-inner">
                            <Icon icon="solar:book-bookmark-linear" className="text-3xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-dark mb-2 leading-tight">200 Receitas de Café da Manhã Saudáveis</h3>
                            <p className="text-sm text-slate-500">O guia definitivo para manhãs produtivas.</p>
                        </div>
                        
                        <div className="space-y-3 pt-4 border-t border-slate-100 mt-6 hidden sm:block">
                            {heroRecipes.map((recipe) => (
                                <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl z-0"></div>
        </motion.div>

      </div>
    </section>
  );
}
