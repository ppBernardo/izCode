import { ArrowRight, Sparkles, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <div className="glass-card p-4">
          <Code className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4">
          <Sparkles className="h-8 w-8 text-indigo-600" />
        </div>
      </div>
      

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="glass-card p-12 md:p-16 mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Transformando ideias em realidade
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transformando ideias em{" "}
              <span className="gradient-text">soluções digitais</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Desenvolvemos produtos digitais para startups, CRMs personalizados e soluções tecnológicas que impulsionam o crescimento do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex items-center text-sm font-semibold group"
              >
                Inicie seu projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <button className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20 text-gray-700 dark:text-gray-300 font-medium hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                Ver nossos trabalhos
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projetos Entregues</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
