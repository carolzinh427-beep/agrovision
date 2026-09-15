import React, { useState } from 'react';
import { Search, Filter, MessageCircle, Eye, Tag, CheckCircle2, AlertCircle, Plus } from 'lucide-react';

export default function ProductsShowcase({ products, onSelectProduct, onOpenAdmin }) {
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');

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
    <section id="produtos" className="py-10 sm:py-16 md:py-20 bg-[#0A0E17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold uppercase tracking-wider">
              Vitrine Digital de Tecnologia
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Equipamentos e tecnologia
            </h2>
            <p className="text-slate-300 text-xs sm:text-base max-w-2xl">
              Encontre as soluções ideais para aumentar a precisão e o desempenho da sua operação.
            </p>
          </div>

          {/* Admin Draft Access Link */}
          <button
            onClick={onOpenAdmin}
            className="self-start md:self-auto text-xs text-slate-400 hover:text-[#00E676] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#00E676]/40 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Painel do Catálogo (Admin)</span>
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-4 mb-8">
          
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por equipamento, marca ou modelo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121824] text-slate-100 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none transition-colors"
            />
          </div>

          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#00E676] text-slate-950 font-bold shadow-md shadow-[#00E676]/20'
                    : 'bg-[#121824] text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="text-slate-300 font-semibold text-sm">Nenhum equipamento encontrado nesta categoria.</p>
            <p className="text-slate-500 text-xs mt-1">Tente ajustar a busca ou filtro.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-panel rounded-2xl border border-slate-800 hover:border-[#00E676]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden">
                    <img
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-transparent opacity-80" />

                    {/* Brand Badge */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold text-white border border-slate-700">
                      {product.brand}
                    </div>

                    {/* Availability Pill */}
                    <div className="absolute top-3 right-3 bg-[#00E676]/15 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-[#00E676] border border-[#00E676]/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#00E676]" />
                      <span>{product.availability}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 space-y-3">
                    <div className="text-[11px] text-[#00E676] font-semibold uppercase tracking-wider">
                      {product.categoryLabel}
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] line-clamp-1 group-hover:text-[#00E676] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Compact Specs Preview */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-1">
                      {product.specifications.slice(0, 2).map((spec, idx) => (
                        <div key={idx} className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">{spec.label}:</span>
                          <span className="text-slate-200 font-medium truncate max-w-[150px]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer & Action Buttons */}
                <div className="p-4 sm:p-5 pt-0 space-y-3">
                  
                  {/* Price handle */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <span className="text-xs text-slate-400">Valor:</span>
                    <span className="text-sm font-extrabold text-[#00E676]">
                      {product.price ? product.price : 'Consulte condições'}
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1A2234] hover:bg-slate-800 text-slate-200 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors border border-slate-700"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-300" />
                      <span>Ver detalhes</span>
                    </button>

                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-md shadow-[#00E676]/20"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Tenho interesse</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
