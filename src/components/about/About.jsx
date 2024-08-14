import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Conozca</h5>
      <h2>Acerca de mí</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="Mi foto" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>1+ años trabajando</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>10+ Clientes</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>10+ Completado</small>
            </article>
          </div>
          <p>
          Soy un estudiante con una gran pasión por la tecnología y el desarrollo de software. Me apasiona aprender y aplicar nuevas tecnologías para crear soluciones innovadoras y eficientes. He participado en cursos y programas de certificación que me han ayudado a desarrollar habilidades académicas e interpersonales. Estoy emocionado de ser parte de una industria en constante cambio.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About