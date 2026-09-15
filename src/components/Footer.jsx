import React from 'react';
import { Navigation, MessageCircle, MapPin, ArrowUp, Plus } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0F172A] text-slate-300 pt-12 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#15803D] flex items-center justify-center text-white font-extrabold">
                <Navigation className="w-5 h-5 text-white transform rotate-45" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                Agro<span className="text-[#22C55E]">Vision</span> MS
              </span>
            </a>

            <p className="text-[#22C55E] text-xs font-semibold">
              "Tecnologia e precisão, guiando o futuro no campo."
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Soluções em agricultura de precisão, comercialização de equipamentos, instalação, configuração, diagnóstico, reparos e suporte técnico em campo.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com/agrovision_ms"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 rounded-none transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5567991776857"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#15803D] flex items-center justify-center text-white hover:bg-[#166534] rounded-none transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider font-['Outfit'] text-xs border-b border-slate-700 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#produtos" className="hover:text-white transition-colors">Produtos & Equipamentos</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços & Suporte</a></li>
              <li><a href="#parcerias" className="hover:text-white transition-colors">Parcerias de Revenda</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Empresa</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white uppercase tracking-wider font-['Outfit'] text-xs border-b border-slate-700 pb-2">
              Contato & Região
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-semibold">WhatsApp / Telefone:</span>
                  <a href="https://wa.me/5567991776857" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#22C55E]">
                    (67) 99177-6857
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-semibold">Instagram:</span>
                  <a href="https://instagram.com/agrovision_ms" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#22C55E]">
                    @agrovision_ms
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-semibold">Região de Atendimento:</span>
                  <span className="font-bold text-white">Rio Brilhante e região — MS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AgroVision MS. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="hover:text-white flex items-center gap-1 text-xs text-slate-300 font-medium"
            >
              <Plus className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Painel do Catálogo</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors rounded-none border border-slate-700"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
