import React, { useRef } from 'react'
import '../css/contact.css';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kubxz5s', 'template_ik7qq8j', form.current, 'fuiPBIeol6D2d-WNC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    navigate("/")
    window.alert("Message sent");
  };

  return (
    <div className='contact'>
      <h3>Connect with me by filling this form...</h3>
      <br/>
      <form ref={form} onSubmit={sendEmail} className='contact-container'>
      <label>Name</label>
      <input type="text" name="user_name" /><br/><br/>
      <label>Email</label>
      <input type="email" name="user_email" /><br/><br/>
      <label>Message</label>
      <textarea name="message" className='message'/>
      <input type="submit" value="Send" className='submit-btn'/>
    </form>
    </div>
  )
} 

export default Contact
