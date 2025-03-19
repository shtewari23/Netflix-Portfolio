import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const experienceData = [
  {
    title: "Senior Front-End Developer",
    name: "San Lak Services",
    dateRange: "10/2024 – present",
    techStack: "Next.js, TypeScript, Material UI, GraphQL, Tailwind CSS",
    summaryPoints: [
      "Built responsive, accessible, and high-performance user interfaces, improving page load speed by 30%.",
      "Implemented Yup for form validation, reducing form submission errors by 98%.",
      "Boosted performance through code-splitting, lazy loading, and memoization, reducing re-renders by 50%.",
    ]
  },
  {
    title: "Senior Full Stack Developer",
    name: "AEye Solutions",
    dateRange: "12/2023 – 08/2024",
    techStack: "Node.js, React, Tailwind CSS, MongoDB, Redis",
    summaryPoints: [
      "Built a high-volume PDF processing engine in Node.js, enabling real-time manipulation and extraction.",
      "Designed and deployed microservices and RESTful APIs, maintaining high availability and low response times.",
      "Integrated Redis for caching and real-time data synchronization, reducing database load by 60%."
    ]
  },
  {
    title: "Full Stack Developer",
    name: "Borderfree Technologies",
    dateRange: "12/2021 – 07/2023",
    techStack: "React.js, Node.js, AWS, WebSockets, Streaming Protocols",
    summaryPoints: [
      "Developed e-commerce functionality enabling users to sell and purchase products during live streams.",
      "Implemented real-time live streaming with low-latency protocols, reducing stream delays by 50%.",
      "Engineered real-time chat, comments, and notifications supporting 10,000+ concurrent users.",
    ]
  },
  {
    title: "Junior Web Developer",
    name: "Dian Apps",
    dateRange: "05/2021 – 11/2021",
    techStack: "React.js, Node.js, API Integration",
    summaryPoints: [
      "Designed responsive, high-performance applications for Paragon and Khatabook.",
      "Integrated real-time data synchronization with API connectivity, reducing data latency by 60%."
    ]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience Timeline</h2>
      </div>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: index === 0 ? 'rgb(33, 150, 243)' : 'rgb(240, 240, 240)', color: '#fff' }}
            contentArrowStyle={{ borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }}
            date={item.dateRange}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <div style={{ color: 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              <ul>
                {item.summaryPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;