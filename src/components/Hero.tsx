import React from 'react';
import { FileDown, FolderGit2, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="ambient-glow glow-purple"></div>
      <div className="ambient-glow glow-blue"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Available for Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-subtitle">
              {personalInfo.headline}
            </p>

            <p className="hero-description">
              {personalInfo.summary}
            </p>

            <div className="hero-meta">
              <div className="meta-item">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="meta-item">
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="meta-item">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-secondary">
                <FolderGit2 size={18} />
                <span>View My Projects</span>
              </a>
              <a
                href={personalInfo.resumePath}
                download="Maturi_Madhulatha_Resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-visual-card">
              <div className="monogram-avatar" aria-label="MM Initials Avatar">
                MM
              </div>
              <h2 className="profile-card-name">{personalInfo.name}</h2>
              <p className="profile-card-tag">B.Tech Information Technology</p>

              <div className="quick-stats-grid">
                <div className="stat-item">
                  <div className="stat-val">9.35</div>
                  <div className="stat-lbl">B.Tech CGPA</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">609</div>
                  <div className="stat-lbl">CodeVita Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
