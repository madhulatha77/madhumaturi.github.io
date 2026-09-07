import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="nav-brand" aria-label="Maturi Madhulatha - Back to top">
          <div className="brand-monogram">MM</div>
          <span className="brand-name">Maturi Madhulatha</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}
          id="primary-navigation"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}

          {/* Mobile-only download button inside drawer */}
          <div className="mobile-drawer-cta">
            <a
              href={personalInfo.resumePath}
              download="Maturi_Madhulatha_Resume.pdf"
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              aria-label="Download Resume (PDF)"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          {/* Desktop download button */}
          <a
            href={personalInfo.resumePath}
            download="Maturi_Madhulatha_Resume.pdf"
            className="btn btn-primary btn-sm btn-resume-nav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume (PDF)"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
