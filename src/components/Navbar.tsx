import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavbarScrollTrigger } from "@/hooks/useNavbarScrollTrigger";
import { WHATSAPP_HREF } from "@/lib/contact";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useNavbarScrollTrigger();

  const linkClass =
    "text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-lg px-3 py-2 transition-colors hover:bg-gray-100/80 dark:hover:bg-gray-800/80";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "minimal-navbar shadow-sm py-3 md:py-3.5"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center gap-4">
          <a href="/" className="flex items-center shrink-0 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
            <img
              src="/logo.png"
              alt="izcode"
              className="h-8 md:h-9 dark:brightness-0 dark:invert"
            />
          </a>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <a href="#services" className={linkClass}>
              Serviços
            </a>
            <a href="#features" className={linkClass}>
              Por que contratar
            </a>
            <a href="#cta" className={linkClass}>
              Proposta
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm ml-2 lg:ml-4"
            >
              Pedir proposta
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-900 dark:text-gray-100" />
            ) : (
              <Menu size={20} className="text-gray-900 dark:text-gray-100" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 shadow-lg">
            <div className="flex flex-col gap-1">
              <a
                href="#services"
                className="rounded-xl px-3 py-3 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#features"
                className="rounded-xl px-3 py-3 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Por que contratar
              </a>
              <a
                href="#cta"
                className="rounded-xl px-3 py-3 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proposta
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pedir proposta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
