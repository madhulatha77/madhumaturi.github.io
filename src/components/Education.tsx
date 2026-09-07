import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Academic Background</div>
          <h2 id="education-title" className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical education with a consistent record of academic excellence.
          </p>
        </div>

        <div className="edu-grid">
          {educationData.map((edu, index) => {
            const isBTech = edu.scoreType === 'CGPA';
            return (
              <div key={index} className="glass-card edu-card">
                <div>
                  <div className="edu-header">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <div className="edu-period">
                      <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {edu.period}
                    </div>
                  </div>

                  <div className="edu-school">{edu.institution}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="edu-score-container">
                  <Award size={18} style={{ color: isBTech ? 'var(--success)' : 'var(--accent-primary)' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {isBTech ? 'Cumulative GPA:' : 'Aggregate Score:'}
                  </span>
                  <span className={isBTech ? 'score-badge-prominent' : 'score-badge-standard'}>
                    {edu.score} {isBTech ? 'CGPA' : ''}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
