import React from 'react';
import { CalendarCheck, Users, ClipboardList, Rocket } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { id: 1, title: "Book Free Demo", desc: "Schedule a trial class at your convenience.", icon: <CalendarCheck /> },
  { id: 2, title: "Get Assessed", desc: "Our experts evaluate the student's learning level.", icon: <ClipboardList /> },
  { id: 3, title: "Meet Mentor", desc: "Get assigned a dedicated mentor for guidance.", icon: <Users /> },
  { id: 4, title: "Start Learning", desc: "Begin your journey to academic excellence!", icon: <Rocket /> }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works modern-section">
      <div className="container">
        <h2 className="section-title">How To Get Started</h2>
        <p className="section-subtitle">Join EduNeo Academy in 4 simple steps and unlock your child's potential.</p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card glass-card animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
