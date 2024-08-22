import React, { useEffect, useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.PNG'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.PNG'
const data = [
  {
    id: 1,
    image: IMG1,
    category: "Frontend",
    title: 'Mi Portafolio',
    github: 'https://github.com/WalterNickSuelArroyo/Portfolio-Software-WalterNick',
    demo: 'https://walternicksuelarroyo.github.io/Portfolio-Software-WalterNick/build/'
  },
  {
    id: 2,
    image: IMG2,
    category: "Frontend",
    title: 'Generador de código QR',
    github: 'https://github.com/WalterNickSuelArroyo/GeneradorCodigoQR',
    demo: 'https://walternicksuelarroyo.github.io/GeneradorCodigoQR/'
  },
  {
    id: 3,
    image: IMG9,
    category: "Frontend",
    title: 'Carrito de compras',
    github: 'https://github.com/WalterNickSuelArroyo/carrito-de-compras',
    demo: 'https://walternicksuelarroyo.github.io/carrito-de-compras/'
  },
  {
    id: 4,
    image: IMG3,
    category: "Frontend",
    title: 'Generador de contraseñas',
    github: 'https://github.com/WalterNickSuelArroyo/GeneradorDeContrase-as',
    demo: 'https://walternicksuelarroyo.github.io/GeneradorDeContrase-as/'
  },
  {
    id: 5,
    image: IMG4,
    category: "Frontend",
    title: 'Register and Login con React',
    github: 'https://github.com/WalterNickSuelArroyo/LoginSignUp',
    demo: 'https://walternicksuelarroyo.github.io/LoginSignUp/build/'
  },
  {
    id: 6,
    image: IMG5,
    category: "Frontend",
    title: 'App de listado de tareas',
    github: 'https://github.com/WalterNickSuelArroyo/TaskApp',
    demo: 'https://walternicksuelarroyo.github.io/TaskApp/'
  },
  {
    id: 7,
    image: IMG6,
    category: "Frontend",
    title: 'Calculadora básica',
    github: 'https://github.com/WalterNickSuelArroyo/calculator-basic',
    demo: 'https://walternicksuelarroyo.github.io/calculator-basic/'
  },
  {
    id: 8,
    image: IMG7,
    category: "Frontend",
    title: 'Galeria Transición',
    github: 'https://github.com/WalterNickSuelArroyo/_1_yt_tk_expanding_Card_',
    demo: 'https://walternicksuelarroyo.github.io/_1_yt_tk_expanding_Card_/'
  },
  {
    id: 9,
    image: IMG8,
    category: "Backend",
    title: 'Generador de gifs',
    github: 'https://github.com/WalterNickSuelArroyo/_1_yt_tk_expanding_Card_',
    demo: 'https://walternicksuelarroyo-gifexpert.netlify.app/'
  },
]
const Portfolio = () => {
  const [portafolios, setPortafolios] = useState(data);
  const [selectTab, setSelectTab] = useState("Frontend");
  useEffect(() => {
    if (selectTab === 'Frontend') {
      const filteredData = data.filter(item => item.category === 'Frontend')
      setPortafolios(filteredData)
    }
    if (selectTab === 'Backend') {
      const filteredData = data.filter(item => item.category === 'Backend')
      setPortafolios(filteredData)
    }
    if (selectTab === 'Análisis de Datos') {
      const filteredData = data.filter(item => item.category === 'Análisis de Datos')
      setPortafolios(filteredData)
    }
    if (selectTab === 'UX/UI') {
      const filteredData = data.filter(item => item.category === 'UX/UI')
      setPortafolios(filteredData)
    }
  }, [selectTab])
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portfolio</h2>
      <div className='filtros'>
        <button className='categoryButton' onClick={()=>setSelectTab('Frontend')}>Frontend</button>
        <button className='categoryButton' onClick={()=>setSelectTab('Backend')}>Backend</button>
        <button className='categoryButton' onClick={()=>setSelectTab('Análisis de Datos')}>Análisis de Datos</button>
        <button className='categoryButton' onClick={()=>setSelectTab('UX/UI')}>UX/UI</button>
      </div>
      <div className='container portfolio__container'>
        {
          portafolios.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio