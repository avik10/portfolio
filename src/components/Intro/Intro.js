import React from 'react'
import './Intro.css'
import profileImg from '../../images/image.png'
import data from '../data.json'
import { Link } from 'react-scroll'
import hireme from '../../images/hireme.png'

const Intro = () => {
  return (
    <section className='intro-section'>
      <div className='intro-bg row'>
        <div className='intro-profile col-md-4 col-sm-12'>
          <img src={profileImg} alt='Profile' className='profile-img' />
        </div>
        <div className='intro-details col-md-8 col-sm-12'>
          <h1 className='intro-greeting'>
            Hi, I'm <span className='intro-name'>{data.intro.name}</span>
          </h1>
          <h2 className='intro-role'>
            <span className='animated-text'>{data.intro.designation}</span>
          </h2>
          <p className='intro-summary'>{data.intro.summary}</p>
          <div className='intro-actions'>
            <a href='/resume.docx' download className='download-btn'>
              <i className='fa fa-download'></i> Download Resume
            </a>
            <Link to='hireme' smooth={true} duration={1000}>
              <button className='btn hireMeBtn'>
                <img src={hireme} className='hireMeImg' alt='Hire me' /> Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro