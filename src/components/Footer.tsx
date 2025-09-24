import { MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="izcode Logo" 
                className="h-8 mr-2 brightness-0 invert"
              />
              <span className="text-xl font-bold">izcode</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando ideias em soluções digitais para impulsionar o crescimento do seu negócio.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animate-delay-200">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://api.whatsapp.com/send/?phone=5531991732236&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20interessado%20no%20servi%C3%A7o%20da%20izcode&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-smooth"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                (31) 99173-2236
              </a>
              
              <a
                href="mailto:contato@izcode.com.br"
                className="flex items-center text-gray-400 hover:text-white transition-smooth"
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@izcode.com.br
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Desenvolvimento para Startups</div>
              <div className="text-gray-400">CRM Personalizado</div>
              <div className="text-gray-400">Soluções Sob Medida</div>
              <div className="text-gray-400">Consultoria Tecnológica</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} izcode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
