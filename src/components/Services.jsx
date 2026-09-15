import React from 'react';
import { Wrench, CheckCircle2, MessageCircle, Truck, Sliders, Activity, Settings, AlertTriangle } from 'lucide-react';

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
    <section id="servicos" className="py-10 sm:py-16 md:py-20 bg-[#0B0F19] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            Assistência Técnica Especializada
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Suporte técnico para sua operação
          </h2>
          <p className="text-slate-300 text-xs sm:text-base">
            Profissionais qualificados para manter sua máquina produzindo no momento certo.
          </p>
        </div>

        {/* Services Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {serviceBadges.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="glass-panel p-3.5 sm:p-4 rounded-xl border border-slate-800 hover:border-[#00E676]/40 transition-all text-center group flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676] mb-2 group-hover:bg-[#00E676] group-hover:text-slate-950 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-1 font-['Outfit'] group-hover:text-[#00E676] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[11px] text-slate-400 leading-snug line-clamp-3">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner Box */}
        <div className="glass-panel rounded-2xl border border-[#00E676]/30 p-5 sm:p-8 bg-gradient-to-r from-slate-900 via-[#0B192C] to-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#00E676] uppercase tracking-wider">Compromisso AgroVision MS</span>
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed font-['Outfit']">
              "Não entregamos apenas tecnologia. Acompanhamos sua operação para garantir que os equipamentos funcionem corretamente."
            </p>
          </div>

          <a
            href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Preciso%20de%20suporte%20t%C3%A9cnico%20em%20campo%20para%20minha%20opera%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-[#00E676]/20 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Chamar Suporte no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
