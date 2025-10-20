import React, { useState } from 'react'
import './project.css'
import data from '../data.json'

const Projects = () => {
  const [selectedId, setSelectedId] = useState(data.projects[0]?.id)

  const selected = data.projects.find(p => p.id === selectedId) || data.projects[0]

  return (
    <section className="projects-section" aria-label="Projects - computer view">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-vertical">
        {/* Left: vertical list of project details */}
        <div className="project-list" role="list">
          {data.projects.map(p => {
            const isSelected = p.id === selectedId
            return (
              <article
                key={p.id}
                role="listitem"
                className={`project-card ${isSelected ? 'selected' : ''}`}
                tabIndex={0}
                onClick={() => setSelectedId(p.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedId(p.id) }}
                aria-current={isSelected ? 'true' : 'false'}
              >
                <div className="project-info-compact">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tech">
                    {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Right: computer mockup showing selected project in an iframe */}
        <div className="computer-preview" aria-hidden={selected ? 'false' : 'true'}>
          <div className="monitor-bezel preview">
            <div className="monitor-screen preview-screen">
              {/* Render the live URL inside an iframe for preview.
                  Note: many sites block embedding via X-Frame-Options/CSP; in that
                  case the iframe will be blank and user can use the "Open Live" link. */}
              {selected?.live ? (
                <iframe
                  className="monitor-iframe"
                  src={selected.live}
                  title={`${selected.title} live preview`}
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
                  allow="geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write; fullscreen"
                  loading="lazy"
                />
              ) : (
                <div className="monitor-placeholder">No live preview available</div>
              )}
            </div>
          </div>

          <div className="monitor-stand">
            <div className="stand-neck" />
            <div className="stand-base" />
          </div>

          <div className="preview-meta">
            <h3 className="preview-title">{selected?.title}</h3>
            <p className="preview-desc">{selected?.description}</p>
            <div className="preview-links">
              <a href={selected?.live} target="_blank" rel="noopener noreferrer">Open Live</a>
              <a href={selected?.repo} target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
            <p className="embed-note">If the preview is blocked by the site, open it in a new tab.</p>
          </div>
        </div>
      </div>

      <p className="note">Tip: click a project to preview it on the computer mockup.</p>
    </section>
  )
}

export default Projects