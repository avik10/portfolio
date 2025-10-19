import React, { useState, useEffect, useRef } from 'react'
import './Skills.css'
import data from '../data.json'

const Skills = ({ skills = data.skills, interval = 3000 }) => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const viewportRef = useRef(null)

  // useEffect(() => {
  //   // autoplay
  //   timerRef.current = setInterval(() => setIndex(i => (i + 1) % skills.length), interval)
  //   return () => clearInterval(timerRef.current)
  // }, [skills.length, interval])

  const prev = () => setIndex(i => (i - 1 + skills.length) % skills.length)
  const next = () => setIndex(i => (i + 1) % skills.length)

  // const handleMouseEnter = () => clearInterval(timerRef.current)
  // const handleMouseLeave = () => {
  //   clearInterval(timerRef.current)
  //   timerRef.current = setInterval(() => setIndex(i => (i + 1) % skills.length), interval)
  // }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  // scroll to the item whenever index changes
  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    const items = vp.querySelectorAll('.skills__item')
    const el = items[index]
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [index])

  return (
    <div
      className="skills"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Skills carousel"
    >
      <div className="skills__viewport" ref={viewportRef}>
        <div className="skills__track">
          {skills.map((s, i) => (
            <div className="skills__item" key={i}>
              <div className="skills__card">{s.name}</div>
              <div className="skills__logo">
                <img
                  height={50}
                  width={50}
                  src={s.logo}
                  alt={`${typeof s === 'string' ? s : s.name} logo`}
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills__controls">
        <button className="skills__btn" aria-label="Previous" onClick={prev}>‹</button>
        <button className="skills__btn" aria-label="Next" onClick={next}>›</button>
      </div>

      <div className="skills__dots">
        {skills.map((_s, i) => (
          <button
            key={i}
            className={`skills__dot ${i === index ? 'skills__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to skill ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills