import React from 'react';
import { ShieldCheck, Target, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Brand Card (Institutional Square Card) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-6 sm:p-8 border border-slate-300 space-y-6 rounded-none shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-[#15803D] flex items-center justify-center text-white font-extrabold">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 font-['Outfit']">
                    AgroVision <span className="text-[#15803D]">MS</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Agricultura de Precisão</p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-900 block">Pilares de Confiabilidade</span>
                <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Confiabilidade máxima nas operações agrícolas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Precisão de passada a passada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Revenda oficial Agres e Greco Agro Tech</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    <span>Atendimento presencial em Rio Brilhante e região — MS</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-3 border-t border-slate-200">
                <p className="text-xs italic text-slate-600 font-semibold">
                  "Tecnologia e precisão, guiando o futuro no campo."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Soluções em agricultura de precisão para o agro do Mato Grosso do Sul
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              A <strong className="text-slate-900">AgroVision MS</strong> atua com a comercialização de equipamentos tecnológicos de ponta, instalação, configuração, diagnóstico eletrônico, reparos de precisão e acompanhamento técnico direto em campo.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Nosso foco é proporcionar aos produtores rurais de Rio Brilhante e região a tecnologia exata necessária para eliminar o desperdício de insumos, reduzir o tempo de máquina parada e obter o máximo rendimento em cada safra.
            </p>

            <div className="p-4 bg-white border-l-4 border-[#15803D] border-t border-r border-b border-slate-200 text-xs text-slate-800 rounded-none shadow-xs">
              <strong className="text-[#15803D] font-bold block mb-1">Mais eficiência, produtividade e confiabilidade para o seu campo.</strong>
              Não entregamos apenas equipamentos: entregamos o suporte contínuo para garantir que a sua operação funcione perfeitamente no momento decisivo da safra.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function CheckIcon() {
  return <span className="text-[#15803D] font-bold">✓</span>;
}
