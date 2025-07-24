import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Layout from './components/Layout';
import NavbarOnlyLayout from './components/NavbarOnlyLayout';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import this
import Login from './Features/auth/Login';
import SignUp from './Features/auth/SignUp';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Room from './pages/Room';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scrolls to top on route change */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<NavbarOnlyLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservations />} />
        </Route>

        <Route path="/adminDashboard" element={<AdminDashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
