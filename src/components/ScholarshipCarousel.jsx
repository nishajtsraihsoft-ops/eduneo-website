import React, { useState, useEffect } from 'react';
import './ScholarshipCarousel.css';

const banners = [
  '/scholarship-banner-2.png',
  '/scholarship-banner-3.png'
];

const ScholarshipCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="scholarship-carousel-container">
      <div 
        className="scholarship-carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div className="scholarship-slide" key={index}>
            <img src={banner} alt={`Scholarship Banner ${index + 1}`} className="scholarship-img" />
          </div>
        ))}
      </div>
      
      {/* Dots navigation */}
      <div className="scholarship-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`scholarship-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScholarshipCarousel;
