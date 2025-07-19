import React from 'react'
import './about.css'
import ME from '../../assets/Programmer 4.png'
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
          Soy ingeniero de Software de la Universidad Nacional Mayor de San Marcos, especializado en Desarrollo Web. Destaco en el diseño y desarrollo de aplicaciones web utilizando tecnologías modernas, con competencias avanzadas en diseño de interfaces de usuario y gestión de base de datos. Mi experiencia abarca también la asistencia técnica integral para servicios de TI y la colaboración entre las diferentes áreas.
          </p>
          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About