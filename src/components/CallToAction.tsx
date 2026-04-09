import { useRef } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const assurances = [
  "Retorno em até 24 horas úteis",
  "Conversa comercial sem compromisso",
  "Proposta com escopo, prazo e valor",
];

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1, y: 44, scaleFrom: 0.9 });

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="scroll-mt-24 border-t border-white/10 bg-awful-bg py-24 md:py-32"
    >
      <div className="container-custom">
        <div className="relative overflow-hidden border border-white/10 bg-awful-elevated px-6 py-14 sm:px-10 sm:py-16 md:px-14 md:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-awful-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative z-[1] mx-auto max-w-3xl text-center">
            <p data-reveal className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-awful-accent">
              Próximo passo
            </p>
            <h2
              data-reveal
              className="mt-5 font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-awful-fg"
            >
              Peça uma proposta e receba o retorno em até 24h
            </h2>
            <p
              data-reveal
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-awful-muted sm:text-lg"
            >
              Descreva em poucas linhas o produto ou processo que precisa digitalizar.
              Voltamos com perguntas objetivas e uma estimativa para você decidir com
              segurança.
            </p>
            <ul
              data-reveal
              className="mx-auto mt-8 max-w-md space-y-2.5 text-left"
            >
              {assurances.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm text-awful-fg/90 sm:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-white/10 bg-awful-bg">
                    <Check className="h-3 w-3 text-awful-accent" aria-hidden />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div
              data-reveal
              className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
            >
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="awful-btn-primary">
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a href="#services" className="awful-btn-outline text-center">
                Rever serviços
              </a>
            </div>
            <p data-reveal className="mt-6 font-mono text-xs text-awful-muted">
              Comercial · (31) 99173-2236
            </p>
          </div>

          <div className="relative z-[1] mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 sm:grid-cols-3 md:mt-16 md:pt-14">
            {[
              { v: "24h", l: "Resposta", s: "primeiro contato" },
              { v: "100%", l: "Alinhamento", s: "antes de fechar" },
              { v: "50+", l: "Entregas", s: "projetos izcode" },
            ].map((item) => (
              <div key={item.l} data-reveal className="text-center sm:text-left">
                <div className="font-mono text-xl font-semibold tabular-nums text-awful-accent md:text-2xl">
                  {item.v}
                </div>
                <div className="mt-1 text-sm font-medium text-awful-fg">{item.l}</div>
                <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-awful-muted">
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
