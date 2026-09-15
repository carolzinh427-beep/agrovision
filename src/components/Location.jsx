import React from 'react';
import { MapPin, Clock } from 'lucide-react';

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
          
          {/* Left Text */}
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

          {/* Right Location Google Maps Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-4 sm:p-5 border border-slate-300 space-y-3 rounded-none shadow-xs">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#15803D]" />
                  <span className="font-bold text-slate-900 text-sm">Google Maps — Rio Brilhante / MS</span>
                </div>
                <span className="text-xs text-slate-600 font-bold">Base Regional</span>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-200 border border-slate-300 overflow-hidden rounded-none">
                <iframe
                  title="Google Maps Rio Brilhante MS"
                  src="https://maps.google.com/maps?q=Rio%20Brilhante%20-%20MS&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span className="font-semibold">Atendimento presencial em campo</span>
                <a
                  href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20visita%20t%C3%A9cnica%20em%20Rio%20Brilhante%20ou%20regi%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803D] font-bold hover:underline"
                >
                  Solicitar Visita Técnica &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
