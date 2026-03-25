import { useRef } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const assurances = [
  "Retorno em até 24 horas úteis",
  "Conversa comercial sem compromisso",
  "Proposta com o que será feito e quanto custa",
];

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.09, y: 32 });

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="section-padding border-t border-gray-200/80 dark:border-gray-800 bg-gray-50 dark:bg-gray-950/40 scroll-mt-24"
    >
      <div className="container-custom">
        <div className="cta-panel">
          <div className="relative z-[1] max-w-3xl mx-auto text-center">
            <p data-reveal className="section-eyebrow mb-5 justify-center flex">
              Fechar negócio
            </p>
            <h2
              data-reveal
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white font-heading text-pretty leading-[1.08]"
            >
              Peça uma proposta e receba o próximo passo em até 24h
            </h2>
            <p
              data-reveal
              className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Descreva em poucas linhas o produto ou processo que precisa digitalizar. Retornamos com perguntas objetivas e uma estimativa para você decidir com segurança.
            </p>
            <ul
              data-reveal
              className="mt-8 max-w-md mx-auto text-left space-y-2.5"
            >
              {assurances.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-400"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
                    <Check className="h-3 w-3 text-gray-800 dark:text-gray-200" aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div
              data-reveal
              className="mt-9 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="btn-primary group hover-lift transition-smooth"
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden />
                Pedir proposta no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-outline hover-lift transition-smooth text-center">
                Rever serviços antes
              </a>
            </div>
            <p
              data-reveal
              className="mt-5 text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-mono"
            >
              Atendimento comercial · (31) 99173-2236
            </p>
          </div>

          <div className="relative z-[1] mt-14 md:mt-16 pt-10 md:pt-12 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { v: "24h", l: "Resposta", s: "prioridade no primeiro contato" },
              { v: "100%", l: "Alinhamento", s: "antes de fechar" },
              { v: "50+", l: "Entregas", s: "projetos faturados pela izcode" },
            ].map((item) => (
              <div key={item.l} data-reveal className="text-center sm:text-left">
                <div className="font-mono text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tabular-nums">
                  {item.v}
                </div>
                <div className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.l}
                </div>
                <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-500 font-mono uppercase tracking-wider">
                  {item.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
