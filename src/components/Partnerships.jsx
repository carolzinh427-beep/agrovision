import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

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
    <section id="parcerias" className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Without top tag) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Parcerias de revenda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Representação e revenda de soluções em agricultura de precisão para Rio Brilhante e região.
          </p>
        </div>

        {/* 2 Partner Square Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 border border-slate-200 hover:border-slate-400 transition-all duration-150 flex flex-col justify-between rounded-none shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 rounded-none">
                    <Award className="w-4 h-4 text-[#15803D]" />
                    <span>{partner.badge}</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#15803D]" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-['Outfit'] mb-1 group-hover:text-[#15803D] transition-colors">
                  {partner.name}
                </h3>

                <p className="text-[#15803D] text-xs font-bold mb-3">
                  {partner.tagline}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">Atendimento Rio Brilhante e Região</span>
                <a
                  href="https://wa.me/5567991776857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803D] font-bold hover:underline"
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
