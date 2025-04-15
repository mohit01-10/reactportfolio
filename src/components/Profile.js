import React from 'react';
import './Profile.css';
import profilePic from "../images/imggg-modified.png";
import bgi from "../images/mountains-landscape-scery-8K-163.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Profile() {
  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/in-mohit/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/mohit01-10';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/mohit1.001/';
  };

  const handleContactClick = () => {
    window.location.href = './#contact';
  };

  const handleResumeClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1xJdFdkHU4S9EKcPMWyjTKeloVUGaBv8S/view?usp=sharing';
  };

  return (
    <div className="fs" style={{ backgroundImage: `url(${bgi})` }}>
      <section id="home">
        {/* <div className="section__pic-container">
          <img src={profilePic} alt="Profile" className="profilepic" />
        </div> */}
        <div className="section__text">
          <h1 className="title0">Welcome and<br/> Hi, I'm <span id="typing-text" className="typing-animation">Mohit!🖐️</span></h1>
          <p className="section__text__p2"><b>Software Engineer</b></p>
          <p className="section__text__p3">Currently pursuing Computer Science degree with proficiency in AI&ML at the Jaypee University of Information Technology-Solan.</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleContactClick}>
              Connect
            </button>
            <button className="btn btn-color-1" onClick={handleResumeClick}>
              Resume<i className="gg--file-document"></i>
            </button>
          </div>
        </div>
        <div className="socials">
          <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={handleLinkedInClick} title="My LinkedIn profile" />
          <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubClick} title="My Github profile" />
          <FontAwesomeIcon icon={faInstagram} className="icon" onClick={handleInstagramClick} title="My Instagram profile" />
        </div>
        <div className="nsocials">
          <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={handleLinkedInClick} title="My LinkedIn profile" />
          <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubClick} title="My Github profile" />
          <FontAwesomeIcon icon={faInstagram} className="icon" onClick={handleInstagramClick} title="My Instagram profile" />
        </div>
        
      </section>
    </div>
  );
}

export default Profile;
