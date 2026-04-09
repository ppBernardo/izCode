import { useRef, type ReactNode } from "react";
import { ArrowRight, MessageCircle, Rocket, Database, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AutomationCanvas,
  CrmPipelineCanvas,
  StartupProductCanvas,
} from "@/components/ShowcaseCardCanvas";
import { WHATSAPP_HREF } from "@/lib/contact";

function ServiceCard({
  icon,
  index,
  title,
  description,
  canvas,
  featured,
}: {
  icon: ReactNode;
  index: number;
  title: string;
  description: string;
  canvas: ReactNode;
  /** Destaque: largura total, mais ar e canvas com altura confortável */
  featured?: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  const textPanel = (
    <div
      className={`relative border-b border-white/[0.08] ${
        featured
          ? "px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-11"
          : "p-6 sm:p-8 md:py-8"
      }`}
    >
      <span
        className="pointer-events-none absolute right-4 top-4 font-mono text-5xl font-bold leading-none text-white/[0.04] sm:right-6 sm:top-6 sm:text-6xl lg:text-7xl"
        aria-hidden
      >
        {num}
      </span>
      <div className={`relative ${featured ? "lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-14 lg:gap-y-0" : ""}`}>
        <div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-awful-accent/25 bg-awful-accent/[0.08] text-awful-accent shadow-[0_0_24px_-8px_rgba(51,153,255,0.35)]">
              {icon}
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-awful-muted">
                Serviço {index + 1}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-awful-fg sm:text-2xl lg:text-[1.65rem] lg:leading-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <p
          className={`mt-6 text-sm leading-relaxed text-awful-muted/95 sm:text-[0.9375rem] lg:leading-[1.75] ${
            featured ? "lg:mt-0 lg:pt-1" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  const canvasPanel = (
    <div
      className={`work-frente-canvas relative flex flex-1 flex-col overflow-hidden p-4 sm:p-6 lg:p-8 ${
        featured
          ? "min-h-[260px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px]"
          : "min-h-[200px] sm:min-h-[220px] md:min-h-[280px]"
      }`}
    >
      <div className="relative z-[1] min-h-0 w-full flex-1 overflow-x-auto overflow-y-visible [-webkit-overflow-scrolling:touch]">
        {featured ? (
          <div className="mx-auto w-full max-w-6xl">{canvas}</div>
        ) : (
          canvas
        )}
      </div>
    </div>
  );

  return (
    <article
      data-reveal
      className={`work-frente-card flex min-h-0 flex-col font-sans ${
        featured ? "min-h-0 lg:min-h-0" : "min-h-[300px] md:min-h-[340px]"
      }`}
    >
      {textPanel}
      {canvasPanel}
    </article>
  );
}

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.11, y: 40, scaleFrom: 0.92 });

  const services: {
    icon: ReactNode;
    title: string;
    description: string;
    canvas: ReactNode;
    featured: boolean;
  }[] = [
    {
      icon: <Rocket className="h-5 w-5 text-awful-accent" />,
      title: "Desenvolvimento para startups",
      description:
        "Do MVP ao crescimento: roadmap por etapas, métricas que importam e entregas que você mostra em reunião.",
      canvas: <StartupProductCanvas />,
      featured: true,
    },
    {
      icon: <Database className="h-5 w-5 text-awful-accent" />,
      title: "CRM personalizado",
      description:
        "Funil e relatórios no formato do seu time — sem adaptar o negócio a planilha genérica.",
      canvas: <CrmPipelineCanvas />,
      featured: false,
    },
    {
      icon: <Zap className="h-5 w-5 text-awful-accent" />,
      title: "Soluções sob medida",
      description:
        "Automação e sistemas internos com escopo fechado antes da primeira linha de código.",
      canvas: <AutomationCanvas />,
      featured: false,
    },
  ];

  const [primary, ...rest] = services;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-3xl">
            <p
              data-reveal
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent"
            >
              O que fazemos
            </p>
            <h2
              data-reveal
              className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-awful-fg sm:text-5xl md:text-6xl"
            >
              Engenharia com proposta antes do build
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-md text-sm leading-relaxed text-awful-muted lg:ml-auto lg:text-right lg:text-base"
          >
            Cada frente abaixo pode entrar no mesmo documento: entregas, investimento e como
            acompanhamos o progresso.
          </p>
        </div>

        <div className="flex flex-col gap-px bg-white/10">
          <ServiceCard
            icon={primary.icon}
            index={0}
            title={primary.title}
            description={primary.description}
            canvas={primary.canvas}
            featured
          />
          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
            {rest.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                index={i + 1}
                title={service.title}
                description={service.description}
                canvas={service.canvas}
              />
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-12 text-center md:mt-16 md:flex-row md:pt-16"
        >
          <p className="max-w-md text-sm text-awful-muted">
            Não sabe o que contratar primeiro? Conte o cenário e montamos a proposta.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="awful-btn-primary shrink-0 text-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Falar com vendas
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
