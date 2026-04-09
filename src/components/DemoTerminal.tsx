import { useRef } from "react";
import { useDemoTerminalGsap } from "@/hooks/useDemoTerminalGsap";

const lines: { label: string; detail: string }[] = [
  {
    label: "Você explica o que precisa",
    detail: "A gente traduz para um plano simples, com começo, meio e fim.",
  },
  {
    label: "Você acompanha sem complicação",
    detail: "Mostramos cada etapa em linguagem clara, sem termos técnicos.",
  },
  {
    label: "Você sabe o próximo passo",
    detail: "Prazo, investimento e entregas ficam combinados por escrito.",
  },
];

const DemoTerminal = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useDemoTerminalGsap(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/10 bg-awful-bg py-20 md:py-28"
      aria-labelledby="terminal-demo-heading"
    >
      <div className="container-custom">
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-awful-muted">
            Acompanhamento sem complicação
          </p>
          <h2
            id="terminal-demo-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-awful-fg sm:text-4xl"
          >
            Você entende tudo, mesmo sem ser da tecnologia.
          </h2>
        </div>

        <div
          data-terminal-shell
          className="awful-terminal mx-auto max-w-3xl shadow-[0_0_80px_rgba(51,153,255,0.12)]"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[11px] text-awful-muted">izcode - andamento do projeto</span>
          </div>
          <div className="space-y-2 p-5 md:p-6">
            {lines.map((line, i) => (
              <div
                key={i}
                data-terminal-row
                className="font-mono text-[13px] leading-relaxed md:text-sm"
              >
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  <span className="shrink-0 text-awful-accent">•</span>
                  <span className="text-awful-fg">{line.label}</span>
                </div>
                <p className="pl-0 text-awful-muted md:pl-6">{line.detail}</p>
              </div>
            ))}
            <div
              data-terminal-caption
              className="flex items-center gap-2 pt-3 font-mono text-xs text-awful-muted"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-awful-accent" />
              Atualização contínua até a entrega final
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoTerminal;
