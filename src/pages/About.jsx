import { useEffect, useState } from 'react';
import beach from '../assets/beach.jpg';



const About = () => {
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

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-100/30 to-amber-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-amber-100/40 to-teal-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-50/20 via-transparent to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-116 bg-gradient-to-br from-teal-900 via-teal-800 to-amber-900 overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src={beach}
            alt="Hôtel Agneghe"
            className="w-full h-full object-cover opacity-50 scale-110"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSIjMUY2MTczIi8+CjxwYXRoIGQ9Ik0yMDAgMjAwSDEwMDBWNjAwSDIwMFYyMDBaIiBmaWxsPSIjRjc5RDE5Ii8+Cjx0ZXh0IHg9IjYwMCIgeT0iNDAwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIzNiI+SMO0dGVsIEFnbmVnaGU8L3RleHQ+Cjwvc3ZnPg==';
            }}
          />
          
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/60 via-transparent to-amber-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gradient-to-r from-amber-400/40 to-teal-400/40 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              À Propos de l'
              <span className="block bg-gradient-to-r from-amber-300 via-teal-300 to-amber-300 bg-clip-text text-transparent animate-gradient">
                Hôtel Agneghe
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-teal-400 to-amber-400 mx-auto rounded-full shadow-lg animate-pulse-slow" />
            
            {/* Subtle subtitle */}
            <p className="mt-4 text-lg text-white/80 max-w-md mx-auto leading-relaxed">
              Excellence • Service • Disponibilité
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-teal-50 via-white to-amber-50 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="space-y-8">
                <div>
                  
                  
                  <h2 className="text-3xl sm:text-4xl font-light text-teal-900 mb-6 leading-tight">
                    Une Hotel de 
                    <span className="block text-transparent bg-gradient-to-r from-teal-700 to-amber-700 bg-clip-text font-normal">
                      Luxe au Cœur du Gabon
                    </span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-teal-700 leading-relaxed relative pl-4 border-l-2 border-gradient-to-b from-teal-300 to-amber-300">
                    Situé sur les rives pittoresques de la rivière Ogooué à Lambaréné, l'Hôtel Agneghe est une destination d'exception où le luxe rencontre la nature. Notre établissement combine une architecture moderne avec des touches culturelles gabonaises, offrant une expérience unique à nos clients.
                  </p>
                  
                  <p className="text-base sm:text-lg text-teal-700 leading-relaxed relative pl-4 border-l-2 border-gradient-to-b from-amber-300 to-teal-300">
                    Que vous soyez en quête de détente, d'aventure ou de découverte culturelle, notre hôtel propose des services sur mesure, incluant une piscine à débordement, un restaurant gastronomique servant des plats locaux et internationaux, ainsi que des excursions pour explorer les trésors naturels et culturels du Gabon.
                  </p>
                  
                  <p className="text-base sm:text-lg text-teal-700 leading-relaxed relative pl-4 border-l-2 border-gradient-to-b from-teal-300 to-amber-300">
                    Notre mission est de vous offrir un séjour mémorable, marqué par un service impeccable et une hospitalité chaleureuse. Venez découvrir pourquoi l'Hôtel Agneghe est la destination idéale pour votre prochaine escapade.
                  </p>
                </div>

                

                {/* Feature highlights */}
                
              </div>
            </div>

            {/* Enhanced Image */}
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative group">
                {/* Glow background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 via-amber-200/30 to-teal-200/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-teal-100/50 to-amber-100/50 rounded-2xl p-3 group-hover:scale-105 transition-transform duration-700">
                  <img
                    src={beach}
                    alt="Vue de l'Ogooué"
                    className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMUY2MTczIi8+CjxwYXRoIGQ9Ik0yMDAgMjAwSDYwMFY0MDBIMJB2LTIwMFoiIGZpbGw9IiNGNzlEMTkiLz4KPHRleHQgeD0iNDAwIiB5PSIzMDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjI0Ij5WdWUgZGUgbCdPZ29vdcOpPC90ZXh0Pgo8L3N2Zz4=';
                    }}
                  />
                  
                  {/* Enhanced overlay */}
                  <div className="absolute inset-3 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent rounded-2xl opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Image caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-sm opacity-90 mb-1">Fleuve Ogooué</p>
                      <p className="font-semibold text-lg">Vue Panoramique</p>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-white/40 rounded-bl-lg"></div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-amber-400 to-teal-400 rounded-full animate-pulse shadow-lg"></div>
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

export default About;