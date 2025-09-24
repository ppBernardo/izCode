import { MessageSquare, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
            Pronto para transformar suas ideias em realidade?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up animate-delay-200">
            Entre em contato conosco para discutir seu projeto e receber uma consultoria especializada gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
            <a 
              href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-smooth hover-lift group"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Fale conosco pelo WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            
            <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-smooth hover-lift">
              Solicitar Orçamento
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center animate-scale-in animate-delay-100 group cursor-pointer">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">24h</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Resposta Garantida</div>
            </div>
            <div className="text-center animate-scale-in animate-delay-200 group cursor-pointer">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110 animate-pulse-subtle">100%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Consultoria Gratuita</div>
            </div>
            <div className="text-center animate-scale-in animate-delay-300 group cursor-pointer">
              <div className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
