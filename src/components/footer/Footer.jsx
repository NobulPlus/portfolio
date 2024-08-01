import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>ENVELOPE</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/adeleyepaul2"><FiFacebook/></a>
        <a href="https://twitter.com/NobulPlus"><BsTwitter/></a>
        <a href="https://linkedin.com/in/adeleyepaul"><FiLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ENVELOPE. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer