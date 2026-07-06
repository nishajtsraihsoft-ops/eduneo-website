import React from 'react';
import './ParentTestimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Amreen Sidhu',
    location: 'Australia',
    date: 'Jul 13, 2024',
    title: 'I have seen a great improvement in my daughter',
    content: 'I have seen a great improvement in my daughter since she joined Eduneo. Teachers are well experienced. She is doing excellent in studies right now, highly recommended for LKG to Class 12 students.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dalia',
    location: 'UAE',
    date: 'Aug 13, 2022',
    title: 'Amazing results',
    content: 'The online tuitions provided by Eduneo was very successful in improving my child\'s skills and grades in maths. We definitely recommend this platform as it is one of the top best.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sachin Padwankar',
    location: 'India',
    date: 'Nov 07, 2024',
    title: 'I\'m Extremely Satisfied with Eduneo!',
    content: 'The teachers are highly knowledgeable, supportive, and dedicated to ensuring students\' success. Their structured lessons and personalized attention have helped my child grasp concepts easily.',
    rating: 5,
  }
];

const ParentTestimonials = () => {
  return (
    <section className="testimonials-section modern-section-alt">
      <div className="container">
        <h2 className="section-title">Why Parents Recommend Eduneo?</h2>
        <p className="section-subtitle">Hear from parents of our LKG to Class 12 students around the world.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card glass-card" key={testimonial.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <span className="testimonial-location">📍 {testimonial.location}</span>
                </div>
              </div>
              <div className="testimonial-rating-row">
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
              <h5 className="testimonial-headline">{testimonial.title}</h5>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
