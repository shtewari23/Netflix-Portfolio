import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {


  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open('https://drive.google.com/file/d/1kBM4ch_Zl5TyK_4SEa64Mg5U9Djl8KJW/view' ,'_blank');
  };

  const handleLinkedinClick = () => { 
    window.open('https://www.linkedin.com/in/shubham-tewari-678818123/', '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>Shubham Tewari</h1>
        <p className="banner-description">
        I am an experienced web developer with a strong focus on solution-driven collaboration and a passion for building scalable, high-performance applications. Proficient in crafting consumer-centric websites and applications, I specialize in React, Next.js, JavaScript, TypeScript, Node.js, Go, MongoDB, and AWS, ensuring seamless user experiences across both desktop and mobile platforms.

With expertise in frontend and full-stack development, I have successfully designed and deployed robust applications, integrating real-time features, authentication, and API-driven architectures. My skills extend to performance optimization, responsive UI/UX design, state management (Redux/Zustand), and cloud-based deployments.

        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
