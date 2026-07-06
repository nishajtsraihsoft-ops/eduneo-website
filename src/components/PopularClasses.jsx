import React from 'react';
import { BookOpen, GraduationCap, Edit3 } from 'lucide-react';
import './PopularClasses.css';

const PopularClasses = () => {
  return (
    <section className="popular-classes-section">
      {/* Top Background Half */}
      <div className="pc-bg-top">
        <div className="pc-bg-color pc-bg-darkblue">
           <div className="pc-tab-yellow"></div>
        </div>
        <div className="pc-bg-color pc-bg-orange"></div>
        <div className="pc-bg-color pc-bg-lightblue"></div>
        <div className="pc-bg-color pc-bg-yellow">
           <div className="pc-tab-darkblue"></div>
        </div>
      </div>

      {/* Bottom Background Half (Doodles) */}
      <div className="pc-bg-bottom"></div>

      <div className="container pc-content-wrapper">
        <h2 className="pc-title text-center">Popular Classes</h2>

        <div className="pc-cards-container">
          {/* Card 1 */}
          <div className="pc-card">
            <div className="pc-card-header">
              <BookOpen size={60} className="pc-icon pc-icon-black" strokeWidth={1.5} />
              <h3 className="pc-card-title text-orange">State Syllabus</h3>
              <div className="pc-divider"></div>
            </div>
            <div className="pc-card-content">
              <ul className="pc-list">
                <li>Comprehensive study materials</li>
                <li>Expert regional teachers</li>
                <li>Previous year question banks</li>
                <li>Regular mock tests</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="pc-card">
            <div className="pc-card-header">
              <GraduationCap size={60} className="pc-icon pc-icon-black" strokeWidth={1.5} />
              <h3 className="pc-card-title text-blue">CBSE Syllabus</h3>
              <div className="pc-divider"></div>
            </div>
            <div className="pc-card-content">
              <ul className="pc-list">
                <li>NCERT aligned curriculum</li>
                <li>National level educators</li>
                <li>Concept clarity focus</li>
                <li>Olympiad preparation</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="pc-card">
            <div className="pc-card-header">
              <Edit3 size={60} className="pc-icon pc-icon-black" strokeWidth={1.5} />
              <h3 className="pc-card-title text-green">Base Classes</h3>
              <div className="pc-divider"></div>
            </div>
            <div className="pc-card-content">
              <ul className="pc-list">
                <li>Foundational skills</li>
                <li>Interactive learning</li>
                <li>Phonics and basic math</li>
                <li>Creative activities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
