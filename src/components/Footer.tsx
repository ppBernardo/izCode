import { useRef } from "react";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WHATSAPP_HREF } from "@/lib/contact";

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { stagger: 0.1, start: "top 92%" });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      className="bg-gray-950 text-white border-t border-gray-800 dark:border-gray-900"
    >
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-14 md:mb-16">
          <div data-reveal className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="izcode"
                className="h-9 brightness-0 invert opacity-95"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Desenvolvimento de software e CRM sob medida para empresas que precisam de proposta clara, prazo definido e time que responde depois do pagamento.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-white hover:text-gray-200 transition-colors"
            >
              Pedir proposta comercial
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div data-reveal className="lg:col-span-4">
            <p className="section-eyebrow text-gray-500 mb-4">Serviços</p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Desenvolvimento para startups
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  CRM personalizado
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Soluções sob medida
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Por que contratar a izcode
                </a>
              </li>
            </ul>
          </div>

          <div data-reveal className="lg:col-span-3">
            <p className="section-eyebrow text-gray-500 mb-4">Contato comercial</p>
            <div className="space-y-4">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/50 group-hover:border-gray-600">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">WhatsApp · (31) 99173-2236</span>
              </a>
              <a
                href="mailto:contato@izcode.com.br"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/50 group-hover:border-gray-600">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">contato@izcode.com.br</span>
              </a>
              <a
                href="#cta"
                className="inline-block text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors mt-2"
              >
                Área de proposta e orçamento →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p data-reveal className="text-sm text-gray-500 font-mono">
            &copy; {currentYear} izcode — serviços de software
          </p>
          <p data-reveal className="text-xs text-gray-600 text-center sm:text-right max-w-md">
            Tudo combinado por escrito · Suporte conforme o contrato · Minas Gerais, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
