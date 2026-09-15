import React from 'react';
import { Award, CheckCircle2, Shield } from 'lucide-react';

export default function Partnerships() {
  const partners = [
    {
      name: 'Agres Agricultura de Precisão',
      tagline: 'Sistemas de Guiamento, Pilotos Automáticos e Monitores de Taxa Variável',
      description: 'Líder em inovação tecnológica para mecanização agrícola. Equipamentos com alta resistência no campo e extrema facilidade de uso.',
      badge: 'Revenda Autorizada',
    },
    {
      name: 'Greco Agro Tech',
      tagline: 'Sensores Avançados e Telemetria para Operações Agrícolas',
      description: 'Tecnologia de ponta para diagnóstico eletrônico e controle de implementos com alta confiabilidade operacional.',
      badge: 'Parceiro Técnico',
    },
  ];

  return (
    <section id="parcerias" className="py-10 sm:py-16 md:py-20 bg-[#0A0E17] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            Marcas & Representação
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Parcerias de revenda
          </h2>
          <p className="text-slate-300 text-xs sm:text-base">
            Representação e revenda de soluções em agricultura de precisão para Rio Brilhante e região.
          </p>
        </div>

        {/* 2 Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-[#00E676]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[#00E676] font-mono font-bold text-xs flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#00E676]" />
                    <span>{partner.badge}</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#00E676]" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white font-['Outfit'] mb-1 group-hover:text-[#00E676] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-[#00E676] text-xs font-semibold mb-3">
                  {partner.tagline}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Atendimento Rio Brilhante e Região</span>
                <a
                  href="https://wa.me/5567991776857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E676] font-bold hover:underline"
                >
                  Consultar Linha &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
