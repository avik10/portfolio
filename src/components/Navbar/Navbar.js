import React, { useState } from 'react'
import logo from '../../images/logo1.png'
import contactImg from '../../images/contact.png'
import { Link } from 'react-scroll'
import './Navbar.css'
import data from '../data.json'

const Navbar = () => {
    const navValues = data.navbar.links
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className="logo" />

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navValues.map((link, index) => (
            <Link
              key={index}
              className="nav-items"
              to={link.url}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="btn contactMeBtn">
          <img src={contactImg} className="contactMeImg" alt="contact me" /> Contact Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar