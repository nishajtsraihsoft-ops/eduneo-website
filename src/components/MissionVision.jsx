import React from 'react';
import { Target, Eye } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision modern-section">
      <div className="container">
        <div className="mv-grid">
          <div className="mv-card glass-card animate-slide-up">
            <div className="mv-icon bg-blue-light">
              <Target size={32} className="text-blue" />
            </div>
            <h3>Our Mission</h3>
            <p>
              To democratize quality education by providing accessible, affordable, and personalized online tuition from LKG to Class 12. We strive to empower students with conceptual clarity, exam readiness, and future-proof skills.
            </p>
          </div>
          
          <div className="mv-card glass-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mv-icon bg-purple-light">
              <Eye size={32} className="text-purple" />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the world's most trusted and effective online learning platform, fostering a global community of lifelong learners who are confident, curious, and capable of achieving their highest potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
