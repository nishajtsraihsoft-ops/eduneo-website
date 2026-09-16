import React from 'react';
import './LearningSupport.css';

const LearningSupport = () => {
  const lkgUkgSubjects = [
    'English', 'Malayalam', 'Hindi', 'Arabic', 'Mathematics', 'EVS'
  ];

  const grade1to12Subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Hindi', 'Malayalam', 'Arabic',
    'Accountancy', 'Economics', 'Business Studies', 'Social Science', 'Computer Science', 'French', 'EVS'
  ];

  const baseClasses = [
    'English Base Classes', 'Malayalam Base Classes', 'Hindi Base Classes', 'Arabic Base Classes'
  ];

  return (
    <section className="learning-support-section">
      <div className="container">
        
        {/* Title */}
        <div className="support-header">
          <h2 className="support-title">
            Learning support for <span className="support-title-highlight">every stage</span>
          </h2>
        </div>

        <div className="support-content">
          {/* LKG - UKG */}
          <div className="support-group">
            <h3 className="group-title">LKG – UKG</h3>
            <div className="pills-wrapper">
              {lkgUkgSubjects.map((subject, idx) => (
                <div key={idx} className="subject-pill">
                  {subject}
                </div>
              ))}
            </div>
          </div>

          {/* Grade 1 - 12 */}
          <div className="support-group">
            <h3 className="group-title">Grade 1 – 12</h3>
            <div className="pills-wrapper">
              {grade1to12Subjects.map((subject, idx) => (
                <div key={idx} className="subject-pill">
                  {subject}
                </div>
              ))}
            </div>
          </div>

          {/* Base Classes */}
          <div className="support-group">
            <h3 className="group-title">BASE CLASSES</h3>
            <div className="pills-wrapper">
              {baseClasses.map((item, idx) => (
                <div key={idx} className="subject-pill base-pill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningSupport;
