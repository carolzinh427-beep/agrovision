import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle2, Shield, Wrench } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(
    product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.mainImage
  );

  const whatsappMessage = `Olá! Tenho interesse no ${product.name} da AgroVision MS. Gostaria de receber mais informações.`;
  const whatsappUrl = `https://wa.me/5567991776857?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      
      {/* Modal Square Dialog Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-none border border-slate-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 bg-[#15803D] text-white font-bold uppercase rounded-none">
              {product.categoryLabel}
            </span>
            <span className="text-xs text-slate-600 font-semibold">
              {product.brand} {product.model}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors rounded-none border border-slate-300"
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
              <div className="relative h-60 sm:h-72 bg-white border border-slate-300 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain object-center"
                />
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`w-14 h-14 border-2 transition-all flex-shrink-0 rounded-none bg-white flex items-center justify-center p-1 ${
                        activeImage === img ? 'border-[#15803D]' : 'border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="max-h-full max-w-full object-contain object-center" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info Right Column */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <span>Marca: <strong className="text-slate-900">{product.brand}</strong></span>
                  <span>•</span>
                  <span>Modelo: <strong className="text-slate-900">{product.model}</strong></span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
                  {product.name}
                </h2>
              </div>

              {/* Status & Price Row */}
              <div className="p-3 bg-slate-50 border border-slate-200 flex items-center justify-between rounded-none">
                <div>
                  <span className="block text-[11px] text-slate-500 font-semibold uppercase">Condição Comercial</span>
                  <span className="text-base sm:text-lg font-extrabold text-slate-900">
                    {product.price ? product.price : 'Consulte condições'}
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] text-slate-500 font-semibold uppercase">Disponibilidade</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#15803D]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {product.availability}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Applications List */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Aplicações Principais no Campo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs border border-slate-300 rounded-none font-medium"
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
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-['Outfit'] flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#15803D]" />
              Especificações Técnicas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 flex justify-between gap-2 rounded-none">
                  <span className="text-slate-600 font-medium">{spec.label}</span>
                  <span className="font-bold text-slate-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Guarantee Tag */}
          <div className="p-3 bg-[#15803D]/10 border border-[#15803D]/30 flex items-center gap-3 text-xs text-slate-800 rounded-none">
            <Shield className="w-5 h-5 text-[#15803D] flex-shrink-0" />
            <span>Suporte técnico, instalação e configuração garantidos pela equipe AgroVision MS em Rio Brilhante e região.</span>
          </div>

        </div>

        {/* Footer Bar with Square WhatsApp Button */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left text-xs text-slate-600 font-medium">
            Dúvidas sobre compatibilidade com seu maquinário?
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-6 py-3 rounded-none text-sm transition-all shadow-xs border border-[#15803D]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
