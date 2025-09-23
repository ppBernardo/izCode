import { Rocket, Database, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Desenvolvimento para Startups",
      description: "Transformamos suas ideias em produtos digitais escaláveis que atraem investidores e conquistam usuários.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "CRM Personalizado",
      description: "Sistemas de gestão de relacionamento com clientes adaptados às necessidades específicas do seu negócio.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Soluções Sob Medida",
      description: "Resolvemos problemas complexos com soluções tecnológicas personalizadas para o crescimento da sua empresa.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>
      
      {/* Parallax Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-sm font-medium mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            Nossos Serviços
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Soluções Digitais</span> que Impulsionam
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Oferecemos soluções completas para transformar sua visão em realidade digital, com tecnologias modernas e design excepcional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 mb-8 p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white w-fit group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:translate-x-1`}>
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para <span className="gradient-text">transformar sua ideia</span> em realidade?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Vamos conversar sobre seu projeto e criar algo extraordinário juntos.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0
" 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary inline-flex items-center text-sm font-semibold group"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;