import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
          font-family: "Poppins", sans-serif;
        }

        .med-nav {
          width: 100%;
          background: #ffffff;
          border-bottom: 2px solid #00acc1;
          padding: 15px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .med-nav-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .med-nav-left img {
          height: 45px;
          border-radius: 6px;
          object-fit: contain;
        }

        .med-title {
          font-size: 22px;
          font-weight: 700;
          color: #006064;
        }

        .med-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .med-link {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: #004d40;
          padding: 8px 14px;
          border-radius: 8px;
          transition: 0.25s;
        }

        .med-link:hover {
          background: #00acc1;
          color: #ffffff;
        }

        /* Mobile menu button */
        .med-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .med-menu-btn span {
          display: block;
          height: 3px;
          width: 100%;
          background-color: #006064;
          border-radius: 3px;
          transition: 0.3s;
        }

        .med-menu-btn.active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .med-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .med-menu-btn.active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .med-menu-btn {
            display: flex;
          }

          .med-links {
            position: fixed;
            top: 82px;
            left: 0;
            width: 100%;
            background: #ffffff;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            gap: 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            z-index: 998;
          }

          .med-links.active {
            transform: translateY(0);
            opacity: 1;
          }

          .med-link {
            width: 80%;
            text-align: center;
            padding: 15px;
            margin: 5px 0;
            border-radius: 8px;
            font-size: 18px;
          }

          .med-nav {
            padding: 15px 20px;
          }

          .med-title {
            font-size: 20px;
          }

          .med-nav-left img {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .med-nav {
            padding: 12px 15px;
          }

          .med-title {
            font-size: 18px;
          }

          .med-nav-left img {
            height: 35px;
          }

          .med-link {
            font-size: 16px;
            padding: 12px;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="med-nav">
        {/* Left section */}
        <div className="med-nav-left">
          <img src="/MedPulse logo.jpg" alt="MedPulse Logo" />
          <span className="med-title">MedPulse</span>
        </div>

        {/* Navigation links */}
        <div className={`med-links ${isMenuOpen ? "active" : ""}`}>
          <Link className="med-link" to="/dashboard" onClick={closeMenu}>Dashboard</Link>
          <Link className="med-link" to="/dashboard/chatbot" onClick={closeMenu}>Chatbot</Link>
          <Link className="med-link" to="/dashboard/health-awareness" onClick={closeMenu}>Healthcare</Link>
          <Link className="med-link" to="/dashboard/common-diseases" onClick={closeMenu}>Diseases</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`med-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;