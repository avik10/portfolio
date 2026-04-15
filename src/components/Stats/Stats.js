import React from 'react'
import './Stats.css'
import data from '../../data.json'

const Stats = () => {
  const { stats } = data

  return (
    <section className="stats-section" id="stats" aria-label="Measured impact metrics">
      <div className="stats-container">
        <div className="stats-header">
          <h2>Measured Impact</h2>
        </div>

        <div className="stats-grid">
          {stats.map(stat => (
            <article key={stat.id} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-meta">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats