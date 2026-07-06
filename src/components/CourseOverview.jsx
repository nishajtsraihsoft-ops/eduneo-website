import React from 'react';
import { PlayCircle, FileText, CheckCircle, Clock } from 'lucide-react';
import './CourseOverview.css';

const CourseOverview = () => {
  return (
    <section className="course-overview modern-section">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-content animate-slide-up">
            <h2 className="section-title" style={{textAlign: 'left'}}>What's Included in the Program?</h2>
            <p className="overview-desc">
              Our comprehensive program covers everything a student needs from LKG to Class 12, ensuring they not only score high in exams but also build a strong foundational understanding of concepts.
            </p>
            
            <div className="overview-features">
              <div className="of-item">
                <PlayCircle className="text-blue" />
                <div>
                  <h4>Interactive Video Lessons</h4>
                  <p>Engaging visual content that makes complex topics easy.</p>
                </div>
              </div>
              <div className="of-item">
                <FileText className="text-purple" />
                <div>
                  <h4>Comprehensive Study Notes</h4>
                  <p>Downloadable PDFs for quick revision.</p>
                </div>
              </div>
              <div className="of-item">
                <CheckCircle className="text-green" />
                <div>
                  <h4>Chapter-wise Assignments</h4>
                  <p>Practice exercises to reinforce learning.</p>
                </div>
              </div>
              <div className="of-item">
                <Clock className="text-orange" />
                <div>
                  <h4>24/7 Access to Recordings</h4>
                  <p>Missed a class? Watch the recording anytime.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overview-image animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card image-card">
              <img src="/hero-img-3.png" alt="Student studying" className="course-img" />
              <div className="floating-play">
                <PlayCircle size={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
