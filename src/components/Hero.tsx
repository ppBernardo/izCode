import { useRef } from "react";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { useHeroMotion } from "@/hooks/useHeroMotion";
import { WHATSAPP_HREF } from "@/lib/contact";

const benefits = [
  "Valor e prazo combinados antes de começar",
  "Entregas em etapas — você vê o resultado antes de investir na próxima",
  "Quem vende conversa com você, não só com a tela",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-end lg:justify-center bg-white dark:bg-gray-900 overflow-hidden hero-shell"
    >
      <div className="hero-grid" aria-hidden />
      <div className="container-custom relative z-10 pt-28 pb-16 md:pt-32 md:pb-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-7" data-hero-parallax>
            <p data-hero className="section-eyebrow mb-5 md:mb-6">
              Software sob medida · startups e empresas
            </p>
            <h1
              data-hero
              className="section-headline font-heading text-balance"
            >
              Transforme seu desafio em{" "}
              <span className="accent-text">produto digital que vende</span>
              <span className="text-gray-400 dark:text-gray-500">.</span>
            </h1>
            <p
              data-hero
              className="section-lead mt-6 md:mt-8 text-pretty max-w-2xl"
            >
              Contrate desenvolvimento, CRM e integrações com quem entrega ponta a ponta — da primeira conversa ao suporte depois do lançamento.
            </p>
            <ul
              data-hero
              className="mt-6 md:mt-7 space-y-2.5 max-w-xl"
            >
              {benefits.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-snug"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800">
                    <Check className="h-3 w-3 text-gray-800 dark:text-gray-200" aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div
              data-hero
              className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group hover-lift transition-smooth"
              >
                <MessageCircle className="mr-2 h-4 w-4 opacity-90" aria-hidden />
                Pedir proposta no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-outline hover-lift transition-smooth">
                Ver serviços e entregas
              </a>
            </div>
            <p
              data-hero
              className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-mono"
            >
              Resposta em até 24h · Consultoria inicial sem compromisso
            </p>
            <div
              data-hero
              className="mt-8 md:mt-10 flex flex-wrap gap-3"
            >
              {[
                { v: "50+", l: "Projetos entregues" },
                { v: "100%", l: "Foco em resultado" },
                { v: "24/7", l: "Suporte" },
              ].map((s) => (
                <div key={s.l} className="stat-chip min-w-[7.5rem]">
                  <span className="font-heading text-xl font-bold tabular-nums text-gray-900 dark:text-white">
                    {s.v}
                  </span>
                  <span className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 leading-snug">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:block hidden">
            <div data-hero className="code-panel relative">
              <div className="flex items-center gap-2 mb-4 text-gray-400 dark:text-gray-500">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px] uppercase tracking-widest">
                  Do primeiro contato ao contrato
                </span>
              </div>
              <ol className="space-y-4 text-left">
                {[
                  {
                    step: "1",
                    title: "Conversa",
                    body: "Entendemos meta, prazo e o que precisa aparecer primeiro.",
                  },
                  {
                    step: "2",
                    title: "Proposta",
                    body: "Você recebe o que será feito, quanto custa e em quanto tempo.",
                  },
                  {
                    step: "3",
                    title: "Entregas",
                    body: "Mostramos avanço em etapas — você decide o próximo passo com segurança.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</p>
                      <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400 leading-snug">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
                Quer uma estimativa? Use o botão ao lado e fale com a gente no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
