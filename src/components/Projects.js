import React from 'react';
import './Projects.css';
import arrowIcon from '../images/arrow.png';
import al from '../images/pp1.png';
import aa from '../images/i1.jpg';
import cv from '../images/pp3.png';
import ps from '../images/pp4.png';
import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

function Projects() {
  const handlecontactClick = () => {
    window.location.href = './#contact';
  };

  const projectsData = [
    {
      imgSrc: cv,
      altText: 'Project 3',
      title: 'CosmoVibes',
      features: ['Pygame module', 'Interactive interface', 'Smooth relaxing bg music'],
      githubLink: 'https://github.com/mohit01-10/CosmoVibes',
      demoLink: 'https://devpost.com/software/cosmovibes'
    },
    {
      imgSrc: aa,
      altText: 'Project 2',
      title: 'AlzAware',
      features: ['Stacking Ensemble Framework', 'Multi-class Classification', 'High Recall and Scalability'],
      githubLink: 'https://github.com/mohit01-10/Alzheimer-s-Disease-Classification-using-Stacking-Ensembling',
      demoLink: 'https://github.com/'
    },
    {
      imgSrc: ps,
      altText: 'Project 1',
      title: 'PySqueeze',
      features: ['Huffman and LZW Algos', 'Multiple file format support', 'Offline Compression'],
      githubLink: 'https://github.com/mohit01-10/LZW_and_Huffman_Compression_Algorithm',
      demoLink: 'https://github.com/'
    },
    {
      imgSrc: al,
      altText: 'Project 4',
      title: 'ALab',
      features: ['AI-based Question Generator', 'Schedule Exams', 'Classrooms Support'],
      githubLink: 'https://github.com/',
      demoLink: 'https://github.com/'
    }
  ];

  return (
    <div>
    <section id="projects">
      <h1 className="title">Projects</h1>
      <p className="section__text__p1">Browse My Recent. What I've Been Up To!</p>
      <br></br>
      <div className="container grid">
        <div className="projects-container container grid">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              imgSrc={project.imgSrc}
              altText={project.altText}
              title={project.title}
              features={project.features}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handlecontactClick}
      />
    </section>
    <br></br>
       <section id="research">
       <h1 className="title">Research</h1>
       <p className="section__text__p1">My current research and what I've done</p>
        <br></br>

       <div className="details-container" >
         <p>
         <FontAwesomeIcon icon={faReact} /> Authored a research paper on <i>“Renewable energy source selection using T-spherical fuzzy soft Dombi aggregation operators”</i>, with the paper accepted in ICET 2023 for publication by Scrivener Publishing.</p>
         <p><br></br>
         <FontAwesomeIcon icon={faReact} /> Co-Authored a book chapter titled <i>“Predicting Alzheimer’s Disease: A Case Study Using Federated Learning
           Framework”</i>, with the chapter accepted in FLAIOE for publishing by Springer .</p>
           <br></br>
         <p>
         <FontAwesomeIcon icon={faReact} /> Co-Authored a research paper titled <i>“A Multi-class Ensemble Framework for Alzheimer Disease Classification
       ”</i>, with the under review by editor of the journal Computers in Biology and Medicine. 
         </p>
       </div>
     </section>
     </div>
  );
}

export default Projects;
