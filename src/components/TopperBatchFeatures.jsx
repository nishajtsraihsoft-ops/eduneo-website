import React from 'react';
import { Sparkles, Video, Users, MessageCircle, FileText, Target, BrainCircuit, HeadphonesIcon, TrendingUp, Trophy } from 'lucide-react';
import './TopperBatchFeatures.css';

const features = [
  { icon: <Video />, title: "500+ Hours Live Classes", color: "#3b82f6" },
  { icon: <MessageCircle />, title: "24/7 AI Doubt Solving", color: "#8b5cf6" },
  { icon: <Users />, title: "1-on-1 Mentorship", color: "#14b8a6" },
  { icon: <FileText />, title: "Premium Study Material", color: "#f59e0b" },
  { icon: <Target />, title: "Personalized Study Plan", color: "#ef4444" },
  { icon: <BrainCircuit />, title: "Concept Building", color: "#ec4899" },
  { icon: <HeadphonesIcon />, title: "Audio Notes", color: "#6366f1" },
  { icon: <TrendingUp />, title: "Performance Analytics", color: "#10b981" },
  { icon: <Trophy />, title: "All India Mock Tests", color: "#f97316" },
  { icon: <Sparkles />, title: "Topper Strategy Sessions", color: "#0ea5e9" }
];

const TopperBatchFeatures = () => {
  return (
    <section className="topper-features modern-section-alt">
      <div className="container">
        <h2 className="section-title">Exclusive Topper Batch Features</h2>
        <p className="section-subtitle">Everything your child needs to score 95%+ in their board exams</p>
        
        <div className="topper-grid">
          {features.map((feature, index) => (
            <div key={index} className="topper-card glass-card">
              <div className="topper-icon" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                {feature.icon}
              </div>
              <h4>{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperBatchFeatures;
