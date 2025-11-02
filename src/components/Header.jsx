import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaClinicMedical,
  FaBars,
  FaTimes,
  FaHome,
  FaUserMd,
  FaInfoCircle,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { AppContext } from "../context/ContextAPI";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbar, setNavbar, loggedIn, setLoggedIn } = useContext(AppContext);

  // Check login status on component mount
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      console.log("token found");
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setLoggedIn(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaClinicMedical className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MediConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FaHome className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/doctors"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FaUserMd className="w-4 h-4" />
              <span>Book Doctors</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FaInfoCircle className="w-4 h-4" />
              <span>About</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FaPhone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors duration-200 font-medium shadow-md"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium shadow-md"
              >
                <FaSignInAlt className="w-4 h-4" />
                <span>Login / Register</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-2 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                <FaHome className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/doctors"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-2 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                <FaUserMd className="w-4 h-4" />
                <span>Book Doctors</span>
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-2 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                <FaInfoCircle className="w-4 h-4" />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-3 px-2 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
              >
                <FaPhone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
              {loggedIn ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors duration-200 font-medium shadow-md"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium shadow-md"
                >
                  <FaSignInAlt className="w-4 h-4" />
                  <span>Login / Register</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
