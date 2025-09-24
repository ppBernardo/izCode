import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white animate-fade-in-up">
              Transformando ideias em{" "}
              <span className="accent-text">soluções digitais</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Desenvolvemos produtos digitais para startups, CRMs personalizados e soluções tecnológicas que impulsionam o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animate-delay-300">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex items-center group hover-lift transition-smooth"
              >
                Inicie seu projeto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-smooth hover-lift">
                Ver nossos trabalhos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animate-delay-400">
              <div className="text-center animate-scale-in animate-delay-100 group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">50+</div>
                <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Projetos Entregues</div>
              </div>
              <div className="text-center animate-scale-in animate-delay-200 group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110 animate-pulse-subtle">100%</div>
                <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Clientes Satisfeitos</div>
              </div>
              <div className="text-center animate-scale-in animate-delay-300 group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">24/7</div>
                <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
