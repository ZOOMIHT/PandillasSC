import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  PlayCircle,
  Users,
  Flame,
  MessageCircle,
  Music,
  HeartHandshake,
  Activity,
  Heart,
  Instagram,
  Smartphone,
  CheckCircle2,
  Tent,
  Sun,
  ShieldCheck,
  Menu,
  X,
  BookOpen,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 items-center justify-center text-white backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold tracking-tighter">{timeLeft.days}</span>
        <span className="text-xs uppercase tracking-widest text-white/80">Días</span>
      </div>
      <span className="text-2xl opacity-50">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold tracking-tighter">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-widest text-white/80">Hrs</span>
      </div>
      <span className="text-2xl opacity-50">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold tracking-tighter">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-widest text-white/80">Min</span>
      </div>
      <span className="text-2xl opacity-50 hidden sm:inline">:</span>
      <div className="hidden sm:flex flex-col items-center">
        <span className="text-3xl font-bold tracking-tighter">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-widest text-white/80">Seg</span>
      </div>
    </div>
  );
};

const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown target: April 10, 2026 at 4:00 PM (local time)
  const nochepascualDate = new Date("2026-04-10T16:00:00");

  const WHATSAPP_LINK = "https://wa.link/t1dlbr";
  const WHATSAPP_DIRECT = "https://wa.me/523313547099";
  const WHATSAPP_GROUP = "https://chat.whatsapp.com/EgVuADkmyky3nN9SuW0XtS";
  const INSTAGRAM_URL = "https://www.instagram.com/pandillasmpvc.s.c/";
  const TIKTOK_URL = "https://www.tiktok.com/@pandillasmpvc.s.c?lang=es-419";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/__mockup/images/logo-pandillas.png"
              alt="Logo Pandillas de la Santa Cruz"
              className="w-8 h-8 object-contain"
            />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>Pandillas La Santa Cruz</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#eventos" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Eventos</a>
            <a href="#actividades" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Actividades</a>
            <a href="#comunidad" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Comunidad</a>
            <a href="#padres" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Padres</a>
            <a href={WHATSAPP_DIRECT} target="_blank" rel="noreferrer">
              <Button className={isScrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"}>
                Únete Hoy
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 flex flex-col gap-6 md:hidden">
          <a href="#eventos" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900">Eventos</a>
          <a href="#actividades" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900">Actividades</a>
          <a href="#comunidad" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900">Comunidad</a>
          <a href="#padres" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-900">Para Padres</a>
          <Button size="lg" className="mt-4 w-full text-lg">Únete Hoy</Button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <WhatsAppIcon />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:pl-2 font-medium">
          Mándanos mensaje
        </span>
      </a>

      {/* HERO SECTION */}
      <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/__mockup/images/hero-pandillas.jpg"
            alt="Pandillas de la Santa Cruz - El Salto"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary border-none px-4 py-1.5 text-sm uppercase tracking-wider font-bold">
              Comunidad de Adolescentes
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1.5 text-sm uppercase tracking-wider font-bold backdrop-blur-sm">
              Retiros Anuales
            </Badge>
            <Badge className="bg-white/20 text-white hover:bg-white/30 border-none px-4 py-1.5 text-sm uppercase tracking-wider font-bold backdrop-blur-sm hidden sm:inline-flex">
              Deportes y Espiritualidad
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-5xl">
            VIVE LA EXPERIENCIA,<br className="hidden md:block" />
            <span className="text-secondary drop-shadow-md"> ENCUENTRA TU CAMINO</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl font-medium">
            Únete a una comunidad de jóvenes que buscan algo más grande. Fe, amigos de verdad, y aventuras que te cambiarán la vida.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary font-bold"
              onClick={() => scrollTo("noche-pascual")}
            >
              Inscríbete al Próximo Retiro
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg h-14 px-8 text-white border-white hover:bg-white hover:text-slate-900 font-bold bg-transparent"
              onClick={() => scrollTo("horarios")}
            >
              Conoce Nuestros Horarios
            </Button>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-lg h-14 px-6 text-white hover:bg-white/10 group">
                <PlayCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> Ver Galería
              </Button>
            </a>
          </div>

          <div className="w-full max-w-md mx-auto">
            <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-3">Noche Pascual en:</p>
            <CountdownTimer targetDate={nochepascualDate} />
          </div>
        </div>
      </header>

      {/* UPCOMING EVENTS */}
      <section id="eventos" className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Próximas Aventuras</h2>
            <p className="text-lg text-slate-600">
              Nuestros retiros y campamentos son el corazón del grupo. Días intensos de juegos, reflexión, y encuentro con Dios y con amigos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NOCHE PASCUAL */}
            <Card id="noche-pascual" className="border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary border-none">Próximo Evento</Badge>
              </div>
              <CardHeader className="bg-slate-900 text-white rounded-t-xl pb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 hover:bg-white/20 text-white border-none">1 Noche</Badge>
                  <Sun className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Noche Pascual</CardTitle>
                <CardDescription className="text-white/80 font-medium">10 de Abril, 2026</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Rally deportivo
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Cena y temas dinámicas compartidas
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Fogata y quedarse a dormir en la parroquia
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Asistencia al Santuario de los Mártires
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Cuota de recuperación</span>
                  <span className="text-xl font-bold text-slate-900">$100 MXN</span>
                </div>
              </CardContent>
              <CardFooter>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full">
                  <Button className="w-full text-lg h-12 bg-slate-900 hover:bg-slate-800">Registrar Asistencia</Button>
                </a>
              </CardFooter>
            </Card>

            {/* PANDILLA #3 */}
            <Card className="border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="bg-primary text-white rounded-t-xl pb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 hover:bg-white/20 text-white border-none">Próximamente</Badge>
                  <Tent className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Pandilla #3</CardTitle>
                <CardDescription className="text-white/80 font-medium">Fecha por confirmar</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Tres días intensos
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Temas sobre la fe y Cristo
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Cuota de recuperación</span>
                  <span className="text-xl font-bold text-slate-900">Por definir</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-lg h-12" disabled>Próximamente</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-sm text-slate-500 bg-slate-100 py-3 px-6 rounded-full inline-block">
              Al inscribirte recibirás automáticamente la lista de cosas necesarias y la carta responsiva en PDF.
            </p>
          </div>
        </div>
      </section>

      {/* ONBOARDING TIMELINE */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Tu Primer Día</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Sabemos que llegar a un grupo nuevo impone. Así de fácil es unirte a nosotros.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Contáctanos", desc: "Mándanos un WhatsApp para saber que vienes.", icon: <MessageCircle className="w-6 h-6" /> },
                { step: "2", title: "Llega el Miércoles", desc: "Te recibiremos en la entrada de la parroquia a las 8:00 PM.", icon: <MapPin className="w-6 h-6" /> },
                { step: "3", title: "Intégrate", desc: "Te asignaremos a una comunidad pequeña de tu edad.", icon: <Users className="w-6 h-6" /> },
                { step: "4", title: "¡Vive el Retiro!", desc: "La verdadera experiencia empieza en tu primer campamento.", icon: <Flame className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-2xl shadow-xl shadow-secondary/30 mb-6 rotate-3 hover:rotate-0 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg h-14 px-8 font-bold shadow-xl shadow-black/10">
                <span className="text-[#25D366] mr-2"><WhatsAppIcon /></span> Mándanos un Mensaje Hoy
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ACTIVITIES & MINISTRIES */}
      <section id="actividades" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <img
                src="/__mockup/images/sports.png"
                alt="Jóvenes haciendo deporte"
                className="rounded-3xl shadow-2xl object-cover aspect-video w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Más que rezar</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestra fe se vive en movimiento. Combinamos juegos dinámicos, temas formativos y convivencia fraterna en cada reunión. No tienes que ser perfecto para estar aquí, solo querer compartir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <BookOpen className="w-5 h-5 text-primary" />, title: "Reuniones de Formación", desc: "Charlas y debates sobre temas actuales y fe" },
                  { icon: <Activity className="w-5 h-5 text-secondary" />, title: "Dinámicas y Juegos", desc: "Rallys, competencias y rompehielos" },
                  { icon: <Music className="w-5 h-5 text-primary" />, title: "Ministerio de Música", desc: "Coro para las misas y alabanzas" },
                  { icon: <HeartHandshake className="w-5 h-5 text-secondary" />, title: "Servicio Comunitario", desc: "Apoyo en la parroquia y eventos del decanato" }
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      {act.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{act.title}</h4>
                      <p className="text-sm text-slate-500 leading-tight">{act.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK & TESTIMONIALS */}
      <section id="comunidad" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src="/__mockup/images/community.png"
            alt="Comunidad"
            className="w-full h-full object-cover mix-blend-luminosity"
            style={{ maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">La Familia que Eliges</h2>
            <p className="text-xl text-white/70 max-w-2xl">
              Lo que pasa en el grupo te cambia para siempre. Escucha a los que ya están viviendo la experiencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Este grupo me ayudó de una manera hermosa, descubrí la grandeza del amor de Dios, me enseñó que seguir a Cristo es algo divertido y hermoso, y encontré amigos que se convirtieron en familia, es algo hermoso y una de las mejores experiencias, lo recomiendo para todos los jóvenes que quieran descubrir el amor a Cristo y seguirlo.", name: "Marlene", age: "15 años", time: "1 año en el grupo" },
              { text: "Este grupo me ha enseñado mucho a trabajar en equipo y he conocido personas maravillosas en las cuales puedo ver a Cristo.", name: "Oliver", age: "16 años", time: "Más de dos años en el grupo" },
              { text: "Conocí muchas personas amigables, encuentro paz en el grupo, me divierto con los amigos que hice en el grupo y puedo aprender más de Jesús aun lado de él.", name: "Araly", age: "12 años", time: "Menos de un año en el grupo" }
            ].map((testimony, i) => (
              <Card key={i} className="bg-white/10 border-white/10 text-white backdrop-blur-md hover:bg-white/15 transition-colors">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-secondary mb-6 opacity-50" />
                  <p className="text-lg font-medium leading-relaxed mb-6">"{testimony.text}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-white/20">
                      <AvatarFallback className="bg-primary text-white font-bold">{testimony.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimony.name}, {testimony.age}</p>
                      <p className="text-xs text-white/60">{testimony.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex flex-col items-center">
              <img
                src="/__mockup/images/logo-pandillas.png"
                alt="Logo Pandillas de la Santa Cruz"
                className="w-40 h-40 object-contain mb-4"
              />
              <p className="text-center text-slate-500 text-sm italic font-medium max-w-xs">
                "Vamos a trabajar por Cristo y en Cristo, por Cristo y en Cristo vamos a trabajar"
              </p>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Nuestra Historia</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Hace aproximadamente tres años, bajo la iniciativa del señor cura <strong>Ricardo López Díaz</strong>, nació en nuestra parroquia un espacio pensado especialmente para los adolescentes. Con la llegada del vicario <strong>Pedro Martínez Navarro</strong>, la organización se fortaleció y el grupo tomó un nuevo impulso.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Tras vivir un encuentro del <strong>Movimiento de Pandillas de Vida Cristiana</strong>, nos integramos oficialmente a este movimiento. Fuimos reconocidos dentro del decanato y la arquidiócesis, tomando con orgullo el nombre de <strong>Pandillas de la Santa Cruz en El Salto, Jalisco</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Buscamos que cada adolescente crezca en su fe, viva en comunidad y fortalezca su relación con Dios. Aquí los jóvenes no solo reciben formación; viven una verdadera experiencia de amistad y alegría, con la mirada firme en Cristo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP / COORDINATORS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Nuestros Guías</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Jóvenes líderes comprometidos con acompañarte en esta etapa, bajo la guía espiritual de nuestro asesor.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Danna Grimaldo", role: "Coordinadora", exp: "Coordinadora General del grupo", initials: "DG" },
              { name: "Jorge Misael", role: "Subcoordinador", exp: "Subcoordinador del grupo", initials: "JM" },
              { name: "Susana Sarahí", role: "Secretaria", exp: "Secretaria del grupo", initials: "SS" },
              { name: "Tamara Rodríguez", role: "Tesorera", exp: "Tesorera del grupo", initials: "TR" },
              { name: "Pbro. Pedro Martínez", role: "Asesor Espiritual", exp: "Vicario de la parroquia", initials: "PM" }
            ].map((leader, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-xl group-hover:border-secondary transition-colors relative bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-black text-primary">{leader.initials}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{leader.name}</h3>
                <p className="text-sm font-medium text-primary mb-1">{leader.role}</p>
                <p className="text-xs text-slate-500">{leader.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE & DOWNLOADS */}
      <section id="horarios" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col gap-16">

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" /> Horarios de Reunión
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-primary text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold uppercase tracking-wider">Mié</span>
                    <span className="text-xs font-black">Semanal</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Reunión Semanal</h4>
                    <p className="text-slate-600 mb-2">Juegos dinámicos, temas formativos y convivencia fraterna. El momento central de la semana.</p>
                    <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
                      <Clock className="w-4 h-4" /> Miércoles — 8:00 PM a 9:00 PM (Hora CDMX)
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-secondary text-secondary-foreground flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold uppercase tracking-wider">Dom</span>
                    <span className="text-xs font-black">Semanal</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Misa de Adolescentes</h4>
                    <p className="text-slate-600 mb-2">Misa animada con participación en lecturas y ofrendas. Ven con tu playera del grupo.</p>
                    <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
                      <Clock className="w-4 h-4" /> Domingos — 6:30 PM
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-bold text-slate-900">Parroquia La Santa Cruz</span>
                  </div>
                  <p className="text-sm text-slate-600 pl-8">Revolución Nte. 61, Potrero Nuevo,<br />45680 El Salto, Jal.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOR PARENTS */}
      <section id="padres" className="py-20 bg-slate-900 text-white border-t-8 border-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-6">Información para Padres de Familia</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            Pandillas de la Santa Cruz es un espacio completamente sano. Sus hijos estarán siempre acompañados, cuidados y guiados bajo sólidos valores cristianos. No es solo un lugar para que se diviertan, sino un entorno donde crecen integralmente como personas y en su fe.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            {[
              "Respeto mutuo entre todos los miembros",
              "Ambiente cien por ciento sano y seguro",
              "Trabajo en equipo y responsabilidad",
              "Acompañamiento constante por coordinadores y asesor adulto"
            ].map((v, i) => (
              <div key={i} className="flex items-start gap-2 bg-white/5 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                Contactar a Coordinación
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer className="bg-slate-950 pt-24 pb-12 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-black mb-10">¿Listo para unirte?</h2>

          <div className="space-y-6 mb-10 text-left max-w-md mx-auto">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Parroquia La Santa Cruz</h4>
                <p className="text-white/60">Revolución Nte. 61, Potrero Nuevo,<br />45680 El Salto, Jal., México</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Smartphone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">WhatsApp Directo</h4>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-white/60 hover:text-secondary transition-colors">
                  +52 33 13 54 70 99
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Horarios</h4>
                <p className="text-white/60">Miércoles: 8:00 PM – 9:00 PM</p>
                <p className="text-white/60">Misa de Adolescentes: Domingos 6:30 PM</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="font-bold text-lg mb-5">Síguenos en nuestras redes</h4>
            <div className="flex gap-4 justify-center mb-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>

            <a href={WHATSAPP_GROUP} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base h-14 px-8 gap-3"
              >
                <WhatsAppIcon />
                Únete a nuestro grupo de WhatsApp
              </Button>
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Pandillas de la Santa Cruz — Parroquia La Santa Cruz, El Salto, Jalisco.</p>
            <p>Diseñado con pasión para los jóvenes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
