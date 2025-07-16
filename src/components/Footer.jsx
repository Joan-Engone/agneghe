import { Facebook, Mail, MapPin, Phone, X } from 'lucide-react';
import agnegheLogo from '../assets/agnegheLogo.png';

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-br from-slate-50 to-gray-100" style={{ width: '100vw', marginLeft: '-50vw', marginRight: '-50vw', left: '50%', right: '50%', position: 'relative' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative">
                  <img
                        src={agnegheLogo}
                        alt="Agneghe Logo"
                        className="w-13 h-13 object-contain"
                      />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">AGNEGHE</h1>
                <p className="text-sm text-emerald-600 uppercase tracking-[0.15em] font-medium">RESIDENCE HOTELIERE</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Découvrez l'élégance et le luxe au bord de l'océan Atlantique. 
              Une expérience hôtelière incomparable vous attend sur la côte gabonaise.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#", bg: "from-blue-500 to-blue-600" }
              ].map(({ Icon, href, bg }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-md`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
<div className="space-y-8">
  <h4 className="text-xl font-semibold text-gray-900 relative">
    Navigation
    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
  </h4>
  <ul className="space-y-4">
    {[
      { label: "Accueil", href: "#" },
      { label: "Chambres & Suites", href: "#rooms" },
      { label: "Restaurant & Bar", href: "#dining" },
      { label: "Piscines", href: "#piscines" },
      { label: "Activités", href: "#activities" },
      { label: "Se connecter", href: "/login" }
    ].map(({ label, href }) => (
      <li key={label}>
        <a 
          href={href} 
          className="flex items-center space-x-3 group transition-all duration-300"
        >
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent group-hover:translate-x-1 transition-all duration-300">
            {label}
          </span>
        </a>
      </li>
    ))}
  </ul>
</div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-gray-900 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-200">
                  <MapPin className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    Agneghe Beach<br />
                    Moyen Ogooué<br />
                    Gabon
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-200">
                  <Phone className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">+241 77 76 16 19</p>
                  <p className="text-sm text-gray-500">24/7 Service client</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-200">
                  <Mail className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium">info@agneghebeach.com</p>
                  <p className="text-sm text-gray-500">Réservations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Agneghe Beach Hotel. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">Confidentialité</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;