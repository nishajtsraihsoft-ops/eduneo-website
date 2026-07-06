import React from 'react';
import './AppDownloadCTA.css';

const AppDownloadCTA = () => {
  return (
    <section className="app-download-section modern-section">
      <div className="container app-download-container">
        <div className="app-download-content animate-slide-up">
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
            Learn on your <span className="gradient-text">phone or computer</span>
          </h2>
          <p className="app-download-description">
            Continue your preparation on any device. Android phone, iOS, iPad or your computer.
            <br /><br />
            Download lessons and learn anytime and anywhere with the Eduneo app. Perfect for students from LKG to Class 12.
          </p>
          <div className="app-store-buttons">
            <button className="store-btn apple-btn">
              <span className="store-icon"></span>
              <div className="store-text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </button>
            <button className="store-btn google-btn">
              <span className="store-icon">▶</span>
              <div className="store-text">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
        </div>
        <div className="app-download-image-wrapper">
          <div className="device-mockup phone-mockup floating-animation glass-card">
            <div className="screen">
              <div className="mockup-content">Eduneo App</div>
            </div>
          </div>
          <div className="device-mockup laptop-mockup floating-animation-delayed glass-card">
            <div className="screen">
              <div className="mockup-content">Eduneo Web</div>
            </div>
            <div className="keyboard"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
