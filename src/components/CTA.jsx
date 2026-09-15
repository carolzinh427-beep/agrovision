import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 border border-slate-300 text-center space-y-6 rounded-none shadow-xs">
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit'] max-w-2xl mx-auto">
            Leve mais precisão para o seu campo.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fale com a AgroVision MS e encontre a tecnologia ideal para sua operação.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20AgroVision%20MS."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-8 py-4 rounded-none text-sm sm:text-base transition-all duration-150 border border-[#15803D] shadow-xs"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Falar com especialista</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-600 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              Atendimento via WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              Rio Brilhante e Região — MS
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#15803D]" />
              Suporte em Campo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
