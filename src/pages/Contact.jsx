import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-amber-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-amber-100/40 to-teal-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-50/20 via-transparent to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-600 to-amber-600 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          {/* Overlay patterns */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-amber-900/20"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gradient-to-r from-amber-400/40 to-teal-400/40 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-amber-300/50 rounded-full animate-float-delay"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              Contactez
              <span className="block bg-gradient-to-r from-amber-300 via-teal-300 to-amber-300 bg-clip-text text-transparent animate-gradient">
                Nous
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nous sommes là pour vous aider et répondre à toutes vos questions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-teal-400 to-amber-400 mx-auto rounded-full shadow-lg animate-pulse-slow" />
            
            {/* Subtitle */}
            <p className="mt-4 text-base text-white/70">
              Excellence • Service • Disponibilité
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-amber-50 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-teal-100/50">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-amber-100 rounded-full px-4 py-2 mb-4 border border-teal-200/50">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-teal-800">Formulaire de Contact</span>
                  </div>
                  <h2 className="text-2xl font-light text-teal-900 mb-2">
                    Écrivez-nous un
                    <span className="block text-transparent bg-gradient-to-r from-teal-700 to-amber-700 bg-clip-text font-normal">
                      Message
                    </span>
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom complet"
                      className="w-full text-lg py-4 px-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all duration-300 bg-transparent group-hover:border-teal-300"
                    />
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Votre adresse email"
                      className="w-full text-lg py-4 px-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all duration-300 bg-transparent group-hover:border-teal-300"
                    />
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Votre message"
                      rows={4}
                      className="w-full text-lg py-4 px-0 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all duration-300 bg-transparent resize-none group-hover:border-teal-300"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 hover:from-teal-600 hover:to-amber-600 text-white px-10 py-4 rounded-2xl font-medium transition-all duration-700 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Envoyer le Message
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                    
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-amber-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-teal-100 rounded-full px-4 py-2 mb-4 border border-amber-200/50">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-amber-800">Informations de Contact</span>
                </div>
                <h2 className="text-2xl font-light text-teal-900 mb-2">
                  Restons en
                  <span className="block text-transparent bg-gradient-to-r from-amber-700 to-teal-700 bg-clip-text font-normal">
                    Contact
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg border border-teal-100/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-teal-600 uppercase tracking-wider font-medium">Téléphone</span>
                      </div>
                      <a href="tel:+24101234567" className="text-xl text-gray-900 hover:text-teal-600 transition-colors font-medium">
                        +241 01 23 45 67
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg border border-amber-100/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-amber-600 uppercase tracking-wider font-medium">Email</span>
                      </div>
                      <a href="mailto:info@agneghebeach.com" className="text-xl text-gray-900 hover:text-amber-600 transition-colors font-medium break-all">
                        info@agneghebeach.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg border border-teal-100/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-teal-600 uppercase tracking-wider font-medium">Adresse</span>
                      </div>
                      <address className="text-xl text-gray-900 not-italic font-medium leading-relaxed">
                        Quartier Abongo<br />
                        Lambaréné, Gabon
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional contact note */}
              <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl border border-teal-100">
                <p className="text-sm text-teal-700 leading-relaxed">
                  <span className="font-medium">Service client disponible 24h/24.</span><br />
                  Nous nous engageons à vous répondre dans les plus brefs délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scaleX(1); }
          50% { opacity: 0.8; transform: scaleX(1.1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 7s ease-in-out infinite 4s;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Contact;