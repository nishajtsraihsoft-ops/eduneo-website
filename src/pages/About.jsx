import React from 'react';
import { Target, Lightbulb, Heart, Shield, Award, Calendar, Users, CheckCircle, Mail, Globe, Sparkles, BookOpen, GraduationCap, Pencil, Calculator } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const About = () => {
  const teachers = [
    { name: 'Dr. Ramesh Kumar', subject: 'Mathematics Specialist', exp: '12+ Years Exp', grad: 'M.Sc., Ph.D.' },
    { name: 'Prof. Sarah Mathews', subject: 'Physics & Chemistry Expert', exp: '10+ Years Exp', grad: 'M.Tech, B.Ed.' },
    { name: 'Anjali S. Pillai', subject: 'English & Literature Coach', exp: '8+ Years Exp', grad: 'M.A., B.Ed.' },
    { name: 'Aswin Jose', subject: 'Computer Science Instructor', exp: '7+ Years Exp', grad: 'MCA' }
  ];

  return (
    <div className="about-page">
      {/* Top Geometric Banner */}
      <div style={{ width: '100%', height: '140px', overflow: 'hidden', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1600 260" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
           <polygon points="0,160 0,260 100,260" fill="#44a6d9" />
           <polygon points="100,0 300,0 450,130 100,130" fill="#264790" />
           <polygon points="100,130 450,130 300,260 100,260" fill="#44a6d9" />
           <rect x="450" y="0" width="400" height="260" fill="#264790" />
           <path d="M 850,0 A 130 130 0 0 1 850,260 Z" fill="#44a6d9" />
           <path d="M 1110,0 A 130 130 0 0 0 1110,260 Z" fill="#44a6d9" />
           <polygon points="1110,260 1310,260 1410,100" fill="#264790" />
           <polygon points="1410,0 1600,0 1600,260" fill="#44a6d9" />
        </svg>
      </div>

      {/* Split Hero Banner (Exact SVG Design) */}
      <section className="custom-about-hero">
        
        {/* Floating Education Design Elements */}
        <div className="hero-floating-element element-edu-1">
          <GraduationCap size={42} strokeWidth={1.5} color="#44a6d9" />
        </div>
        <div className="hero-floating-element element-edu-2">
          <BookOpen size={36} strokeWidth={1.5} color="#264790" />
        </div>
        <div className="hero-floating-element element-edu-3">
          <Pencil size={32} strokeWidth={1.5} color="#44a6d9" />
        </div>
        <div className="hero-floating-element element-edu-4">
          <Calculator size={38} strokeWidth={1.5} color="#264790" />
        </div>

        <div className="custom-hero-left">
          <div className="custom-hero-left-content">
            <div className="custom-about-label">
              About Eduneo
            </div>
            <h1 className="custom-hero-heading">
              Empowering Minds,<br/>
              Shaping Tomorrows
            </h1>
            <p className="custom-hero-paragraph">
              EduNeo is a premier online learning destination committed to unlocking student potential. We bridge syllabus requirements with immersive, personalized digital classrooms.
            </p>
          </div>
        </div>
        <div className="custom-hero-right">
          <div className="creative-blob-container">
             <div className="creative-blob-bg"></div>
             <picture>
               <source srcSet="/about-image-1.webp" type="image/webp" />
               <img 
                 src="/about-image-1.png" 
                 alt="Student studying" 
                 className="creative-blob-img" 
                 loading="lazy"
                 decoding="async"
               />
             </picture>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Premium Redesign */}
      <ScrollReveal direction="up">
        <section className="premium-mvg-section">
          <div className="container">
            <div className="premium-mvg-header text-center">
              <h2>Our Core Philosophy</h2>
              <p>The guiding principles that drive our dedication to student success.</p>
            </div>
            <div className="premium-mvg-grid">
              
              <div className="premium-mvg-card">
                <div className="premium-mvg-icon-wrapper premium-blue-glow">
                  <div className="premium-icon-inner">
                    <Target size={32} color="#2563eb" strokeWidth={1.5} />
                  </div>
                </div>
                <h3>Mission</h3>
                <p>To make premium education accessible, interactive, and personalized for every student, regardless of their grade or syllabus.</p>
              </div>

              <div className="premium-mvg-card">
                <div className="premium-mvg-icon-wrapper premium-amber-glow">
                  <div className="premium-icon-inner">
                    <Lightbulb size={32} color="#f59e0b" strokeWidth={1.5} />
                  </div>
                </div>
                <h3>Vision</h3>
                <p>To lead the future of digital education, nurturing creative, analytical, and confident thinkers who are globally competitive.</p>
              </div>

              <div className="premium-mvg-card">
                <div className="premium-mvg-icon-wrapper premium-rose-glow">
                  <div className="premium-icon-inner">
                    <Heart size={32} color="#e11d48" strokeWidth={1.5} />
                  </div>
                </div>
                <h3>Values</h3>
                <p>Excellence, Integrity, Innovation, Empathy, and a relentless devotion to continuous student improvement.</p>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>



      {/* Why Parents Trust Us (Light Premium Redesign) */}
      <ScrollReveal direction="up">
        <section className="trust-section-light">
          <div className="container">
            
            {/* Top Horizontal Stats Banner */}
            <div className="trust-stats-horizontal-light">
               <div className="stat-item-light">
                  <div className="stat-number-light text-yellow">98%</div>
                  <div className="stat-label-light">Satisfaction Rate</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-orange">10k+</div>
                  <div className="stat-label-light">Active Students</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-blue-light">1-on-1</div>
                  <div className="stat-label-light">Mentorship Option</div>
               </div>
               <div className="stat-item-light">
                  <div className="stat-number-light text-green">100%</div>
                  <div className="stat-label-light">Syllabus Covered</div>
               </div>
            </div>

            <div className="trust-header-light text-center">
              <h2>Why Parents Trust <span className="text-highlight">EduNeo</span></h2>
              <p>Choosing the right platform shapes a student's entire foundation. Here is why thousands confidently choose us:</p>
            </div>
            
            {/* Bottom 3-Column Feature Grid */}
            <div className="trust-features-grid-light">
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-blue-glow">
                  <CheckCircle size={28} color="#44a6d9" />
                </div>
                <h4>Verified Faculty</h4>
                <p>Strict academic and background screening ensures your child learns only from top-tier educators.</p>
              </div>
              
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-orange-glow">
                  <CheckCircle size={28} color="#264790" />
                </div>
                <h4>Progress Dashboards</h4>
                <p>Get instant, transparent insight into grades, attendance, and overall performance in real-time.</p>
              </div>
              
              <div className="trust-feature-card-light">
                <div className="trust-icon-wrapper-light bg-yellow-glow">
                  <CheckCircle size={28} color="#44a6d9" />
                </div>
                <h4>Active PTM Frameworks</h4>
                <p>Regular parent-teacher meetings ensure complete alignment to resolve any academic gaps quickly.</p>
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default About;
