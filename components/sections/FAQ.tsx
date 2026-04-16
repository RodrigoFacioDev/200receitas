'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useSectionInView } from '@/hooks/useInView';
import { faqs } from '@/lib/data';
import FAQItem from '../ui/FAQItem';

export default function FAQ() {
  const { ref, inView } = useSectionInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              className="text-3xl font-semibold tracking-tight text-dark mb-12 text-center"
            >
              Perguntas frequentes
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-4"
            >
                {faqs.map((faq) => (
                    <motion.div key={faq.id} variants={fadeUp}>
                      <FAQItem faq={faq} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
