import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Guia 200 Receitas de Café da Manhã Saudáveis | BFAST',
  description: 'Café da manhã de hotel em 10 minutos. 200 receitas com ingredientes simples para mais energia, saúde e praticidade. Garantia de 7 dias.',
  openGraph: {
    title: 'Guia 200 Receitas de Café da Manhã Saudáveis | BFAST',
    description: 'Café da manhã de hotel em 10 minutos. 200 receitas práticas com ingredientes simples.',
    images: [{ url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="font-sans antialiased text-slate-600 bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
