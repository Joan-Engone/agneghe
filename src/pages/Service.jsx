import {
    Bed,
    Car,
    ChevronLeft,
    ChevronRight,
    Clock,
    DollarSign,
    Dumbbell,
    MapPin,
    Users,
    Utensils,
    Waves,
    Wine,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Import your images
import chambresFi from '../assets/chambresFi.jpeg';
import cover from '../assets/cover.jpeg';
import galery from '../assets/galery.jpeg';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [contactModal, setContactModal] = useState(false);

  // Hero images for the carousel
  const heroImages = [
    {
      src: cover,
      title: 'Nos Services',
      subtitle: 'Beach Hotel'
    },
    {
      src: galery,
      title: 'Expérience Unique',
      subtitle: 'Beach Hotel'
    },
    {
      src: chambresFi,
      title: 'Confort & Luxe',
      subtitle: 'Beach Hotel'
    }
  ];

  // Services data with pricing and practical info
  const services = [
    {
      id: 1,
      name: "Hébergement",
      icon: Bed,
      description: "Chambres et suites luxueuses avec vue panoramique sur la rivière Ogooué",
      features: [
        "Chambres climatisées avec WiFi gratuit", 
        "Service de conciergerie 24h/24", 
        "Petit-déjeuner continental inclus",
        "Balcon privé avec vue rivière"
      ],
      hours: "Check-in: 14h00 | Check-out: 12h00",
      priceRange: "35,000 - 500,000 FCFA/nuit",
      capacity: "1 à 6 personnes selon la chambre",
      color: "from-blue-500 to-cyan-500",
      practical: "Réservation en ligne ou par téléphone"
    },
    {
      id: 2,
      name: "Restauration",
      icon: Utensils,
      description: "Cuisine gastronomique locale et internationale dans un cadre élégant",
      features: [
        "Spécialités gabonaises authentiques", 
        "Menu international varié", 
        "Service en chambre disponible",
        "Terrasse avec vue panoramique"
      ],
      hours: "Petit-déj: 6h-10h | Déjeuner: 12h-15h | Dîner: 19h-23h",
      priceRange: "8,000 - 25,000 FCFA/repas",
      capacity: "80 couverts | Terrasse: 30 places",
      color: "from-emerald-500 to-teal-500",
      practical: "Réservation recommandée pour le dîner"
    },
    {
      id: 3,
      name: "Bar",
      icon: Wine,
      description: "Bar lounge avec cocktails signature et ambiance décontractée",
      features: [
        "Cocktails créatifs et vins sélectionnés", 
        "Ambiance musicale douce", 
        "Happy hour quotidien 17h-19h",
        "Terrasse extérieure"
      ],
      hours: "17h00 - 02h00 (Vendredi-Samedi jusqu'à 03h00)",
      priceRange: "3,000 - 12,000 FCFA/boisson",
      capacity: "40 personnes | Terrasse: 20 places",
      color: "from-amber-500 to-orange-500",
      practical: "Happy hour: -30% sur tous les cocktails"
    },
    {
      id: 4,
      name: "Piscine",
      icon: Waves,
      description: "Piscine chauffée avec espace détente et service de restauration",
      features: [
        "Piscine chauffée toute l'année", 
        "Transats et parasols gratuits", 
        "Pool bar avec collations",
        "Vestiaires et douches"
      ],
      hours: "6h00 - 20h00 (Surveillance: 8h00 - 18h00)",
      priceRange: "Gratuit pour les résidents | 5,000 FCFA/jour visiteurs",
      capacity: "25 personnes maximum",
      color: "from-cyan-500 to-blue-500",
      practical: "Serviettes fournies | Enfants accompagnés"
    },
    {
      id: 5,
      name: "Excursions",
      icon: MapPin,
      description: "Découverte guidée de la faune, flore et sites culturels du Gabon",
      features: [
        "Guides certifiés et expérimentés", 
        "Transport et matériel inclus", 
        "Groupes de 6 à 15 personnes",
        "Plusieurs circuits disponibles"
      ],
      hours: "Départ: 8h00 | Retour: 17h00 (selon circuit)",
      priceRange: "25,000 - 80,000 FCFA/personne",
      capacity: "6 à 15 personnes par groupe",
      color: "from-green-500 to-emerald-500",
      practical: "Réservation 48h à l'avance obligatoire"
    },
    {
      id: 6,
      name: "Quads",
      icon: Car,
      description: "Aventure en quad à travers la forêt tropicale avec guide expérimenté",
      features: [
        "Quads récents et entretenus", 
        "Équipements de sécurité fournis", 
        "Formation sécurité incluse",
        "Parcours adapté à tous niveaux"
      ],
      hours: "Créneaux: 8h-12h | 14h-18h (2h minimum)",
      priceRange: "15,000 FCFA/heure | 50,000 FCFA/demi-journée",
      capacity: "8 quads disponibles | Max 2 personnes/quad",
      color: "from-purple-500 to-pink-500",
      practical: "Permis de conduire obligatoire | Âge min: 18 ans"
    },
    {
      id: 7,
      name: "Fitness",
      icon: Dumbbell,
      description: "Salle de sport équipée avec vue sur la rivière et cours collectifs",
      features: [
        "Équipements cardio et musculation", 
        "Cours collectifs (yoga, aqua-fitness)", 
        "Coach personnel disponible",
        "Vestiaires avec douches"
      ],
      hours: "6h00 - 22h00 | Cours collectifs: 7h, 12h, 18h",
      priceRange: "Gratuit résidents | 3,000 FCFA/séance visiteurs",
      capacity: "20 personnes | Cours: 12 personnes max",
      color: "from-red-500 to-pink-500",
      practical: "Serviettes fournies | Tenue de sport obligatoire"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const nextHeroImage = () => {
    setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevHeroImage = () => {
    setHeroImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToHeroImage = (index) => {
    setHeroImageIndex(index);
  };

  return (
    <div
      className="min-h-screen bg-white font-sans antialiased"
      style={{ width: '100vw', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', position: 'relative' }}
    >
      {/* Hero Section with Carousel - Updated to match Room.jsx */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.4)' }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextHeroImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Nos <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Tout pour un séjour parfait au cœur du Gabon
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto animate-fade-in-delay-2" />
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === heroImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Services & Tarifs
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white flex-shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium text-gray-700">Horaires</span>
                      </div>
                      <p className="text-xs text-gray-600">{service.hours}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-700">Tarifs</span>
                      </div>
                      <p className="text-xs text-gray-600">{service.priceRange}</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Capacité</span>
                    </div>
                    <p className="text-xs text-gray-600">{service.capacity}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => openModal(service)}
                        className="px-4 py-2 border border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                      >
                        Détails
                      </button>
                      <button 
                        onClick={() => setContactModal(true)}
                        className={`px-4 py-2 text-white rounded-lg transition-all bg-gradient-to-r ${service.color} hover:opacity-90`}
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedService.color} text-white`}>
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">{selectedService.name}</h2>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Informations pratiques</h3>
                  <p className="text-sm text-gray-600 mb-2">{selectedService.practical}</p>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div><strong>Horaires:</strong> {selectedService.hours}</div>
                    <div><strong>Tarifs:</strong> {selectedService.priceRange}</div>
                    <div><strong>Capacité:</strong> {selectedService.capacity}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Caractéristiques</h3>
                  <div className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${selectedService.color}`} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setContactModal(true)}
                  className={`flex-1 text-white py-3 rounded-lg transition-all bg-gradient-to-r ${selectedService.color} hover:opacity-90`}
                >
                  Réserver
                </button>
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Réservation</h3>
              <p className="text-gray-600">Contactez-nous pour réserver</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="p-4 bg-teal-50 rounded-xl text-center">
                <div className="text-teal-700 font-medium">Téléphone</div>
                <div className="text-teal-800 font-semibold">+241 XX XX XX XX</div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl text-center">
                <div className="text-amber-700 font-medium">Email</div>
                <div className="text-amber-800 font-semibold">services@agneghe.com</div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <p className="text-sm text-blue-700 text-center">
                Réservation recommandée 24h à l'avance
              </p>
            </div>

            <button 
              onClick={() => setContactModal(false)}
              className="w-full bg-gradient-to-r from-teal-500 to-amber-500 text-white py-3 rounded-lg hover:from-teal-600 hover:to-amber-600 transition-all"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default Service;
