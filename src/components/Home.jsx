import React from 'react'
import '../css/home.css';
import '../css/mobileBtns.css';
import profileImage from '../images/profilepicture.jpg';
// import gmail from '../images/Social-icons/gmail.png';
// import linkedin from '../images/Social-icons/linkedIn.png';
// import github from '../images/Social-icons/github.png';
// import instagram from '../images/Social-icons/Instagram.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="about-me-page">
      <div className="container">
        <div className="sub-container my-profile-image">
          <img src={profileImage} alt='dp' className='profile-image' />
          <div className="socials-container">
            <a href="mailto:ankushhegde30@gmail.com" target="_blank" rel="noreferrer"><img src="https://imgs.search.brave.com/P9pcvgakb_cqM9ytfEOTQkMTN2oqghoXWxjJMk_m67Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1NzkwNjE2/OWdtYWlsLWxvZ28t/cG5nLnBuZw" alt="gmail" className="social" /></a>
            <a href="https://www.linkedin.com/in/ankush-hegde-9144b3194/" target="_blank" rel="noreferrer"><img src="https://imgs.search.brave.com/0onedxgdJWLsAOrzVTbco23TxXLuDJGb_uBUL74bc7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" alt="linkedin" className="social" /></a>
            <a href="https://github.com/ankush07261" target="_blank" rel="noreferrer"><img src="https://imgs.search.brave.com/5hVQxMAtkCJmcekrFbg8RXXEbWKhBNRXJDGCNaUnVlw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2hpZnQtbG9n/b3R5cGVzLzMyL0dp/dGh1Yi0xMjgucG5n" alt="github" className="social" /></a>
            <a href="https://www.instagram.com/ankush_hegde____/" target="_blank" rel="noreferrer"><img src="https://imgs.search.brave.com/cjmPSCU-BU4q8Xd6oQwTUTo5hBrkOrFqFe1Q2qVCO7E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA0L2luc3RhZ3Jh/bS1sb2dvLnBuZw" alt="instagram" className="social" /></a>
          </div>
        </div>
        <div className="line"></div>
        <div className="sub-container about-me">
          <p className='me-text-primary'>
            Hello there <span className="hello">👋🏻</span>,<br /><br/>
            I am a <span className="highlight">Full-stack Web developer</span> who can build good interactive and responsive web applications.<br /><br />
            I am also interested in <span className="highlight">Cybersecurity</span>. <br /><br />
            <b><a className="resume" href="https://drive.google.com/file/d/1wn5TJj9w_TvSz0kdkqy0A0f5svm02_-6/view?usp=sharing" target="_blank" rel="noreferrer"> My resume</a></b>
          </p>
          <Link to='/about-me' className='mobile-nav-elements'>About me &rArr;</Link>
        </div>
      </div>
      <div className="web-built">
        <p>This website is built using ReactJS.</p>
      </div>
    </div>
  )
}

export default Home
