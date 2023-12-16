import React from 'react'
import '../css/aboutMe.css';

function AboutMe() {
  return (
    <>
    <div className='aboutMe-container'>
      <div className="text">
        <p className='me-text'> 
            <b><a className="resume" href="https://drive.google.com/file/d/16N8qp47wK9q5-P3PVxJbd-uZjR4zSlG3/view?usp=sharing" target="_blank" rel="noreferrer"> Click here to view my resume</a></b><br /><br />
            <b>DoB:</b> 30/04/2003<br /><br />
            <b>Open for: </b>Web Dev internships / freelancing<br/> &#40; Work from home preferred &#41;.<br /><br />
            <b>Communication languages:</b> English, Kannada, Hindi and basic German.<br /><br/> 
            <i class='fas fa-map-marker-alt'>Bangalore, India</i> 
            <br /> 
            <b>Education: </b><br />
            <ul>
              <li>Jyothy Institute of Technology, Bangalore<br />&#40; 2021 - 2025 &#41;<br />
                Computer Science and Engineering<br />
                GPA: 8.31
              </li>
              <li>S.N. Bhatt PU college of science and commerce<br /> &#40; 2019 - 2021 &#41;.<br/>
                Science with Computers.<br />
                GPA: 8.44
              </li>
              <li>Prarthana Education Society <br />&#40; 2009 - 2019 &#41;.<br/>
                Class 1 to class 10 in C.B.S.E. board<br />
                GPA: 8.24</li>
            </ul>
        </p>
      </div>
      </div>
      <div className="footer-container">
      </div>
    
    </>
  )
}

export default AboutMe
