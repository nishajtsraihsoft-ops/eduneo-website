import React from 'react';
import { CalendarDays, CalendarClock, CalendarRange, CalendarCheck2 } from 'lucide-react';
import './ScheduleOverview.css';

const schedules = [
  { icon: <CalendarDays />, title: "Every Week", desc: "Regular consistent classes", color: "#3b82f6" },
  { icon: <CalendarRange />, title: "Every 2 Weeks", desc: "Bi-weekly intensive sessions", color: "#8b5cf6" },
  { icon: <CalendarCheck2 />, title: "Every Saturday", desc: "Weekend special batches", color: "#f59e0b" },
  { icon: <CalendarClock />, title: "Every 4 Weeks", desc: "Monthly grand mock tests", color: "#10b981" }
];

const ScheduleOverview = () => {
  return (
    <section className="schedule-overview modern-section">
      <div className="container">
        <h2 className="section-title">Flexible Schedules</h2>
        <p className="section-subtitle">Choose a batch timing that fits your child's routine</p>
        
        <div className="schedule-timeline">
          {schedules.map((schedule, index) => (
            <div key={index} className="schedule-item animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="schedule-icon-wrapper" style={{ borderColor: schedule.color, color: schedule.color }}>
                {schedule.icon}
              </div>
              <div className="schedule-content glass-card">
                <h4 style={{ color: schedule.color }}>{schedule.title}</h4>
                <p>{schedule.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleOverview;
