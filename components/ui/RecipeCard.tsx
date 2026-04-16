'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import type { Recipe } from '@/lib/data';

type RecipeCardProps = {
  recipe: Recipe;
  className?: string;
};

export default function RecipeCard({ recipe, className = '' }: RecipeCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className={`bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 transition-shadow hover:shadow-md ${className}`}
    >
      <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden relative shadow-sm">
        <Image 
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="80px"
          className="object-cover"
        />
        <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-[2px] text-[9px] font-semibold text-primary px-1.5 py-0.5 rounded-md shadow-sm">
          {recipe.category}
        </div>
      </div>
      <div className="flex-1">
          <h4 className="text-base font-semibold text-dark tracking-tight leading-tight">{recipe.title}</h4>
          <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Icon icon="solar:clock-circle-linear" className="text-sm" /> 
                {recipe.time}
              </span>
              <span className="flex items-center gap-1">
                <Icon icon="solar:chart-linear" className="text-sm" /> 
                {recipe.difficulty}
              </span>
          </div>
          {recipe.macros && (
            <div className="text-[11px] text-slate-400 mt-1">
                {recipe.macros}
            </div>
          )}
      </div>
    </motion.div>
  );
}
