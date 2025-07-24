import { Bath, Check, ChevronLeft, ChevronRight, Maximize, Star, Users, Wifi, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import chambresFi from '../assets/chambresFi.jpeg';
import cover from '../assets/cover.jpeg';
import galery from '../assets/galery.jpeg';
import gallerie50 from '../assets/gallerie50.jpeg';

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingModal, setBookingModal] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  // Sample images for the carousel
  const heroImages = [
    {
      src: cover,
      title: 'Vue Panoramique',
      subtitle: 'Beach Hotel'
    },
    {
      src: galery,
      title: 'Vue Panoramique',
      subtitle: 'Beach Hotel'
    },
    {
      src: chambresFi,
      title: 'Vue Panoramique',
      subtitle: 'Beach Hotel'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const rooms = [
    {
      id: 1,
      name: "Chambre Deluxe Vue Ogooué",
      price: "50,000",
      category: "Deluxe",
      guests: 2,
      size: "35 m²",
      bathrooms: 1,
      images: [gallerie50, chambresFi, cover, galery],
      description: "Chambre spacieuse avec vue imprenable sur la rivière Ogooué. Parfaite pour un séjour romantique.",
      amenities: ["Vue panoramique", "Climatisation", "WiFi gratuit", "Minibar", "Balcon privé"]
    },
    {
      id: 2,
      name: "Suite Executive",
      price: "340,000",
      category: "Suite",
      guests: 4,
      size: "65 m²",
      bathrooms: 2,
      images: [gallerie50, chambresFi, cover, galery],
      description: "Suite luxueuse avec salon séparé, parfaite pour les séjours prolongés ou voyages en famille.",
      amenities: ["Salon séparé", "Cuisine équipée", "Deux salles de bain", "Balcon privé", "Service concierge"]
    },
    {
      id: 3,
      name: "Chambre Standard",
      price: "35,000",
      category: "Standard",
      guests: 2,
      size: "25 m²",
      bathrooms: 1,
      images: [gallerie50, chambresFi, cover, galery],
      description: "Chambre confortable et bien équipée, idéale pour un séjour économique sans compromis.",
      amenities: ["Climatisation", "WiFi gratuit", "Télévision", "Minibar", "Vue jardin"]
    },
    {
      id: 4,
      name: "Suite Présidentielle",
      price: "500,000",
      category: "Presidential",
      guests: 6,
      size: "120 m²",
      bathrooms: 3,
      images: [gallerie50, chambresFi, cover, galery],
      description: "Notre suite la plus luxueuse avec service de majordome pour une expérience inoubliable.",
      amenities: ["Deux chambres", "Salon & salle à manger", "Cuisine complète", "Terrasse 40m²", "Service majordome"]
    }
  ];

  const categoryStyles = {
    Standard: "from-blue-500 to-cyan-500",
    Deluxe: "from-emerald-500 to-teal-500",
    Suite: "from-amber-500 to-orange-500",
    Presidential: "from-purple-500 to-pink-500"
  };

  const openModal = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedRoom.images.length);
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedRoom.images.length) % selectedRoom.images.length);
    }
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
      {/* Hero Section with Carousel */}
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
            Nos <span className="text-amber-400">Chambres</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Découvrez nos hébergements de luxe au cœur du Gabon
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

      {/* Rooms Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Choisissez Votre Chambre
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des chambres élégantes et confortables pour un séjour inoubliable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100">
              {/* Compact Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${categoryStyles[room.category]} shadow-lg`}>
                  {room.category}
                </div>
                
                {/* Photos Count */}
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  {room.images.length} photos
                </div>

                {/* Price Overlay */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <span className="text-lg font-bold text-gray-800">{room.price}</span>
                  <span className="text-xs text-amber-600 ml-1">FCFA/nuit</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{room.name}</h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{room.description}</p>

                {/* Room Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{room.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4 text-green-500" />
                    <span>WiFi</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => openModal(room)}
                    className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
                  >
                    Voir détails
                  </button>
                  <button 
                    onClick={() => setBookingModal(true)}
                    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white rounded-lg hover:from-teal-600 hover:to-amber-600 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                  >
                    Réserver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image Gallery */}
              <div className="relative h-80 md:h-96">
                <img
                  src={selectedRoom.images[currentImageIndex]}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                
                {selectedRoom.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/30 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/30 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedRoom.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Room Info */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">{selectedRoom.name}</h2>
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r ${categoryStyles[selectedRoom.category]}`}>
                      {selectedRoom.category}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-gray-800">{selectedRoom.price}</div>
                    <div className="text-amber-600">FCFA/nuit</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{selectedRoom.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Users className="mx-auto mb-2 text-teal-600" size={20} />
                    <div className="text-sm text-gray-600">Invités</div>
                    <div className="font-semibold">{selectedRoom.guests}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Maximize className="mx-auto mb-2 text-teal-600" size={20} />
                    <div className="text-sm text-gray-600">Superficie</div>
                    <div className="font-semibold">{selectedRoom.size}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Bath className="mx-auto mb-2 text-teal-600" size={20} />
                    <div className="text-sm text-gray-600">Salle de bain</div>
                    <div className="font-semibold">{selectedRoom.bathrooms}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Wifi className="mx-auto mb-2 text-teal-600" size={20} />
                    <div className="text-sm text-gray-600">WiFi</div>
                    <div className="font-semibold">Gratuit</div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Équipements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedRoom.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-500" />
                        <span className="text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <button 
                    onClick={() => setBookingModal(true)}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-amber-500 text-white py-3 px-6 rounded-lg hover:from-teal-600 hover:to-amber-600 transition-all"
                  >
                    Réserver Cette Chambre
                  </button>
                  <button 
                    onClick={closeModal}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {bookingModal && (
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
                <div className="text-amber-800 font-semibold">reservation@agneghe.com</div>
              </div>
            </div>

            <button 
              onClick={() => setBookingModal(false)}
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

export default Room;