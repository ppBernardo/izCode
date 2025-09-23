import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 md:p-16 text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Vamos começar seu projeto
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Pronto para <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">transformar</span> suas ideias em realidade?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo para discutir seu projeto e receber uma consultoria especializada gratuita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Fale conosco pelo WhatsApp
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <button className="inline-flex items-center px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                Solicitar Orçamento
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">24h</div>
                <div className="text-gray-300 text-sm">Resposta Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">100%</div>
                <div className="text-gray-300 text-sm">Consultoria Gratuita</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">30+</div>
                <div className="text-gray-300 text-sm">Projetos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
