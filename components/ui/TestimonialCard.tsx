'use client';

import Image from 'next/image';
import { Icon } from '@iconify/react';
import type { Testimonial } from '@/lib/data';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const isFeatured = testimonial.featured;

  return (
    <div 
      className={`p-8 rounded-2xl border shadow-sm flex flex-col justify-between h-full
        ${isFeatured 
          ? 'bg-primary/5 border-primary/20 md:col-span-3 lg:col-span-1 shadow-primary/10' 
          : 'bg-white border-slate-200'
        }`}
    >
        <div>
            <div className={`flex gap-1 mb-4 ${isFeatured ? 'text-primary' : 'text-accent'}`}>
                <Icon icon="solar:star-bold" />
                <Icon icon="solar:star-bold" />
                <Icon icon="solar:star-bold" />
                <Icon icon="solar:star-bold" />
                <Icon icon="solar:star-bold" />
            </div>
            <p className={`italic mb-6 ${isFeatured ? 'text-lg text-dark font-medium leading-relaxed' : 'text-base text-slate-600'}`}>
              {testimonial.text}
            </p>
        </div>
        <div className="flex items-center gap-4">
            <div className={`relative rounded-full overflow-hidden shrink-0 border-2 ${isFeatured ? 'w-14 h-14 border-primary/20' : 'w-12 h-12 border-slate-100'}`}>
                <Image 
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
            </div>
            <div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-dark tracking-tight">{testimonial.name}</div>
                  <div className="flex items-center gap-1 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-sm font-medium">
                    Compra verificada <Icon icon="solar:check-circle-bold" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                  <span>{testimonial.location}</span>
                  {testimonial.timeAgo && (
                    <>
                      <span>•</span>
                      <span>{testimonial.timeAgo}</span>
                    </>
                  )}
                </div>
            </div>
        </div>
    </div>
  );
}
