import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1461225546021042');
            fbq('track', 'PageView');
          `}
        </Script>
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </head>
      <body className="font-sans antialiased text-slate-600 bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1461225546021042&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
