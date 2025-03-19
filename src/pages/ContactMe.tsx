import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../assets/images/shubham.png';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

const ContactMe: React.FC = () => {

  const [userData, setUserData] = useState<IContactMe>()

 

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Shubham Tewari" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">Shubham Tewari</h3>
          <p className="badge-title">Full Stack Developer</p>
          <p className="badge-description">
          I am an experienced web developer with a strong focus on solution-driven collaboration. Proficient in crafting consumer-centric websites utilizing CSS, React, JavaScript, NodeJS, AWS, TypeScript, MongoDb, Go, NextJs. I have successfully created products catering to both desktop and mobile users.
          </p>
          <p className="badge-company">San Lak Services</p>
          <a
            href="https://www.linkedin.com/in/shubham-tewari-678818123/"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat. Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:shtewari23@gmail.com`} className="contact-link">
            shtewari23@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:+91 7307728791`} className="contact-link">
            +91 7307728791
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
