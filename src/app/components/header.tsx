"use client";

import Link from "next/link";
import { useState } from "react";
import './styles/header/header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      {/* Logo */}
      <div className="logo">
        <h2>PICANTE</h2>
      </div>

      {/* Hamburger Button */}
      <div className="hamburger-btn" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/">DEMOS</Link>
          </li>
          <li className="nav-item">
            <Link href="/features">FEATURES</Link>
          </li>
          <li className="nav-item">
            <Link href="/showcase">SHOWCASE</Link>
          </li>
          <button className="purchase-button">PURCHASE NOW</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
