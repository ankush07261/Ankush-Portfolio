import React, { useRef } from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import profileImage from '../images/profilepicture.jpg';

function Navbar() {

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle('responsiveNav');
  }

  return (
    <>
      <div className='navbar' id='navbar'>
        <h2><img src={profileImage} alt='dp' className='profile-image-navbar' />Ankush Hegde</h2>
        <div className="navbar-nav" id="navbar-nav"  ref={navRef}>
          <Link to='/' className='nav-elements' onClick={showNav}>Home</Link>
          <Link to='/about-me' className='nav-elements' onClick={showNav}>About me</Link>
          <Link to='/experience' className='nav-elements' onClick={showNav}>Experience</Link>
          <Link to='/skills' className='nav-elements' onClick={showNav}>Skills</Link>
          <Link to='/contact' className='nav-elements' onClick={showNav}>Contact me</Link>
          <button className="menu btn-close">
            <i class="fa fa-close" onClick={showNav}></i>
          </button>
        </div>
        <button className="menu" onClick={showNav}>
          <i class="fa fa-bars" ></i>
        </button>
      </div>
    </>
  )
}

export default Navbar
