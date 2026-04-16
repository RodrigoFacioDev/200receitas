'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import type { FAQ } from '@/lib/data';

type FAQItemProps = {
  faq: FAQ;
};

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none" 
          aria-expanded={isOpen}
        >
            <span className="font-medium text-dark tracking-tight pr-4">{faq.question}</span>
            <motion.span 
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-slate-400 text-xl shrink-0"
            >
              <Icon icon="solar:alt-arrow-down-linear" />
            </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 mt-2 pt-4">
                  {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
