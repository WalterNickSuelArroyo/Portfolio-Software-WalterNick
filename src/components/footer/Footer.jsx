import React from 'react'
import './footer.css'
import {FaFacebookF, FaLinkedin, FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Walter Suel</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contáctame</a></li>        
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/walter-suel-arroyo-software/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@waltersuel" target='_blank' rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </footer>
  )
}
export default Footer