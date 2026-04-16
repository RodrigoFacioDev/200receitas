'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { scaleUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';

export default function Guarantee() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={scaleUp}
              className="border-2 border-primary/20 bg-primary/5 rounded-2xl p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left"
            >
                <div className="w-20 h-20 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <motion.div
                       animate={{ scale: [1, 1.08, 1] }} 
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon icon="solar:shield-check-bold" className="text-4xl" />
                    </motion.div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-dark mb-2 tracking-tight">Garantia incondicional de 7 dias</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        Você tem 7 dias inteiros para testar todas as receitas. Se achar que não serve para você ou se simplesmente não gostar, devolvemos cada centavo do seu investimento — sem perguntas, sem letras miúdas, sem burocracia.
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
