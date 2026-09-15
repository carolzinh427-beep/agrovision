import React from 'react';
import { Compass, Navigation, Cpu, Monitor, Zap, Signal } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      number: '01',
      title: 'GPS AGRÍCOLA',
      description: 'Instalação, configuração, calibração e suporte.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'PILOTO AUTOMÁTICO',
      description: 'Instalação e calibração de sistemas de direcionamento.',
      icon: Navigation,
    },
    {
      number: '03',
      title: 'PROJETOS PARA AGRICULTURA DE PRECISÃO',
      description: 'Planejamento e desenvolvimento de soluções para sua operação.',
      icon: Cpu,
    },
    {
      number: '04',
      title: 'MONITORES E ANTENAS',
      description: 'Diagnóstico e reparos em monitores e antenas GNSS.',
      icon: Monitor,
    },
    {
      number: '05',
      title: 'DIAGNÓSTICO ELETRÔNICO',
      description: 'Identificação de falhas em equipamentos e sistemas.',
      icon: Zap,
    },
    {
      number: '06',
      title: 'ATUALIZAÇÃO DE SINAL',
      description: 'Configuração e suporte para correções e posicionamento.',
      icon: Signal,
    },
  ];

  return (
    <section id="solucoes" className="py-10 sm:py-16 md:py-20 bg-[#0B0F19] relative border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            Soluções Especializadas
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Soluções em agricultura de precisão
          </h2>
          <p className="text-slate-300 text-xs sm:text-base">
            Mais eficiência, produtividade e confiabilidade para o seu campo.
          </p>
        </div>

        {/* 6 Cards Grid (Mobile Compact & Touch Friendly) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800/90 hover:border-[#00E676]/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Background Number Accent */}
                <div className="absolute top-2 right-3 font-mono font-black text-3xl sm:text-4xl text-slate-800/40 group-hover:text-[#00E676]/15 transition-colors">
                  {item.number}
                </div>

                <div>
                  {/* Icon Badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676] mb-3 sm:mb-4 group-hover:bg-[#00E676] group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 font-['Outfit'] group-hover:text-[#00E676] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-mono text-[#00E676]">AgroVision MS</span>
                  <a
                    href="https://wa.me/5567991776857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00E676] hover:underline font-semibold"
                  >
                    Consultar &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
