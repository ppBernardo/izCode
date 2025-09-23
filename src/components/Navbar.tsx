import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="izcode Logo"
                className="h-12 transition-transform duration-300 group-hover:scale-110 dark:brightness-0 dark:invert"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all duration-300 relative group"
            >
              <span className="relative z-10">Serviços</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <a 
              href="#features" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all duration-300 relative group"
            >
              <span className="relative z-10">Por quê nos escolher</span>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary text-sm tracking-wider"
            >
              Fale Conosco
            </a>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-6 glass-card p-6 animate-slide-in-up">
            <div className="flex flex-col space-y-6">
              <a 
                href="#services" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#features" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Por quê nos escolher
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-block text-center text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;