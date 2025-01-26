import React from 'react'
import './Intro.css'
import profileImg from '../../images/image.png'
import data from '../data.json'
import { Link } from 'react-scroll'
import hireme from '../../images/hireme.png'

const Intro = () => {
  return (
    <div className='intro-container'>
      <img src={profileImg} alt='Profile' className='intro-img' />
      <div className='intro-content'>
        <button class="download-btn"><i class="fa fa-download"></i> Resume</button>
        <div className='intro-description'>
          <h2 className='hello'>Hello, </h2>
          <span className='intro-text'>I' m <span className='intro-name'>{data.intro.name}, </span>
            <span className='intro-designation'><code>{data.intro.designation}</code></span></span>
          <p className='intro-summary'>{data.intro.summary}</p>
          <Link to='/hireme' smooth={true} duration={1000}><button className='btn hireMeBtn'><img src={hireme} className='hireMeImg' alt='Hire me' />Hire Me</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Intro