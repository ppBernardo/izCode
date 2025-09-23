import { Zap, Star, Award, Users, Clock, Shield, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Desenvolvimento Ágil",
      description: "Utilizamos metodologias ágeis para entregar valor continuamente, com ciclos rápidos de feedback.",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Experiência do Usuário",
      description: "Criamos interfaces intuitivas e agradáveis que proporcionam a melhor experiência para seus usuários.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Escalabilidade",
      description: "Construímos soluções prontas para crescer junto com o seu negócio, sem comprometer a performance.",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Tecnologias Modernas",
      description: "Trabalhamos com as mais recentes tecnologias e frameworks para garantir soluções de ponta.",
      color: "from-purple-400 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Equipe Especializada",
      description: "Contamos com profissionais experientes em desenvolvimento de produtos digitais e soluções empresariais.",
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Suporte Contínuo",
      description: "Oferecemos suporte e manutenção após a entrega, garantindo o funcionamento perfeito da sua solução.",
      color: "from-indigo-400 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20"
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8 border border-indigo-200 dark:border-indigo-800">
            <Shield className="h-5 w-5 mr-3" />
            Por que escolher a izcode
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Excelência</span> em cada projeto
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Nossa expertise e compromisso fazem a diferença no desenvolvimento do seu projeto, garantindo resultados excepcionais e inovadores.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group"
            >
              {/* Glass Card */}
              <div className="glass-card p-8 h-full transition-all duration-500 relative overflow-hidden hover:scale-105">
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon Container */}
                <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 transition-transform duration-300 shadow-lg group-hover:scale-110`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <button className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}>
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                
                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="glass-card p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">Resultados que falam por si</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Suporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
