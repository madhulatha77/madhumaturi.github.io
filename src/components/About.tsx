import React from 'react';
import { Smartphone, Code2, BarChart3, Database } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">About Me</div>
          <h2 id="about-title" className="section-title">
            Passionate About <span className="gradient-text">Software & Mobile Engineering</span>
          </h2>
          <p className="section-subtitle">
            A detail-oriented IT student blending native Android development, web technologies, and data visualization.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-card">
            <p className="about-text">
              {personalInfo.summary}
            </p>
          </div>

          <div className="about-features">
            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Smartphone size={22} />
              </div>
              <h3 className="feature-title">Android Development</h3>
              <p className="feature-desc">
                Building responsive mobile interfaces with Kotlin and Android Studio, including WebView integrations.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Code2 size={22} />
              </div>
              <h3 className="feature-title">Software Engineering</h3>
              <p className="feature-desc">
                Writing robust code in Python and C with strong foundations in client-server architecture and REST APIs.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <BarChart3 size={22} />
              </div>
              <h3 className="feature-title">Data Visualization</h3>
              <p className="feature-desc">
                Crafting interactive Power BI reports and performing data cleaning for business intelligence insights.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon-wrapper">
                <Database size={22} />
              </div>
              <h3 className="feature-title">Systems & Architecture</h3>
              <p className="feature-desc">
                Understanding distributed systems basics, authentication workflows, and local storage management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
