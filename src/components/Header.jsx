import React, { useState } from 'react';
import { Menu, X, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Parcerias', href: '#parcerias' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#00E676] to-[#009624] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#00E676]/20 transition-transform group-hover:scale-105">
              <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-black transform rotate-45" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-black animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none font-['Outfit']">
                Agro<span className="text-[#00E676]">Vision</span> <span className="text-xs px-1.5 py-0.5 rounded bg-[#00E676]/20 text-[#00E676] font-semibold border border-[#00E676]/30">MS</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase mt-0.5">
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
                className="text-sm font-medium text-slate-300 hover:text-[#00E676] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00E676] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5567991776857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-slate-950 font-bold px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#00E676]/20 hover:shadow-[#00E676]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/5567991776857"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-lg bg-[#00E676] text-black font-bold text-xs"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00E676]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Compact & Responsive) */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-800 animate-fadeIn">
          <div className="px-4 pt-3 pb-5 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-[#00E676] hover:bg-slate-800/50 transition-all active:scale-[0.98]"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <a
                href="https://wa.me/5567991776857"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#00E676] text-slate-950 font-extrabold py-3 px-4 rounded-xl text-sm shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
