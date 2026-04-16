'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { staggerContainer, fadeUp, fadeIn } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import { testimonials } from '@/lib/data';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-24 px-6 relative bg-background">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-16 text-center">O que quem já tem o Guia está dizendo</h2>
            
            <motion.div 
                className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 scroll-snap-x mandatory hide-scrollbar"
                style={{ scrollSnapType: 'x mandatory' }}
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {testimonials.map((testimonial) => (
                    <motion.div 
                        key={testimonial.id} 
                        variants={fadeUp} 
                        className="snap-center min-w-[300px] sm:min-w-0"
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        <TestimonialCard testimonial={testimonial} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Counter and Trustpilot badge */}
            <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-col items-center justify-center gap-3 mt-4"
            >
                <div className="text-center text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
                    <Icon icon="solar:users-group-rounded-linear" className="text-lg" />
                    4.200+ guias entregues <span className="mx-2 text-slate-300">|</span> 4.8/5 de avaliação média
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                  <Icon icon="solar:star-bold" className="text-primary text-sm" /> 
                  Avaliados pelos clientes 
                  <Icon icon="solar:check-circle-bold" className="text-primary ml-1" />
                </div>
            </motion.div>
        </div>
    </section>
  );
}
