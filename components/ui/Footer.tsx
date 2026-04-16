import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold tracking-tight text-dark flex items-center gap-2">
                <Icon icon="solar:cup-hot-linear" className="text-slate-400 text-2xl" />
                BFAST
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <a href="#" className="hover:text-dark transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-dark transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-dark transition-colors">Suporte</a>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-200/60 text-center text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© 2024 BFAST Guias Digitais. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00</p>
        </div>
    </footer>
  );
}
