export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  points: string[];
  summary: string;
  githubUrl: string | null;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
}

export interface CertificationItem {
  title: string;
  issuer: string;
  details: string;
  iconType: 'code' | 'chart' | 'ai';
}

export interface AchievementItem {
  value: string;
  label: string;
  description: string;
  highlight: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  headline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  githubLabel: string;
  githubUrl: string | null;
  linkedinLabel: string;
  linkedinUrl: string | null;
  resumePath: string;
}
