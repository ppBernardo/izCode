import { useRef, type ReactNode } from "react";
import {
  Zap,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useWorkCardsScrollTrigger } from "@/hooks/useWorkCardsScrollTrigger";
import {
  AgileDeliveryCanvas,
  ScaleMicroCanvas,
  SupportMicroCanvas,
  TeamMicroCanvas,
  TechStackCanvas,
  UxMicroCanvas,
} from "@/components/ShowcaseCardCanvas";
import { WHATSAPP_HREF } from "@/lib/contact";

const principles = [
  {
    title: "Executar com visão",
    body:
      "O maior impacto aparece quando imaginação ambiciosa encontra entrega disciplinada.",
    quote: "Visão sem ação é sonho. Ação sem visão é pesadelo.",
    attribution: "Provérbio japonês",
  },
  {
    title: "Ser autor do produto",
    body:
      "Confiança para construir o futuro que você enxerga — com escopo e responsabilidade claros.",
    quote: "Quem define valores e prioridades guia o que será construído.",
    attribution: "Robert Kegan (adaptado)",
  },
  {
    title: "Liderar com curiosidade",
    body:
      "A trilha para mudar o jogo costuma começar com um ‘por quê?’ bem colocado.",
    quote: "Eu só queria entender como as coisas se encaixavam.",
    attribution: "Claude Shannon",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.09, y: 36, scaleFrom: 0.91 });
  useWorkCardsScrollTrigger(sectionRef);

  const features: {
    icon: ReactNode;
    title: string;
    kicker: string;
    description: string;
    canvas: ReactNode;
  }[] = [
    {
      icon: <Zap className="h-5 w-5 text-awful-accent" />,
      title: "Entregas em etapas",
      kicker: "Resultado visível antes da próxima fase.",
      description:
        "Prioridades combinadas com você; a cada ciclo mostramos o que entrou no ar.",
      canvas: <AgileDeliveryCanvas />,
    },
    {
      icon: <Star className="h-5 w-5 text-awful-accent" />,
      title: "Experiência que converte",
      kicker: "Menos atrito, mais clareza.",
      description:
        "Interface pensada para o dia a dia de quem usa o sistema de verdade.",
      canvas: <UxMicroCanvas />,
    },
    {
      icon: <Award className="h-5 w-5 text-awful-accent" />,
      title: "Pronto para crescer",
      kicker: "Arquitetura que acompanha demanda.",
      description:
        "Base pensada para evoluir sem refazer tudo a cada novo uso.",
      canvas: <ScaleMicroCanvas />,
    },
    {
      icon: <Shield className="h-5 w-5 text-awful-accent" />,
      title: "Tecnologia transparente",
      kicker: "Documentado para quem vier depois.",
      description:
        "Stack atual e registro do projeto — manutenção e transição mais simples.",
      canvas: <TechStackCanvas />,
    },
    {
      icon: <Users className="h-5 w-5 text-awful-accent" />,
      title: "Quem vende, entrega",
      kicker: "Mesma equipe do início ao fim.",
      description:
        "Quem apresenta a proposta participa da execução: menos telefone sem fio.",
      canvas: <TeamMicroCanvas />,
    },
    {
      icon: <Clock className="h-5 w-5 text-awful-accent" />,
      title: "Depois do lançamento",
      kicker: "Suporte e melhorias sob contrato.",
      description:
        "Ajustes e acompanhamento quando o sistema já está no ar.",
      canvas: <SupportMicroCanvas />,
    },
  ];

  const stats = [
    { value: "100%", label: "Combinado por escrito", hint: "escopo e entregas" },
    { value: "50+", label: "Projetos entregues", hint: "sites, CRMs, sistemas" },
    { value: "24/7", label: "Suporte", hint: "conforme contrato" },
    { value: "5+", label: "Anos", hint: "equipe estável" },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <div className="mb-16 max-w-3xl md:mb-20">
          <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
            Princípios e método
          </p>
          <h2
            data-reveal
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-awful-fg sm:text-5xl"
          >
            Clareza, prazo e acompanhamento — além de código
          </h2>
          <p data-reveal className="mt-4 text-awful-muted sm:text-lg">
            Proposta objetiva para quem precisa justificar investimento e enxergar
            progresso sem surpresas.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {principles.map((p) => (
            <blockquote
              key={p.title}
              data-reveal
              className="border border-white/10 bg-awful-elevated p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-semibold text-awful-fg">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-awful-muted">{p.body}</p>
              <footer className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm italic text-awful-fg/90">&ldquo;{p.quote}&rdquo;</p>
                <cite className="mt-2 block font-mono text-[11px] not-italic uppercase tracking-wider text-awful-muted">
                  {p.attribution}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="tech-divider my-16 md:my-20" />

        <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
          Como trabalhamos
        </p>
        <h3
          data-reveal
          className="mt-3 font-display text-2xl font-semibold text-awful-fg sm:text-3xl"
        >
          Seis frentes que aparecem na prática
        </h3>

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              data-work-card
              className="work-frente-card flex min-h-0 min-w-0 flex-col"
            >
              <div className="relative border-b border-white/[0.08] px-5 py-6 sm:px-8 sm:py-8">
                <span
                  className="pointer-events-none absolute right-3 top-3 font-mono text-5xl font-bold leading-none text-white/[0.04] sm:right-5 sm:top-5 sm:text-6xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative max-w-full">
                  <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-awful-accent/25 bg-awful-accent/[0.08] text-awful-accent shadow-[0_0_24px_-8px_rgba(51,153,255,0.35)]">
                      {feature.icon}
                    </div>
                    <div className="min-w-0 flex-1 pr-2">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-awful-muted">
                        Frente {index + 1}
                      </p>
                      <h4 className="mt-2 font-display text-xl font-semibold tracking-tight text-awful-fg sm:text-[1.35rem]">
                        {feature.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium leading-snug text-awful-accent/90">
                        {feature.kicker}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-awful-muted/95 sm:mt-6 sm:text-[0.9375rem]">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="work-frente-canvas flex min-h-[220px] flex-1 flex-col p-4 sm:min-h-[260px] sm:p-5 lg:min-h-[280px]">
                <div
                  data-work-canvas
                  className="work-frente-canvas-inner relative z-[1] min-h-0 w-full overflow-x-auto overflow-y-visible [-webkit-overflow-scrolling:touch] [scrollbar-gutter:stable]"
                >
                  {feature.canvas}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
          <p data-reveal className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-awful-muted">
            Em números
          </p>
          <h3
            data-reveal
            className="mt-2 text-center font-display text-xl font-semibold text-awful-fg sm:text-2xl"
          >
            Indicadores izcode
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="bg-awful-elevated px-4 py-5 text-center"
              >
                <div className="font-mono text-xl font-semibold tabular-nums text-awful-accent sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-awful-fg">{s.label}</div>
                <div className="mt-0.5 text-[10px] text-awful-muted sm:text-[11px]">{s.hint}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-col gap-4 border border-white/10 bg-awful-elevated p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="max-w-lg">
            <h3 className="font-display text-lg font-semibold text-awful-fg">Quer uma proposta?</h3>
            <p className="mt-1 text-sm text-awful-muted">
              Chame no WhatsApp — retorno em até 24h úteis.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="awful-btn-primary text-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
            <a href="#cta" className="awful-btn-outline text-sm">
              Ir ao contato
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
