import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[75vh] flex items-center justify-center py-16 sm:py-24 border-b border-slate-300 overflow-hidden">
      {/* High-Definition Agricultural Field Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-95"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* Clean Corporate Backdrop Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-slate-950/60" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Main Institutional Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Outfit'] max-w-4xl mx-auto">
          Tecnologia e precisão, <br className="hidden sm:inline" />
          <span className="text-[#22C55E]">
            guiando o futuro no campo.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
          Soluções em agricultura de precisão para mais eficiência, produtividade e confiabilidade na sua operação.
        </p>

        {/* Square Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <a
            href="#solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-extrabold px-8 py-4 rounded-none text-sm sm:text-base transition-all duration-150 border border-white shadow-md group"
          >
            <span>Conhecer soluções</span>
            <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="https://wa.me/5567991776857"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold px-8 py-4 rounded-none text-sm sm:text-base transition-all duration-150 border border-[#15803D] shadow-md"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Falar com especialista</span>
          </a>
        </div>

        {/* Institutional Trust Indicators */}
        <div className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-center text-white">
          <div className="p-3 bg-black/40 backdrop-blur-xs border border-white/20">
            <span className="block text-[11px] text-slate-300 font-semibold uppercase">Desempenho</span>
            <span className="text-sm font-bold text-[#22C55E]">Alta Precisão</span>
          </div>
          <div className="p-3 bg-black/40 backdrop-blur-xs border border-white/20">
            <span className="block text-[11px] text-slate-300 font-semibold uppercase">Atendimento</span>
            <span className="text-sm font-bold text-white">Direto no Campo</span>
          </div>
          <div className="p-3 bg-black/40 backdrop-blur-xs border border-white/20">
            <span className="block text-[11px] text-slate-300 font-semibold uppercase">Equipamentos</span>
            <span className="text-sm font-bold text-[#22C55E]">Revenda Oficial</span>
          </div>
        </div>

      </div>
    </section>
  );
}
