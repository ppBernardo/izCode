import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-xl floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="izcode Logo" 
                className="h-12 mr-3 dark:brightness-0 dark:invert"
              />
              <span className="text-2xl font-bold text-white">izcode</span>
            </div>
            <p className="text-gray-300 font-light leading-relaxed">
              Transformando ideias em soluções digitais para impulsionar o crescimento do seu negócio com tecnologia de ponta e design excepcional.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Mail className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                  <MessageSquare className="h-4 w-4 text-green-400" />
                </div>
                <span className="font-medium">(31) 99173-2236</span>
              </a>
              
              <a
                href="mailto:contato@izcode.com.br"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span className="font-medium">contato@izcode.com.br</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Serviços</h3>
            <div className="space-y-3">
              <div className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                Desenvolvimento para Startups
              </div>
              <div className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                CRM Personalizado
              </div>
              <div className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                Soluções Sob Medida
              </div>
              <div className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                Consultoria Tecnológica
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light mb-4 md:mb-0">
              &copy; {currentYear} izcode. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">Feito com ❤️ no Brasil</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
