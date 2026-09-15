import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group">
      
      {/* Tooltip Badge */}
      <span className="hidden sm:inline-block px-3 py-1.5 bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded-none">
        Fale no WhatsApp AgroVision MS
      </span>

      {/* Discrete Floating WhatsApp Square Button */}
      <a
        href="https://wa.me/5567991776857?text=Ol%C3%A1!%20Estou%20no%20site%20da%20AgroVision%20MS%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-13 sm:h-13 bg-[#15803D] hover:bg-[#166534] text-white flex items-center justify-center shadow-lg rounded-none transition-transform hover:scale-105 active:scale-95 border border-[#15803D]"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
      </a>
    </div>
  );
}
