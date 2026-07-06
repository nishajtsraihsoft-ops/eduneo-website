import React from 'react';
import './CreativeTestimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'AARAV',
    age: '10TH GRADE',
    location: 'INDIA',
    title: 'TOP SCORER',
    subtitle: 'BOARD EXAMS',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=200&q=80',
    colorClass: 'bg-red'
  },
  {
    id: 2,
    name: 'SHANVI',
    age: '8TH GRADE',
    location: 'INDIA',
    title: 'MATH GENIUS',
    subtitle: 'OLYMPIAD WINNER',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=200&q=80', 
    colorClass: 'bg-blue'
  },
  {
    id: 3,
    name: 'MEERA',
    age: '12TH GRADE',
    location: 'INDIA',
    title: 'ENTRANCE PRO',
    subtitle: 'NEET CRACKER',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    colorClass: 'bg-yellow'
  }
];

const CreativeTestimonials = () => {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="ts-header">
          <div className="ts-title-col">
            <h2>Our Superstars</h2>
          </div>
          <div className="ts-desc-col">
            <p>We use communication skills and confidence building exercises to unlock the superstar potential inside you.</p>
          </div>
        </div>

        <div className="ts-cards-container">
          {testimonialsData.map((t) => (
            <div key={t.id} className="ts-card">
              <div className={`ts-avatar-wrapper ${t.colorClass}`}>
                <img src={t.image} alt={t.name} className="ts-avatar" />
              </div>
              <div className="ts-info">
                <div className="ts-info-top">
                  <h4 className="ts-name">{t.name}</h4>
                  <span className="ts-demographics">{t.age}<br/>{t.location}</span>
                </div>
                <div className="ts-info-bottom">
                  <h3 className="ts-title">{t.title}</h3>
                  <span className="ts-subtitle">{t.subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeTestimonials;
