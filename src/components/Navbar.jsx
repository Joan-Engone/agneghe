import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import agnegheLogo from '../assets/agnegheLogo.png'; // ✅ adjust path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar fixed at the top */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo with image and text */}
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
                <p className="text-sm text-emerald-600 uppercase tracking-[0.15em] font-medium">RESIDENCE HOTELIERE</p>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">AGNEGHE</h1>
              </div>
            </div>

{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {[
    { label: "A Propos", href: "#" },
    { label: "Chambres", href: "#rooms" },
    { label: "Services", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ].map(({ label, href }) => (
    <a 
      key={label}
      href={href} 
      className="relative group font-medium transition-all duration-300"
    >
      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
        {label}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300" />
    </a>
  ))}

  <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-md">
    Réserver
  </button>
</div>



            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 px-6 py-6 md:hidden shadow-lg">
          <div className="flex flex-col space-y-4">
            {[
              { label: "A Propos", href: "#" },
              { label: "Chambres", href: "#rooms" },
              { label: "Services", href: "#amenities" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" }
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-700 hover:text-emerald-600 text-lg py-3 border-b border-gray-100 transition-colors duration-200 flex items-center space-x-3 group" 
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
              </a>
            ))}
            <button 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-medium w-full mt-4 hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
