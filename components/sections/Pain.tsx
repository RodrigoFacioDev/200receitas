'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { staggerContainer, scaleUp, fadeUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';

export default function Pain() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-white border-y border-slate-100 border-opacity-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark">
            Você se identifica com algum desses cenários?
          </h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Card 1 */}
          <motion.div variants={scaleUp} className="bg-background p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
              <Icon icon="solar:battery-charge-minimalistic-linear" className="text-2xl" />
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              Acorda tarde, come qualquer coisa na pressa e chega sem energia no trabalho.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div variants={scaleUp} className="bg-background p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Icon icon="solar:chef-hat-linear" className="text-2xl" />
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              Quer comer melhor, mas as receitas &quot;fitness&quot; que encontra parecem impossíveis de fazer.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div variants={scaleUp} className="bg-background p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Icon icon="solar:wallet-money-linear" className="text-2xl" />
            </div>
            <p className="text-base text-slate-600 leading-relaxed">
              Gasta uma fortuna em cafés e padarias porque não sabe o que preparar rápido em casa.
            </p>
          </motion.div>
        </motion.div>

        {/* Highlight Box */}
        <motion.div 
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center"
        >
          <p className="text-lg md:text-xl font-medium text-dark tracking-tight">
            Você não precisa de mais força de vontade. <span className="text-primary relative inline-block">Precisa de receitas certas.<svg className="absolute w-full h-2 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"></path></svg></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
