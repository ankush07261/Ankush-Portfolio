import React from 'react'
import '../css/contact.css';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiGmail,SiInstagram} from 'react-icons/si'

function Contact() {
  return (
    <div className='contact'>
      <ul className="contact-container">
        <li><h2>I can be found on ...</h2></li>
        <hr/><br/>
        <li><a className='contact-link' href="https://github.com/ankush07261" target="_blank" rel="noreferrer"><BsGithub/>ankush07261</a></li><hr/><br/>
        <li><a className='contact-link' href="mailto:ankushhegde30@gmail.com" target="_blank" rel="noreferrer"><SiGmail/>ankushhegde30@gmail.com</a></li><hr/><br/>
        <li><a className='contact-link' href="https://www.linkedin.com/in/ankush-hegde-9144b3194/" target="_blank" rel="noreferrer"><BsLinkedin/>Ankush Hegde</a></li><hr/><br/>
        <li><a className='contact-link' href="https://www.instagram.com/ankush_hegde____/" target="_blank" rel="noreferrer"><SiInstagram/>ankush_hegde____</a></li><br/>
      </ul>
    </div>
  )
} 

export default Contact