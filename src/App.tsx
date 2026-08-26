import { useState, useEffect } from 'react';
import { 
  Shield, Eye,Bell, Radio, Zap, CheckCircle2, 
  Menu, X, Phone, Mail, Send, ChevronRight, 
  Smartphone, Award, HardHat, Headphones
} from 'lucide-react';
import { motion} from 'framer-motion';

// CONFIGURAÇÕES DA EMPRESA
const WHATSAPP_NUMBER = "5555997155332"; // INSIRA O NÚMERO AQUI
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento com a JL Serviços.`;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-jl-black selection:bg-jl-silver selection:text-jl-black">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jl-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="JL Serviços" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {['Início', 'Sobre nós', 'Serviços', 'Diferenciais'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                {item}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-jl-silver-light text-jl-black px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-tighter hover:bg-white transition-all shadow-lg shadow-white/5">
              Fale pelo WhatsApp
            </a>
          </nav>

          <button className="lg:hidden text-jl-silver" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="início" className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-jl-silver/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-jl-silver text-[10px] font-bold uppercase tracking-widest mb-8">
              <Shield size={12} /> Tecnologia em Segurança
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Segurança, tecnologia e soluções para <span className="text-silver-gradient italic">proteger o que importa.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Soluções completas em monitoramento, alarmes, telecomunicações e serviços elétricos com padrão de excelência JL Serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white text-jl-black px-10 py-4 rounded-sm font-black text-lg flex items-center justify-center gap-2 hover:bg-jl-silver transition-all">
                Falar pelo WhatsApp <ChevronRight size={20} />
              </a>
              <a href="#serviços" className="border border-white/10 text-white px-10 py-4 rounded-sm font-bold text-lg flex items-center justify-center hover:bg-white/5 transition-all">
                Conheça nossos serviços
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-jl-silver/20 to-transparent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img src="/logo.png" alt="JL Serviços Badge" className="relative w-full max-w-md drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="serviços" className="py-32 bg-jl-gray-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Soluções completas para sua <br/> <span className="text-jl-silver">segurança e infraestrutura</span></h2>
            <div className="h-1 w-20 bg-jl-silver mx-auto opacity-30"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Eye size={32}/>, title: "Monitoramento", desc: "Sistemas em tempo real para acompanhar e proteger seu patrimônio 24h." },
              { icon: <Bell size={32}/>, title: "Sistemas de Alarme", desc: "Instalação estratégica para aumentar a proteção de residências e empresas." },
              { icon: <Radio size={32}/>, title: "Telecom", desc: "Infraestrutura de comunicação eficiente para manter sua conectividade." },
              { icon: <Zap size={32}/>, title: "Serviços Elétricos", desc: "Manutenção e instalações com foco total em segurança e normas técnicas." }
            ].map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="metallic-border p-10 rounded-sm group">
                <div className="text-jl-silver mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                <a href={WHATSAPP_LINK} className="text-[10px] font-black uppercase tracking-[0.2em] text-jl-silver hover:text-white flex items-center gap-2">
                  Solicitar Atendimento <ChevronRight size={14}/>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre-nós" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Sobre a JL Serviços</h2>
             <p className="text-lg text-gray-400 leading-relaxed mb-10">
               Atuamos oferecendo soluções profissionais em segurança, tecnologia e infraestrutura desde 2017. Nosso objetivo é proporcionar tranquilidade absoluta aos nossos clientes por meio de serviços de alta performance.
             </p>
             <div className="grid grid-cols-2 gap-6">
                {['Experiência', 'Qualidade', 'Segurança', 'Compromisso'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-jl-silver" size={18} />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">{item}</span>
                  </div>
                ))}
             </div>
          </motion.div>
          <motion.div {...fadeIn} className="relative">
             <div className="aspect-video rounded-sm bg-white/5 border border-white/10 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
                <img src="/logo.png" className="w-64 opacity-50 grayscale" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-jl-black to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-left">
                  <p className="text-white font-black text-5xl tracking-tighter">10+ ANOS</p>
                  <p className="text-jl-silver font-bold text-xs uppercase tracking-[0.3em]">De Excelência no Mercado</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Por que escolher a <span className="text-jl-silver">JL Serviços?</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { i: <HardHat />, t: "Profissionais qualificados", d: "Equipe preparada para oferecer soluções com segurança máxima." },
              { i: <Headphones />, t: "Atendimento personalizado", d: "Trabalhamos para encontrar a solução adequada para cada cenário." },
              { i: <Award />, t: "Compromisso com a qualidade", d: "Serviços realizados com atenção cirúrgica aos detalhes." },
              { i: <Smartphone />, t: "Tecnologia e segurança", d: "Sistemas modernos para proteção de pessoas e patrimônios." },
              { i: <Shield />, t: "Responsabilidade e confiança", d: "Atendimento profissional e compromisso com cada projeto." },
              { i: <CheckCircle2 />, t: "Soluções completas", d: "Segurança, Telecom e Elétrica em um só lugar." }
            ].map((d, i) => (
              <div key={i} className="flex gap-6 p-8 border-l border-white/5 hover:border-jl-silver transition-colors">
                <div className="text-jl-silver shrink-0">{d.i}</div>
                <div>
                  <h4 className="text-white font-black text-lg mb-2 uppercase tracking-tighter leading-none">{d.t}</h4>
                  <p className="text-gray-500 text-sm">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-jl-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-jl-silver/5 blur-[150px] -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Precisa de uma solução para sua <span className="text-jl-silver">segurança ou infraestrutura?</span></h2>
            <p className="text-gray-400 text-lg mb-12">Fale com a JL Serviços e descubra a melhor solução para sua necessidade específica.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-white text-jl-black px-12 py-5 rounded-sm font-black uppercase tracking-widest text-lg hover:bg-jl-silver transition-all shadow-2xl">
              <Phone /> Falar com um Especialista
            </a>
          </motion.div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="contato" className="py-32 bg-jl-gray-dark">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Solicite um atendimento</h2>
            <p className="text-gray-400 mb-12">Preencha o formulário e nossa equipe técnica entrará em contato em breve para entender sua necessidade.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-jl-silver">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><Phone size={18}/></div>
                <span className="font-bold text-white tracking-widest uppercase text-xs">(55) 9 99715-5332</span>
              </div>
              <div className="flex items-center gap-4 text-jl-silver">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center"><Mail size={18}/></div>
                <span className="font-bold text-white tracking-widest uppercase text-xs">joseleonardod3@gmail.com</span>
              </div>
            </div>
          </div>

          <form className="metallic-border p-8 md:p-12 rounded-sm space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nome completo" className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all" />
              <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="tel" placeholder="Telefone / WhatsApp" className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all" />
              <input type="text" placeholder="Empresa (opcional)" className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all" />
            </div>
            <select className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all appearance-none">
              <option>Serviço de interesse</option>
              <option>Monitoramento</option>
              <option>Sistemas de Alarme</option>
              <option>Telecom / Redes</option>
              <option>Serviços Elétricos</option>
            </select>
            <textarea rows={4} placeholder="Sua mensagem" className="w-full bg-jl-black border border-white/10 rounded-sm px-5 py-4 text-white outline-none focus:border-jl-silver transition-all resize-none"></textarea>
            <button className="w-full py-5 bg-white text-jl-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-jl-silver transition-all">
              Enviar Solicitação <Send size={20}/>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-jl-black text-center">
        <div className="max-w-7xl mx-auto px-6">
          <img src="/logo.png" className="h-16 mx-auto mb-8 grayscale brightness-200 opacity-80" alt="" />
          <h3 className="text-white font-black text-2xl tracking-tighter uppercase mb-2">JL Serviços</h3>
          <p className="text-jl-silver font-bold text-xs uppercase tracking-[0.4em] mb-12">Segurança • Tecnologia • Infraestrutura</p>
          
          <div className="flex justify-center gap-8 mb-12">
            {['Início', 'Sobre', 'Serviços', 'Diferenciais', 'Contato'].map(link => (
              <a key={link} href="#" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">{link}</a>
            ))}
          </div>

          <div className="h-px w-full bg-white/5 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
            <p>© 2026 JL Serviços - Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
               <span>Desenvolvido por Vello Dev</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}