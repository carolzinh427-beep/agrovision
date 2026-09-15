import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import ProductsShowcase from './components/ProductsShowcase';
import ProductModal from './components/ProductModal';
import AdminProductModal from './components/AdminProductModal';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Partnerships from './components/Partnerships';
import About from './components/About';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import { INITIAL_PRODUCTS } from './data/products';

export default function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('agrovision_catalog');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure initial products maintain updated image references
        return INITIAL_PRODUCTS.map((initProd) => {
          const match = parsed.find((p) => p.id === initProd.id);
          if (match && match.mainImage && !match.mainImage.startsWith('/')) {
            return { ...match, mainImage: initProd.mainImage, gallery: initProd.gallery };
          }
          return match || initProd;
        });
      } catch (e) {
        return INITIAL_PRODUCTS;
      }
    }
    return INITIAL_PRODUCTS;
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('agrovision_catalog', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleUpdateProduct = (id, updates) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#15803D] selection:text-white">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Solutions Section */}
        <Solutions />

        {/* Digital Showcase / Products Section */}
        <ProductsShowcase
          products={products}
          onSelectProduct={setSelectedProduct}
          onOpenAdmin={() => setAdminOpen(true)}
        />

        {/* Benefits Section */}
        <Benefits />

        {/* Services & Technical Support Section */}
        <Services />

        {/* Partnerships Section */}
        <Partnerships />

        {/* About Company Section */}
        <About />

        {/* Location & Regional Coverage Section */}
        <Location />

        {/* Final Conversion CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer onOpenAdmin={() => setAdminOpen(true)} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {adminOpen && (
        <AdminProductModal
          products={products}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
          onClose={() => setAdminOpen(false)}
        />
      )}
    </div>
  );
}
