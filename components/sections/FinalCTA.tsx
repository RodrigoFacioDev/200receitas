'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { fadeUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';

export default function FinalCTA() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-white border-t border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-2xl mx-auto">
            <motion.h2 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-dark mb-6 leading-tight"
            >
              Sua próxima manhã pode ser completamente diferente
            </motion.h2>
            <motion.p 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: 'easeOut' } }
              }}
              className="text-lg text-slate-500 mb-10"
            >
              Mais de 4.200 pessoas já escolheram começar o dia com mais saúde, energia e praticidade. Agora é a sua vez de mudar.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' } }
              }}
            >
              <motion.a 
                href="#oferta" 
                whileHover={{ scale: 1.02 }}
                animate={{ boxShadow: ['0 0 0 0 rgba(22,163,74,0)', '0 0 0 12px rgba(22,163,74,0.15)', '0 0 0 0 rgba(22,163,74,0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white text-lg font-medium rounded-xl px-10 py-5 hover:bg-primaryHover transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto group"
              >
                  Quero meu Guia agora — R$ 37
                  <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
              }}
              className="mt-8 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs font-medium text-slate-500"
            >
                <span className="flex items-center gap-1.5"><Icon icon="solar:lock-password-linear" className="text-base" /> Compra 100% segura</span>
                <span className="flex items-center gap-1.5"><Icon icon="solar:shield-check-linear" className="text-base" /> Garantia de 7 dias</span>
                <span className="flex items-center gap-1.5"><Icon icon="solar:bolt-linear" className="text-base" /> Acesso imediato</span>
            </motion.div>
        </div>
    </section>
  );
}
