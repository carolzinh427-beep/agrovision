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
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Without top tag) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Resultados reais para a sua lavoura
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Os três pilares de desempenho da AgroVision MS para a sua operação.
          </p>
        </div>

        {/* 3 Pillars Square Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 border border-slate-200 hover:border-slate-400 transition-all duration-150 relative flex flex-col justify-between rounded-none shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#15803D]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider px-2 py-1 bg-slate-100 border border-slate-200 rounded-none">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 font-['Outfit'] mb-1 group-hover:text-[#15803D] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-[#15803D] text-xs font-bold mb-3">
                    "{pillar.highlight}"
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#15803D]" />
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
