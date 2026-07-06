import React from 'react';
import './GlobalReach.css';

const countries = [
  { name: 'United States', flag: '🇺🇸' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'India', flag: '🇮🇳' },
];

const GlobalReach = () => {
  return (
    <section className="global-reach-section modern-section" style={{backgroundColor: 'var(--primary-dark)'}}>
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>Serving Students Globally</h2>
        <p className="section-subtitle" style={{color: '#cbd5e1'}}>
          Eduneo provides world-class online tuition from LKG to Class 12 to students across the globe.
        </p>
        <div className="flags-grid">
          {countries.map((country, index) => (
            <div className="flag-card glass-card-dark" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <span className="flag-emoji" role="img" aria-label={`${country.name} flag`}>
                {country.flag}
              </span>
              <span className="country-name">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
