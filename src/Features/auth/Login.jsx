// src/pages/Login.jsx
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import agnegheLogo from "../../assets/agnegheLogo.png";
import { login } from '../../services/authService';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError('');
    try {
      await login(formData.email, formData.password);
      window.location.href = '/adminDashboard'; // ✅ redirect after login
    } catch (err) {
      setError(err);
    }
  };

  const HotelLogo = () => (
    <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
      <img
        src={agnegheLogo}
        alt="Agneghe Beach Hotel Logo"
        className="w-full h-full object-contain rounded-full shadow"
      />
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-50 to-yellow-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm flex flex-col justify-between h-[90vh]">
        {/* Logo and welcome message */}
        <div className="text-center">
          <HotelLogo />
          <h1 className="text-xl font-bold text-teal-700 mb-1">Bienvenue à AGNEGHE</h1>
          <p className="text-gray-600 text-sm -mt-1">Connectez-vous pour continuer</p>
        </div>

        {/* Login form box */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow border border-gray-100 flex-1 flex flex-col justify-center space-y-4 overflow-hidden mt-2">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Mot de Passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-9 pr-9 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-teal-600 border-gray-300 rounded"
              />
              <span className="text-gray-600">Se souvenir</span>
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-600 text-white py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition"
          >
            Se connecter
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="flex-grow border-gray-200" />
            <span className="text-xs text-gray-400">ou</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          {/* Google Sign-in */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition w-full"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Se connecter avec Google
          </button>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-600 -mt-5">
          Vous n’avez pas de compte?{' '}
          <a href="/signup" className="text-teal-600 hover:underline">
            S'inscrire
          </a>
        </div>

        <div className="text-center text-xs text-gray-400">
          © 2025 Agneghe Beach Hotel
        </div>
      </div>
    </div>
  );
}
