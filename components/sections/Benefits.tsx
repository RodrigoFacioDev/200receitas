'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { staggerContainer, scaleUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';

export default function Benefits() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-16 text-center">O que muda na sua vida com o Guia</h2>
            
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {/* Benefit 1 */}
                <motion.div variants={scaleUp} className="flex flex-col text-center items-center">
                    <motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                        <Icon icon="solar:wad-of-money-linear" className="text-3xl" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-dark mb-2 tracking-tight">Economia real</h3>
                    <p className="text-sm text-slate-500">Pare de gastar fortunas todos os dias em cafés caros e padarias.</p>
                </motion.div>
                {/* Benefit 2 */}
                <motion.div variants={scaleUp} className="flex flex-col text-center items-center">
                    <motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
                        <Icon icon="solar:bolt-linear" className="text-3xl" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-dark mb-2 tracking-tight">Mais energia</h3>
                    <p className="text-sm text-slate-500">Manhãs muito mais produtivas alimentando o corpo com nutrição de verdade.</p>
                </motion.div>
                {/* Benefit 3 */}
                <motion.div variants={scaleUp} className="flex flex-col text-center items-center">
                    <motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                        <Icon icon="solar:stopwatch-linear" className="text-3xl" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-dark mb-2 tracking-tight">Preparo rápido</h3>
                    <p className="text-sm text-slate-500">Durma um pouco mais. Todas as receitas prontas em até 15 minutos.</p>
                </motion.div>
                {/* Benefit 4 */}
                <motion.div variants={scaleUp} className="flex flex-col text-center items-center">
                    <motion.div whileHover={{ rotate: 8, scale: 1.1 }} className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                        <Icon icon="solar:scale-linear" className="text-3xl" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-dark mb-2 tracking-tight">Perda de peso</h3>
                    <p className="text-sm text-slate-500">Chegue ao seu objetivo sem passar fome e sem cortar o que você ama.</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
