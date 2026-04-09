import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  PlayCircle,
  Download,
  Users,
  Flame,
  MessageCircle,
  ChevronRight,
  Music,
  HeartHandshake,
  Activity,
  Heart,
  Instagram,
  Facebook,
  Smartphone,
  CheckCircle2,
  Tent,
  Sun,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

  const retreatDate = new Date("2026-04-15T00:00:00");

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-secondary"}`} />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>Pandillas La Santa Cruz</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#eventos" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Eventos</a>
            <a href="#actividades" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Actividades</a>
            <a href="#comunidad" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Comunidad</a>
            <a href="#padres" className={`text-sm font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white"}`}>Padres</a>
            <Button className={isScrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"}>
              Únete Hoy
            </Button>
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
        href="https://wa.me/523312345678" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap group-hover:pl-2 font-medium">
          Mándanos mensaje
        </span>
      </a>
      {/* HERO SECTION */}
      <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/__mockup/images/hero.png" 
            alt="Jóvenes en retiro al aire libre" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
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
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary font-bold">
              Inscríbete al Próximo Retiro
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 text-white border-white hover:bg-white hover:text-slate-900 font-bold bg-transparent">
              Conoce Nuestros Horarios
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto text-lg h-14 px-6 text-white hover:bg-white/10 group">
              <PlayCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" /> Ver Galería
            </Button>
          </div>

          <div className="w-full max-w-md mx-auto">
            <p className="text-white/80 text-sm uppercase tracking-widest font-bold mb-3">Próximo Retiro de Pascua en:</p>
            <CountdownTimer targetDate={retreatDate} />
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="bg-primary text-white rounded-t-xl pb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 hover:bg-white/20 text-white border-none">3 Días</Badge>
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Retiro de Semana Santa</CardTitle>
                <CardDescription className="text-white/80 font-medium">15 - 18 de Abril, 2026</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Hospedaje y comidas
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Materiales y playera
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Transporte redondo
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Cuota de recuperación</span>
                  <span className="text-xl font-bold text-slate-900">$450 MXN</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg h-12">Inscribirse Ahora</Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary border-none">Cerca</Badge>
              </div>
              <CardHeader className="bg-slate-900 text-white rounded-t-xl pb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 hover:bg-white/20 text-white border-none">1 Día</Badge>
                  <Sun className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Pascua Juvenil</CardTitle>
                <CardDescription className="text-white/80 font-medium">3 de Mayo, 2026</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Rally deportivo
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Comida compartida
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-900" /> Misa y concierto
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Cuota de recuperación</span>
                  <span className="text-xl font-bold text-slate-900">Gratuito</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg h-12 bg-slate-900 hover:bg-slate-800">Registrar Asistencia</Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="bg-primary text-white rounded-t-xl pb-8">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-white/20 hover:bg-white/20 text-white border-none">Próximamente</Badge>
                  <Tent className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-2xl font-bold">Campamento de Verano</CardTitle>
                <CardDescription className="text-white/80 font-medium">Julio 2026</CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> 4 días en la montaña
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Fogatas y retos
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Supervivencia
                  </li>
                </ul>
                <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-500">Cuota de recuperación</span>
                  <span className="text-xl font-bold text-slate-900">Por definir</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-lg h-12">Recibir Info Primero</Button>
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
            {/* Timeline line hidden on mobile, visible on md */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Contáctanos", desc: "Mándanos un WhatsApp para saber que vienes.", icon: <MessageCircle className="w-6 h-6" /> },
                { step: "2", title: "Llega el Sábado", desc: "Te recibiremos en la entrada de la parroquia.", icon: <MapPin className="w-6 h-6" /> },
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
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg h-14 px-8 font-bold shadow-xl shadow-black/10">
              <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" /> Mándanos un Mensaje Hoy
            </Button>
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
                Nuestra fe se vive en movimiento. Tenemos espacios para que descubras tus talentos, hagas deporte y sirvas a los demás. No tienes que ser perfecto para estar aquí, solo querer compartir.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <MessageCircle className="w-5 h-5 text-primary" />, title: "Reuniones de Formación", desc: "Charlas y debates sobre temas actuales" },
                  { icon: <Activity className="w-5 h-5 text-secondary" />, title: "Dinámicas y Juegos", desc: "Rallys, competencias y rompehielos" },
                  { icon: <Music className="w-5 h-5 text-primary" />, title: "Ministerio de Música", desc: "Coro y ensamble para las misas" },
                  { icon: <HeartHandshake className="w-5 h-5 text-secondary" />, title: "Servicio Comunitario", desc: "Visitas y ayuda a quienes lo necesitan" }
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
            className="w-full h-full object-cover mix-blend-luminosity mask-image-gradient-l"
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
              { text: "Este grupo me enseñó que la fe no es aburrida. Encontré a mis mejores amigos en un campamento de verano y ahora no me pierdo un solo sábado.", name: "Carlos", age: "17 años", time: "2 años en el grupo" },
              { text: "Yo llegué obligado por mis papás, no quería ir. El primer día hicimos un rally increíble y me di cuenta que todos eran súper buena onda. Ahora yo soy el que arrastra a sus amigos.", name: "Valeria", age: "15 años", time: "6 meses en el grupo" },
              { text: "Tocar la guitarra en el ministerio de música me dio la confianza que no tenía en la escuela. Es mi lugar seguro en la semana.", name: "Mateo", age: "18 años", time: "4 años en el grupo" }
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
      {/* LEADERSHIP / COORDINATORS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Nuestros Guías</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Jóvenes líderes comprometidos con acompañarte en esta etapa.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Andrés M.", role: "Coordinador General", exp: "5 años de servicio" },
              { name: "Sofía R.", role: "Sub-coordinadora", exp: "4 años de servicio" },
              { name: "Dani G.", role: "Lideresa de Música", exp: "3 años de servicio" },
              { name: "Luis F.", role: "Líder de Jóvenes", exp: "3 años de servicio" }
            ].map((leader, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-xl group-hover:border-secondary transition-colors relative bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-slate-400">
                    {leader.name.substring(0,2).toUpperCase()}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                <p className="text-sm font-medium text-primary mb-1">{leader.role}</p>
                <p className="text-xs text-slate-500">{leader.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SCHEDULE & DOWNLOADS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" /> Horarios de Reunión
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-primary text-white flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold uppercase tracking-wider">Sáb</span>
                    <span className="text-2xl font-black">16</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Reunión General Sabatina</h4>
                    <p className="text-slate-600 mb-2">Juegos, temas de formación y convivencia. El momento central de la semana.</p>
                    <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
                      <Clock className="w-4 h-4" /> 4:00 PM - 6:30 PM
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-16 h-16 rounded-xl bg-secondary text-secondary-foreground flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold uppercase tracking-wider">Dom</span>
                    <span className="text-2xl font-black">12</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Misa Joven</h4>
                    <p className="text-slate-600 mb-2">Misa animada por el ministerio de música del grupo. Ven con tu playera.</p>
                    <div className="flex items-center text-sm font-medium text-slate-500 gap-2">
                      <Clock className="w-4 h-4" /> 12:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <Download className="w-8 h-8 text-primary" /> Recursos
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Cantoral del Grupo", desc: "PDF con todos los cantos", size: "2.4 MB" },
                  { title: "Permiso para Padres", desc: "Carta responsiva salidas", size: "150 KB" },
                  { title: "Reglamento", desc: "Normas de convivencia", size: "300 KB" },
                  { title: "Oraciones Base", desc: "Oración del joven", size: "100 KB" }
                ].map((doc, i) => (
                  <a href="#" key={i} className="p-4 rounded-xl border border-slate-200 hover:border-primary hover:shadow-md transition-all group block">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-primary/10 text-slate-600 group-hover:text-primary transition-colors">
                        <Download className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium text-slate-400">{doc.size}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{doc.title}</h4>
                    <p className="text-xs text-slate-500">{doc.desc}</p>
                  </a>
                ))}
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
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Sabemos que lo más importante para usted es la seguridad y el bienestar de sus hijos. 
            Nuestro grupo está avalado por la parroquia y siempre cuenta con la supervisión de 
            coordinadores adultos capacitados y la guía espiritual de nuestros sacerdotes.
            Fomentamos valores católicos, comunicación transparente y un ambiente sano.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
              Descargar Reglamento de Seguridad
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              Contactar a Coordinación
            </Button>
          </div>
        </div>
      </section>
      {/* CONTACT & FOOTER */}
      <footer className="bg-slate-950 pt-24 pb-12 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-black mb-8">¿Listo para unirte?</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Parroquia El Salto</h4>
                    <p className="text-white/60">Calle Principal #123, Centro<br />El Salto, Jalisco, México</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 rounded-xl shrink-0">
                    <Smartphone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp</h4>
                    <p className="text-white/60">+52 (33) 1234-5678</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Síguenos en nuestras redes</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Form */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Mándanos tus datos</h3>
              <p className="text-white/60 mb-8 text-sm">Déjanos tu información y un coordinador se pondrá en contacto contigo esta misma semana.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="nombre" className="text-white/80">Nombre del Joven</Label>
                    <Input id="nombre" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12" placeholder="Tu nombre completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edad" className="text-white/80">Edad</Label>
                    <Input id="edad" type="number" min="12" max="25" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12" placeholder="Años" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tutor" className="text-white/80">Nombre de Padre/Tutor</Label>
                  <Input id="tutor" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12" placeholder="Para menores de edad" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-white/80">Teléfono (WhatsApp)</Label>
                  <Input id="telefono" type="tel" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-12" placeholder="10 dígitos" />
                </div>

                <Button className="w-full h-12 mt-4 bg-primary text-white hover:bg-primary/90 font-bold text-lg">
                  Enviar Mensaje
                </Button>
              </form>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Grupo Juvenil Católico - Parroquia El Salto, Jalisco.</p>
            <p>Diseñado con pasión para los jóvenes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
