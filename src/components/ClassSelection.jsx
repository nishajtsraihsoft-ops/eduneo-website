import React from 'react';
import './ClassSelection.css';

const classes = [
  "LKG & UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"
];

const ClassSelection = () => {
  return (
    <section className="class-selection modern-section">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Select Your Class</h2>
          <p className="section-subtitle">Tailored curriculum for every grade level from LKG to Class 12</p>
        </div>
        
        <div className="class-grid">
          {classes.map((className, index) => (
            <button key={index} className="class-card glass-card">
              <span className="class-icon">🎓</span>
              <span className="class-name">{className}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassSelection;
