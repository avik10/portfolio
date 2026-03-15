import React from 'react'
import './Intro.css'
import profileImg from '../../images/image.png'
import data from '../data.json'
import hireme from '../../images/hireme.png'

const Intro = () => {
  return (
    <section className='intro-section' id='intro'>
      <div className='intro-bg row'>
        <div className='intro-details col-md-6 col-sm-12'>
          <h1 className='intro-greeting'>
            Am <p className='intro-name cursor typewriter-animation'>{data.intro.name.trim()}</p>
          </h1>
          <h2 className='intro-role'>
            <span className='animated-text'>{data.intro.designation}</span>
          </h2>
          <p className='intro-summary'>
            {data.intro.summary.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                <span
                  className='intro-summary-highlighted'
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {word}
                </span>{''}
              </React.Fragment>
            ))}
          </p>
          <div className='intro-actions'>
            <a href='/resume.docx' download className='download-btn'>
              <i className='fa fa-download'></i> Download Resume
            </a>
            <button
              className='btn hireMeBtn'
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              <img src={hireme} className='hireMeImg' alt='Hire me' /> Hire Me
            </button>
          </div>
        </div>
        <div className='intro-profile col-md-6 col-sm-12'>
          <img src={profileImg} alt='Profile' className='profile-img' />
        </div>
      </div>
    </section>
  )
}

export default Intro