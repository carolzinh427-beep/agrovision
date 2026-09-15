import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group">
      
      {/* Desktop Tooltip Badge */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold border border-slate-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale no WhatsApp AgroVision
      </span>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Estou%20no%20site%20da%20AgroVision%20MS%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl animate-whatsapp-pulse transition-transform hover:scale-110 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
      </a>
    </div>
  );
}
