import React from 'react';
import './Experience.css';
import arrowIcon from '../images/arrow.png';
import checkmarkIcon from '../images/checkmark.png';

function Experience() {
  const handleprojectsClick = () => {
    window.location.href = './#projects';
  };

  return (
    <section id="experience">
      <h1 class="title">Skills</h1>
      <p class="section__text__p1">What I've Got and What I'm Learning </p>
      
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Web Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML/CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                 src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Figma</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                 src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Django</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                 src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Programming/Others</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>C/C++</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                 src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>R</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Dart</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Data Science</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmarkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Machine Learning</h3>
                  <p>Experienced</p>
                </div>
              </article>
             
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        class="icon arrow"
        onClick={handleprojectsClick}
      />
    </section>
  );
}

export default Experience;
