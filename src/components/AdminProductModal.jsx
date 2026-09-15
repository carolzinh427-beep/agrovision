import React, { useState } from 'react';
import { X, Plus, Save, Download, RefreshCw, Trash2, Edit3, Image as ImageIcon } from 'lucide-react';

export default function AdminProductModal({ products, onAddProduct, onUpdateProduct, onClose }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'new'
  
  // Form State for New Product
  const [formData, setFormData] = useState({
    name: '',
    category: 'piloto',
    categoryLabel: 'Piloto Automático',
    brand: '',
    model: '',
    mainImage: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
    shortDescription: '',
    description: '',
    price: '',
    availability: 'Disponível',
    featured: false,
    status: 'ativo',
    spec1Label: 'Tipo',
    spec1Value: '',
    spec2Label: 'Precisão',
    spec2Value: '',
    applicationStr: ''
  });

  const categoryOptions = [
    { value: 'piloto', label: 'Piloto Automático' },
    { value: 'antenas', label: 'Antenas & GNSS' },
    { value: 'monitores', label: 'Monitores & Consoles' },
    { value: 'sensores', label: 'Sensores & Telemetria' },
    { value: 'pecas', label: 'Peças & Acessórios' },
  ];

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    const catObj = categoryOptions.find(c => c.value === val);
    setFormData({
      ...formData,
      category: val,
      categoryLabel: catObj ? catObj.label : val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand) {
      alert('Por favor preencha pelo menos o Nome e a Marca do produto.');
      return;
    }

    const newProd = {
      id: `prod-${Date.now()}`,
      name: formData.name,
      category: formData.category,
      categoryLabel: formData.categoryLabel,
      brand: formData.brand,
      model: formData.model || 'Padrão',
      mainImage: formData.mainImage || 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80',
      gallery: [formData.mainImage],
      shortDescription: formData.shortDescription || 'Equipamento de agricultura de precisão AgroVision MS.',
      description: formData.description || 'Equipamento técnico de alta qualidade para otimização de campo.',
      specifications: [
        { label: formData.spec1Label || 'Recurso', value: formData.spec1Value || 'Incluso' },
        { label: formData.spec2Label || 'Especificação', value: formData.spec2Value || 'Consulte' }
      ],
      applications: formData.applicationStr ? formData.applicationStr.split(',').map(s => s.trim()) : ['Operações Agrícolas'],
      price: formData.price ? formData.price : null,
      availability: formData.availability,
      featured: formData.featured,
      status: formData.status
    };

    onAddProduct(newProd);
    alert('Produto cadastrado com sucesso!');
    setActiveTab('list');
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `agrovision-catálogo-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      <div className="relative w-full max-w-4xl glass-panel bg-[#0E1420] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#00E676]/10 text-[#00E676] font-bold text-xs border border-[#00E676]/30">
              ADMIN
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                Gerenciador do Catálogo de Produtos
              </h3>
              <p className="text-xs text-slate-400">Cadastre e atualize os equipamentos em tempo real</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-between px-4 pt-3 bg-slate-900/60 border-b border-slate-800">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors border-t border-x ${
                activeTab === 'list'
                  ? 'bg-[#0E1420] text-[#00E676] border-slate-700'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Lista de Equipamentos ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 text-xs font-bold rounded-t-xl transition-colors border-t border-x flex items-center gap-1.5 ${
                activeTab === 'new'
                  ? 'bg-[#0E1420] text-[#00E676] border-slate-700'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              Novo Produto
            </button>
          </div>

          <button
            onClick={exportJSON}
            className="text-xs text-[#00E676] hover:underline flex items-center gap-1 font-semibold pb-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar JSON do Catálogo</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {activeTab === 'list' ? (
            <div className="space-y-3">
              {products.map((p) => (
                <div key={p.id} className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <img src={p.mainImage} alt="" className="w-12 h-12 rounded-lg object-cover bg-slate-950 flex-shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#00E676] font-bold uppercase">{p.categoryLabel}</span>
                      <h4 className="font-bold text-white text-sm">{p.name}</h4>
                      <p className="text-slate-400">{p.brand} - {p.model} | <span className="text-slate-300">{p.price || 'Consulte condições'}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const newStatus = p.status === 'ativo' ? 'inativo' : 'ativo';
                        onUpdateProduct(p.id, { status: newStatus });
                      }}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-bold border ${
                        p.status === 'ativo'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                      }`}
                    >
                      {p.status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nome do Equipamento *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Monitor de Guiamento GPS"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Categoria *</label>
                  <select
                    value={formData.category}
                    onChange={handleCategoryChange}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  >
                    {categoryOptions.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Marca *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Agres ou Greco Agro Tech"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Modelo</label>
                  <input
                    type="text"
                    placeholder="Ex: IsoView 700"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preço (deixe em branco para "Consulte condições")</label>
                  <input
                    type="text"
                    placeholder="Ex: R$ 12.500,00 ou deixe em branco"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Disponibilidade</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                  >
                    <option value="Disponível">Disponível</option>
                    <option value="Sob Consulta">Sob Consulta</option>
                    <option value="Sob Encomenda">Sob Encomenda</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">URL da Imagem Principal (Real do produto)</label>
                <input
                  type="text"
                  placeholder="https://sua-imagem.jpg"
                  value={formData.mainImage}
                  onChange={(e) => setFormData({ ...formData, mainImage: e.target.value })}
                  className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Descrição Curta</label>
                <textarea
                  rows={2}
                  placeholder="Resumo em 1 ou 2 frases do equipamento..."
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full bg-slate-900 text-slate-100 p-2.5 rounded-xl border border-slate-800 focus:border-[#00E676] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>Cadastrar Equipamento no Catálogo</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
