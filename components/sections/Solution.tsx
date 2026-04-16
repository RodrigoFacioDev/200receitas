'use client';

import { motion } from 'framer-motion';
import { staggerContainer, slideInLeft, fadeUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import { solutionRecipes } from '@/lib/data';
import RecipeCard from '../ui/RecipeCard';

export default function Solution() {
  const { ref, inView } = useSectionInView();

  return (
    <section id="solucao" ref={ref} className="py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-4">Apresentando o Guia 200 Receitas de Café da Manhã Saudáveis</h2>
                <p className="text-lg text-slate-500">O único guia que une variedade, praticidade e resultado — sem complicar sua rotina.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: List */}
                <motion.div 
                    className="space-y-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={slideInLeft} className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-accent text-2xl">🥞</div>
                        <div>
                            <h3 className="text-lg font-semibold text-dark mb-1 tracking-tight">Panquecas &amp; Tapiocas</h3>
                            <p className="text-sm text-slate-500">Versões proteicas que dão saciedade e não pesam no estômago.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideInLeft} className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-primary text-2xl">🥤</div>
                        <div>
                            <h3 className="text-lg font-semibold text-dark mb-1 tracking-tight">Smoothies &amp; Vitaminas</h3>
                            <p className="text-sm text-slate-500">Prontos em 3 minutos, ideais para bater e levar na garrafinha.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideInLeft} className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-purple-500 text-2xl">🫐</div>
                        <div>
                            <h3 className="text-lg font-semibold text-dark mb-1 tracking-tight">Bolinhos &amp; Snacks</h3>
                            <p className="text-sm text-slate-500">Assados, sem fritura, perfeitos para preparar no domingo para a semana.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={slideInLeft} className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 bg-white border border-slate-100 shadow-sm rounded-xl flex items-center justify-center text-yellow-500 text-2xl">🍳</div>
                        <div>
                            <h3 className="text-lg font-semibold text-dark mb-1 tracking-tight">Ovos &amp; Proteínas</h3>
                            <p className="text-sm text-slate-500">40 variações exclusivas para você nunca mais repetir o mesmo ovo mexido.</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Recipe Mockups */}
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transform scale-105 z-0"></div>
                    <motion.div 
                        className="relative z-10 flex flex-col gap-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                    >
                        {solutionRecipes.map((recipe, index) => (
                           <motion.div variants={fadeUp} key={recipe.id} className={index === 1 ? 'ml-6' : ''}>
                               <RecipeCard recipe={recipe} />
                           </motion.div> 
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
}
