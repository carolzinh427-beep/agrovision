import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

export default function Location() {
  const cities = [
    'Rio Brilhante',
    'Maracaju',
    'Dourados',
    'Sidrolândia',
    'Itaporã',
    'Nova Alvorada do Sul',
    'Ponta Porã',
    'Região Sul do MS'
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Text (Without top tag) */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
              Atendimento em Rio Brilhante e região — MS
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Leve a assistência técnica e os equipamentos de precisão da AgroVision MS diretamente para a sua fazenda. Atendemos produtores nos principais polos agrícolas do Mato Grosso do Sul.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Municípios e Vizinhanças Atendidas:
              </span>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 border border-slate-300 text-xs text-slate-800 font-semibold flex items-center gap-1.5 rounded-none"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#15803D]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-300 flex items-center gap-3 text-xs text-slate-700 rounded-none">
              <Clock className="w-5 h-5 text-[#15803D] flex-shrink-0" />
              <span>Agendamento prévio de visitas e diagnósticos em campo com técnico especializado.</span>
            </div>
          </div>

          {/* Right Location Graphic Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-5 sm:p-6 border border-slate-300 space-y-4 rounded-none shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#15803D]" />
                  <span className="font-bold text-slate-900 text-sm">Base Operacional AgroVision MS</span>
                </div>
                <span className="text-xs text-slate-600 font-bold">MS - Brasil</span>
              </div>

              {/* Location Card Display */}
              <div className="relative h-48 sm:h-56 bg-white border border-slate-300 overflow-hidden flex items-center justify-center text-center p-6">
                <div className="space-y-2 max-w-xs">
                  <Navigation className="w-8 h-8 text-[#15803D] mx-auto" />
                  <h4 className="font-bold text-slate-900 text-sm">Rio Brilhante e região — MS</h4>
                  <p className="text-xs text-slate-600">
                    Suporte técnico presencial em campo em toda a região agrícola.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span>Contato: (67) 99177-6857</span>
                <a
                  href="https://wa.me/5567991776857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803D] font-bold hover:underline"
                >
                  Solicitar Visita &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
