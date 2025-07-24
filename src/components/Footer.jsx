import {
  FacebookIcon,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import agnegheLogo from '../assets/agnegheLogo.png';

const Footer = () => {
  return (
    <footer className="w-screen max-h-full bg-gradient-to-br from-slate-50 to-gray-100 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="w-full py-15 px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
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
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                  AGNEGHE
                </h1>
                <p className="text-sm text-emerald-600 uppercase tracking-[0.15em] font-medium">
                  RESIDENCE HOTELIERE
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Découvrez l'élégance et le luxe au bord de l'océan Atlantique. Une
              expérience hôtelière incomparable vous attend sur la côte gabonaise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-gray-900 relative inline-block">
              Navigation
              <span className="block mt-1 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full ml-6"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Chambres & Suites', href: '/rooms' },
                { label: 'Services', href: '/service' },
                { label: 'Gallerie', href: '/gallery' },
                { label: 'Se connecter', href: '/login' },
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
            <h4 className="text-xl font-semibold text-gray-900 relative inline-block">
              Contact
              <span className="block mt-1 w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full ml-3"></span>
            </h4>

            <div className="space-y-2">
              {[
                {
                  icon: <MapPin className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors duration-200" />,
                  bg: 'from-orange-100 to-amber-200 group-hover:from-orange-500 group-hover:to-amber-500',
                  title: 'Adresse',
                  text: 'Moyen Ogooué, Gabon',
                },
                {
                  icon: <Phone className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-200" />,
                  bg: 'from-green-100 to-emerald-200 group-hover:from-green-500 group-hover:to-emerald-600',
                  title: 'Téléphone',
                  text: '+241 77 76 16 19',
                },
                {
                  icon: <Mail className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors duration-200" />,
                  bg: 'from-cyan-100 to-sky-200 group-hover:from-cyan-500 group-hover:to-sky-600',
                  title: 'Email',
                  text: 'info@agneghebeach.com',
                },
                {
                  icon: <FacebookIcon className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors duration-200" />,
                  bg: 'from-blue-100 to-blue-200 group-hover:from-blue-600 group-hover:to-blue-800',
                  title: 'Facebook',
                  text: 'AGNEGHE BEACH HÔTEL',
                },
              ].map(({ icon, bg, title, text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-x-4 group min-h-[60px]"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${bg} rounded-xl flex items-center justify-center transition-all duration-200`}>
                    {icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium">{title}</p>
                    <p className="text-sm text-gray-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-screen-xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Agneghe Beach Hotel. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                Confidentialité
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
