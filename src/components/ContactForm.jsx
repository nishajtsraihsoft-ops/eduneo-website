import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section modern-section-alt">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info animate-slide-up">
            <h2 className="section-title" style={{textAlign: 'left'}}>Get In Touch</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem'}}>
              Have questions about our programs or want to schedule a free demo? Our team is here to help!
            </p>
            <div className="contact-details">
              <div className="cd-item">
                <div className="cd-icon bg-blue-light text-blue">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="cd-item">
                <div className="cd-icon bg-purple-light text-purple">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p>info@eduneoacademy.com</p>
                </div>
              </div>
              <div className="cd-item">
                <div className="cd-icon bg-green-light text-green">📍</div>
                <div>
                  <strong>Location</strong>
                  <p>Global Online Platform</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form className="glass-card form-card">
              <h3>Send us a message</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Student's Grade</label>
                <select>
                  <option>Select Grade...</option>
                  <option>LKG/UKG</option>
                  <option>Class 1 - 4</option>
                  <option>Class 5 - 8</option>
                  <option>Class 9 - 12</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn-modern btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
