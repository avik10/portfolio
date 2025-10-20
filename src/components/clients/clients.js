import React, { useRef } from 'react'
import './clients.css'
import data from '../data.json'

const CLIENTS = data.clients

const Clients = () => {
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
    <section className="clients-section" aria-label="Clients carousel" onKeyDown={onKeyDown} tabIndex={0}>
      <div className="clients-header">
        <h2>Clients</h2>
        <div className="controls">
          <button className="ctrl" aria-label="Previous clients" onClick={() => scroll('prev')}>‹</button>
          <button className="ctrl" aria-label="Next clients" onClick={() => scroll('next')}>›</button>
        </div>
      </div>

      <div className="clients-carousel" ref={scrollerRef}>
        {CLIENTS.map(c => (
          <article key={c.id} className="client-card" aria-label={`${c.name} client card`}>
            <div className="client-top">
              {/* <div className="client-logo" aria-hidden>{c.name.split(' ').map(p => p[0]).slice(0,2).join('')}</div> */}
              <img className="client-logo" aria-hidden src={c.image}/>
              <div className="client-meta">
                <div className="client-name">{c.name}</div>
                <div className="client-role">{c.role}</div>
              </div>
            </div>
            <blockquote className="client-quote">“{c.quote}”</blockquote>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Clients