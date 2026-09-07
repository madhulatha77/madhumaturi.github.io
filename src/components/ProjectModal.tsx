import React, { useEffect, useRef } from 'react';
import { X, CheckCircle, ArrowLeft } from 'lucide-react';
import { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Basic focus trap within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Focus the close button upon opening
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      aria-describedby="modal-project-summary"
    >
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details modal"
        >
          <X size={20} />
        </button>

        <div className="modal-category">{project.category}</div>
        <h3 id="modal-project-title" className="modal-title">
          {project.title}
        </h3>

        <p id="modal-project-summary" className="project-summary">
          {project.summary}
        </p>

        <div className="project-tech-tags" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <h4 className="modal-contributions-title">
          Key Contributions & Details:
        </h4>
        <div className="modal-points-list">
          {project.points.map((point, index) => (
            <div key={index} className="modal-point-item">
              <CheckCircle size={18} aria-hidden="true" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="project-actions modal-actions">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon size={16} />
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
