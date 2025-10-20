import React, { useState } from 'react'
import logo from '../../images/logo1.png'
import contactImg from '../../images/contact.png'
import { Link } from 'react-scroll'
import emailjs from 'emailjs-com'
import './Navbar.css'
import data from '../data.json'

const Navbar = () => {
  const navValues = data.navbar.links
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        'test_123', // Replace with your EmailJS Service ID
        'template_123', // Replace with your EmailJS Template ID
        formData,
        '4EiP86SWdNjJ_XrGb' // Replace with your EmailJS Public Key
      )
      .then(
        result => {
          console.log(result.text)
          setSuccessMessage('Your message has been sent successfully!')
          setFormData({ name: '', email: '', message: '' }) // Reset form
        },
        error => {
          console.error('Failed to send email:', error)
          setSuccessMessage('Failed to send your message. Please try again later.')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <>
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

          <button
            className="btn contactMeBtn"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img src={contactImg} className="contactMeImg" alt="contact me" /> Contact Me
          </button>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">Contact Me</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </form>
              {successMessage && <p className="mt-3 text-center">{successMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar