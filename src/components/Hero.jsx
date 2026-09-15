import React from 'react';
import { MessageCircle, ArrowRight, Shield, Cpu, Activity, MapPin, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-4 pb-8 sm:py-12 md:py-16 overflow-hidden tech-grid-bg">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#00E676]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#0B192C] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Region Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00E676]" />
              <span>Atendimento em Rio Brilhante e região — MS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-['Outfit']">
              Tecnologia e precisão, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#69F0AE] to-emerald-400">
                guiando o futuro no campo.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Soluções em agricultura de precisão para mais eficiência, produtividade e confiabilidade na sua operação.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 bg-[#121824] hover:bg-[#1E293B] text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 border border-slate-700 hover:border-[#00E676]/50 shadow-md group"
              >
                <span>Conhecer soluções</span>
                <ArrowRight className="w-4 h-4 text-[#00E676] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5567991776857"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#00E676]/25 hover:shadow-[#00E676]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Falar com especialista</span>
              </a>
            </div>

            {/* Key Micro Metrics Badges */}
            <div className="pt-4 sm:pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-2 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-xs text-slate-400 font-medium">Eficiência</span>
                <span className="text-sm sm:text-lg font-bold text-[#00E676]">Alta Precisão</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-xs text-slate-400 font-medium">Suporte</span>
                <span className="text-sm sm:text-lg font-bold text-white">Direto no Campo</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <span className="block text-xs text-slate-400 font-medium">Equipamentos</span>
                <span className="text-sm sm:text-lg font-bold text-[#00E676]">Revenda Oficial</span>
              </div>
            </div>

          </div>

          {/* Right Visual Display Card (Precision Agriculture Telemetry Preview) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-slate-700/60 p-2 sm:p-3 shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1000&q=80"
                  alt="AgroVision MS Agricultura de Precisão"
                  className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Tech Telemetry Overlay Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Telemetry Reticle Corner Accents */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#00E676]/40 text-[11px] font-mono text-[#00E676]">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>GPS RTK SGN: 100%</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-slate-700 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
                    <span className="font-semibold text-slate-200">Sistemas Calibrados & Ativos</span>
                  </div>
                  <span className="text-[#00E676] font-mono font-bold">Rio Brilhante - MS</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
