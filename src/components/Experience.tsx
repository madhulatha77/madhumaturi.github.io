import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Work Experience</div>
          <h2 id="experience-title" className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software and Android application development experience in industry settings.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>

              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">{exp.company}</div>
                  </div>

                  <div className="exp-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="exp-bullets">
                  {exp.points.map((point, pIndex) => (
                    <div key={pIndex} className="exp-bullet">
                      <CheckCircle size={16} className="exp-bullet-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
