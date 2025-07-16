import axios from "axios";
import { Eye, EyeOff, Lock, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agnegheLogo from "../../assets/agnegheLogo.png";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInput = () => {
    const { username, email, password } = formData;
    if (!username || !email || !password) {
      toast.error("All fields are required.", { position: "top-center" });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format.", { position: "top-center" });
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-center",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInput()) return;
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("✅ Account created! Redirecting to login...", {
          position: "top-center",
          autoClose: 2500,
          onClose: () => navigate("/login"),
        });
      } else {
        toast.error("❌ Registration failed. Try again.", {
          position: "top-center",
          autoClose: 4000,
        });
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again later.";
      toast.error(`❌ ${msg}`, {
        position: "top-center",
        autoClose: 4000,
      });
    } finally {
      setIsSubmitting(false);
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
    <div className="fixed inset-0 bg-gradient-to-br from-teal-50 to-yellow-50 flex flex-col items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm flex flex-col">
        {/* Header */}
        <div className="text-center mb-4">
          <HotelLogo />
          <h1 className="text-xl font-bold text-teal-700 mb-1">Rejoigner AGNEGHE</h1>
          <p className="text-gray-600 text-sm">Créer un compte</p>
        </div>

        {/* Form Container */}
        <div className="bg-white p-4 rounded-xl shadow border border-gray-100 max-h-[calc(100vh-10rem)] overflow-auto flex flex-col space-y-3">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Nom d'utilisateur
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="claudetery"
              />
            </div>
          </div>

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
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="claudeLevy@example.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Numéro de téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="+241 7XX XXX XXX"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-teal-600 text-white py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Création d'un compte..." : "S'inscre"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="flex-grow border-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          {/* Google Sign-up */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-sm py-2 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition w-full"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            S'inscrire avec Google
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Vous avez déjà un compte?{' '}
          <a href="/login" className="text-teal-600 hover:underline">
            Se connecter
          </a>
        </div>

        <div className="text-center text-xs text-gray-400 mt-2">© 2025 Agneghe Beach Hotel</div>
      </div>
    </div>
  );
}
