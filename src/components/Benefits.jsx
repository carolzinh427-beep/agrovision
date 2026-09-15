import React from 'react';
import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const pillars = [
    {
      title: 'MAIS PRECISÃO',
      highlight: 'Mais precisão nas operações.',
      description: 'Redução drástica de sobreposições no plantio e pulverização com piloto automático e GPS RTK de alta fidelidade.',
      icon: Target,
      tag: 'Precisão Milimétrica',
    },
    {
      title: 'MAIS EFICIÊNCIA',
      highlight: 'Mais eficiência no campo.',
      description: 'Economia direta de combustível, defensivos e sementes, otimizando cada hora de trabalho do seu maquinário.',
      icon: Zap,
      tag: 'Economia de Insumos',
    },
    {
      title: 'MAIOR PRODUTIVIDADE',
      highlight: 'Maior produtividade para sua operação.',
      description: 'Operação sem fadiga do operador e com aproveitamento máximo de cada hectare da sua lavoura.',
      icon: TrendingUp,
      tag: 'Máximo Rendimento',
    },
  ];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#0A0E17] relative border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            Pilares da Tecnologia AgroVision
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Resultados reais para a sua lavoura
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-[#00E676]/50 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#00E676] uppercase tracking-wider px-2 py-0.5 rounded bg-[#00E676]/10 border border-[#00E676]/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white font-['Outfit'] mb-1 group-hover:text-[#00E676] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[#00E676] text-xs font-bold mb-2">
                    "{pillar.highlight}"
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                  <span>Garantia de Desempenho AgroVision</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
