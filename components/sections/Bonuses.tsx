'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import bonusPlanMockup from '@/app/assets/bonus_plan_mockup.png';
import bonusMarmitasMockup from '@/app/assets/bonus_marmitas_mockup.png';
import bonusListaMockup from '@/app/assets/bonus_lista_mockup.png';

export default function Bonuses() {
  const { ref, inView } = useSectionInView();

  const bonuses = [
    {
      id: 1,
      title: "Plano Alimentar de 30 Dias",
      description: "Um cronograma de refeições pronto para 1 mês inteiro. Ideal para você que não quer pensar no que comer ou como organizar seu emagrecimento.",
      value: "R$ 47,00",
      image: bonusPlanMockup,
      icon: "solar:calendar-date-bold-duotone"
    },
    {
      id: 2,
      title: "Guia de Marmitas Práticas",
      description: "Aprenda a cozinhar para a semana toda em apenas 2 horas do seu domingo usando técnicas de meal prep inteligente e econômica.",
      value: "R$ 37,00",
      image: bonusMarmitasMockup,
      icon: "solar:box-minimalistic-bold-duotone"
    },
    {
      id: 3,
      title: "Lista de Supermercado Base",
      description: "Saiba exatamente o que comprar para não desperdiçar dinheiro e tempo. Uma lista curada para manter sua geladeira saudável investindo pouco.",
      value: "R$ 29,00",
      image: bonusListaMockup,
      icon: "solar:clipboard-list-bold-duotone"
    }
  ];

  return (
    <section id="bonus" ref={ref} className="py-24 px-6 overflow-hidden relative bg-slate-900 border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-slate-900 to-slate-900 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1.5 text-sm font-medium text-accent mb-4 border border-accent/20"
                >
                    <Icon icon="solar:gift-bold" className="text-lg" />
                    <span>Presentes Especiais</span>
                </motion.div>
                <motion.h2 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
                >
                    Garanta a Versão Premium e <br className="hidden sm:block"/> leve <span className="text-accent underline decoration-accent/50 underline-offset-8">3 Bônus Gratuitamente</span>
                </motion.h2>
                <motion.p 
                    initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp}
                    className="text-lg text-slate-400"
                >
                    Esses 3 novos bônus não são vendidos separadamente. Eles farão parte do pacote Premium por tempo limitado.
                </motion.p>
            </div>

            <motion.div 
                className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch"
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                {bonuses.map((bonus) => (
                    <motion.div 
                        key={bonus.id} 
                        variants={fadeUp} 
                        className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center border border-slate-700/50 hover:border-accent/40 transition-colors group relative"
                    >
                        <div className="absolute top-4 right-4 bg-red-500/10 text-red-400 font-bold px-3 py-1 rounded-full text-xs border border-red-500/20 line-through decoration-red-400/50">
                            De {bonus.value}
                        </div>
                        
                        <div className="relative w-full aspect-[4/5] mb-6 flex justify-center perspective-1000">
                            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full z-0 group-hover:bg-accent/10 transition-colors"></div>
                            <Image 
                                src={bonus.image}
                                alt={bonus.title}
                                fill
                                className="object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-500"
                                unoptimized
                            />
                        </div>

                        <div className="text-center flex-1 flex flex-col justify-end">
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight flex items-center justify-center gap-2">
                                <Icon icon={bonus.icon} className="text-accent" />
                                {bonus.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {bonus.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-16 text-center">
                <p className="text-white font-medium text-lg mb-2">Valor total dos Bônus: <span className="line-through text-slate-400">R$ 113,00</span></p>
                <p className="text-accent font-bold text-2xl">Por R$ 0 na Oferta Premium hoje!</p>
            </motion.div>
        </div>
    </section>
  );
}
