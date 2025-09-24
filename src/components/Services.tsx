import { Rocket, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Desenvolvimento para Startups",
      description: "Transformamos suas ideias em produtos digitais escaláveis que atraem investidores e conquistam usuários."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CRM Personalizado",
      description: "Sistemas de gestão de relacionamento com clientes adaptados às necessidades específicas do seu negócio."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Soluções Sob Medida",
      description: "Resolvemos problemas complexos com soluções tecnológicas personalizadas para o crescimento da sua empresa."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white animate-fade-in-up">
            Nossos Serviços
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Oferecemos soluções completas para transformar sua visão em realidade digital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`minimal-card p-6 card-hover animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 card-icon-bounce">
                <div className="text-gray-700 dark:text-gray-300">
                  {service.icon}
                </div>
              </div>
              
              <div className="card-content-slide">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;