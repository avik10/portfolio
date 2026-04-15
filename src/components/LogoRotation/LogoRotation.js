import React from 'react'
import './LogoRotation.css'
import data from '../../data.json'
import profileImg from '../../images/image.png'

const LogoRotation = () => {
  const { intro } = data

  return (
    <div className="logo-rotation-wrapper">
      <div className="orbit-container">
        <div className="center-profile">
          <img src={profileImg} alt={intro.name} className="profile-image" />
        </div>
        {intro.social_orbit.map((social, index) => (
          <a 
            key={index} 
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`orbiting-item item-${index}`}
          >
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default LogoRotation