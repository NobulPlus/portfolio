import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>ENVELOPE</a>

      <ul className='permalinks'>
        <li><a href="iridescent-malasada-659400">Home</a></li>
        <li><a href="iridescent-malasada-659400/about">About</a></li>
        <li><a href="iridescent-malasada-659400/experience">Experience</a></li>
        <li><a href="iridescent-malasada-659400/services">Services</a></li>
        <li><a href="iridescent-malasada-659400/testimonials">Testimonials</a></li>
        <li><a href="iridescent-malasada-659400/contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="facebook.com/adeleyepaul"><FiFacebook/></a>
        <a href="instagram.com/nobulplus"><BsInstagram/></a>
        <a href="twitter.com/nobulplus"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ENVELOPE. All Rights Reserved.</small>
      </div>

    </footer>
  )
}

export default Footer