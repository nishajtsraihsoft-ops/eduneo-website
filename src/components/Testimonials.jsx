import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "The one-to-one mentoring has completely transformed my daughter's confidence in Math. The teachers are incredibly patient!",
    name: "Priya S.",
    role: "Parent, Grade 6 Student",
    bgClass: "bg-light-blue"
  },
  {
    id: 2,
    text: "I love the interactive classes. It's much better than normal school because I can ask doubts immediately.",
    name: "Rahul M.",
    role: "Grade 9 Student",
    bgClass: "bg-light-yellow"
  },
  {
    id: 3,
    text: "EduNeo's CBSE materials and expert faculty helped me score 95% in my board exams. Highly recommended!",
    name: "Ananya K.",
    role: "Grade 10 Student",
    bgClass: "bg-light-pink"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="test-header">
          <h2>Success Stories</h2>
          <p>Hear from our happy students and parents</p>
        </div>

        <div className="test-grid">
          {testimonials.map(item => (
            <div key={item.id} className={`test-card ${item.bgClass}`}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#f89e1b" color="#f89e1b" />)}
              </div>
              <p className="test-text">"{item.text}"</p>
              <div className="test-author">
                <div className="author-avatar"></div>
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
