import { Camera, Compass, Utensils, Waves, Wifi, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import beach from '../assets/beach.jpg';
import chambreSalon from '../assets/chambreSalon.jpeg';
import cover from '../assets/cover.jpeg';
import gallerie50 from '../assets/gallerie50.jpeg';
import gallerie3 from '../assets/gallery/gallerie3.jpeg';
import gallerie4 from '../assets/gallery/gallerie4.jpg';
import gallerie5 from '../assets/gallery/gallerie5.jpg';
import lambarene from '../assets/lambarene.jpeg';
import nightCroco from '../assets/nightCroco.jpg';
import photo from '../assets/photo.jpg';
import pk from '../assets/pk.jpg';
import tradition2 from '../assets/tradition2.jpg';

const HotelHomepage = () => {
  const [activeTab, setActiveTab] = useState('rooms');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const heroImages = [
    {
      src: cover,
      title: 'Vue Panoramique',
      subtitle: 'Beach Hotel'
    }
  ];

  const galleryImages = [
    {
      src: gallerie5,
      category: 'Espace de detente',
      title: 'Bar moderne avec piscine rafraîchissante, idéal pour se détendre.'
    },
    {
      src: gallerie3,
      category: 'Salon VIP',
      title: 'Espace élégant et confortable, idéal pour se détendre en toute intimité.'
    },
    {
      src: gallerie4,
      category: 'Piscine',
      title: 'Ambiance paisible et éclairée pour une baignade sous les étoiles.'
    },
    {
      src: tradition2,
      category: 'Rythmes d’Afrique',
      title: 'Héritage vivant à travers les battements du tam-tam traditionnel.'
    },
    {
      src: pk,
      category: 'Sport',
      title: 'Randonnée immersive à pied à la découverte des villages et traditions locales.'
    },
    {
      src: nightCroco,
      category: 'Nature',
      title: 'Silence du fleuve, force cachée'
    },
    {
      src: photo,
      category: 'Cathédrale de Lambaréné',
      title: 'Édifice religieux emblématique au cœur de Lambaréné'
    },
    {
      src: lambarene,
      category: 'Lambaréné',
      title: 'Lambaréné, Gabon – ville paisible au bord du fleuve.'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const openGalleryModal = (image) => {
    setSelectedImage(image);
    setGalleryModalOpen(true);
  };


  return (
    <div
      className="min-h-screen bg-white font-sans antialiased"
      style={{ width: '100vw', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', position: 'relative' }}
    >
      {/* Hero Carousel Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0 z-10 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.4)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-amber-900/50" />
            </div>
          ))}
        </div>

        

        {/* Hero Content with Smooth Animations */}
        <div className="relative z-20 min-h-screen flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-light mb-6 animate-fade-in">
                Bienvenue à <span className="text-amber-400">Agneghe</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
                {heroImages[currentSlide].subtitle}
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto animate-fade-in-delay-2" />
            </div>

            <div className="flex flex-row justify-center gap-4 -mt-6 mb-8 animate-fade-in-delay-3">
              <Link to="/reservation">
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
                  Réserver Maintenant
                </button>
              </Link>
              <Link to="/gallery">
                <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-all">
                  Découvrir
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Booking Widget with Animation */}
        <div className="absolute bottom-0 w-full px-4 z-20 animate-slide-up">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm py-6 sm:py-8 shadow-2xl rounded-t-2xl border-t-4 border-amber-400">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Arrivée</label>
                  <input
                    type="date"
                    className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all text-sm"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Départ</label>
                  <input
                    type="date"
                    className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all text-sm"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Invités</label>
                  <select className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all text-sm">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? 'Invités' : 'Invité'}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105 font-medium shadow-lg">
                  Vérifier Disponibilité
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Animations */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in-section">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-800 mb-6">
                Votre Escapade de Luxe au bord de l'Ogooué
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mb-8 mx-auto"></div>
              <p className="text-base sm:text-lg text-teal-700 mb-6 leading-relaxed">
                L'Hôtel Agneghe vous offre une expérience inoubliable alliant luxe moderne et beauté naturelle. Découvrez nos chambres élégantes, notre cuisine raffinée et nos services exceptionnels.
              </p>
              <p className="text-teal-600 mb-8 leading-relaxed">
                Profitez de notre vue sur l'Ogooué, de notre piscine infinity et de nos services. Explorez les merveilles du Gabon avec nos excursions guidées et découvrez la richesse culturelle de cette magnifique région.
              </p>
              <Link to="/about">
                <button className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
                  En Savoir Plus
                </button>
              </Link>
            </div>
            <div className="relative animate-fade-in-section-delay">
              <img
                src={beach}
                alt="Hôtel Agneghe"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section with Animations */}
      <section id="rooms" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-section">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-800 mb-4">Nos Chambres</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-teal-600 max-w-3xl mx-auto px-4">
              Découvrez nos hébergements luxueux conçus pour votre confort et votre bien-être
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-card">
              <img
                src={gallerie50}
                alt="Chambre Deluxe"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent flex flex-col justify-end p-3 sm:p-4 lg:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2">Chambre Deluxe Vue sur l'Ogooue</h3>
                <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">Chambres spacieuses avec vue imprenable sur la rive</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <span className="text-amber-400 font-bold text-lg sm:text-xl">À partir de 50.000F/nuit</span>
                  <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-teal-800 transition-all text-sm">
                    Voir Détails
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-card-delay">
              <img
                src={chambreSalon}
                alt="Suite Executive"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent flex flex-col justify-end p-3 sm:p-4 lg:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white mb-2">Suite Executive</h3>
                <p className="text-white/90 mb-3 sm:mb-4 text-sm sm:text-base">Espace de vie luxueux avec balcon privé</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
                  <span className="text-amber-400 font-bold text-lg sm:text-xl">À partir de 340.000F/nuit</span>
                  <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-teal-800 transition-all text-sm">
                    Voir Détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Staggered Animations */}
      <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-br from-teal-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-section">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-800 mb-4">Galerie</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-teal-600 max-w-3xl mx-auto px-4">
              Découvrez en images notre hôtel et la beauté du Gabon
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in-gallery"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openGalleryModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 sm:h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-4">
                  <span className="text-amber-400 text-xs sm:text-sm font-medium mb-1">{image.category}</span>
                  <h3 className="text-white font-medium text-xs sm:text-sm">{image.title}</h3>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={16} className="sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section with Staggered Card Animations */}
      <section id="amenities" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-amber-500/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-400/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-section">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-teal-800 via-teal-600 to-amber-600 bg-clip-text text-transparent mb-6">
              Services & Équipements
            </h2>
            <div className="relative mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-lg"></div>
            </div>
            <p className="max-w-3xl mx-auto text-teal-700 text-base sm:text-lg leading-relaxed px-4">
              Profitez d'un séjour sans pareil avec nos services haut de gamme et notre hospitalité chaleureuse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Wifi size={28} />,
                title: "WiFi Haut Débit",
                description: "Internet gratuit dans tout l'établissement",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: <Waves size={28} />,
                title: "Vue sur l'Ogooué",
                description: "Hôtel situé au bord de la rivière Ogooué",
                color: "from-teal-500 to-emerald-500",
                bgColor: "from-teal-50 to-emerald-50"
              },
              {
                icon: <Utensils size={28} />,
                title: "Restaurant Gastronomique",
                description: "Cuisine locale et internationale raffinée",
                color: "from-amber-500 to-orange-500",
                bgColor: "from-amber-50 to-orange-50"
              },
              {
                icon: <Compass size={28} />,
                title: "Excursions",
                description: "Découvrez les merveilles du Gabon",
                color: "from-purple-500 to-violet-500",
                bgColor: "from-purple-50 to-violet-50"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transition-all duration-500 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl bg-white animate-fade-in-amenity"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  aria-hidden="true"
                ></div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full opacity-50 group-hover:animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full opacity-30 group-hover:animate-bounce"></div>

                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white shadow-lg bg-gradient-to-r ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300 text-center">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {galleryModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setGalleryModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setGalleryModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-amber-400 transition-colors z-10 bg-black/20 rounded-full p-2"
              aria-label="Close gallery modal"
            >
              <X size={24} className="sm:w-7 sm:h-7" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto block"
            />
            <div className="text-center mt-4 text-white px-4">
              <h3 id="gallery-modal-title" className="text-lg sm:text-2xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-section {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-card {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fade-in-gallery {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fade-in-amenity {
          from { opacity: 0; transform: translateY(30px) rotate(-5deg); }
          to { opacity: 1; transform: translateY(0) rotate(0deg); }
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

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.9s both;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out 1.2s both;
        }

        .animate-fade-in-section {
          animation: fade-in-section 0.8s ease-out;
        }

        .animate-fade-in-section-delay {
          animation: fade-in-section 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-card {
          animation: fade-in-card 0.8s ease-out;
        }

        .animate-fade-in-card-delay {
          animation: fade-in-card 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-gallery {
          animation: fade-in-gallery 0.6s ease-out both;
        }

        .animate-fade-in-amenity {
          animation: fade-in-amenity 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default HotelHomepage;