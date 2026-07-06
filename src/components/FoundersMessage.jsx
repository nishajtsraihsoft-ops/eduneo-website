import React from 'react';
import './FoundersMessage.css';

const FoundersMessage = () => {
  return (
    <section className="founders-message modern-section-alt">
      <div className="container">
        <div className="founders-grid">
          <div className="founders-image-wrapper animate-slide-up">
            <div className="glass-card image-card">
              <div className="founder-img" style={{backgroundImage: "url('/founder-placeholder.jpg')"}}></div>
              <div className="founder-badge glass-card-dark">
                <strong>John Doe</strong>
                <span>Founder & CEO</span>
              </div>
            </div>
          </div>
          
          <div className="founders-content animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title" style={{textAlign: 'left'}}>A Message From Our Founder</h2>
            <div className="quote-mark">"</div>
            <p className="message-text">
              When we started EduNeo Academy, our goal was simple: to make world-class education accessible to every child, regardless of where they live. Over the years, we've seen countless students transform from hesitant learners to confident achievers. 
            </p>
            <p className="message-text">
              We believe that with the right guidance, a structured curriculum, and a supportive mentor, every student can excel. Thank you for trusting us with your child's future.
            </p>
            <div className="signature">John Doe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
