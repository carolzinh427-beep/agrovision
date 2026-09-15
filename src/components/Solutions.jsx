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
    <section id="solucoes" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Without top tags/pills) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Soluções em agricultura de precisão
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Mais eficiência, produtividade e confiabilidade para o seu campo.
          </p>
        </div>

        {/* 6 Institutional Square Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white p-6 border border-slate-200 hover:border-slate-400 transition-all duration-150 flex flex-col justify-between rounded-none shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#15803D] group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono font-bold text-xl text-slate-300 group-hover:text-[#15803D] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-['Outfit'] group-hover:text-[#15803D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">AgroVision MS</span>
                  <a
                    href="https://wa.me/5567991776857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#15803D] font-bold hover:underline"
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
