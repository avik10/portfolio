import React from 'react';
import './experiance.css';
import data from '../data.json'

const Experaince = ({ experiences = data.experiences }) => {
    return (
        <section className="xp-section" id="experience">
            <div className="xp-inner">
                <h2 className="xp-title">Experience</h2>
                <p className="xp-subtitle">7 years building elegant, maintainable web experiences.</p>

                <div className="xp-list">
                    {data.experiences.map(xp => (
                        <article key={xp.id} className="xp-card" aria-label={`${xp.role} at ${xp.company}`}>
                            <header className="xp-card-head">
                                <div>
                                    <h3 className="xp-role">{xp.role}</h3>
                                    <p className="xp-company">{xp.company} · <span className="xp-location">{xp.location}</span></p>
                                </div>

                                {/* company logo (URL comes from data.json via xp.logo) */}
                                <img height={50}
                                    width={50}
                                    src={xp.logo}
                                    alt={`${xp.company} logo`}
                                    className="xp-logo"
                                    loading="lazy"
                                />

                                <span className="xp-period">{xp.period}</span>
                            </header>

                            <p className="xp-desc">{xp.description}</p>

                            <ul className="xp-tech">
                                {xp.tech.map((t, i) => <li key={i} className="xp-tech-item">{t}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experaince;