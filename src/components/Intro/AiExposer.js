import React from 'react'
import './AiExposer.css'
import data from '../data.json'

const AiExposer = () => {
    return (
        <section className='ai-exposer-section' id='aiexposer'>
            <div className='container'>
                <h2 className='section-title'>
                    Ai <span className='highlight'>Exposer</span>
                </h2>
                <div className='ai-grid'>
                    {data.aiexposer && data.aiexposer.map((item, index) => (
                        <div className='ai-card' key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className='ai-title'>{item.title}</h3>
                            <p className='ai-desc'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <h3 className='tools-used-title'>Tools Used</h3>
            <div className='ai-tools-carousel'>
                {data.aiTools && data.aiTools.map((tool, index) => (
                    <div className='ai-tool-card' key={index}>
                        <img src={tool.logo} alt={tool.name} className='ai-tool-logo' />
                        <p className='ai-tool-name'>{tool.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AiExposer