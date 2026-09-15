import React from 'react';
import { MapPin, Navigation, Clock, Phone, ShieldCheck } from 'lucide-react';

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
    <section className="py-10 sm:py-16 bg-[#0B0F19] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
              Área de Atuação
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              Atendimento em Rio Brilhante e região — MS
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Leve a assistência técnica e os equipamentos de precisão da AgroVision MS diretamente para a sua fazenda. Atendemos produtores em todo o polos agrícolas do Mato Grosso do Sul.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Municípios e Vizinhanças Atendidas:
              </span>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#00E676]" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-[#00E676] flex-shrink-0" />
              <span>Agendamento prévio de visitas e diagnósticos em campo com técnico especializado.</span>
            </div>
          </div>

          {/* Right Map Placeholder Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-slate-800 relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#00E676] animate-ping" />
                  <span className="font-bold text-white text-sm">Base Operacional AgroVision MS</span>
                </div>
                <span className="text-xs text-[#00E676] font-mono">MS - Brasil</span>
              </div>

              {/* Map Graphic Preview */}
              <div className="relative h-48 sm:h-60 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 tech-grid-bg opacity-40" />
                <div className="relative z-10 space-y-2 max-w-xs">
                  <Navigation className="w-8 h-8 text-[#00E676] mx-auto animate-bounce" />
                  <h4 className="font-bold text-white text-sm">Rio Brilhante e região — MS</h4>
                  <p className="text-[11px] text-slate-400">
                    Suporte técnico presencial em campo em toda a região agrícola.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Contato: (67) 99177-6857</span>
                <a
                  href="https://wa.me/5567991776857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E676] font-bold hover:underline"
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
