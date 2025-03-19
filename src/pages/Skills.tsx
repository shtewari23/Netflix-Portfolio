import React, { useState, useEffect } from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaGithub, FaGitlab, FaDatabase, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiGraphql, SiRedis, SiMongodb, SiElasticsearch, SiMysql, SiWebrtc, SiRubyonrails, SiTypescript, SiPostgresql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiHtml5, SiCss3 } from 'react-icons/si';

// Define skill type
interface Skill {
  name: string;
  category: string;
  icon: string;
  description: string;
}

// Icon mapping
const iconMap: { [key: string]: JSX.Element } = {
  FaReact: <FaReact />,
  SiNextdotjs: <SiNextdotjs />,
  FaJs: <FaJs />,
  SiGraphql: <SiGraphql />,
  SiTypescript: <SiTypescript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,

  // Backend
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  SiRedis: <SiRedis />,
  SiMongodb: <SiMongodb />,
  SiElasticsearch: <SiElasticsearch />,
  SiMysql: <SiMysql />,
  SiWebrtc: <SiWebrtc />,
  SiRubyonrails: <SiRubyonrails />,
  SiPostgresql: <SiPostgresql />,

  // Cloud Deployment
  FaAws: <FaAws />,
  SiGooglecloud: <SiGooglecloud />,
  FaDocker: <FaDocker />,
  SiKubernetes: <SiKubernetes />,
  FaGithub: <FaGithub />,
  FaGitlab: <FaGitlab />,
};

// Demo data inside the file
const demoSkills: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend", icon: "FaReact", description: "A JavaScript library for building user interfaces." },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs", description: "A React framework for production-ready web applications." },
  { name: "JavaScript", category: "Frontend", icon: "FaJs", description: "A programming language for web development." },
  { name: "GraphQL", category: "Frontend", icon: "SiGraphql", description: "A query language for APIs." },
  { name: "TypeScript", category: "Frontend", icon: "SiTypescript", description: "A strongly typed superset of JavaScript." },
  { name: "HTML5", category: "Frontend", icon: "SiHtml5", description: "The standard markup language for creating web pages." },
  { name: "CSS3", category: "Frontend", icon: "SiCss3", description: "A style sheet language used for styling web pages." },
  { name: "Tailwind-CSS", category: "Frontend", icon: "SiWebrtc", description: "A protocol for real-time communication between client and server." },


  // Backend
  { name: "Node.js", category: "Backend", icon: "FaNodeJs", description: "A JavaScript runtime built on Chrome's V8 engine." },
  { name: "Redis", category: "Backend", icon: "SiRedis", description: "An in-memory key-value database for caching and speed." },
  { name: "MongoDB", category: "Backend", icon: "SiMongodb", description: "A NoSQL database for modern applications." },
  { name: "ElasticSearch", category: "Backend", icon: "SiElasticsearch", description: "A search engine for indexing and analyzing data." },
  { name: "MySQL", category: "Backend", icon: "SiMysql", description: "A relational database management system." },
  { name: "GraphQL", category: "Backend", icon: "SiGraphql", description: "A flexible and efficient API query language." },

  // Cloud Deployment
  { name: "AWS", category: "Cloud Deployment", icon: "FaAws", description: "Amazon's cloud computing platform." },
  { name: "Google Cloud", category: "Cloud Deployment", icon: "SiGooglecloud", description: "Google’s cloud computing services." },
  { name: "Docker", category: "Cloud Deployment", icon: "FaDocker", description: "A containerization platform for developers." },
  { name: "GitHub", category: "Cloud Deployment", icon: "FaGithub", description: "A Git repository hosting service." },
  { name: "GitLab", category: "Cloud Deployment", icon: "FaGitlab", description: "A DevOps platform for managing repositories and CI/CD." },
];

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  // Simulate fetching data
  useEffect(() => {
    setSkillsData(demoSkills);
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: { [key: string]: Skill[] }, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
