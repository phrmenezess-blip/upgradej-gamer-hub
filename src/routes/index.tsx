import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Cpu, Headphones, Truck, ShieldCheck, FileText, Users,
  MessageCircle, Mail, Instagram, Facebook, Youtube, ChevronDown,
  Zap, Star, Award, Rocket, ShoppingBag, Menu, X
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-bot.png";
import mpShopee from "@/assets/mp-shopee.png";
import mpMercadoLivre from "@/assets/mp-mercadolivre.png";
import mpAmazon from "@/assets/mp-amazon.png";
import mpTiktok from "@/assets/mp-tiktok.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UpgradeJá – Hardware Gamer, Periféricos e Upgrades para PC" },
      {
        name: "description",
        content:
          "UpgradeJá: hardware gamer, periféricos, upgrades de PC e componentes de informática com envio rápido, garantia e nota fiscal. Compre nos principais marketplaces.",
      },
      { property: "og:title", content: "UpgradeJá – Seu Setup Gamer Começa Aqui" },
      { property: "og:description", content: "Hardware, upgrades e periféricos gamer com atendimento especializado." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5531972440587";

const marketplaces = [
  { name: "Shopee", desc: "Ofertas relâmpago e cupons exclusivos", color: "#EE4D2D", url: "#", logo: mpShopee },
  { name: "Mercado Livre", desc: "Frete rápido e Mercado Pago seguro", color: "#FFE600", textDark: true, url: "#", logo: mpMercadoLivre },
  { name: "Amazon", desc: "Entrega Prime e suporte premium", color: "#FF9900", url: "#", logo: mpAmazon },
  { name: "TikTok Shop", desc: "Lives, descontos e novidades em primeira mão", color: "#000000", url: "#", logo: mpTiktok },
  { name: "Magazine Luiza", desc: "Parcele em até 12x sem juros", color: "#0086FF", url: "#", logo: null as string | null },
];

const benefits = [
  { icon: ShieldCheck, title: "Produtos Originais", desc: "Trabalhamos apenas com marcas oficiais e distribuidores autorizados." },
  { icon: Award, title: "Garantia & Suporte", desc: "Garantia de fábrica e suporte técnico especializado pós-venda." },
  { icon: Truck, title: "Envio Rápido", desc: "Despacho em até 24h e rastreio em todos os pedidos." },
  { icon: Headphones, title: "Atendimento Especializado", desc: "Time gamer pronto para te ajudar a montar o setup ideal." },
  { icon: FileText, title: "Nota Fiscal Garantida", desc: "Emissão de NF-e em 100% dos pedidos. Compra segura." },
  { icon: Rocket, title: "Performance Premium", desc: "Curadoria de hardware focada em alto desempenho." },
];

const reviews = [
  { name: "Lucas R.", role: "Gamer competitivo", text: "Comprei a RTX e chegou rapidíssimo. Atendimento top, recomendo demais!", stars: 5 },
  { name: "Mariana S.", role: "Streamer", text: "Periféricos originais e com nota fiscal. A entrega foi mais rápida que o prazo.", stars: 5 },
  { name: "Diego M.", role: "Entusiasta de PC", text: "Fiz o upgrade do meu setup com eles. Suporte explicou tudo direitinho.", stars: 5 },
];

const stats = [
  { v: "+15k", l: "Pedidos entregues" },
  { v: "4.9★", l: "Avaliação média" },
  { v: "98%", l: "Satisfação" },
  { v: "24h", l: "Despacho rápido" },
];

const faqs = [
  { q: "Os produtos possuem garantia?", a: "Sim. Todos os produtos contam com garantia de fábrica e suporte da UpgradeJá." },
  { q: "Vocês emitem nota fiscal?", a: "Emitimos nota fiscal eletrônica em 100% dos pedidos, sem exceção." },
  { q: "Como funciona o envio?", a: "Despachamos em até 24h úteis após confirmação. Você recebe o código de rastreio para acompanhar." },
  { q: "Quais marketplaces vocês utilizam?", a: "Shopee, Mercado Livre, Amazon, TikTok Shop e Magazine Luiza. Escolha o seu favorito." },
  { q: "O atendimento é rápido?", a: "Sim! Nosso time responde no WhatsApp em horário comercial com agilidade e expertise gamer." },
];

function Index() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="UpgradeJá" className="h-9 md:h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider">
            <a href="#produtos" className="hover:text-primary transition">Marketplaces</a>
            <a href="#beneficios" className="hover:text-primary transition">Benefícios</a>
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#avaliacoes" className="hover:text-primary transition">Avaliações</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATS} target="_blank" rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--whatsapp)] text-white font-bold uppercase text-sm tracking-wide hover:opacity-90 transition shadow-card"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <button className="md:hidden p-2" onClick={() => setOpenMenu(v => !v)} aria-label="Menu">
              {openMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {openMenu && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col p-4 gap-3 font-semibold uppercase text-sm">
              <a href="#produtos" onClick={() => setOpenMenu(false)}>Marketplaces</a>
              <a href="#beneficios" onClick={() => setOpenMenu(false)}>Benefícios</a>
              <a href="#sobre" onClick={() => setOpenMenu(false)}>Sobre</a>
              <a href="#avaliacoes" onClick={() => setOpenMenu(false)}>Avaliações</a>
              <a href="#faq" onClick={() => setOpenMenu(false)}>FAQ</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur text-xs uppercase tracking-widest font-bold">
              <Zap className="size-3.5 text-[var(--neon)]" />
              Hardware Gamer Premium
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-[1.05]">
              Seu Setup Gamer <br />
              <span className="text-gradient-neon">Começa Aqui</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 max-w-xl">
              Hardware, upgrades, periféricos e componentes gamer com envio rápido e atendimento especializado.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.slice(0,3).map(s => (
                <div key={s.l} className="border border-white/10 rounded-xl px-3 py-3 bg-white/5 backdrop-blur">
                  <div className="text-2xl md:text-3xl font-black text-[var(--neon)]">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/30 blur-3xl rounded-full"></div>
            <img src={heroImg} alt="Mascote UpgradeJá com setup gamer" className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl animate-float" />
          </div>
        </div>
      </section>

      {/* MARKETPLACES */}
      <section id="produtos" className="py-20 bg-tech-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary">
              <ShoppingBag className="size-4" /> Onde Comprar
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Escolha seu Marketplace Favorito</h2>
            <p className="mt-3 text-muted-foreground">Estamos presentes nas maiores plataformas do Brasil. Compre com segurança onde você já confia.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketplaces.map(m => (
              <a key={m.name} href={m.url}
                 className="marketplace-card group bg-card rounded-2xl border-2 border-border p-6 shadow-card flex flex-col">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 px-3 min-w-[3.5rem] rounded-xl flex items-center justify-center font-black text-2xl overflow-hidden"
                    style={{ background: m.logo ? "#f3f4f6" : m.color, color: m.textDark ? "#000" : "#fff" }}
                  >
                    {m.logo ? (
                      <img src={m.logo} alt={m.name} className="h-10 w-auto object-contain" />
                    ) : (
                      <span>{m.name.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl">{m.name}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Loja Oficial UpgradeJá</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex-1">{m.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide group-hover:brightness-110 transition">
                    Comprar Agora
                  </span>
                  <Zap className="size-5 text-[var(--neon)] opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest font-bold text-primary">Por que UpgradeJá</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Confiança e Performance em Cada Pedido</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/60 hover:shadow-card-hover transition clip-tech">
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <b.icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest font-bold text-primary">Sobre a UpgradeJá</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Especialistas em Hardware Gamer</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">UpgradeJá</strong> é especializada em hardware, upgrades e periféricos gamer, oferecendo
              produtos de qualidade, atendimento rápido e experiência confiável para gamers e entusiastas de tecnologia.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Cpu, t: "Hardware Premium" },
              { icon: Users, t: "Time Gamer" },
              { icon: Rocket, t: "Envio Expresso" },
              { icon: ShieldCheck, t: "Compra Segura" },
            ].map(i => (
              <div key={i.t} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <i.icon className="size-5" />
                </div>
                <div className="font-semibold text-sm">{i.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="avaliacoes" className="py-20 bg-[var(--dark)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest font-bold text-[var(--neon)]">Prova Social</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Gamers que já fizeram seu Upgrade</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-center">
                <div className="text-3xl md:text-4xl font-black text-gradient-neon">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {reviews.map(r => (
              <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <div className="flex gap-1 text-[var(--neon)]">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="mt-3 text-white/85 leading-relaxed">"{r.text}"</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA / CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary to-[oklch(0.55_0.22_240)] p-8 md:p-14 text-white shadow-card-hover">
            <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs uppercase tracking-widest font-bold">
                  <Zap className="size-3.5 text-[var(--neon)]" /> Ofertas Ativas
                </div>
                <h2 className="mt-3 text-3xl md:text-5xl font-black">Promoções, cupons e novidades te esperam</h2>
                <p className="mt-3 text-white/85 max-w-lg">
                  Acesse nossas lojas oficiais nos principais marketplaces do Brasil e garanta o melhor preço em hardware e periféricos gamer.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                {marketplaces.map(m => (
                  <a key={m.name} href={m.url}
                     className="px-5 py-3 rounded-xl bg-white text-foreground font-bold uppercase text-sm tracking-wide hover:scale-105 transition flex items-center gap-2 shadow-card">
                    {m.logo ? (
                      <img src={m.logo} alt={m.name} className="h-5 w-auto object-contain" />
                    ) : (
                      <span className="size-6 rounded-md flex items-center justify-center text-xs font-black"
                            style={{ background: m.color, color: m.textDark ? "#000" : "#fff" }}>{m.name.charAt(0)}</span>
                    )}
                    {m.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest font-bold text-primary">FAQ</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black">Perguntas Frequentes</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <button key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left rounded-xl border border-border bg-background p-5 hover:border-primary/60 transition">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-lg">{f.q}</span>
                  <ChevronDown className={`size-5 transition ${openFaq === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                </div>
                {openFaq === i && <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] text-white pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <img src={logo} alt="UpgradeJá" className="h-10 w-auto bg-white rounded-md p-1.5" />
              <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-md">
                Especialistas em hardware, upgrades e periféricos gamer. Atendimento rápido, produtos originais e nota fiscal em todos os pedidos.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="size-10 rounded-lg bg-white/10 hover:bg-primary transition flex items-center justify-center"><Instagram className="size-5" /></a>
                <a href="#" className="size-10 rounded-lg bg-white/10 hover:bg-primary transition flex items-center justify-center"><Facebook className="size-5" /></a>
                <a href="#" className="size-10 rounded-lg bg-white/10 hover:bg-primary transition flex items-center justify-center"><Youtube className="size-5" /></a>
                <a href={WHATS} target="_blank" rel="noopener" className="size-10 rounded-lg bg-[var(--whatsapp)] hover:brightness-110 transition flex items-center justify-center"><MessageCircle className="size-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[var(--neon)]">Links Rápidos</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li><a href="#produtos" className="hover:text-primary">Marketplaces</a></li>
                <li><a href="#beneficios" className="hover:text-primary">Benefícios</a></li>
                <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[var(--neon)]">Contato</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li className="flex items-center gap-2"><MessageCircle className="size-4 text-primary" /> (31) 97244-0587</li>
                <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /> sac@upgradeja.com.br</li>
                <li className="text-white/60 mt-3">
                  Rua Serra do Mar, 1015 — Loja 02<br />
                  Jardim Panorama — Ipatinga/MG<br />
                  CEP: 35164-238
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-3">
            <div>
              © {new Date().getFullYear()} UPGRADEJA — P. Henrique de Sousa Menezes Comercio de Informatica LTDA · CNPJ 61.534.436/0001-55
            </div>
            <div>Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a href={WHATS} target="_blank" rel="noopener"
         className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[var(--whatsapp)] text-white flex items-center justify-center shadow-card-hover animate-pulse-glow hover:scale-110 transition"
         aria-label="Falar no WhatsApp">
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
