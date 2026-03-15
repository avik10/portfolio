import React, { useRef } from 'react'
import './AiExposer.css'
import data from '../data.json'

const AiExposer = () => {
  const scrollerRef = useRef(null)

  // Fallback data in case it's not in data.json yet
  const aiProjects = data.aiExposer || [
    {
      id: 1,
      title: "Generative Chat Assistant",
      description: "A custom RAG pipeline using LangChain and OpenAI to answer domain-specific queries with high accuracy, integrated with a vector database.",
      tech: ["OpenAI", "LangChain", "Pinecone"],
      tags: ["NLP", "GenAI"]
    },
    {
      id: 2,
      title: "Predictive Analytics Model",
      description: "Time-series forecasting model designed to predict market trends using historical data and LSTM neural networks.",
      tech: ["TensorFlow", "Python", "Pandas"],
      tags: ["Machine Learning", "Data Science"]
    },
    {
      id: 3,
      title: "AI Image Processing",
      description: "Automated defect detection system for manufacturing lines utilizing computer vision algorithms and YOLOv8.",
      tech: ["PyTorch", "OpenCV", "YOLO"],
      tags: ["Computer Vision"]
    }
  ]

  const tools = [
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/matplotlib.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tensorflow.svg" },
    { name: "FactoryAI", icon: "https://www.factory-ai.com/img/favicon.ico" },
    { name: "Gemini", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlebard.svg" },
    { name: "Replit", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/replit.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/opencv.svg" },
    { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
    { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg" },
    { name: "Meta LLM", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" },
  ];

  const scroll = direction => {
    const el = scrollerRef.current
    if (!el) return
    const offset = el.clientWidth
    el.scrollBy({ left: direction === 'next' ? offset : -offset, behavior: 'smooth' })
  }

  return (
    <section className="ai-section" id="ai-exposer">
      <div className="ai-container">
        <h2 className="ai-title">AI Explorations</h2>
        <p className="ai-subtitle">Leveraging artificial intelligence to solve complex problems.</p>
        
        <div className="ai-grid">
          {aiProjects.map((project) => (
            <div key={project.id} className="ai-card">
              <div className="ai-card-content">
                <h3 className="ai-card-title">{project.title}</h3>
                <p className="ai-card-desc">{project.description}</p>
                <div className="ai-tech-stack">
                  {project.tech.map((tech, index) => <span key={index} className="ai-tech-pill">{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-tools-section">
          <div className="ai-tools-header">
            <h3 className="ai-tools-title">Tools & Technologies</h3>
            <div className="ai-controls">
              <button className="ai-ctrl" aria-label="Previous tools" onClick={() => scroll('prev')}>‹</button>
              <button className="ai-ctrl" aria-label="Next tools" onClick={() => scroll('next')}>›</button>
            </div>
          </div>

          <div className="ai-tools-carousel" ref={scrollerRef}>
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">
                <img src={tool.icon} alt={tool.name} className="tool-icon" />
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiExposer