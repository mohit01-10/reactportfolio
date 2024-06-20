import React from 'react';
import './Projects.css';

function ProjectCard({ imgSrc, altText, title, features, githubLink, demoLink }) {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img
          src={imgSrc}
          alt={altText}
          className="project-img"
        />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <ul className='a'>
        {features.map((feature, index) => (
          <li key={index} className={index === 2 ? 'c' : 'b'}>{feature}</li>
        ))}
      </ul>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.location.href = githubLink}
        ><i className="bx--bxl-github rotate-on-hover"></i>
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.location.href = demoLink}
        ><i className="bx--link rotate-on-hover"></i>
          Demo
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
