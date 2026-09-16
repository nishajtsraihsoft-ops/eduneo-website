import React from 'react';
import { Target, Users, Globe, BookOpen, TrendingUp, Gift, Check } from 'lucide-react';
import './WhyEduNeo.css';

const WhyEduNeo = () => {
  const features = [
    {
      icon: <Target size={22} />,
      title: 'Personalised Attention',
      description: 'One-to-one and batch classes designed around each student’s learning pace, level and academic needs.'
    },
    {
      icon: <Users size={22} />,
      title: 'Expert Teachers & Mentors',
      description: 'Learn from experienced teachers with dedicated mentor support to guide students throughout their journey.'
    },
    {
      icon: <Globe size={22} />,
      title: 'Flexible Learning',
      description: 'Live online classes with flexible schedules, making quality education accessible from anywhere.'
    },
    {
      icon: <BookOpen size={22} />,
      title: 'All Syllabus Support',
      description: 'Complete support for Kerala State & CBSE syllabus from LKG to Grade 12, with strong foundation and advanced learning.'
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Gulf-Friendly Learning',
      description: 'Specially designed for students living in the Gulf. Flexible evening and weekend class timings that fit students’ school schedules and time zones, making quality education easy and convenient from anywhere.'
    },
    {
      icon: <Gift size={22} />,
      title: 'Start with Free Classes',
      description: 'Experience our teaching approach with 3 free classes before choosing your program — learn first, decide later.'
    }
  ];

  return (
    <section className="why-eduneo-section">
      <div className="container">
        
        {/* Header */}
        <div className="why-eduneo-header">
          <span className="why-eyebrow">WHY EDUNEO ACADEMY · WHY LEARNING WITH US</span>
          <h2 className="why-title">Every student deserves a learning experience made for them</h2>
          <p className="why-subtitle">
            Personalised learning, expert guidance and complete academic support — all in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="why-eduneo-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-badge">
                <Check size={18} className="check-mark" />
              </div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyEduNeo;
