import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Portfolio Work</div>
          <h2 id="projects-title" className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrated technical capability in Android app engineering, web integration, and data analytics.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-top">
                <div className="project-category-tag">{project.category}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
              </div>

              <div>
                <div className="project-tech-tags" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSelectedProject(project)}
                    aria-haspopup="dialog"
                    aria-label={`Explore ${project.title} project details`}
                  >
                    <span>Explore Project</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
