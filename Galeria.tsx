import React, { useState, useEffect } from "react";
import { Menu, X, MapPin, Smartphone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export function Galeria() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const WHATSAPP_LINK = "https://wa.link/t1dlbr";
  const INSTAGRAM_URL = "https://www.instagram.com/pandillasmpvc.s.c/";
  const TIKTOK_URL = "https://www.tiktok.com/@pandillasmpvc.s.c?lang=es-419";

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white flex flex-col">
      {/* Navbar - Igualita a la principal pero con fondo oscuro fijo */}
      <nav className="w-full z-50 bg-slate-900 py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo-pandillas.png"
              alt="Logo Pandillas de la Santa Cruz"
              className="w-8 h-8 object-contain"
            />
            <span className="font-bold text-xl tracking-tight text-white">Pandillas La Santa Cruz</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* Este botón servirá para regresar al inicio */}
            <a href="/" className="text-sm font-medium text-white/90 hover:text-secondary transition-colors">Volver al Inicio</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </nav>

      {/* Espacio principal de la Galería donde meteremos las fotos después */}
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Nuestros Eventos</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Revive los mejores momentos de nuestros retiros, campamentos y juntas. La alegría de Cristo en cada foto.
          </p>
        </div>

        <div className="border-4 border-dashed border-slate-200 rounded-3xl p-20 text-center">
          <p className="text-slate-400 font-bold text-xl">Aquí pondremos los recuadros mágicos con fotos 📸✨</p>
        </div>
      </main>

      {/* Footer - Igualito al principal */}
      <footer className="bg-slate-950 pt-16 pb-12 text-white mt-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h4 className="font-bold text-lg mb-5">Síguenos en nuestras redes</h4>
          <div className="flex gap-4 justify-center mb-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300">
              <TikTokIcon />
            </a>
          </div>
          <div className="border-t border-white/10 pt-8 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Pandillas de la Santa Cruz — Parroquia La Santa Cruz, El Salto, Jalisco.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}