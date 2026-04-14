import React, { useState } from "react";
import { Menu, X, Instagram, Play, XCircle, ArrowLeft, ArrowRight } from "lucide-react";

// Icono de TikTok
const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

// Definición de los eventos (Se llenan de derecha a izquierda en la cuadrícula)
const EVENTOS = [
  {
    id: "noche-pascual-2026",
    titulo: "Noche Pascual 2026",
    carpeta: "nochepascual",
    prefijoVideo: "videopascua",
    totalFotos: 43,
    totalVideos: 4,
    mostrarEtiqueta: true,
    descripcion: "Un momento hermoso de conexión con el Señor. Vivimos Su Pasión, Muerte y Resurrección con el corazón lleno de felicidad, cantos y bailes que desbordaban alegría pura.",
    fotoPortada: "/images/nochepascual (1).jpg"
  },
  {
    id: "familia-pandillas",
    titulo: "Familia Pandillas",
    carpeta: "familia",
    prefijoVideo: "videofamilia",
    totalFotos: 138,
    totalVideos: 5,
    mostrarEtiqueta: false,
    descripcion: "Más que un grupo, somos una verdadera familia en Cristo. Aquí guardamos las risas, las convivencias, las fiestas y esos momentos inolvidables donde compartimos la alegría de estar juntos.",
    fotoPortada: "/images/familia (1).jpg"
  },
  {
    id: "pandilla-num-2",
    titulo: "Pandilla Num. 2",
    carpeta: "pandilla2",
    prefijoVideo: "videopandilla2",
    totalFotos: 21,
    totalVideos: 0,
    mostrarEtiqueta: false,
    descripcion: "Un evento muy especial y reservado. Una experiencia profundamente transformadora, llena de amor y grandes enseñanzas. Un agradecimiento especial a Pandillas La Azucena por el apoyo incondicional que nos ofrecieron siempre.",
    fotoPortada: "/images/pandilla2 (1).jpg"
  },
  {
    id: "jubileo-catedral",
    titulo: "Jubileo: Peregrinos de Esperanza",
    carpeta: "jubileo",
    prefijoVideo: "videojubileo",
    totalFotos: 25,
    totalVideos: 1,
    mostrarEtiqueta: false,
    descripcion: "Una salida llena de fe y comunión hacia la Catedral. Caminamos unidos como verdaderos peregrinos de esperanza, renovando nuestro corazón y compartiendo la alegría de la Iglesia joven.",
    fotoPortada: "/images/jubileo (1).jpg"
  },
  {
    id: "semad-2025",
    titulo: "Semad 2025",
    carpeta: "semad",
    prefijoVideo: "videosemad",
    totalFotos: 45,
    totalVideos: 4,
    mostrarEtiqueta: false,
    descripcion: "Energía, dinámicas y reflexión. Un encuentro profundo donde descubrimos el amor de Cristo y fortalecemos nuestros lazos como jóvenes dispuestos a ser luz en el mundo.",
    fotoPortada: "/images/semad (1).jpg"
  },
  {
    id: "bienvenida-pandilleros",
    titulo: "Bienvenida Pandilleros",
    carpeta: "bienvenida",
    prefijoVideo: "videobienvenida",
    totalFotos: 31,
    totalVideos: 4,
    mostrarEtiqueta: false,
    descripcion: "Recibimos con los brazos abiertos a la nueva generación tras su Pandilla 1. ¡Aquí comienza su camino en esta gran familia de fe!",
    fotoPortada: "/images/bienvenida (1).jpg"
  },
  {
    id: "pandilla-1-historia",
    titulo: "Pandilla 1: Nuestro Origen",
    carpeta: "pandilla1",
    prefijoVideo: "videopandilla1",
    totalFotos: 49,
    totalVideos: 0,
    mostrarEtiqueta: false,
    descripcion: "El retiro que marcó nuestra historia: pasamos de Apostolitos a Pandillas de la Santa Cruz, reconocidos por la Arquidiócesis. Gracias infinitas a Pandillas Tlajomulco por impulsarnos a ser MPVC.",
    fotoPortada: "/images/pandilla1 (1).jpg"
  },
  {
    id: "pascua-1-apostolitos",
    titulo: "Pascua 1: Apostolitos",
    carpeta: "pascua1",
    prefijoVideo: "videopascua1",
    totalFotos: 26,
    totalVideos: 1,
    mostrarEtiqueta: false,
    descripcion: "Nuestras raíces. Uno de los primeros y más hermosos eventos que vivimos cuando aún nos llamábamos 'Apostolitos'. Atesoramos estos recuerdos con todo el corazón, pues aquí comenzó a encenderse la llama de fe de nuestra gran familia.",
    fotoPortada: "/images/pascua1 (1).jpg"
  }
];

export default function Galeria() {
  const [eventoSeleccionado, setEventoSeleccionado] = useState<typeof EVENTOS[0] | null>(null);
  const [archivoAbierto, setArchivoAbierto] = useState<{url: string, tipo: 'foto' | 'video'} | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      {/* Navbar Minimalista */}
      <nav className="w-full bg-black/50 backdrop-blur-lg border-b border-white/10 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo-pandillas.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight">Galería de Amor a Cristo</span>
          </div>
          <a href="/" className="text-sm font-medium hover:text-secondary transition-colors">Volver al Inicio</a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <header className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent italic">
            NUESTROS MOMENTOS
          </h1>
          <p className="text-xl text-white/60">
            Cada imagen es un testimonio de nuestra fe y la alegría de ser jóvenes en Cristo de El Salto.
          </p>
        </header>

        {/* Cuadrícula de Eventos (De derecha a izquierda) */}
        <div className="flex flex-wrap flex-row-reverse gap-8 justify-start">
          {EVENTOS.map((evento) => (
            <div 
              key={evento.id}
              onClick={() => setEventoSeleccionado(evento)}
              className="group relative w-full md:w-[45%] lg:w-[30%] aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <img 
                src={evento.fotoPortada} 
                alt={evento.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {evento.mostrarEtiqueta && (
                  <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-2 block">Evento Reciente</span>
                )}
                <h3 className="text-3xl font-black mb-2">{evento.titulo}</h3>
                <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {evento.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL DEL EVENTO */}
      {eventoSeleccionado && (
        <div className="fixed inset-0 z-[60] bg-black overflow-y-auto pt-20">
          <button 
            onClick={() => setEventoSeleccionado(null)}
            className="fixed top-6 left-6 z-[70] flex items-center gap-2 text-white/70 hover:text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Regresar
          </button>

          <div className="container mx-auto px-4 pb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-4">{eventoSeleccionado.titulo}</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/60 mb-12">{eventoSeleccionado.descripcion}</p>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {Array.from({ length: eventoSeleccionado.totalVideos }).map((_, i) => (
                <div 
                  key={`v-${i}`}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group bg-slate-900"
                  onClick={() => setArchivoAbierto({ url: `/images/${eventoSeleccionado.prefijoVideo} (${i+1}).mp4`, tipo: 'video' })}
                >
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-black fill-current" />
                    </div>
                  </div>
                  <video src={`/images/${eventoSeleccionado.prefijoVideo} (${i+1}).mp4`} className="w-full opacity-40" />
                </div>
              ))}
              {Array.from({ length: eventoSeleccionado.totalFotos }).map((_, i) => (
                <img 
                  key={`f-${i}`}
                  src={`/images/${eventoSeleccionado.carpeta} (${i+1}).jpg`}
                  alt={`Foto ${i+1}`}
                  className="w-full rounded-2xl hover:scale-[1.02] transition-transform cursor-pointer shadow-xl"
                  onClick={() => setArchivoAbierto({ url: `/images/${eventoSeleccionado.carpeta} (${i+1}).jpg`, tipo: 'foto' })}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VISOR PANTALLA COMPLETA */}
      {archivoAbierto && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={() => setArchivoAbierto(null)} className="absolute top-6 right-6 text-white/50 hover:text-white">
            <XCircle className="w-10 h-10" />
          </button>
          {archivoAbierto.tipo === 'foto' ? (
            <img src={archivoAbierto.url} className="max-w-full max-h-full rounded-lg shadow-2xl" />
          ) : (
            <video src={archivoAbierto.url} controls autoPlay className="max-w-full max-h-full rounded-lg shadow-2xl" />
          )}
        </div>
      )}

      {/* Footer Minimalista */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/20 text-sm italic mb-6">"Viviendo la alegría de Cristo en El Salto"</p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/pandillasmpvc.s.c/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 text-white/70 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@pandillasmpvc.s.c?lang=es-419" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00f2fe] transition-all duration-300 text-white/70 hover:text-white">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}