import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Logo from "../../assets/logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, handleLogout } = useAuthContext();

  return (
    <div className="bg-bar p-3 text-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        
        {/* 🔹 Logo + Text */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <img
            src={Logo}
            alt="DonateHub Logo"
            className="w-10 h-10 object-contain"
          />
          <span>DonateHub</span>
        </div>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-6 font-medium">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/donations" className="nav-link">Donations</Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {isAuth ? (
            <>
              <Link to="/dashboard" className="btn-primary px-5">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg font-semibold text-white shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn-primary px-5">
              Login
            </Link>
          )}
        </div>

        {/* 🔹 Hamburger (Mobile only) */}
        <div
          className={`md:hidden text-xl cursor-pointer transition-all duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined />
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="md:hidden flex flex-col gap-3 pt-5 font-medium">
          <li>
            <Link to="/" className="mob-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="mob-link">About</Link>
          </li>
          <li>
            <Link to="/donations" className="mob-link">Donations</Link>
          </li>
          {isAuth ? (
            <>
              <li>
                <Link to="/dashboard" className="mob-link">Dashboard</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="mob-link text-left text-red-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth/login" className="mob-link">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
