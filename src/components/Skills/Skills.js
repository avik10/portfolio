import React, { useRef } from 'react'
import './Skills.css'
import data from '../data.json'

const SKILLS = data.skills

const Skills = () => {
  const scrollerRef = useRef(null)

  const scroll = direction => {
    const el = scrollerRef.current
    if (!el) return
    const offset = el.clientWidth // scroll by the visible width for page-like behavior
    el.scrollBy({ left: direction === 'next' ? offset : -offset, behavior: 'smooth' })
  }

  const onKeyDown = e => {
    if (e.key === 'ArrowRight') scroll('next')
    if (e.key === 'ArrowLeft') scroll('prev')
  }

  return (
    <section className="skills-section" aria-label="Skills carousel" onKeyDown={onKeyDown} tabIndex={0}>
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="controls">
          <button className="ctrl" aria-label="Previous skills" onClick={() => scroll('prev')}>‹</button>
          <button className="ctrl" aria-label="Next skills" onClick={() => scroll('next')}>›</button>
        </div>
      </div>

      <div className="skills-carousel" ref={scrollerRef}>
        {SKILLS.map(skill => (
          <article key={skill.id} className="skill-card" aria-label={`${skill.name} skill card`}>
            <div className="skill-top">
              <div className="skill-logo">
                <img src={skill.logo} alt={`${skill.name}`} />
              </div>
              <div className="skill-meta">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-description">{skill.description}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills