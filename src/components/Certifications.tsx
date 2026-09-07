import React from 'react';
import { Award, BarChart, Bot, Trophy } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getCertIcon = (type: string) => {
    switch (type) {
      case 'code':
        return <Trophy size={20} />;
      case 'chart':
        return <BarChart size={20} />;
      case 'ai':
        return <Bot size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Certifications</div>
          <h2 id="certifications-title" className="section-title">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>
          <p className="section-subtitle">
            Recognized industry workshops, coding challenges, and specialized technical certifications.
          </p>
        </div>

        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="glass-card cert-card">
              <div className="cert-header">
                <div className="cert-icon-wrapper">
                  {getCertIcon(cert.iconType)}
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                </div>
              </div>

              <div className="cert-issuer">{cert.issuer}</div>
              <p className="cert-desc">{cert.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
