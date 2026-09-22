import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  UserCheck, 
  Users, 
  Target, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  ShieldCheck
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './ExploreCourses.css';

const coursesList = [
  {
    id: 'kg-plus-two',
    number: '01',
    title: 'KG to Plus Two Tuition',
    icon: GraduationCap,
    desc: 'Comprehensive tuition classes covering all subjects from Kindergarten through Higher Secondary levels. We focus on building a robust academic foundation.',
    features: [
      'Syllabus-aligned curriculum',
      'In-depth conceptual clarity',
      'Regular performance tracking'
    ]
  },
  {
    id: 'one-teacher',
    number: '02',
    title: 'One Teacher Program',
    icon: UserCheck,
    desc: 'Experience unparalleled personalized attention with a dedicated mentor. This program assigns a single expert teacher to guide the student.',
    features: [
      '1-on-1 personalized mentorship',
      'Customized learning pace',
      'Immediate doubt resolution'
    ]
  },
  {
    id: 'batch-wise',
    number: '03',
    title: 'Batch Wise Classes',
    icon: Users,
    desc: 'Engage in structured batch learning to encourage peer interaction, healthy competition, and teamwork while maintaining a highly focused learning environment.',
    features: [
      'Peer-to-peer learning',
      'Small batch sizes',
      'Structured group discussions'
    ]
  },
  {
    id: 'exam-prep',
    number: '04',
    title: 'Exam Oriented Prep',
    icon: Target,
    desc: 'Targeted coaching strategies specifically designed to help students excel in board exams and competitive tests. We prioritize score optimization.',
    features: [
      'Extensive mock tests',
      'Advanced time management',
      'Detailed performance analytics'
    ]
  },
  {
    id: 'revision-classes',
    number: '05',
    title: '7 Days Revision Classes',
    icon: Zap,
    desc: 'Intensive, short-term revision sessions designed to quickly consolidate key concepts right before the exams. Maximize confidence in just one week.',
    features: [
      'Rapid syllabus coverage',
      'Focus on high-weightage topics',
      'Last-minute doubt clearance'
    ]
  }
];

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "You can easily enroll by clicking the 'Enroll Now' button on any course card. This will connect you directly with our admissions team via WhatsApp for personalized guidance and registration."
  },
  {
    question: "Are the classes conducted online or offline?",
    answer: "We offer both online and offline classes depending on the program. Our hybrid model ensures you have the flexibility to choose the learning mode that best suits your schedule and preferences."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, all our courses come with comprehensive, expert-curated study materials. This includes detailed revision notes, mock test papers, and exclusive digital resources."
  },
  {
    question: "Can I switch between the One Teacher Program and Batch Classes?",
    answer: "Absolutely. We understand that a student's learning needs can evolve. You can request a switch at any time, and our academic counselors will facilitate a smooth transition."
  }
];

const ExploreCourses = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="ec-page">
      {/* 1. Minimalist Hero Section */}
      <section className="ec-hero">
        <div className="ec-container ec-hero-container">
          <div className="ec-hero-content">
            <span className="ec-badge">Academic Excellence</span>
            <h1 className="ec-title">Discover Your Path to <span>Success.</span></h1>
            <p className="ec-subtitle">
              Explore our meticulously crafted programs designed to empower students with knowledge, confidence, and exam-winning strategies.
            </p>
            <div className="ec-hero-actions">
              <a href="#programs" className="ec-btn-primary">Explore Programs</a>
              <Link to="/contact" className="ec-btn-secondary">Talk to an Advisor</Link>
            </div>
          </div>
          <div className="ec-hero-visual">
            <div className="ec-abstract-shape"></div>
            <div className="ec-hero-image-wrapper">
              <img src="/favicon.png" alt="Eduneo Icon Motif" className="ec-hero-motif" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust / Stats Bar */}
      <section className="ec-stats">
        <div className="ec-container">
          <div className="ec-stats-grid">
            <div className="ec-stat-item">
              <h3 className="ec-stat-number">10k+</h3>
              <p className="ec-stat-label">Successful Students</p>
            </div>
            <div className="ec-stat-item">
              <h3 className="ec-stat-number">98%</h3>
              <p className="ec-stat-label">Board Pass Rate</p>
            </div>
            <div className="ec-stat-item">
              <h3 className="ec-stat-number">50+</h3>
              <p className="ec-stat-label">Expert Faculty</p>
            </div>
            <div className="ec-stat-item">
              <h3 className="ec-stat-number">4.9</h3>
              <p className="ec-stat-label">Average Rating <Star size={14} fill="currentColor" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="ec-why-us">
        <div className="ec-container">
          <div className="ec-section-header">
            <h2>The Eduneo Advantage</h2>
            <p>We blend traditional teaching excellence with modern methodologies.</p>
          </div>
          <div className="ec-features-grid">
            <div className="ec-feature-card">
              <div className="ec-feature-icon"><BookOpen size={24} /></div>
              <h3>100% Syllabus Coverage</h3>
              <p>Meticulous planning ensures no topic is left behind before the exams.</p>
            </div>
            <div className="ec-feature-card">
              <div className="ec-feature-icon"><Award size={24} /></div>
              <h3>Expert Verified Faculty</h3>
              <p>Learn from highly qualified educators with years of proven experience.</p>
            </div>
            <div className="ec-feature-card">
              <div className="ec-feature-icon"><ShieldCheck size={24} /></div>
              <h3>Regular PTM Frameworks</h3>
              <p>Consistent Parent-Teacher Meetings to track and discuss progress.</p>
            </div>
            <div className="ec-feature-card">
              <div className="ec-feature-icon"><Clock size={24} /></div>
              <h3>24/7 Doubt Resolution</h3>
              <p>Continuous support to ensure concepts are crystal clear at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Programs */}
      <section id="programs" className="ec-programs">
        <div className="ec-container">
          <div className="ec-section-header">
            <h2>Our Core Programs</h2>
            <p>Tailored learning experiences for every stage of your academic journey.</p>
          </div>

          <div className="ec-programs-list">
            {coursesList.map((course, index) => {
              const Icon = course.icon;
              return (
                <ScrollReveal key={course.id} direction="up" delay={index * 0.05}>
                  <div className="ec-program-card">
                    <div className="ec-program-number">{course.number}</div>
                    
                    <div className="ec-program-content">
                      <div className="ec-program-header">
                        <div className="ec-program-icon-wrapper">
                          <Icon size={28} />
                        </div>
                        <h3>{course.title}</h3>
                      </div>
                      
                      <p className="ec-program-desc">{course.desc}</p>
                      
                      <div className="ec-program-features">
                        {course.features.map((feat, fIdx) => (
                          <div key={fIdx} className="ec-feature-item">
                            <CheckCircle2 size={18} className="ec-check" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="ec-program-action">
                      <a 
                        href={`https://wa.me/917034600908?text=Hi! I am interested in the ${course.title} program.`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ec-enroll-btn"
                      >
                        Enroll Now <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="ec-faq">
        <div className="ec-container">
          <div className="ec-faq-layout">
            <div className="ec-faq-header">
              <h2>Got Questions?</h2>
              <p>Find answers to the most common questions about our programs and enrollment process.</p>
              <Link to="/contact" className="ec-faq-contact-link">Still need help? Contact us.</Link>
            </div>
            
            <div className="ec-faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`ec-faq-item ${openFaq === index ? 'active' : ''}`}
                >
                  <button 
                    className="ec-faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  <div className="ec-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="ec-cta">
        <div className="ec-container">
          <div className="ec-cta-box">
            <h2>Ready to Transform Your Learning?</h2>
            <p>Join thousands of students who have already accelerated their academic growth with Eduneo.</p>
            <div className="ec-cta-actions">
              <a href="https://wa.me/917034600908" target="_blank" rel="noopener noreferrer" className="ec-btn-primary ec-btn-large">
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreCourses;
