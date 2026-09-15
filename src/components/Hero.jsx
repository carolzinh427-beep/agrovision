import React from 'react';
import { MessageCircle, ArrowRight, MapPin, CheckSquare, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="bg-slate-100 py-12 sm:py-16 md:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] font-['Outfit']">
              Tecnologia e precisão, <br className="hidden sm:inline" />
              <span className="text-[#15803D]">
                guiando o futuro no campo.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Soluções em agricultura de precisão para mais eficiência, produtividade e confiabilidade na sua operação.
            </p>

            {/* Square Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-none text-sm sm:text-base transition-all duration-150 border border-slate-900 shadow-xs group"
              >
                <span>Conhecer soluções</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5567991776857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-6 py-3.5 rounded-none text-sm sm:text-base transition-all duration-150 border border-[#15803D] shadow-xs"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Falar com especialista</span>
              </a>
            </div>

            {/* Institutional Trust Badges */}
            <div className="pt-6 border-t border-slate-300 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 bg-white border border-slate-200">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Desempenho</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Alta Precisão</span>
              </div>
              <div className="p-3 bg-white border border-slate-200">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Atendimento</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Direto no Campo</span>
              </div>
              <div className="p-3 bg-white border border-slate-200">
                <span className="block text-[11px] text-slate-500 font-semibold uppercase">Equipamentos</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">Revenda Oficial</span>
              </div>
            </div>

          </div>

          {/* Right Visual Display Card (Clean Corporate Showcase) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="bg-white border border-slate-300 p-3 shadow-md">
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-200 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80"
                  alt="AgroVision MS Agricultura de Precisão"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="mt-3 p-3 bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <span className="font-bold text-slate-900">AgroVision MS — Agricultura de Precisão</span>
                <span className="text-[#15803D] font-bold">Rio Brilhante / MS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
