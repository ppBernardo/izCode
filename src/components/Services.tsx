import { useRef, type ReactNode } from "react";
import { ArrowRight, MessageCircle, Rocket, Database, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AutomationCanvas,
  CrmPipelineCanvas,
  StartupProductCanvas,
} from "@/components/ShowcaseCardCanvas";
import { WHATSAPP_HREF } from "@/lib/contact";

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1, y: 36 });

  const services: {
    icon: ReactNode;
    title: string;
    description: string;
    grid: string;
    canvas: ReactNode;
  }[] = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Desenvolvimento para Startups",
      description:
        "Um time que leva da primeira versão ao crescimento: plano por etapas, números que importam e algo que você pode mostrar em reunião.",
      grid:
        "md:col-span-6 lg:col-span-7 lg:row-span-2 !rounded-[2rem] lg:p-8 lg:pb-9 flex flex-col min-h-0",
      canvas: <StartupProductCanvas />,
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CRM Personalizado",
      description:
        "Pare de adaptar o negócio ao sistema genérico: etapas de venda e relatórios do jeito do seu time para fechar mais.",
      grid:
        "md:col-span-3 lg:col-span-5 lg:min-h-[200px] !rounded-3xl lg:self-start flex flex-col",
      canvas: <CrmPipelineCanvas />,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Soluções Sob Medida",
      description:
        "Automação e sistemas internos que cortam custo operacional — com escopo e prazo combinados antes de começar.",
      grid:
        "md:col-span-3 lg:col-span-5 lg:min-h-[220px] !rounded-2xl lg:mt-6 lg:self-end flex flex-col",
      canvas: <AutomationCanvas />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding border-t border-gray-200/80 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/40"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
          <div className="max-w-3xl">
            <p data-reveal className="section-eyebrow mb-4 md:mb-5">
              O que você pode contratar
            </p>
            <h2
              data-reveal
              className="section-headline font-heading text-pretty"
            >
              Serviços com proposta antes de começar a obra
            </h2>
          </div>
          <p
            data-reveal
            className="section-lead lg:max-w-md lg:text-right lg:ml-auto shrink-0"
          >
            Cada frente abaixo pode entrar na sua proposta: o que será feito, quanto custa e entregas que o seu time acompanha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-5 lg:gap-6 lg:auto-rows-[minmax(140px,auto)]">
          {services.map((service) => (
            <article
              key={service.title}
              data-reveal
              className={`scroll-showcase-card font-sans min-h-0 ${service.grid}`}
            >
              <div className="scroll-showcase-card__icon shrink-0">
                {service.icon}
              </div>
              <h3 className="scroll-showcase-card__title font-heading">
                {service.title}
              </h3>
              <p className="scroll-showcase-card__body">{service.description}</p>
              {service.canvas}
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Não sabe qual serviço combina com o seu momento? Conte o cenário e montamos a proposta certa.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="btn-primary group hover-lift transition-smooth shrink-0"
          >
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
            Falar com vendas
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
