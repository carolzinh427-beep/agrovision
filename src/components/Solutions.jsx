import React from 'react';
import { Compass, Navigation, Cpu, Monitor, Zap, Signal } from 'lucide-react';
import DepthCarousel from './DepthCarousel';

export default function Solutions() {
  const solutions = [
    {
      number: '01',
      title: 'GPS AGRÍCOLA',
      description: 'Instalação, configuração, calibração e suporte.',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '02',
      title: 'PILOTO AUTOMÁTICO',
      description: 'Instalação e calibração de sistemas de direcionamento.',
      icon: Navigation,
      image: '/modulo-correcao-rtk.png',
    },
    {
      number: '03',
      title: 'PROJETOS PARA AGRICULTURA DE PRECISÃO',
      description: 'Planejamento e desenvolvimento de soluções para sua operação.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '04',
      title: 'MONITORES E ANTENAS',
      description: 'Diagnóstico e reparos em monitores e antenas GNSS.',
      icon: Monitor,
      image: '/monitor-isoview.png',
    },
    {
      number: '05',
      title: 'DIAGNÓSTICO ELETRÔNICO',
      description: 'Identificação de falhas em equipamentos e sistemas.',
      icon: Zap,
      image: '/kit-ponta-de-cerca-greco.png',
    },
    {
      number: '06',
      title: 'MÓDULO DE CORREÇÃO DE SINAL',
      description: 'Configuração, manutenção e suporte para correções de alta precisão (RTK / GNSS).',
      icon: Signal,
      image: '/conector-chicote-01.png',
    },
  ];

  return (
    <section id="solucoes" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Soluções em agricultura de precisão
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Mais eficiência, produtividade e confiabilidade para o seu campo.
          </p>
        </div>

        {/* 3D Depth Carousel Container */}
        <div className="relative h-[480px] sm:h-[520px] w-full flex items-center justify-center">
          <DepthCarousel
            items={solutions}
            cardWidth={310}
            cardHeight={400}
            radius={0}
            depth={200}
            spread={75}
            tilt={18}
            tiltDirection="right"
            perspective={1300}
            visibleCards={4}
            falloff={0.18}
            blur={4}
            autoplay={true}
            autoplayDelay={3500}
            loop={true}
            showControls={true}
            showIndicators={true}
            renderCard={(item, i, isActive) => {
              const IconComponent = item.icon;
              return (
                <div className="w-full h-full bg-white p-6 border border-slate-300 flex flex-col justify-between rounded-none text-left relative overflow-hidden shadow-md group">
                  {/* Subtle Background Product Image Header */}
                  <div className="h-32 -mx-6 -mt-6 mb-4 bg-slate-100 border-b border-slate-200 overflow-hidden relative flex items-center justify-center p-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 font-mono font-black text-xl text-slate-900 bg-white/90 px-2 py-0.5 border border-slate-300">
                      {item.number}
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#15803D] text-white flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight font-['Outfit']">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold text-[11px]">AgroVision MS</span>
                    <a
                      href="https://wa.me/5567991776857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-3 py-1.5 text-xs transition-colors rounded-none"
                    >
                      <span>Consultar</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              );
            }}
          />
        </div>

      </div>
    </section>
  );
}
