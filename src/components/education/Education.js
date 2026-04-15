// /Users/avikbhattacharjya/Official/Development/portfolio/src/components/Education/Education.jsx
import React from 'react';
import data from '../../data.json';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">Education</h2>
        <div className="row justify-content-center">
          <div className="col-lg-12 education-list-container">
            {data.education && data.education.map((edu) => (
              <div key={edu.id} className="education-flip-container">
                <div className="education-card-flipper">
                  <div className="education-card-front">
                    <h3 className="institution-name">{edu.institution}</h3>
                    <h4 className="degree-name">{edu.degree}</h4>
                    <p className="flip-instruction">(Hover for more details)</p>
                  </div>
                  <div className="education-card-back">
                    <h5 className="back-title">Academic Details</h5>
                    <p><strong>Period:</strong><span className="period-badge">{edu.period}</span></p>
                    <p><strong>Location:</strong> {edu.location}</p>
                    {edu.description && <p className="edu-description">{edu.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;