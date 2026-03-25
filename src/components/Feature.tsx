import { useLayoutEffect, useRef, type ReactNode } from "react";
import {
  Zap,
  Star,
  Award,
  Users,
  Clock,
  Shield,
  ArrowRight,
  MessageCircle,
  Check,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap } from "@/lib/gsap";
import {
  AgileDeliveryCanvas,
  ScaleMicroCanvas,
  SupportMicroCanvas,
  TeamMicroCanvas,
  TechStackCanvas,
  UxMicroCanvas,
} from "@/components/ShowcaseCardCanvas";
import { WHATSAPP_HREF } from "@/lib/contact";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselViewportRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.07, y: 28 });

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = carouselViewportRef.current;
    const track = carouselTrackRef.current;
    if (!section || !viewport || !track) return;

    const ctx = gsap.context(() => {
      const slides = track.querySelectorAll("[data-feature-slide]");
      if (slides.length <= 1) return;

      const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: viewport,
          start: "top top+=88",
          end: () => `+=${Math.max(900, getDistance() + window.innerHeight * 0.6)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const reasons = [
    "Proposta com escopo, prazo e valor",
    "Quem vende participa da entrega",
    "Acompanhamento visível em cada etapa",
  ];

  const features: {
    icon: ReactNode;
    title: string;
    kicker: string;
    description: string;
    scene: string;
    canvas: ReactNode;
  }[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Entregas em etapas",
      kicker: "Resultado visível antes da próxima fase.",
      description:
        "Prioridades combinadas com você; a cada etapa mostramos o que entrou no ar, com valor alinhado.",
      scene:
        "lg:left-[2%] lg:top-[6%] lg:w-[38rem] xl:w-[40rem] lg:-rotate-[0.4deg]",
      canvas: <AgileDeliveryCanvas />,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Experiência que converte",
      kicker: "Telas claras, menos atrito.",
      description:
        "Interface pensada para o dia a dia: quem usa encontra o que precisa rápido.",
      scene:
        "lg:left-[27%] lg:top-[24%] lg:w-[34rem] xl:w-[36rem] lg:rotate-[0.6deg]",
      canvas: <UxMicroCanvas />,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Pronto para crescer",
      kicker: "O sistema acompanha a demanda.",
      description:
        "Base pensada para evoluir: menos retrabalho quando o uso aumenta.",
      scene:
        "lg:left-[49%] lg:top-[10%] lg:w-[36rem] xl:w-[38rem] lg:-rotate-[0.35deg]",
      canvas: <ScaleMicroCanvas />,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tecnologia transparente",
      kicker: "Documentado para quem vier depois.",
      description:
        "Ferramentas atuais e registro do projeto: facilita manutenção e troca de fornecedor.",
      scene:
        "lg:left-[72%] lg:top-[32%] lg:w-[40rem] xl:w-[42rem] lg:rotate-[0.55deg]",
      canvas: <TechStackCanvas />,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Quem vende, entrega",
      kicker: "Mesma equipe do início ao fim.",
      description:
        "Quem apresenta a proposta participa da execução: menos intermediários.",
      scene:
        "lg:left-[98%] lg:top-[12%] lg:w-[35rem] xl:w-[37rem] lg:-rotate-[0.45deg]",
      canvas: <TeamMicroCanvas />,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Depois do lançamento",
      kicker: "Suporte e melhorias sob combinar.",
      description:
        "Ajustes e acompanhamento após o sistema no ar — contratável à parte.",
      scene:
        "lg:left-[121%] lg:top-[34%] lg:w-[38rem] xl:w-[40rem] lg:rotate-[0.5deg]",
      canvas: <SupportMicroCanvas />,
    },
  ];

  const stats = [
    { value: "100%", label: "Combinado por escrito", hint: "escopo e entregas claros" },
    { value: "50+", label: "Projetos entregues", hint: "sites, CRMs e sistemas" },
    { value: "24/7", label: "Suporte disponível", hint: "quando estiver no contrato" },
    { value: "5+", label: "Anos de operação", hint: "equipe estável" },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding border-t border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-x-hidden"
    >
      <div className="container-custom">
        <div className="mb-10 md:mb-12 lg:mb-14">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20 px-4 py-6 sm:px-6 sm:py-7">
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 lg:items-start">
              <div className="lg:col-span-7">
                <p data-reveal className="section-eyebrow mb-3">
                  Por que contratar a izcode
                </p>
                <h2
                  data-reveal
                  className="font-heading text-2xl sm:text-3xl md:text-[2rem] font-bold tracking-tight text-gray-900 dark:text-white text-pretty max-w-2xl leading-snug"
                >
                  Clareza, prazo e acompanhamento — além de só desenvolvimento
                </h2>
                <p
                  data-reveal
                  className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
                >
                  Proposta objetiva para quem precisa justificar investimento e acompanhar entregas com segurança.
                </p>
              </div>
              <div
                data-reveal
                className="lg:col-span-5 rounded-lg border border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-900/40 px-3 py-4 sm:px-4"
              >
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-2.5">
                  Ao fechar o serviço
                </p>
                <ul className="space-y-2">
                  {reasons.map((line) => (
                    <li key={line} className="flex gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-snug">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
                        <Check className="h-2.5 w-2.5 text-gray-700 dark:text-gray-200" aria-hidden />
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={carouselViewportRef}
          className="mb-12 md:mb-14 min-h-[80vh] sm:min-h-[90vh] flex items-center relative lg:w-screen lg:left-1/2 lg:-translate-x-1/2"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 via-gray-100/20 to-gray-200/60 dark:from-gray-800/35 dark:via-gray-900/10 dark:to-gray-800/30" />
            <div className="absolute inset-0 opacity-[0.38] dark:opacity-[0.2] [background:radial-gradient(circle_at_20%_22%,rgba(55,65,81,0.11),transparent_42%),radial-gradient(circle_at_80%_66%,rgba(75,85,99,0.12),transparent_44%),radial-gradient(circle_at_52%_88%,rgba(107,114,128,0.11),transparent_38%)]" />
            <div className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2] [background-size:44px_44px] [background-image:linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)]" />
          </div>
          <div className="overflow-hidden w-full pt-14 sm:pt-16 lg:px-10">
            <div
              ref={carouselTrackRef}
              className="relative flex w-max gap-5 sm:gap-6 pl-2 sm:pl-3 pr-6 sm:pr-10 will-change-transform items-start lg:block lg:w-[216vw] lg:min-w-[198rem] lg:h-[74vh]"
            >
              {features.map((feature) => (
                <article
                  key={feature.title}
                  data-reveal
                  data-feature-slide
                  className={`scroll-showcase-card font-sans flex flex-col min-h-0 shrink-0 w-[88vw] max-w-[34rem] sm:w-[70vw] sm:max-w-[38rem] lg:absolute ${feature.scene}`}
                >
                  <div className="scroll-showcase-card__icon shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="scroll-showcase-card__title font-heading">{feature.title}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 leading-snug -mt-0.5 mb-1.5">
                    {feature.kicker}
                  </p>
                  <p className="scroll-showcase-card__body">{feature.description}</p>
                  {feature.canvas}
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-10 md:pt-12">
          <p data-reveal className="section-eyebrow mb-2 text-center">
            Em números
          </p>
          <h3
            data-reveal
            className="text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-white tracking-tight mb-2 font-heading"
          >
            Indicadores da izcode
          </h3>
          <p
            data-reveal
            className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6 md:mb-8"
          >
            Peça referências na conversa com a gente.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/40 px-3 py-4 text-center"
              >
                <div className="font-mono text-xl sm:text-2xl font-semibold tabular-nums text-gray-900 dark:text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs font-medium text-gray-800 dark:text-gray-200">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                  {s.hint}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-10 md:mt-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-900 text-white dark:bg-gray-950 px-4 py-6 sm:px-6 sm:py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="max-w-lg">
            <h3 className="text-base sm:text-lg font-semibold font-heading tracking-tight">
              Quer uma proposta?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">
              Chame no WhatsApp — retorno em até 24h úteis.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              WhatsApp
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Ir ao contato
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
