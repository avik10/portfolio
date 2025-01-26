import React from 'react'
import logo from '../../images/logo1.png'
import contactImg from '../../images/contact.png'
import {Link} from 'react-scroll'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <img src={logo} alt='logo' className='logo' />

                <div className='nav-links'>
                    <Link className='nav-items'>Home</Link>
                    <Link className='nav-items'>About</Link>
                    <Link className='nav-items'>Skills</Link>
                    <Link className='nav-items'>Projects</Link>
                    <Link className='nav-items'>Work With</Link>
                </div>
                <button className='btn contactMeBtn'><img src={contactImg} className='contactMeImg' alt='contact me'/> Contact Me</button>
            </nav>
        </>
    )
}

export default Navbar