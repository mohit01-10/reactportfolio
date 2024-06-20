import React from 'react';
import './Contact.css';
import emailIcon from '../images/email.png';
import linkedinIcon from '../images/linkedin.png';
import instaIcon from '../images/insta.jpeg';
import arrowIcon from '../images/arrow.png';


function Contact() {
  const handleProfileClick = () => {
    window.location.href = './#home';
  };

  return (
    <section id="contact">
      <h1 className="title">Get in Touch</h1>
      <p className="section__text__p1">Leave a message? Contact Me Via</p>
      
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailIcon}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a className='lin' href="mailto:mohits.workmail@gmail.com">mohits.workmail</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a className='lin' href="https://www.linkedin.com/in/in-mohit/">LinkedIn</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={instaIcon}
            alt="Instagram icon"
            className="icon contact-icon"
          />
          <p><a className='lin' href="https://www.instagram.com/mohit1.001/">Instagram</a></p>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrowd"
        onClick={handleProfileClick}
      />
    </section>
  );
}

export default Contact;
