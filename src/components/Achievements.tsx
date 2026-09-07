import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Key Highlights</div>
          <h2 id="achievements-title" className="section-title">
            Major <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Notable milestones recognized through international competitive coding and academic performance.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <div key={index} className="glass-card achievement-card">
              <div className="achievement-icon-box">
                {index === 0 ? <Trophy size={26} /> : <Star size={26} />}
              </div>

              <div>
                <div className="achievement-value gradient-text">{item.value}</div>
                <h3 className="achievement-label">{item.label}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
