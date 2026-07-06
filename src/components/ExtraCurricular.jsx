import React from 'react';
import { Code, Bot, Calculator, Brain } from 'lucide-react';
import './ExtraCurricular.css';

const activities = [
  { icon: <Code />, title: "Coding", desc: "Build logic and create apps with Python, Scratch, and more.", theme: "theme-blue" },
  { icon: <Bot />, title: "Robotics", desc: "Hands-on projects to understand mechanics and electronics.", theme: "theme-orange" },
  { icon: <Calculator />, title: "Vedic Maths", desc: "Speed up calculations and eliminate math phobia.", theme: "theme-purple" },
  { icon: <Brain />, title: "Brain Development", desc: "Enhance memory, focus, and cognitive skills.", theme: "theme-green" }
];

const ExtraCurricular = () => {
  return (
    <section className="extracurricular modern-section-alt">
      <div className="container">
        <h2 className="section-title">Beyond Academics</h2>
        <p className="section-subtitle">Future-ready skills for holistic development</p>
        
        <div className="activities-grid">
          {activities.map((act, index) => (
            <div key={index} className={`activity-card glass-card ${act.theme}`}>
              <div className="activity-icon-wrapper">
                {act.icon}
              </div>
              <div className="activity-content">
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
                <button className="btn-modern btn-outline" style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '0.9rem'}}>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
