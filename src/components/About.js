import React from 'react';
import './About.css';
import profilePic from "../images/Black Pattern Minimalist LinkedIn Profile Picture.png";
import experienceIcon from "../images/experience.png";
import educationIcon from "../images/education.png";
import arrowIcon from "../images/arrow.png";

function About() {
  const handleExperienceClick = () => {
    window.location.href = './#experience';
  };

  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <p className="section__text__p1">Get To Know More</p>

      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={profilePic}
            alt="Profilepicture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-containera">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>Product Engg Intern @ EffiGO </p>
              <p>Research Intern @ CAIR IIT Mandi</p>
            </div>
            <div className="details-containera">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p> Bachelor of Technology in<br />Computer Science Engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I'm a student at the Jaypee University of Information Technology, majoring in computer science.<br /><br />
              I'm interested in technology and research, and I hope to one day become a software engineer.<br /><br />
              I've had a lot of success in my studies and have also gained some practical experience through internships and hackathons.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleExperienceClick}
      />
    </section>
  );
}

export default About;
