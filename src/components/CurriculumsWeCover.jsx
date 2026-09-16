import React from 'react';
import './CurriculumsWeCover.css';

const CurriculumsWeCover = () => {
  const curriculums = [
    {
      badge: 'SCERT',
      title: 'Kerala State',
      description: 'SCERT Kerala syllabus support with structured, exam-focused learning.',
      badgeBg: '#eff6ff',
      badgeColor: '#264790'
    },
    {
      badge: 'CBSE',
      title: 'CBSE',
      description: 'Concept-driven classes aligned with the CBSE curriculum.',
      badgeBg: '#fef2f2',
      badgeColor: '#dc2626'
    },
    {
      badge: 'ICSE',
      title: 'ICSE',
      description: 'Focused academic support for detailed ICSE learning.',
      badgeBg: '#f0fdf4',
      badgeColor: '#16a34a'
    },
    {
      badge: 'ISC',
      title: 'ISC',
      description: 'Specialised guidance for ISC higher secondary studies.',
      badgeBg: '#faf5ff',
      badgeColor: '#9333ea'
    },
    {
      badge: 'NIOS',
      title: 'NIOS',
      description: 'Flexible learning support aligned with the NIOS curriculum.',
      badgeBg: '#fff7ed',
      badgeColor: '#ea580c'
    }
  ];

  return (
    <section className="curriculums-section">
      <div className="container">
        
        {/* Header */}
        <div className="curriculums-header">
          <span className="curriculums-eyebrow">CURRICULUMS WE COVER</span>
          <h2 className="curriculums-title">One Academy. Every Curriculum.</h2>
          <p className="curriculums-subtitle">
            Expert online learning tailored to your child’s curriculum, from foundation to Grade 12.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="curriculums-grid">
          {curriculums.map((item, idx) => (
            <div key={idx} className="curriculum-card">
              <div 
                className="curriculum-badge" 
                style={{ backgroundColor: item.badgeBg, color: item.badgeColor }}
              >
                {item.badge}
              </div>
              <h3 className="curriculum-card-title">{item.title}</h3>
              <p className="curriculum-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="curriculums-footer-tagline">
          LKG – Grade 12 &nbsp;·&nbsp; Live Classes &nbsp;·&nbsp; Expert Teachers &nbsp;·&nbsp; Mentor Support
        </div>

      </div>
    </section>
  );
};

export default CurriculumsWeCover;
