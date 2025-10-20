import React, { useState } from 'react'
import logo from '../../images/logo1.png'
import contactImg from '../../images/contact.png'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
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
          <Link className="nav-items" to="home" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link className="nav-items" to="about" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link className="nav-items" to="skills" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link className="nav-items" to="projects" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link className="nav-items" to="work-with" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>Work With</Link>
        </div>

        <button className="btn contactMeBtn">
          <img src={contactImg} className="contactMeImg" alt="contact me" /> Contact Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar