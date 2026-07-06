import React from 'react';
import './TrustStats.css';

const TrustStats = () => {
  return (
    <section className="trust-stats-section">
      <div className="container">
        <div className="trust-stats-grid">
          <div className="trust-stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="trust-stat-item">
            <h3>500+</h3>
            <p>Expert Tutors</p>
          </div>
          <div className="trust-stat-item">
            <h3>10k+</h3>
            <p>Active Students</p>
          </div>
          <div className="trust-stat-item">
            <h3>100%</h3>
            <p>Syllabus Coverage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
