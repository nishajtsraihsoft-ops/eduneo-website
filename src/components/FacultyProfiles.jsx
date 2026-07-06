import React from 'react';
import './FacultyProfiles.css';

const faculty = [
  { id: 1, name: "Dr. Arun Kumar", subject: "Mathematics Expert", exp: "12+ Years Exp", color: "var(--ps-blue)" },
  { id: 2, name: "Sneha Menon", subject: "Science & Biology", exp: "8+ Years Exp", color: "var(--ps-pink)" },
  { id: 3, name: "Rahul Sharma", subject: "Physics (CBSE)", exp: "15+ Years Exp", color: "var(--ps-yellow)" },
  { id: 4, name: "Anjali V.", subject: "English Literature", exp: "10+ Years Exp", color: "var(--ps-green)" }
];

const FacultyProfiles = () => {
  return (
    <section className="faculty section bg-light-gray">
      <div className="container">
        <div className="section-header text-center" style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{fontSize: '3rem', color: 'var(--primary-dark)'}}>Meet Our Expert Tutors</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--text-muted)'}}>Learn from highly qualified and passionate educators.</p>
        </div>

        <div className="faculty-grid">
          {faculty.map((tutor) => (
            <div key={tutor.id} className="faculty-card">
              <div className="faculty-avatar-wrapper">
                <div className="blob-bg" style={{backgroundColor: tutor.color}}></div>
                <div className="faculty-avatar"></div>
              </div>
              <h3>{tutor.name}</h3>
              <p className="faculty-subject">{tutor.subject}</p>
              <span className="exp-badge" style={{color: tutor.color, borderColor: tutor.color}}>{tutor.exp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyProfiles;
