import React, { useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import drawing from '../images/drawing.png'; // Adjust the path based on your directory structure
import spacex from '../images/spacex.png'; // Adjust the path based on your directory structure
import appointment from '../images/appointment.png'; // Adjust the path based on your directory structure
import chatbot from '../images/chatbot.png'; // Adjust the path based on your directory structure
import ai from '../images/ai.png'; // Adjust the path based on your directory structure

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />, "NodeJS": <FaNodeJs />, "AWS": <FaAws />, "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />, "Ruby On Rails": <SiRubyonrails />, "Material UI": <SiMaterialdesign />, "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />, "jQuery": <SiJquery />, "AWS-ECS": <SiAwsamplify />, 'Cognito': <FaAws />, 'Lambda': <FaAws />,
  'ECS': <FaAws />, 'Jenkins': <FaJenkins />, 'Docker': <FaDocker />, 'GraphQL': <FaDatabase />, 'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />, 'GitHub': <FaGithub />, 'Heroku': <GrDeploy />, 'Netlify': <GrDeploy />, 'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />, 'Azure': <FaMicrosoft />, 'Kubernetes': <GrKubernetes />, 'Terraform': <SiTerraform />, 'ArgoCD': <SiArgo />,
  'Java': <FaJava />, 'Spring Boot': <FaJava />, 'Python': <FaPython />, 'Node.js': <FaNodeJs />, 'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />, 'Maven': <FaJava />, 'Gradle': <FaJava />, 'JUnit': <FaJava />, 'Mockito': <FaJava />,
  'Jest': <FaReact />, 'React': <FaReact />, 'Angular': <FaAngular />, 'Vue.js': <FaVuejs />, 'Next.js': <FaReact />,
  'Gatsby': <FaReact />, 'Nuxt.js': <FaVuejs />, 'Redux': <FaReact />, 'Vuex': <FaVuejs />, 'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />, 'JQuery': <SiJquery />,
};

const demoProjects = [
  {
    title: "Drawing Tool",
    description: "It is a React-based application designed to provide users with an interactive canvas for creating and editing drawings.",
    image: { url: drawing },
    techUsed: "React, Node.js, AWS"
  },
  {
    title: "Space Program demo ",
    description: "Space Program demo site, displaying the capsules data with filter and pagination.",
    image: { url: spacex },
    techUsed: "React, Firebase, Docker"
  },
  {
    title: "Appointment Schelduler ",
    description: "It is designed to manage appointments efficiently. It allows users to create, edit,view schedules, and send reminders.",
    image: { url: appointment },
    techUsed: "React, Firebase, Docker"
  },
  {
    title: "Chat Bot Flow ",
    description: "It is a React-based application designed to create and manage conversational flows for chatbots.",
    image: { url: chatbot },
    techUsed: "React, Firebase, Docker, Node"
  },
  {
    title: "AI Demo ",
    description: "A demo site for an AI company.Hands-on demos that illustrate the functionality of AI models and about the company.",
    image: { url: ai },
    techUsed: "Next, GitLab, Docker, NodeJS, Redux"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {demoProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
