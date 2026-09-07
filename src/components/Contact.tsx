import React from 'react';
import { Mail, Phone, MapPin, FileDown, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Get in Touch</div>
          <h2 id="contact-title" className="section-title">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <p className="section-subtitle">
            Feel free to reach out for software engineering opportunities, internships, or collaboration.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards-list">
            <div className="glass-card contact-card-item">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Email Address</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="glass-card contact-card-item">
              <div className="contact-icon-box">
                <Phone size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Phone Number</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="glass-card contact-card-item">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div className="contact-info-text">
                <h4>Location</h4>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* GitHub & LinkedIn info */}
            <div className="glass-card contact-card-item">
              <div className="contact-icon-box">
                <GithubIcon size={22} />
              </div>
              <div className="contact-info-text">
                <h4>GitHub Profile</h4>
                {personalInfo.githubUrl ? (
                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">
                    {personalInfo.name} on GitHub
                  </a>
                ) : (
                  <span>GitHub Profile (Configurable in src/data/portfolioData.ts)</span>
                )}
              </div>
            </div>

            <div className="glass-card contact-card-item">
              <div className="contact-icon-box">
                <LinkedinIcon size={22} />
              </div>
              <div className="contact-info-text">
                <h4>LinkedIn Profile</h4>
                {personalInfo.linkedinUrl ? (
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {personalInfo.name} on LinkedIn
                  </a>
                ) : (
                  <span>LinkedIn Profile (Configurable in src/data/portfolioData.ts)</span>
                )}
              </div>
            </div>
          </div>

          <div className="contact-cta-panel">
            <h3>Let's Connect & Collaborate</h3>
            <p>
              Looking for a motivated developer with hands-on experience in Android, Python, Kotlin, and data visualization? I'm eager to contribute to innovative software solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%' }}>
              <a
                href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry%20-%20Maturi%20Madhulatha`}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Send size={18} />
                <span>Send Email</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Maturi_Madhulatha_Resume.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%' }}
              >
                <FileDown size={18} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
