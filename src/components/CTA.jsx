import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0A0E17] relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E676]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-6 sm:p-10 md:p-12 rounded-3xl border border-[#00E676]/40 text-center space-y-6 bg-gradient-to-b from-[#0E1420] via-[#0B121E] to-[#0A0E17] shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Transforme sua Lavoura</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit'] max-w-2xl mx-auto">
            Leve mais precisão para o seu campo.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fale com a AgroVision MS e encontre a tecnologia ideal para sua operação.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20AgroVision%20MS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-extrabold px-8 py-4 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#00E676]/30 hover:shadow-[#00E676]/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Falar com especialista</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E676]" />
              Atendimento via WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E676]" />
              Rio Brilhante e Região — MS
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E676]" />
              Suporte em Campo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
