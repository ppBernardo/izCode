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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled ? 'minimal-navbar shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="izcode Logo"
              className="h-8 dark:brightness-0 dark:invert"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-black hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200"
            >
              Serviços
            </a>
            <a 
              href="#features" 
              className="text-black hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200"
            >
              Por quê nos escolher
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary"
            >
              Fale Conosco
            </a>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-lg border border-gray-400 hover:bg-gray-50 hover:border-gray-500 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="text-black dark:text-gray-300" /> : <Menu size={20} className="text-black dark:text-gray-300" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 minimal-card p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-black hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#features" 
                className="text-black hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Por quê nos escolher
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-block text-center"
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