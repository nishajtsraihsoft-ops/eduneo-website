import React, { useState, useEffect, useRef } from 'react';
import './StatsOverview.css';

const StatCard = ({ title, value, label }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const targetValue = parseInt(value.replace(/,/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(targetValue / (duration / 16));
          
          const timer = setInterval(() => {
            start += step;
            if (start > targetValue) {
              setCount(targetValue);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <div className="stat-card glass-card-dark" ref={cardRef}>
      <h4 className="stat-title">{title}</h4>
      <div className="stat-value text-gradient-light">{count.toLocaleString()}+</div>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const StatsOverview = () => {
  return (
    <section className="stats-overview-section modern-section">
      <div className="container stats-container">
        <div className="stats-header animate-slide-up">
          <h2 className="section-title" style={{textAlign: 'left', color: 'white'}}>Students Love Eduneo</h2>
          <p style={{color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '2rem'}}>
            Get unlimited access to structured courses & doubt clearing sessions from LKG to Class 12.
          </p>
          <button className="btn-modern btn-white">Start Learning</button>
        </div>
        <div className="stats-grid">
          <StatCard title="Assessments" value="10,200" label="Mock Tests" />
          <StatCard title="Preparation" value="150,000" label="Practice Questions" />
          <StatCard title="Interactive" value="2,000" label="Live Classes" />
          <StatCard title="Self-Paced" value="1,200" label="Video Lessons" />
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
