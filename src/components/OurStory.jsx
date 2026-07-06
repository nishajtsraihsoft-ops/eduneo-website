import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story modern-section-alt">
      <div className="container">
        <div className="story-grid">
          <div className="story-content animate-slide-up">
            <h2 className="section-title" style={{textAlign: 'left'}}>Our Story</h2>
            <p>
              Founded with the vision of making quality education accessible to every student, EduNeo Academy started as a small initiative to bridge the gap in online learning. We realized that traditional online classes lacked the personal touch and structured guidance that students need to truly excel.
            </p>
            <p>
              Today, we have grown into a comprehensive platform serving thousands of students from LKG to Class 12. By combining expert teaching with dedicated mentor support and interactive technology, we've created a learning environment where every child can thrive, regardless of their location.
            </p>
          </div>
          <div className="story-image-wrapper animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card story-image-card">
              <img src="/hero-img-2.png" alt="Students learning" className="story-image" />
              <div className="floating-stat glass-card">
                <h3>10,000+</h3>
                <p>Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
