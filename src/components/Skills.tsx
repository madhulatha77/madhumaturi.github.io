import React from 'react';
import { Code, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={20} />;
      case 'layers':
        return <Layers size={20} />;
      case 'cpu':
        return <Cpu size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Technical Skills</div>
          <h2 id="skills-title" className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and concepts proven through projects, internships, and coursework.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <div className="skill-cat-icon">
                  {getIcon(category.icon)}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-tags-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-badge">
                    <CheckCircle2 size={14} className="gradient-text" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
