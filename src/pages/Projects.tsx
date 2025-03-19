import React from 'react';
import './Projects.css';

import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaGitlab, 
  FaDatabase, FaJs, FaRegCalendarAlt 
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiRedux, SiRedis, SiPostgresql } from 'react-icons/si';

import drawing from '../assets/images/drawing.png';
import spacex from '../assets/images/spacex.png';
import appointment from '../assets/images/appointment.png';
import chatbot from '../assets/images/chatbot.png';
import ai from '../assets/images/ai.png';

const techIcons: { [key: string]: JSX.Element } = {
  "React": <FaReact />, "Node.js": <FaNodeJs />, "AWS": <FaAws />, "Docker": <FaDocker />,
  "GitLab": <FaGitlab />, "JavaScript": <FaJs />, "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />, "Redux": <SiRedux />, "Redis": <SiRedis />, 
  "PostgreSQL": <SiPostgresql />, "Database": <FaDatabase />,
  "Scheduler": <FaRegCalendarAlt />
};

const demoProjects = [
  {
    title: "Drawing Tool",
    description: "A React-based drawing tool with an interactive canvas.",
    image: drawing,
    techUsed: ["Next.js", "Node.js", "AWS", "TypeScript" ,"Redux"],
    url: "https://main--drawing-tools.netlify.app"
  },
  {
    title: "Space Program Demo",
    description: "A SpaceX capsule data display with filtering & pagination.",
    image: spacex,
    techUsed: ["React", "JavaScript", "Docker" ,"Redux"],
    url: "https://shubham-tewari-frontend-developer.vercel.app/"
  },
  {
    title: "Appointment Scheduler",
    description: "Manage and schedule appointments efficiently.",
    image: appointment,
    techUsed: ["React", "TypeScript", "Docker","Redux"],
    url: "https://elated-edison-b7be1e.netlify.app/"
  },
  {
    title: "Chat Bot Flow",
    description: "Create and manage chatbot conversation flows.",
    image: chatbot,
    techUsed: ["React", "Redis", "Docker", "Node.js"],
    url:    "https://chatbot-flow-builder-git-main-shtewari23s-projects.vercel.app/",
  },
  {
    title: "AI Demo",
    description: "AI model demos with interactive functionality.",
    image: ai,
    techUsed: ["Next.js", "GitLab", "Docker", "Node.js", "Redux"],
    url: "https://marwin-one.vercel.app/"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {demoProjects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
