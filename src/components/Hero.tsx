import { ArrowDown, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_HREF } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="relative isolate min-h-[100svh] overflow-x-clip bg-awful-bg pt-28 pb-28 md:pt-36 md:pb-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="tech-glow absolute inset-0 opacity-80" />
        <div className="tech-grid-bg absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-awful-bg/40 to-awful-bg" />
      </div>

      <div className="container-custom relative z-10">
        <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.42em] text-awful-muted sm:text-[11px]">
          izcode
        </p>

        <div className="mt-10 grid gap-6 lg:relative lg:min-h-[36rem] lg:gap-0">
          <div
            className="animate-float-subtle motion-reduce:animate-none order-1 py-2 lg:absolute lg:left-0 lg:top-4 lg:max-w-[26rem]"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-awful-fg sm:text-6xl lg:text-7xl">
              Na fronteira
              <span className="mt-2 block text-awful-muted">do digital.</span>
            </h1>
          </div>

          <div
            className="animate-float-subtle motion-reduce:animate-none order-2 py-2 text-base leading-[1.75] text-awful-muted lg:absolute lg:right-0 lg:top-16 lg:max-w-[29rem] lg:text-lg"
            style={{ animationDelay: "0.6s" }}
          >
            Desenvolvimento, CRM e integrações com escopo e prazo combinados — da primeira conversa
            ao que roda em produção.
          </div>

          <div className="order-3 relative mx-auto my-2 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:h-80 lg:w-80 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="animate-float-subtle motion-reduce:animate-none relative flex items-center justify-center">
              <div
                className="pointer-events-none absolute h-44 w-44 rounded-full bg-awful-accent/30 blur-3xl sm:h-52 sm:w-52 lg:h-64 lg:w-64"
                aria-hidden
              />
            <img
              src="/footo-removebg-preview.png"
              alt="Logo izcode"
                className="relative h-32 w-32 object-contain sm:h-36 sm:w-36 lg:h-48 lg:w-48"
              loading="eager"
            />
            </div>
          </div>

          <div
            className="animate-float-subtle motion-reduce:animate-none order-4 py-2 lg:absolute lg:bottom-8 lg:left-0 lg:max-w-[28rem]"
            style={{ animationDelay: "1s" }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-awful-accent">
              Compromisso
            </p>
            <p className="mt-3 text-awful-muted">
              Escopo validado, marcos claros e acompanhamento contínuo para evitar surpresa no meio do
              caminho.
            </p>
          </div>

          <div
            className="animate-float-subtle motion-reduce:animate-none order-5 py-2 lg:absolute lg:bottom-8 lg:right-0 lg:max-w-[30rem]"
            style={{ animationDelay: "1.4s" }}
          >
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="awful-btn-primary">
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                Pedir proposta
                <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
              </a>
              <a href="#services" className="awful-btn-outline">
                Ver serviços
                <ArrowDown className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-awful-muted">
              Resposta em até 24h úteis · © {new Date().getFullYear()} izcode
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10"
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-awful-muted sm:text-[11px]">
          Role
        </span>
        <span className="awful-scroll-hint-line" />
      </div>
    </section>
  );
};

export default Hero;
