import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { FaLinkedin } from 'react-icons/fa'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n35tmbt', 'template_orkuh26', form.current, 'eX-RoRUuuiSnpTlb9')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Ponte en Contacto</h5>
      <h2>Contáctame</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>waltersuelarroyo@gmail.com</h5>
            <a href="mailto:waltersuelarroyo@gmail.com" target='_blank' rel="noopener noreferrer">Enviar mensaje</a>
          </article>
          <article className='contact__option'>
            <FaLinkedin  className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Walter Suel</h5>
            <a href="https://www.linkedin.com/in/walter-suel-arroyo-software/" target='_blank' rel="noopener noreferrer">Enviar mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+51) 937 236 785</h5>
            <a href="https://web.whatsapp.com/send?phone=+51937236785" target='_blank' rel="noopener noreferrer">Enviar mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required />
          <input type="email" name="email" placeholder='Tu email' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact