import React from 'react';
import './ExploreCourses.css';

const ExploreCourses = () => {
  return (
    <div className="explore-courses-page">
      {/* Top Geometric Banner */}
      <div className="courses-top-banner">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMid slice">
           <polygon points="0,160 0,260 100,260" fill="#67a775" />
           <polygon points="100,0 300,0 450,130 100,130" fill="#e7612f" />
           <polygon points="100,130 450,130 300,260 100,260" fill="#f7cd55" />
           <rect x="450" y="0" width="400" height="260" fill="#55a8e0" />
           <path d="M 850,0 A 130 130 0 0 1 850,260 Z" fill="#f7cd55" />
           <path d="M 1110,0 A 130 130 0 0 0 1110,260 Z" fill="#f7cd55" />
           <polygon points="1110,260 1310,260 1410,100" fill="#1b4a83" />
           <polygon points="1410,0 1600,0 1600,260" fill="#e7612f" />
        </svg>
      </div>

      {/* Hero Section */}
      <section 
        className="courses-hero-typographic"
        style={{
          backgroundImage: `url('/courses-hero')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className="courses-hero-content">
            <span className="courses-subtitle">Our Programs</span>
            <h1 className="courses-title">Explore Courses At Eduneo</h1>
            <p className="courses-description">
              AI + Human powered soft skills and academic programs designed to unlock student potential across all levels.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Marquee Line */}
      <div className="courses-marquee-container">
        <div className="courses-marquee-track">
          <div className="marquee-content">
            <span className="marquee-item">✦ 100% Syllabus Coverage</span>
            <span className="marquee-item">✦ Expert Verified Faculty</span>
            <span className="marquee-item">✦ Regular PTM Frameworks</span>
            <span className="marquee-item">✦ Comprehensive Mock Tests</span>
            <span className="marquee-item">✦ Interactive Digital Classrooms</span>
            <span className="marquee-item">✦ Personalized Learning Paths</span>
            <span className="marquee-item">✦ 24/7 Doubt Resolution</span>
            <span className="marquee-item">✦ Conceptual Clarity</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="marquee-item">✦ 100% Syllabus Coverage</span>
            <span className="marquee-item">✦ Expert Verified Faculty</span>
            <span className="marquee-item">✦ Regular PTM Frameworks</span>
            <span className="marquee-item">✦ Comprehensive Mock Tests</span>
            <span className="marquee-item">✦ Interactive Digital Classrooms</span>
            <span className="marquee-item">✦ Personalized Learning Paths</span>
            <span className="marquee-item">✦ 24/7 Doubt Resolution</span>
            <span className="marquee-item">✦ Conceptual Clarity</span>
          </div>
        </div>
      </div>

      {/* Full-Width Courses Section */}
      <div className="fw-courses-wrapper">
        <div className="container">
          <div className="fw-courses-header">
            <h2>Our Core Programs</h2>
            <p>Comprehensive learning paths designed for academic excellence.</p>
          </div>
        </div>

        {/* Course 1 */}
        <section className="fw-course-section bg-white border-top-blue">
          <div className="container fw-course-container">
            <div className="fw-course-left">
              <h3 className="fw-course-title">KG to Plus Two Tuition</h3>
              <div className="fw-course-divider bg-blue"></div>
            </div>
            <div className="fw-course-right">
              <p className="fw-course-desc">
                Comprehensive tuition classes covering all subjects from Kindergarten through Higher Secondary levels. We focus on building a robust academic foundation that grows with the student, ensuring no conceptual gaps remain.
              </p>
              <ul className="fw-course-features">
                <li>Syllabus-aligned curriculum</li>
                <li>In-depth conceptual clarity</li>
                <li>Regular performance tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course 2 */}
        <section className="fw-course-section bg-light-gray border-top-orange">
          <div className="container fw-course-container">
            <div className="fw-course-left">
              <h3 className="fw-course-title">One Teacher Program</h3>
              <div className="fw-course-divider bg-orange"></div>
            </div>
            <div className="fw-course-right">
              <p className="fw-course-desc">
                Experience unparalleled personalized attention with a dedicated mentor. This program assigns a single expert teacher to guide the student through their entire academic journey, adapting completely to the student's pace.
              </p>
              <ul className="fw-course-features">
                <li>1-on-1 personalized mentorship</li>
                <li>Customized learning pace</li>
                <li>Immediate doubt resolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course 3 */}
        <section className="fw-course-section bg-white border-top-yellow">
          <div className="container fw-course-container">
            <div className="fw-course-left">
              <h3 className="fw-course-title">Batch Wise Classes</h3>
              <div className="fw-course-divider bg-yellow"></div>
            </div>
            <div className="fw-course-right">
              <p className="fw-course-desc">
                Engage in structured batch learning to encourage peer interaction, healthy competition, and teamwork while maintaining a highly focused learning environment with optimal student-to-teacher ratios.
              </p>
              <ul className="fw-course-features">
                <li>Peer-to-peer learning</li>
                <li>Small batch sizes</li>
                <li>Structured group discussions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course 4 */}
        <section className="fw-course-section bg-light-gray border-top-green">
          <div className="container fw-course-container">
            <div className="fw-course-left">
              <h3 className="fw-course-title">Exam Oriented Preparation</h3>
              <div className="fw-course-divider bg-green"></div>
            </div>
            <div className="fw-course-right">
              <p className="fw-course-desc">
                Targeted coaching strategies specifically designed to help students excel in board exams and competitive tests. We prioritize score optimization, time management, and rigorous testing patterns.
              </p>
              <ul className="fw-course-features">
                <li>Extensive mock tests</li>
                <li>Advanced time management</li>
                <li>Detailed performance analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course 5 */}
        <section className="fw-course-section bg-white border-top-dark">
          <div className="container fw-course-container">
            <div className="fw-course-left">
              <h3 className="fw-course-title">7 Days Revision Classes</h3>
              <div className="fw-course-divider bg-dark"></div>
            </div>
            <div className="fw-course-right">
              <p className="fw-course-desc">
                Intensive, short-term revision sessions designed to quickly consolidate key concepts right before the exams. Maximize confidence, recallability, and preparedness in just one week.
              </p>
              <ul className="fw-course-features">
                <li>Rapid syllabus coverage</li>
                <li>Focus on high-weightage topics</li>
                <li>Last-minute doubt clearance</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ExploreCourses;
