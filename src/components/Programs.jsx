import React from 'react';
import { BookOpen, MonitorPlay, GraduationCap, Users } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    title: 'LKG & UKG',
    desc: 'Foundational learning with interactive games, basic numeracy, and phonics.',
    icon: <BookOpen />,
    color: '#264790',
    bg: 'rgba(38, 71, 144, 0.08)'
  },
  {
    title: 'Primary (Class 1-4)',
    desc: 'Building core concepts in Math, Science, and Languages through visual learning.',
    icon: <MonitorPlay />,
    color: '#44a6d9',
    bg: 'rgba(68, 166, 217, 0.08)'
  },
  {
    title: 'Middle School (Class 5-8)',
    desc: 'Advanced problem solving, critical thinking, and structured curriculum coverage.',
    icon: <Users />,
    color: '#264790',
    bg: 'rgba(38, 71, 144, 0.08)'
  },
  {
    title: 'High School (Class 9-12)',
    desc: 'Board exam preparation, doubt clearing, and personalized mentorship.',
    icon: <GraduationCap />,
    color: '#44a6d9',
    bg: 'rgba(68, 166, 217, 0.08)'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="programs modern-section">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">Comprehensive online tuition for every stage of your child's education.</p>

        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div key={idx} className="program-card glass-card animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="program-icon" style={{ backgroundColor: prog.bg, color: prog.color }}>
                {prog.icon}
              </div>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
              <button className="btn-modern btn-outline" style={{borderColor: prog.color, color: prog.color, width: '100%', marginTop: '1rem'}}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
