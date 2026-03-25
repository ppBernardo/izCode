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
        "Entregas frequentes e visíveis: você diz o que é prioridade e acompanha o que entra no ar a cada etapa — valor combinado antes, sem susto na fatura.",
      grid:
        "md:col-span-2 lg:col-span-7 lg:row-span-2 !rounded-[2rem] lg:p-8 flex flex-col min-h-0",
      canvas: <AgileDeliveryCanvas />,
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Experiência do Usuário",
      description:
        "Telas claras que vendem e reduzem ligação no suporte: quem usa o sistema acha o que precisa sem complicação.",
      grid:
        "md:col-span-1 lg:col-span-5 lg:min-h-[176px] !rounded-xl lg:self-start flex flex-col min-h-0",
      canvas: <UxMicroCanvas />,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Escalabilidade",
      description:
        "Uma base que aguenta o negócio crescer: menos retrabalho quando a demanda aumenta — custo previsível.",
      grid:
        "md:col-span-1 lg:col-span-5 lg:min-h-[200px] !rounded-3xl lg:mt-5 lg:self-end flex flex-col min-h-0",
      canvas: <ScaleMicroCanvas />,
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tecnologia atual",
      description:
        "Ferramentas atuais e registro do que foi feito: qualquer profissional que entrar depois entende o projeto — nada escondido.",
      grid:
        "md:col-span-2 lg:col-span-5 lg:min-h-[168px] !rounded-2xl flex flex-col min-h-0",
      canvas: <TechStackCanvas />,
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipe Especializada",
      description:
        "Quem apresenta a proposta é quem executa: menos gente no meio e mais responsabilidade até a entrega — você sabe com quem fala.",
      grid:
        "md:col-span-1 lg:col-span-3 lg:min-h-[188px] !rounded-[1.375rem] flex flex-col min-h-0",
      canvas: <TeamMicroCanvas />,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Suporte Contínuo",
      description:
        "Depois do lançamento, o time não some: melhorias e acompanhamento para o sistema continuar útil — pode entrar no contrato à parte.",
      grid:
        "md:col-span-1 lg:col-span-4 lg:min-h-[196px] !rounded-[2rem] flex flex-col min-h-0",
      canvas: <SupportMicroCanvas />,
    },
  ];

  const stats = [
    { value: "100%", label: "Compromisso com entrega", hint: "combinado por escrito" },
    { value: "50+", label: "Projetos entregues", hint: "do site ao sistema interno" },
    { value: "24/7", label: "Canal de suporte", hint: "quando estiver no contrato" },
    { value: "5+", label: "Anos no mercado", hint: "produto e operação" },
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
              Benefícios pensados para quem compra o serviço e mostra resultado para o negócio.
            </p>
          </div>
          <p
            data-reveal
            className="section-lead lg:max-w-md lg:text-right lg:ml-auto shrink-0"
          >
            Proposta clara, conversa direta com quem faz o trabalho e foco no retorno para o seu negócio.
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
            Números que dão segurança na hora de fechar — peça referências na conversa com a gente.
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
