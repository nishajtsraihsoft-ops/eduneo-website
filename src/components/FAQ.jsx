import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  { q: "How do I book a free demo class?", a: "You can simply click on the 'Book Free Trial' button, fill in your details, and our team will schedule a session at your convenience." },
  { q: "What happens if my child misses a live class?", a: "Every live session is recorded and made available in the student dashboard within 24 hours for revision." },
  { q: "Are the teachers qualified?", a: "Yes, we have a strict vetting process. Our faculty members have an average of 10+ years of teaching experience in CBSE and State syllabi." },
  { q: "Can we switch from Batch to One-to-One later?", a: "Absolutely! You can upgrade your child's learning plan at any time by contacting your dedicated mentor." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq section">
      <div className="container">
        <div className="section-header text-center" style={{textAlign: 'center', margin: '0 auto 4rem auto', maxWidth: '600px'}}>
          <h2 style={{fontSize: '3rem', color: 'var(--primary-dark)'}}>Frequently Asked Questions</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--text-muted)'}}>Got questions? We've got answers.</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIdx === idx ? 'open' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                {openIdx === idx ? <ChevronUp color="var(--ps-pink)" /> : <ChevronDown color="var(--text-muted)" />}
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
