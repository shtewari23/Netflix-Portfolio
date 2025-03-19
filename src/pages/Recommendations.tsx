import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust as needed
import abhinavProfilePic from '../images/abhinav.png'; // Adjust as needed

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      {/* Recommendation from Kaushal Lohani */}
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Kaushal Lohani" className="profile-pic" />
          <div>
            <h3>Kaushal Lohani</h3>
            <p>Senior Full Stack Developer</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "It is with great pleasure that I write this reference for Shubham, who worked for us as a software developer at Borderfree from December 2021. Unfortunately, due to a change in the company’s structure, we have made the difficult decision to make their position redundant. This in no way reflects on their performance, which was consistently excellent."</p>
          <p>During their time with us, Shubham demonstrated strong technical expertise, a passion for problem-solving, a willingness to learn, and a collaborative spirit that greatly contributed to our team’s success. They played a pivotal role in developing and maintaining key features of our software <strong>Popstreams</strong> and <strong>Revo Viewing Service</strong>, consistently delivering high-quality code while meeting project deadlines. Their ability to quickly adapt to new technologies and their proactive approach to finding innovative solutions set them apart."</p>
          <p>💼 "Shubham also showed exceptional teamwork and communication skills, effectively collaborating with cross-functional teams, including product managers, designers, and QA. Their professionalism, positive attitude, and dedication to their work made them an asset to the team."</p>
          <p>🌟 "I have no doubt that Shubham will be a valuable addition to any organization, and I wholeheartedly recommend them for any future opportunities."</p>
        </div>
      </div>

      {/* Recommendation from Abhinav Negi */}
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={abhinavProfilePic} alt="Abhinav Negi" className="profile-pic" />
          <div>
            <h3>Abhinav Negi</h3>
            <p>Software Developer at San Lak Service</p>
            <p className="date">October 24, 2024</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "I had the privilege of working under **Shubham** at **San Lak Service**, and I can confidently say that he is one of the most talented and inspiring mentors I have had. His deep technical expertise, problem-solving ability, and leadership skills set him apart."</p>
          <p>Under Shubham’s guidance, I not only improved my coding skills but also learned how to approach complex problems strategically. He was always willing to share his knowledge and took the time to help the team grow, making sure that we understood both the **technical and business aspects** of our work.</p>
          <p>💼 "Shubham has an exceptional ability to manage projects efficiently while fostering a **collaborative and learning-driven** environment. He led by example, ensuring that everyone in the team felt **motivated and supported**. His guidance helped me develop a structured approach to software development, and I greatly admire his ability to simplify challenging concepts."</p>
          <p>🌟 "Any team would be **lucky to have Shubham** as a leader and team player. His expertise, professionalism, and positive attitude make him an invaluable asset to any organization. I highly recommend him for any role he pursues!"</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
