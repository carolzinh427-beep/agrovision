import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, Shield, Wrench, ChevronRight } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(
    product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.mainImage
  );

  const whatsappMessage = `Olá! Tenho interesse no ${product.name} da AgroVision MS. Gostaria de receber mais informações.`;
  const whatsappUrl = `https://wa.me/5567991776857?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl glass-panel bg-[#0E1420] rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-md bg-[#00E676]/10 text-[#00E676] font-bold uppercase tracking-wider border border-[#00E676]/20">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {product.brand} {product.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Gallery Left Column */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImage === img ? 'border-[#00E676] scale-95' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Right Column */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <span>Marca: <strong className="text-slate-200">{product.brand}</strong></span>
                  <span>•</span>
                  <span>Modelo: <strong className="text-slate-200">{product.model}</strong></span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
                  {product.name}
                </h2>
              </div>

              {/* Status & Price Row */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Condição Comercial</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#00E676]">
                    {product.price ? product.price : 'Consulte condições'}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] text-slate-400 font-medium">Disponibilidade</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Applications List */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Aplicações Principais no Campo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-xs border border-slate-700"
                      >
                        ✓ {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Technical Specifications Section */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit'] flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#00E676]" />
              Especificações Técnicas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex justify-between gap-2">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="font-semibold text-slate-100 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Guarantee Tag */}
          <div className="p-3 rounded-xl bg-[#00E676]/5 border border-[#00E676]/20 flex items-center gap-3 text-xs text-slate-300">
            <Shield className="w-5 h-5 text-[#00E676] flex-shrink-0" />
            <span>Suporte técnico, instalação e configuração garantidos pela equipe AgroVision MS em Rio Brilhante e região.</span>
          </div>

        </div>

        {/* Footer Bar with WhatsApp Call to Action */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left text-xs text-slate-400">
            Dúvidas sobre compatibilidade com seu maquinário?
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-[#00E676]/20"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
