import { Zap, Star, Award, Users, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Desenvolvimento Ágil",
      description: "Utilizamos metodologias ágeis para entregar valor continuamente, com ciclos rápidos de feedback."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Experiência do Usuário",
      description: "Criamos interfaces intuitivas e agradáveis que proporcionam a melhor experiência para seus usuários."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Escalabilidade",
      description: "Construímos soluções prontas para crescer junto com o seu negócio, sem comprometer a performance."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Tecnologias Modernas",
      description: "Trabalhamos com as mais recentes tecnologias e frameworks para garantir soluções de ponta."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Equipe Especializada",
      description: "Contamos com profissionais experientes em desenvolvimento de produtos digitais e soluções empresariais."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Suporte Contínuo",
      description: "Oferecemos suporte e manutenção após a entrega, garantindo o funcionamento perfeito da sua solução."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
            Por que escolher a izcode
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Nossa expertise e compromisso fazem a diferença no desenvolvimento do seu projeto.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`minimal-card p-6 card-hover animate-scale-in animate-delay-${Math.floor(index / 3) * 100 + (index % 3) * 100}`}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 card-icon-bounce">
                <div className="text-gray-700 dark:text-gray-300">
                  {feature.icon}
                </div>
              </div>
              
              <div className="card-content-slide">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white animate-fade-in-up">
            Resultados que falam por si
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up animate-delay-100 group cursor-pointer">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110 animate-pulse-subtle">100%</div>
              <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Clientes Satisfeitos</div>
            </div>
            <div className="animate-fade-in-up animate-delay-200 group cursor-pointer">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">50+</div>
              <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Projetos Entregues</div>
            </div>
            <div className="animate-fade-in-up animate-delay-300 group cursor-pointer">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Suporte Técnico</div>
            </div>
            <div className="animate-fade-in-up animate-delay-400 group cursor-pointer">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-smooth group-hover:scale-110">5+</div>
              <div className="text-gray-600 dark:text-gray-400 transition-smooth group-hover:text-gray-800 dark:group-hover:text-gray-200">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
