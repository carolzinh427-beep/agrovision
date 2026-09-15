import React, { useState } from 'react';
import { Menu, X, MessageCircle, Navigation } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Parcerias', href: '#parcerias' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#15803D] flex items-center justify-center text-white font-extrabold shadow-xs">
              <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none font-['Outfit']">
                Agro<span className="text-[#15803D]">Vision</span> <span className="text-xs px-1.5 py-0.5 bg-slate-100 text-slate-700 font-semibold border border-slate-300">MS</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                Agricultura de Precisão
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#15803D] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#15803D] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button Desktop (Square Button) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5567991776857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-bold px-5 py-2.5 rounded-none text-sm transition-all duration-150 shadow-xs border border-[#15803D]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/5567991776857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 bg-[#15803D] text-white font-bold text-xs rounded-none"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-300 rounded-none"
              aria-label="Alternar Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#15803D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-[#15803D] hover:bg-slate-50 border-l-2 border-transparent hover:border-[#15803D] transition-all"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-200 mt-2">
              <a
                href="https://wa.me/5567991776857"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#15803D] text-white font-bold py-3 px-4 rounded-none text-sm shadow-xs"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
