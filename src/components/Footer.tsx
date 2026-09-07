import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <button
          onClick={scrollToTop}
          className="btn btn-secondary btn-sm"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp size={16} />
          <span>Back to Top</span>
        </button>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
