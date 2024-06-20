import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser,faProjectDiagram, faEnvelope, faHome, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className='nav'>
          <div className="logo">Mohit Pal</div>
          <div className="hamburger-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </div>
          <div >
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
              <a href="#home">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <FontAwesomeIcon icon={faUser} /> About
              </a>
            </li>
            <li>
              <a href="#experience">
                <FontAwesomeIcon icon={faCode} /> Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <FontAwesomeIcon icon={faProjectDiagram} /> Projects
              </a>
            </li>
            <li>
              <a href="#research">
                <FontAwesomeIcon icon={faReact} /> Research
              </a>
            </li>
            <li>
              <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </a>
            </li>
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default Header;
