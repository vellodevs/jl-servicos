import { useState, useEffect } from 'react';
import { 
  Shield, Eye, Bell, Radio, Zap, CheckCircle2, 
  Menu, X, Phone, Mail, Send, ChevronRight, 
  Smartphone, Award, HardHat, Headphones,
  MessageSquare, Clock, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- CONFIGURAÇÕES GERAIS ---
const WHATSAPP_NUMBER = "5555997155332"; 
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento com a JL Serviços.`;
const WEB3FORMS_KEY = "c1394ac2-dc2c-4792-bb9a-b156c9dd56f9";

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
    <div className="min-h-screen bg-jl-black selection:bg-jl-silver selection:text-jl-black font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-jl-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="JL Serviços Logo" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {['Início','Sobre', 'Serviços', 'Vídeos', 'Diferenciais', 'Contato'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all">
                {item}
              </a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white text-jl-black px-6 py-2.5 rounded-sm font-black text-[10px] uppercase tracking-tighter hover:bg-jl-silver transition-all shadow-lg">
              Fale pelo WhatsApp
            </a>
          </nav>

          <button className="lg:hidden text-jl-silver" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* HERO SECTION - LOGO ORIGINAL NO LADO DIREITO */}
      <section id="início" className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-jl-silver text-[10px] font-bold uppercase tracking-widest mb-8">
              <Shield size={12} /> Engenharia em Segurança & Infraestrutura
            </div>
           {/* H1 VERSÃO EXCLUSIVA VELLO DEV: SEM CLICHÊS E SEM CORTES */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter uppercase text-left py-10">
                
                <span className="block text-silver-gradient">
                  Segurança e
                </span>
                
                <span className="block text-silver-gradient">
                  Tecnologia
                </span>

                {/* "PARA" agora é apenas tipografia pura e elegante */}
                <span className="block text-white/20 text-lg md:text-2xl font-bold tracking-[0.4em] my-6">
                  PARA
                </span>

                {/* pr-8 garante que a ponta do "A" ou qualquer letra inclinada apareça inteira */}
                <span className="inline-block text-silver-gradient italic pr-8">
                  Proteger seu
                </span>

                <span className="block text-silver-gradient">
                  Patrimônio.
                </span>
              </h1>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed">
              Soluções completas em monitoramento, alarmes, telecomunicações e serviços elétricos com padrão de excelência JL Serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-white text-jl-black px-10 py-4 rounded-sm font-black text-lg flex items-center justify-center gap-2 hover:bg-jl-silver transition-all">
                Falar pelo WhatsApp <ChevronRight size={20} />
              </a>
              <a href="#serviços" className="border border-white/20 text-white px-10 py-4 rounded-sm font-bold text-lg flex items-center justify-center hover:bg-white/5 transition-all">
                Ver Serviços
              </a>
            </div>
          </motion.div>

          {/* LADO DIREITO: A LOGO OFICIAL CONFORME O PEDIDO */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center items-center">
            <div className="relative group p-4">
              <div className="absolute -inset-4 bg-jl-silver/10 rounded-full blur-3xl group-hover:bg-jl-silver/20 transition-all duration-1000"></div>
              <img 
                src="/logo.png" 
                alt="JL Serviços Logo Destaque" 
                className="relative w-full max-w-lg drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]" 
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* SOBRE */}
      <section id="sobre" className="py-32 relative overflow-hidden">
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

      {/* SERVIÇOS */}
      <section id="serviços" className="py-32 bg-jl-gray-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Nossas Soluções</h2>
            <div className="h-1 w-20 bg-jl-silver mx-auto opacity-30"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Eye size={32}/>, title: "Monitoramento", desc: "Sistemas em tempo real para proteger seu patrimônio 24h." },
              { icon: <Bell size={32}/>, title: "Sistemas de Alarme", desc: "Instalação estratégica para aumentar a proteção imediata." },
              { icon: <Radio size={32}/>, title: "Telecom", desc: "Infraestrutura de rede eficiente para sua conectividade." },
              { icon: <Zap size={32}/>, title: "Serviços Elétricos", desc: "Manutenção e instalações com foco em segurança técnica." }
            ].map((s, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="metallic-border p-10 rounded-sm group">
                <div className="text-jl-silver mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS - CORREÇÃO DE CARREGAMENTO */}
      <section id="vídeos" className="py-32 bg-jl-gray-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Serviços em Ação</h2>
            <p className="text-jl-silver uppercase tracking-widest text-[10px] font-bold">Confira nosso trabalho na prática</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="metallic-border p-2 rounded-sm bg-black aspect-video overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/videos/demonstracao.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((v) => (
                <div key={v} className="metallic-border p-1 rounded-sm bg-black aspect-video overflow-hidden group cursor-pointer">
                  <video className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all" muted loop playsInline onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}>
                    <source src={`/videos/mini${v}.mp4`} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
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


     {/* SEÇÃO DE CONTATO - VERSÃO FINAL CORRIGIDA PELA VELLO DEV */}
      <section id="contato" className="relative py-32 border-t border-white/5 bg-jl-black">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Este grid-cols-12 é o que mantém o formulário e o whats lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* COLUNA 01: WHATSAPP (Lado Esquerdo) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card Principal: Agora em Preto/Prata (JL) */}
              <div className="p-8 rounded-3xl bg-jl-gray-dark border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -z-10"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-jl-silver">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">Atendimento WhatsApp</h3>
                    <p className="text-jl-silver font-bold text-[10px] uppercase tracking-widest mt-1">Resposta em até 10 minutos</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Converse em tempo real com nossos especialistas e tire suas dúvidas instantaneamente.
                </p>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full py-4 px-6 rounded-2xl font-black text-white bg-emerald-600 hover:bg-emerald-500 cursor-pointer flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-950/20"
                >
                  <Phone size={18} /> 
                  Chamar no WhatsApp Agora
                </a>
              </div>

              {/* Card de Informações Extras */}
              <div className="p-8 rounded-3xl bg-white/2 border border-white/5 space-y-5 text-gray-400 text-sm">
                <div className="flex items-center gap-4"><Mail size={18} className="text-jl-silver"/> joseleonardod3@gmail.com</div>
                <div className="flex items-center gap-4"><Clock size={18} className="text-jl-silver"/> Segunda a Sexta: 08h às 18h</div>
                <div className="flex items-center gap-4"><ShieldCheck size={18} className="text-jl-silver"/> Garantia & Contrato Formal</div>
              </div>
            </div>

            {/* COLUNA 02: FORMULÁRIO (Lado Direito) */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-jl-gray-dark border border-white/10 shadow-2xl relative overflow-hidden">
                <form 
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const btn = e.currentTarget.querySelector('button');
                    if (btn) btn.disabled = true;
                    const formData = new FormData(e.currentTarget);
                    formData.append("access_key", WEB3FORMS_KEY);
                    formData.append("from_name", "JL Serviços Website");
                    formData.append("subject", `🚀 Novo Orçamento: ${formData.get("name")} - JL Serviços`);
                    formData.append("replyto", formData.get("email") as string);
                    
                    try {
                      const res = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(Object.fromEntries(formData as any))
                      }).then(r => r.json());
                      if (res.success) { 
                        alert("Enviado com sucesso!"); 
                        (e.target as any).reset(); 
                      }
                    } catch (error) { alert("Erro de conexão."); } 
                    finally { if (btn) btn.disabled = false; }
                  }}
                >
                  <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Proposta Técnica</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <input name="name" type="text" placeholder="Seu Nome" required className="w-full bg-jl-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-jl-silver outline-none transition-all" />
                    <input name="email" type="email" placeholder="Seu E-mail" required className="w-full bg-jl-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-jl-silver outline-none transition-all" />
                  </div>
                  
                  <input name="phone" type="tel" placeholder="WhatsApp / Telefone" required className="w-full bg-jl-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-jl-silver outline-none transition-all" />
                  
                  <textarea name="message" rows={4} placeholder="Descreva sua necessidade..." required className="w-full bg-jl-black border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-jl-silver outline-none resize-none transition-all"></textarea>
                  
                  <button 
                    type="submit" 
                    className="w-full py-5 rounded-2xl font-black text-jl-black bg-gradient-to-r from-jl-silver via-white to-jl-silver cursor-pointer hover:brightness-110 hover:shadow-[0_0_30px_rgba(192,192,194,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    Enviar Solicitação <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

          </div>
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em]">
  
  {/* Link da Vello Dev com assinatura visual */}
  <p className="flex items-center gap-2">
  <span className="text-gray-600">Desenvolvido por</span>
  <a 
    href="https://vello-dev.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-jl-silver hover:text-white transition-all duration-300 group"
  >

    <Zap size={12} className="text-brand-cyan fill-brand-cyan/20 group-hover:scale-110 transition-transform" />
    
    <span className="font-bold tracking-widest uppercase text-[10px]">
      Vello Dev
    </span>
  </a>
</p>
</div>
          </div>
        </div>
      </footer>         

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-jl-black p-8 flex flex-col items-center justify-center gap-8">
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}><X size={32}/></button>
            {['Início', 'Serviços', 'Projetos', 'Vídeos', 'Contato'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black uppercase text-white tracking-widest">{i}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}