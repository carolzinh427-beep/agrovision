import React, { useState } from 'react';
import { Search, MessageCircle, Eye, CheckCircle2, AlertCircle, Plus, BookOpen, Layers, ArrowRight } from 'lucide-react';

export default function ProductsShowcase({ products, onSelectProduct, onOpenAdmin }) {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullCatalog, setShowFullCatalog] = useState(false);

  const categories = [
    { id: 'todas', label: 'Todos os Equipamentos' },
    { id: 'piloto', label: 'Piloto Automático' },
    { id: 'antenas', label: 'Antenas & GNSS' },
    { id: 'monitores', label: 'Monitores' },
    { id: 'sensores', label: 'Sensores & Telemetria' },
    { id: 'pecas', label: 'Peças & Acessórios' },
  ];

  const filteredProducts = products.filter((product) => {
    if (product.status === 'inativo') return false;
    const matchesCategory = selectedCategory === 'todas' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (productName) => {
    const text = `Olá! Tenho interesse no ${productName} da AgroVision MS. Gostaria de receber mais informações.`;
    return `https://wa.me/5567991776857?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="produtos" className="py-10 sm:py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 px-2 sm:px-0">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                Equipamentos e tecnologia
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-base max-w-2xl">
              Encontre as soluções ideais para aumentar a precisão e o desempenho da sua operação.
            </p>
          </div>

          {/* Action Buttons Header */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Aba / Botão Ver Catálogo Completo */}
            <button
              onClick={() => setShowFullCatalog(!showFullCatalog)}
              className={`text-xs font-bold flex items-center gap-1.5 px-3 py-2 border rounded-none transition-all shadow-xs ${
                showFullCatalog
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-[#15803D] text-white hover:bg-[#166534] border-[#15803D]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{showFullCatalog ? 'Ocultar Catálogo' : 'Ver Catálogo Completo'}</span>
              <span className="ml-1 bg-white/20 text-white text-[10px] px-1.5 py-0.5 font-mono">
                {products.length}
              </span>
            </button>

            {/* Admin Access Button (Square) */}
            <button
              onClick={onOpenAdmin}
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-300 hover:border-slate-400 rounded-none shadow-xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#15803D]" />
              <span className="hidden sm:inline">Painel Admin</span>
            </button>
          </div>
        </div>

        {/* Toolbar: Search & Square Category Tabs */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2 sm:px-0">
          
          {/* Square Search Input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por equipamento, marca ou modelo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-900 text-xs sm:text-sm pl-10 pr-4 py-2 sm:py-2.5 rounded-none border border-slate-300 focus:border-[#15803D] focus:outline-none transition-colors"
            />
          </div>

          {/* Square Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-semibold rounded-none whitespace-nowrap transition-all duration-150 border ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - 3 Items per row on mobile (grid-cols-3) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white border border-slate-300 rounded-none mx-2 sm:mx-0">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-800 font-semibold text-sm">Nenhum equipamento encontrado nesta categoria.</p>
            <p className="text-slate-500 text-xs mt-1">Tente ajustar a busca ou o filtro acima.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 hover:border-slate-400 transition-all duration-150 flex flex-col justify-between rounded-none shadow-xs group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-24 sm:h-56 bg-white border-b border-slate-200 overflow-hidden flex items-center justify-center p-1.5 sm:p-3">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Brand Badge (Hidden on tiny mobile layout for maximum clarity) */}
                    <div className="hidden sm:block absolute top-3 left-3 bg-white px-2.5 py-1 rounded-none text-[11px] font-extrabold text-slate-900 border border-slate-300 shadow-xs">
                      {product.brand}
                    </div>

                    {/* Availability Badge (Hidden on tiny mobile layout) */}
                    <div className="hidden sm:flex absolute top-3 right-3 bg-emerald-50 px-2.5 py-1 rounded-none text-[11px] font-bold text-emerald-800 border border-emerald-300 items-center gap-1 shadow-xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>{product.availability}</span>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-1.5 sm:p-5 space-y-1 sm:space-y-2.5">
                    {/* Category Label */}
                    <div className="text-[9px] sm:text-[11px] text-[#15803D] font-bold uppercase tracking-wider line-clamp-1">
                      {product.categoryLabel}
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="text-[11px] sm:text-lg font-bold text-slate-900 font-['Outfit'] line-clamp-2 sm:line-clamp-1 leading-snug sm:leading-normal group-hover:text-[#15803D] transition-colors">
                      {product.name}
                    </h3>

                    {/* Description - Desktop/Tablet Only */}
                    <p className="hidden sm:block text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Compact Specs Preview - Desktop/Tablet Only */}
                    <div className="hidden sm:block pt-2 border-t border-slate-100 space-y-1">
                      {product.specifications.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-500">{spec.label}:</span>
                          <span className="text-slate-800 font-semibold truncate max-w-[160px]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer & Action Buttons */}
                <div className="p-1.5 sm:p-5 pt-0 space-y-1.5 sm:space-y-3">
                  
                  {/* Commercial Price Handle */}
                  <div className="hidden sm:flex items-center justify-between pt-3 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium">Condição:</span>
                    <span className="text-sm font-extrabold text-slate-900">
                      {product.price ? product.price : 'Consulte condições'}
                    </span>
                  </div>

                  {/* Desktop Action Buttons (sm and up) */}
                  <div className="hidden sm:grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-2.5 px-3 rounded-none text-xs transition-colors border border-slate-300"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-700" />
                      <span>Ver detalhes</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#15803D] hover:bg-[#166534] text-white font-bold py-2.5 px-3 rounded-none text-xs transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Tenho interesse</span>
                    </a>
                  </div>

                  {/* Mobile Compact Buttons (under sm) */}
                  <div className="sm:hidden flex items-center gap-1 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 font-extrabold py-1 px-1 rounded-none text-[9px] border border-slate-300 flex items-center justify-center gap-0.5"
                      title="Ver Detalhes"
                    >
                      <Eye className="w-3 h-3 text-slate-700" />
                      <span>Ver</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#15803D] hover:bg-[#166534] text-white font-extrabold py-1 px-1 rounded-none text-[9px] flex items-center justify-center gap-0.5"
                      title="Whats"
                    >
                      <MessageCircle className="w-3 h-3 fill-white" />
                      <span>Whats</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner: Aba / Botão Ver Catálogo Completo */}
        <div className="mt-8 sm:mt-12 text-center bg-white border border-slate-300 p-4 sm:p-6 rounded-none shadow-xs mx-2 sm:mx-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-1">
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-['Outfit'] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#15803D]" />
                <span>Catálogo Completo AgroVision MS</span>
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Consulte especificações técnicas completas, compatibilidade e orçamentos para Rio Brilhante e região.
              </p>
            </div>

            <button
              onClick={() => setShowFullCatalog(!showFullCatalog)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-none text-xs sm:text-sm transition-all shadow-xs whitespace-nowrap"
            >
              <span>{showFullCatalog ? 'Recolher Catálogo' : 'Acessar Catálogo Completo'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
