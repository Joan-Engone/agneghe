import { Camera, ChevronLeft, ChevronRight, Compass, Utensils, Waves, Wifi, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import beach from '../assets/beach.jpg';
import chambresF from '../assets/chambresF.jpeg';
import cover from '../assets/cover.jpeg';
import gallerie50 from '../assets/gallerie50.jpeg';
import gallerie2 from '../assets/gallery/gallerie2.jpeg';
import gallerie3 from '../assets/gallery/gallerie3.jpeg';
import gallerie4 from '../assets/gallery/gallerie4.jpg';
import gallerie5 from '../assets/gallery/gallerie5.jpg';
import gallerie6 from '../assets/gallery/gallerie6.jpeg';
import gallerie7 from '../assets/gallery/gallerie7.jpeg';
import gallerie8 from '../assets/gallery/gallerie8.jpeg';
import gallerie9 from '../assets/gallery/gallerie9.jpeg';

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
      src: gallerie2,
      category: 'Sport',
      title: 'Tennis de table'
    },
    {
      src: gallerie3,
      category: 'Chambres',
      title: 'Suite Executive'
    },
    {
      src: gallerie4,
      category: 'Piscine',
      title: 'Piscine Infinity'
    },
    {
      src: gallerie5,
      category: 'Bar',
      title: 'Bar & Piscine'
    },
    {
      src: gallerie6,
      category: 'Hôtel',
      title: 'Lobby Principal'
    },
    {
      src: gallerie7,
      category: 'Agneghe',
      title: 'Second compartiment'
    },
    {
      src: gallerie8,
      category: 'Gabon',
      title: 'Plage de Libreville'
    },
    {
      src: gallerie9,
      category: 'Agneghe',
      title: 'Coucher de Soleil'
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
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/50 to-amber-900/50" />
            </div>
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-400' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in">
                Bienvenue à <span className="text-amber-400">Agneghe</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
                {heroImages[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
                Réserver Maintenant
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-all">
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Booking Widget */}
        <div className="absolute bottom-0 w-full px-4 z-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm py-8 shadow-2xl rounded-t-2xl border-t-4 border-amber-400">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Arrivée</label>
                  <input
                    type="date"
                    className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Départ</label>
                  <input
                    type="date"
                    className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-teal-700 mb-2">Invités</label>
                  <select className="w-full bg-white border-2 border-teal-100 rounded-lg px-4 py-3 focus:border-amber-400 focus:outline-none text-teal-800 transition-all">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num > 1 ? 'Invités' : 'Invité'}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-105 font-medium shadow-lg mt-6 md:mt-0">
                  Vérifier Disponibilité
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full overflow-hidden">
        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-teal-800 mb-6">
                  Votre Escapade de Luxe au bord de l'Ogooué
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mb-8"></div>
                <p className="text-lg text-teal-700 mb-6 leading-relaxed">
                  L'Hôtel Agneghe vous offre une expérience inoubliable alliant luxe moderne et beauté naturelle. Découvrez nos chambres élégantes, notre cuisine raffinée et nos services exceptionnels.
                </p>
                <p className="text-teal-600 mb-8 leading-relaxed">
                  Profitez de notre vue sur l'Ogooué, de notre piscine infinity et de notre. Explorez les merveilles du Gabon avec nos excursions guidées et découvrez la richesse culturelle de cette magnifique région.
                </p>
                <button className="bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-medium">
                  En Savoir Plus
                </button>
              </div>
              <div className="relative">
                <img
                  src={beach}
                  alt="Hôtel Agneghe"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-teal-800 mb-4">Nos Chambres</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-teal-600 max-w-3xl mx-auto">
                Découvrez nos hébergements luxueux conçus pour votre confort et votre bien-être
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src={chambresF}
                  alt="Hôtel Agneghe"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-light text-white mb-3">Chambre Deluxe Vue sur l'Ogooue</h3>
                  <p className="text-white/90 mb-6 text-lg">Chambres spacieuses avec vue imprenable sur la rive</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-2xl">À partir de 50.000F/nuit</span>
                    <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-all">
                      Voir Détails
                    </button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img
                  src={gallerie50}
                  alt="Hôtel Agneghe"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-light text-white mb-3">Suite Executive</h3>
                  <p className="text-white/90 mb-6 text-lg">Espace de vie luxueux avec balcon privé</p>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-400 font-bold text-2xl">À partir de 340.000F/nuit</span>
                    <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-teal-800 transition-all">
                      Voir Détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-teal-800 mb-4">Galerie</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-teal-600 max-w-3xl mx-auto">
                Découvrez en images notre hôtel et la beauté du Gabon
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => openGalleryModal(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-amber-400 text-sm font-medium mb-1">{image.category}</span>
                    <h3 className="text-white font-medium">{image.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updated Amenities Section */}
        <section id="amenities" className="py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-amber-500/5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-400/10 to-transparent rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-800 via-teal-600 to-amber-600 bg-clip-text text-transparent mb-6">
                Services & Équipements
              </h2>
              <div className="relative mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full shadow-lg"></div>
              </div>
              <p className="max-w-3xl mx-auto text-teal-700 text-lg leading-relaxed">
                Profitez d’un séjour sans pareil avec nos services haut de gamme et notre hospitalité chaleureuse.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
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
                  className="relative group cursor-pointer transition-all duration-500 rounded-3xl p-8 shadow-lg hover:shadow-2xl bg-white"
                >
                  {/* Animated background effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    aria-hidden="true"
                  ></div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full opacity-50 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-amber-400 to-teal-400 rounded-full opacity-30 group-hover:animate-bounce"></div>

                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg bg-gradient-to-r ${item.color} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
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
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setGalleryModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-modal-title"
          >
            <div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setGalleryModalOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
                aria-label="Close gallery modal"
              >
                <X size={28} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4 text-white">
                <h3 id="gallery-modal-title" className="text-2xl font-semibold mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelHomepage;
