import React from 'react'
import '../css/home.css';
import profileImage from '../images/profilepicture.jpg';

function AboutMe() {
  return (
    <div className="about-me-page">
      <div className="container">
        <div className="sub-container my-profile-image">
          <img src={ profileImage } alt='dp' className='profile-image'/>
        </div>
        <div className="line"></div>
        <div className="sub-container about-me">
          <p className='me-text-primary'>
            I am a <span className="highlight">M.E.R.N.</span> stack web developer who is looking forward to work on any Website projects.
            <br/><br/>
            I build good interactive and responsive web applications with my skills.<br /><br />
            I am also into <span className="highlight">Cybersecurity</span>. <br /><br />
            <b><a className="resume" href="https://drive.google.com/file/d/1ZhUnv4E5RH3usob5WMK0semtqBnVOLcS/view?usp=sharing" target="_blank" rel="noreferrer"> My resume</a></b>
          </p>
          
        </div>
      </div>
      <div className="web-built">
        <p>This website is built using ReactJS.</p>
      </div>
    </div>
  )
}

export default AboutMe
