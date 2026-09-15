import React from 'react';
import { ShieldCheck, Cpu, Target, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-[#0A0E17] relative border-b border-slate-800/80 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E676]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00E676] to-[#009624] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#00E676]/20">
                  <Cpu className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white font-['Outfit']">
                    AgroVision <span className="text-[#00E676]">MS</span>
                  </h3>
                  <p className="text-xs text-slate-400">Agricultura de Precisão</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#00E676]">Nossos Compromissos</span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                    <span>Confiabilidade máxima nas operações agrícolas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                    <span>Precisão milimétrica de passada a passada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                    <span>Revenda oficial Agres e Greco Agro Tech</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                    <span>Presença constante em Rio Brilhante e região — MS</span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs italic text-slate-400 font-medium">
                  "Tecnologia e precisão, guiando o futuro no campo."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Positioning */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider border border-[#00E676]/20">
              Sobre a Empresa
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Soluções em agricultura de precisão para o agro do Mato Grosso do Sul
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A <strong className="text-white">AgroVision MS</strong> atua com a comercialização de equipamentos tecnológicos de ponta, instalação, configuração, diagnóstico eletrônico, reparos de precisão e acompanhamento técnico direto em campo.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Nosso foco é proporcionar aos produtores rurais de Rio Brilhante e região a tecnologia exata necessária para eliminar o desperdício de insumos, reduzir o tempo de máquina parada e obter o máximo rendimento em cada safra.
            </p>

            <div className="p-4 rounded-xl bg-[#00E676]/5 border border-[#00E676]/20 text-xs text-slate-200">
              <strong className="text-[#00E676] font-bold block mb-1">Mais eficiência, produtividade e confiabilidade para o seu campo.</strong>
              Não entregamos apenas equipamentos: entregamos o suporte contínuo para garantir que a sua operação funcione perfeitamente no momento decisivo da safra.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
