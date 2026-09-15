import React from 'react';
import { Wrench, CheckCircle2, MessageCircle, Truck, Sliders, Activity, Settings } from 'lucide-react';

export default function Services() {
  const serviceBadges = [
    { title: 'Diagnóstico', desc: 'Identificação rápida de falhas elétricas e de comunicação GNSS.', icon: Activity },
    { title: 'Reparos', desc: 'Manutenção em monitores, chicotes e antenas de precisão.', icon: Wrench },
    { title: 'Instalação', desc: 'Montagem técnica em tratores, colhedoras e pulverizadores.', icon: Settings },
    { title: 'Configuração', desc: 'Ajustes de parâmetros para máxima sensibilidade de curva.', icon: Sliders },
    { title: 'Calibração', desc: 'Aferição centimétrica em campo antes da safra.', icon: CheckCircle2 },
    { title: 'Suporte em Campo', desc: 'Atendimento técnico presencial na sua propriedade.', icon: Truck },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Without top tag) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Suporte técnico para sua operação
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Profissionais qualificados para manter sua máquina produzindo no momento certo.
          </p>
        </div>

        {/* 6 Square Service Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {serviceBadges.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-4 border border-slate-200 hover:border-slate-400 transition-all text-center rounded-none shadow-xs group flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 flex items-center justify-center text-[#15803D] mb-2 group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 font-['Outfit'] group-hover:text-[#15803D] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[11px] text-slate-500 leading-snug line-clamp-3">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Corporate Commitment Banner Box */}
        <div className="bg-white border border-slate-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-none shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#15803D] uppercase tracking-wider block">Compromisso AgroVision MS</span>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed font-['Outfit']">
              "Não entregamos apenas tecnologia. Acompanhamos sua operação para garantir que os equipamentos funcionem corretamente."
            </p>
          </div>

          <a
            href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Preciso%20de%20suporte%20t%C3%A9cnico%20em%20campo%20para%20minha%20opera%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-6 py-3.5 rounded-none text-xs sm:text-sm shadow-xs border border-[#15803D] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chamar Suporte no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
