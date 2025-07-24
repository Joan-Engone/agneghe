import { Calendar, Check, Coffee, MapPin, Snowflake, Star, Tv, User, Users, Wifi, Wind } from 'lucide-react';
import { useState } from 'react';

import chambresFi from '../assets/chambresFi.jpeg';
import gallerie50 from '../assets/gallerie50.jpeg';

const Reservation = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    selectedRoom: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const rooms = [
    {
      id: 1,
      name: 'Chambre Standard',
      price: 85000,
      originalPrice: 95000,
      size: '25m²',
      maxGuests: 2,
      amenities: ['Wifi', 'TV', 'Climatisation', 'Minibar'],
      src: chambresFi
    },
    {
      id: 2,
      name: 'Chambre Deluxe',
      price: 125000,
      originalPrice: 140000,
      size: '35m²',
      maxGuests: 3,
      amenities: ['Wifi', 'TV', 'Climatisation', 'Minibar', 'Balcon'],
      src: chambresFi
    },
    {
      id: 3,
      name: 'Suite Executive',
      price: 185000,
      originalPrice: 210000,
      size: '55m²',
      maxGuests: 4,
      amenities: ['Wifi', 'TV', 'Climatisation', 'Minibar', 'Salon', 'Jacuzzi'],
      src: gallerie50
    }
  ];

  const amenityIcons = {
    'Wifi': Wifi,
    'TV': Tv,
    'Climatisation': Snowflake,
    'Minibar': Coffee,
    'Balcon': Wind,
    'Salon': Users,
    'Jacuzzi': Star
  };

  const today = new Date().toISOString().split('T')[0];

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffDays = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const nights = calculateNights();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        checkIn: '',
        checkOut: '',
        adults: 2,
        children: 0,
        selectedRoom: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
    }, 3000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const totalPrice = formData.selectedRoom ? formData.selectedRoom.price * nights : 0;
  const isFormValid = formData.checkIn && formData.checkOut && formData.selectedRoom && 
                     formData.firstName && formData.lastName && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-white font-sans antialiased px-4 sm:px-6 lg:px-8 pt-27 ">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Réservez Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">Séjour</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 md:p-8 space-y-6">
            
            {/* Dates & Guests */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-teal-500" />
                Dates et Invités
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Arrivée</label>
                  <input
                    type="date"
                    min={today}
                    value={formData.checkIn}
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Départ</label>
                  <input
                    type="date"
                    min={formData.checkIn || today}
                    value={formData.checkOut}
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Adultes</label>
                  <select
                    value={formData.adults}
                    onChange={(e) => handleInputChange('adults', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    {[1,2,3,4,5,6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enfants</label>
                  <select
                    value={formData.children}
                    onChange={(e) => handleInputChange('children', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    {[0,1,2,3,4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              {nights > 0 && (
                <div className="mt-4 p-3 bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">{nights} {nights === 1 ? 'nuit' : 'nuits'}</span> • {formData.adults + formData.children} {formData.adults + formData.children === 1 ? 'personne' : 'personnes'}
                  </p>
                </div>
              )}
            </div>

            {/* Room Selection */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-teal-500" />
                Choisissez votre chambre
              </h2>
              
              <div className="grid gap-4 md:gap-6">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                      formData.selectedRoom?.id === room.id
                        ? 'border-teal-500 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    onClick={() => handleInputChange('selectedRoom', room)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Room Image */}
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img
                          src={room.src}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Room Details */}
                      <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{room.name}</h3>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {room.size}
                              </span>
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                Max {room.maxGuests}
                              </span>
                            </div>
                            
                            {/* Amenities with Icons */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {room.amenities.map((amenity, index) => {
                                const IconComponent = amenityIcons[amenity] || Star;
                                return (
                                  <span key={index} className="flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                    <IconComponent className="w-3 h-3 mr-1" />
                                    {amenity}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div className="text-right md:ml-4">
                            <div className="flex items-center justify-end gap-2 mb-1">
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(room.originalPrice)}
                              </span>
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-teal-600">
                              {formatPrice(room.price)}
                            </div>
                            <p className="text-xs text-gray-500">par nuit</p>
                          </div>
                        </div>

                        {/* Total Price */}
                        {formData.selectedRoom?.id === room.id && nights > 0 && (
                          <div className="mt-4 pt-4 border-t border-teal-200 bg-teal-50 -m-4 md:-m-6 p-4 md:p-6 mt-4">
                            <p className="text-sm md:text-base font-medium text-teal-700">
                              Total: {formatPrice(totalPrice)} pour {nights} {nights === 1 ? 'nuit' : 'nuits'}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Information */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-teal-500" />
                Vos informations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Prénom</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Nom</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-left">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Summary & Submit */}
            {totalPrice > 0 && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{formData.selectedRoom?.name}</p>
                    <p className="text-sm text-gray-600">
                      {nights} {nights === 1 ? 'nuit' : 'nuits'} • {formData.adults + formData.children} {formData.adults + formData.children === 1 ? 'personne' : 'personnes'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl md:text-2xl font-bold text-teal-600">{formatPrice(totalPrice)}</p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                isFormValid
                  ? 'bg-gradient-to-r from-teal-500 to-amber-500 text-white hover:shadow-lg transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isFormValid ? 'Réserver Maintenant' : 'Veuillez remplir tous les champs'}
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Réservation Confirmée!</h3>
              <p className="text-gray-600 mb-4">
                Merci {formData.firstName}! Votre réservation a été enregistrée avec succès.
              </p>
              <p className="text-sm text-gray-500">
                Un email de confirmation vous sera envoyé sous peu.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
