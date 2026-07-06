import React from 'react';
import { Book, Calculator, Atom, Globe, BookOpen, PenTool } from 'lucide-react';
import './SubjectsGrid.css';

const subjects = [
  { name: 'Mathematics', icon: <Calculator /> },
  { name: 'Science', icon: <Atom /> },
  { name: 'English', icon: <Book /> },
  { name: 'Social Studies', icon: <Globe /> },
  { name: 'Malayalam', icon: <BookOpen /> },
  { name: 'Hindi', icon: <PenTool /> }
];

const SubjectsGrid = () => {
  return (
    <section className="subjects-section modern-section-alt">
      <div className="container">
        <h2 className="section-title">Subjects Covered</h2>
        <p className="section-subtitle">Comprehensive coverage of all major subjects for State & CBSE boards</p>
        
        <div className="subjects-grid">
          {subjects.map((sub, index) => (
            <div key={index} className="subject-card glass-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="subject-icon">{sub.icon}</div>
              <h4>{sub.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsGrid;
