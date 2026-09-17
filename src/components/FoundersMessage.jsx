import React from 'react';
import { Link } from 'react-router-dom';
import './FoundersMessage.css';

const FoundersMessage = () => {
  return (
    <section className="founders-message-section">
      <div className="container">
        <div className="founders-card-wrapper">
          {/* Background Image */}
          <div className="founders-image-bg">
            <picture>
              <source media="(max-width: 768px)" srcSet="/founder-mobile.jpg" />
              <img 
                src="/founder-banner.png" 
                alt="Muhammed Nishaj TS - CEO EduNeo Academy" 
                className="founder-photo-bg" 
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          
          {/* Transparent Overlay */}
          <div className="founders-overlay"></div>

          {/* Content Block */}
          <div className="founders-content-block">
            <div className="founder-badge-label">
              A MESSAGE FROM EDUNEO
            </div>
            <h2 className="founder-quote">
              “Education is not merely about preparing students for examinations; it is about empowering them with the knowledge, confidence, and skills they need to embrace the opportunities and challenges of tomorrow.”
            </h2>
            <div className="founder-info">
              <h3 className="founder-name">— Muhammed Nishaj TS</h3>
              <p className="founder-role">CEO EduNeo Academy</p>
            </div>
            <div className="founder-cta-wrapper">
              <Link to="/about" className="founder-story-btn">
                Read our story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
