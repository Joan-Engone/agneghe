import { ChevronLeft, ChevronRight, Maximize2, Play, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// Import your images
import balade from '../assets/balade.jpg';
import boisson from '../assets/boisson.jpg';
import cover from '../assets/cover.jpeg';
import galery from '../assets/galery.jpeg';
import galleryCover from '../assets/galleryCover.jpeg';
import lambarene from '../assets/lambarene.jpeg';
import mariageG from '../assets/mariageG.jpg';
import mariageG2 from '../assets/mariageG2.jpg';
import photosG from '../assets/photosG.jpg';
import pirogueE from '../assets/pirogueE.jpg';
import piscinenight from '../assets/piscinenight.jpg';
import suiteVIP1 from '../assets/suiteVIP1.jpg';
import traditions from '../assets/traditions.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleElements, setVisibleElements] = useState({});

  // Refs for sections to observe
  const galleryRef = useRef(null);
  const categoryRef = useRef(null);
  const gridRef = useRef(null);

  // Hero images for the carousel
  const heroImages = [
    { src: cover, title: 'Notre Galerie', subtitle: 'Beach Hotel' },
    { src: galleryCover, title: 'Moments Inoubliables', subtitle: 'Beach Hotel' },
    { src: traditions, title: 'Souvenirs Précieux', subtitle: 'Beach Hotel' },
  ];

  // Gallery images organized by categories
  const galleryImages = [
    { id: 1, src: piscinenight, title: 'Piscine', category: 'exterieur', description: 'Piscine la nuit' },
    { id: 2, src: suiteVIP1, title: 'Suite VIP', category: 'chambres', description: 'Salon de la chambre VIP' },
    { id: 3, src: galery, title: 'Chambre Deluxe', category: 'chambres', description: 'Confort et élégance dans nos chambres' },
    { id: 4, src: mariageG, title: "Galerie d'Art", category: 'exterieur', description: 'Espace extérieur aménagé pour mariages et événements' },
    { id: 5, src: photosG, title: 'Terrasse Restaurant', category: 'restaurant', description: 'Dîner avec vue sur la rivière' },
    { id: 6, src: balade, title: 'Espace Détente', category: 'wellness', description: 'Zone de relaxation et bien-être' },
    { id: 7, src: pirogueE, title: 'Excursion', category: 'exterieur', description: 'Excursion inoubliable sur le fleuve Ogooué, au cœur de la nature gabonaise.' },
    { id: 8, src: boisson, title: 'Espace détente', category: 'exterieur', description: 'Bar moderne avec piscine rafraîchissante, idéal pour se détendre.' },
    { id: 9, src: cover, title: 'Piscine', category: 'exterieur', description: 'Détente au bord de la piscine' },
    { id: 10, src: traditions, title: 'Mariages', category: 'wellness', description: 'Mariages modernes et traditionnelles' },
    { id: 11, src: mariageG2, title: 'Mariages', category: 'exterieur', description: 'Mariages modernes et traditionnelles' },
    { id: 12, src: lambarene, title: 'Moyen-Ogooué', category: 'exterieur', description: 'Lambaréné, Gabon – ville paisible au bord du fleuve.' },
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'Toutes les photos', count: galleryImages.length },
    { id: 'chambres', name: 'Chambres', count: galleryImages.filter(img => img.category === 'chambres').length },
    { id: 'restaurant', name: 'Restaurant', count: galleryImages.filter(img => img.category === 'restaurant').length },
    { id: 'exterieur', name: 'Extérieur', count: galleryImages.filter(img => img.category === 'exterieur').length },
    { id: 'interieur', name: 'Intérieur', count: galleryImages.filter(img => img.category === 'interieur').length },
    { id: 'wellness', name: 'Bien-être', count: galleryImages.filter(img => img.category === 'wellness').length },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, observerOptions);

    // Observe sections
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (categoryRef.current) observer.observe(categoryRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (categoryRef.current) observer.unobserve(categoryRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
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
      className="min-h-screen bg-white font-sans antialiased animate-page-load"
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
                className="w-full h-full object-cover animate-image-load"
                style={{ filter: 'brightness(0.4)' }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroImage}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 group animate-slide-in-left"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextHeroImage}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-all duration-300 group animate-slide-in-right"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-6 animate-fade-in">
            Notre <span className="text-amber-400">Galerie</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Découvrez la beauté de notre hôtel à travers nos photos
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-teal-400 mx-auto animate-fade-in-delay-2" />
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 animate-slide-up">
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

      {/* Gallery Section */}
      <section
        ref={galleryRef}
        className={`py-16 px-4 max-w-7xl mx-auto ${
          visibleElements['gallery'] ? 'animate-slide-up' : 'opacity-0'
        }`}
        data-section="gallery"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Photos de l'Hôtel
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto" />
        </div>

        {/* Category Filter */}
        <div
          ref={categoryRef}
          className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-12 ${
            visibleElements['category'] ? '' : 'opacity-0'
          }`}
          data-section="category"
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                visibleElements['category'] ? 'animate-slide-up-button' : 'opacity-0'
              } ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-amber-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={{ animationDelay: visibleElements['category'] ? `${index * 0.1}s` : '0s' }}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ${
            visibleElements['grid'] ? '' : 'opacity-0'
          }`}
          data-section="grid"
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl bg-gray-100 aspect-square cursor-pointer ${
                visibleElements['grid'] ? 'animate-slide-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: visibleElements['grid'] ? `${index * 0.1}s` : '0s' }}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <p className="text-xs sm:text-sm font-medium px-2">{image.title}</p>
                </div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-medium text-xs sm:text-sm mb-1">{image.title}</h3>
                <p className="text-xs text-gray-200 hidden sm:block">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div
            className={`text-center py-12 ${
              visibleElements['grid'] ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className="text-gray-400 mb-4">
              <Play className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Aucune photo trouvée</h3>
            <p className="text-gray-500">Essayez de sélectionner une autre catégorie</p>
          </div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-modal-in">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-white">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm">{selectedImage.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="bg-black/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative flex-1 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation Arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex justify-center">
              <div className="flex gap-2">
                {filteredImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      img.id === selectedImage.id 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Existing Animations */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* New Animations */
        @keyframes page-load {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes image-load {
          from { opacity: 0; transform: scale(1.1); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes modal-in {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-page-load {
          animation: page-load 0.8s ease-out;
        }

        .animate-image-load {
          animation: image-load 1.2s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up-delay 0.8s ease-out;
        }

        .animate-slide-up-button {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }

        .animate-modal-in {
          animation: modal-in 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;