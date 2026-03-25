import { useRef, type ReactNode } from "react";
import { Zap, Star, Award, Users, Clock, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  AgileDeliveryCanvas,
  ScaleMicroCanvas,
  SupportMicroCanvas,
  TeamMicroCanvas,
  TechStackCanvas,
  UxMicroCanvas,
} from "@/components/ShowcaseCardCanvas";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.07, y: 28 });

  const features: {
    icon: ReactNode;
    title: string;
    description: string;
    grid: string;
    canvas: ReactNode;
  }[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Desenvolvimento Ágil",
      description:
        "Contrate entregas frequentes e visíveis: você prioriza o backlog e vê o que entra em produção a cada ciclo — menos surpresa na fatura.",
      grid:
        "md:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[min(320px,40svh)] !rounded-[2rem] lg:p-9 flex flex-col min-h-0",
      canvas: <AgileDeliveryCanvas />,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Experiência do Usuário",
      description:
        "Interfaces que convertem e reduzem suporte: seu cliente ou time interno encontra o que precisa sem fricção — isso entra no escopo do serviço.",
      grid:
        "md:col-span-1 lg:col-span-5 lg:min-h-[176px] !rounded-xl lg:self-start flex flex-col min-h-0",
      canvas: <UxMicroCanvas />,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Escalabilidade",
      description:
        "Invista uma vez em arquitetura que aguenta crescimento: menos retrabalho depois que o negócio decolar — previsível para o seu CFO.",
      grid:
        "md:col-span-1 lg:col-span-5 lg:min-h-[200px] !rounded-3xl lg:mt-5 lg:self-end flex flex-col min-h-0",
      canvas: <ScaleMicroCanvas />,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tecnologias Modernas",
      description:
        "Stack atual e documentada: seu time técnico ou futura consultoria não fica refém de código obscuro — transparência faz parte do serviço.",
      grid:
        "md:col-span-2 lg:col-span-5 lg:min-h-[168px] !rounded-2xl flex flex-col min-h-0",
      canvas: <TechStackCanvas />,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipe Especializada",
      description:
        "Quem vende o projeto é quem executa: menos telefone sem fio e mais responsabilidade até a entrega — você sabe com quem está falando.",
      grid:
        "md:col-span-1 lg:col-span-3 lg:min-h-[188px] !rounded-[1.375rem] flex flex-col min-h-0",
      canvas: <TeamMicroCanvas />,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Suporte Contínuo",
      description:
        "Após o go-live, o serviço não some: melhorias, monitoramento e alinhamento para o sistema continuar gerando valor — contratável à parte.",
      grid:
        "md:col-span-1 lg:col-span-4 lg:min-h-[196px] !rounded-[2rem] flex flex-col min-h-0",
      canvas: <SupportMicroCanvas />,
    },
  ];

  const stats = [
    { value: "100%", label: "Compromisso com entrega", hint: "acordo de escopo claro" },
    { value: "50+", label: "Projetos faturados", hint: "de MVP a CRM" },
    { value: "24/7", label: "Canal de suporte", hint: "quando o contrato incluir" },
    { value: "5+", label: "Anos no mercado", hint: "produto & engenharia" },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding border-t border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 mb-16 md:mb-20 lg:mb-24">
          <div className="max-w-3xl">
            <p data-reveal className="section-eyebrow mb-4 md:mb-5">
              Por que comprar da izcode
            </p>
            <h2
              data-reveal
              className="section-headline font-heading text-pretty"
            >
              O que você leva além do código
            </h2>
            <p
              data-reveal
              className="mt-4 md:mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
            >
              Diferenciais pensados para quem assina a nota fiscal — não só para quem abre o editor.
            </p>
          </div>
          <p
            data-reveal
            className="section-lead lg:max-w-md lg:text-right lg:ml-auto shrink-0"
          >
            Transparência de escopo, comunicação direta com quem implementa e foco em retorno para o seu negócio. É assim que estruturamos cada contrato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-5 lg:gap-6 lg:auto-rows-[minmax(132px,auto)] mb-20 md:mb-24">
          {features.map((feature) => (
            <article
              key={feature.title}
              data-reveal
              className={`scroll-showcase-card font-sans ${feature.grid}`}
            >
              <div className="scroll-showcase-card__icon shrink-0">
                {feature.icon}
              </div>
              <h3 className="scroll-showcase-card__title font-heading">
                {feature.title}
              </h3>
              <p className="scroll-showcase-card__body">{feature.description}</p>
              {feature.canvas}
            </article>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-16 md:pt-20">
          <p data-reveal className="section-eyebrow mb-4 text-center">
            Confiança para contratar
          </p>
          <h3
            data-reveal
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white tracking-tight mb-4 md:mb-5 font-heading"
          >
            Números que sustentam a proposta
          </h3>
          <p
            data-reveal
            className="text-center text-sm text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-10 md:mb-12"
          >
            Indicadores que reforçam a previsibilidade do serviço — peça referências e cases na conversa comercial.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/50 px-4 py-5 sm:px-5 sm:py-6 text-center"
              >
                <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-semibold tabular-nums text-gray-900 dark:text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  {s.label}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-gray-500 dark:text-gray-500 font-mono uppercase tracking-wider">
                  {s.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
