import React, { useEffect, useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.png'
import IMG12 from "../../assets/portfolio12.png";
import IMG13 from "../../assets/portfolio13.png";
import IMG14 from "../../assets/portfolio14.png";
import IMG15 from "../../assets/portfolio15.PNG";
import IMG16 from "../../assets/portfolio16.png";

const data = [
  {
    id: 15,
    image: IMG15,
    category: "Frontend",
    title: "Sitio Web para la empresa Alexander Fleming",
    github: "https://formacionalexanderfleming.com/",
    demo: "https://formacionalexanderfleming.com/",
  },
  {
    id: 16,
    image: IMG16,
    category: "Frontend",
    title: "Sitio Web para la empresa Madpa",
    github: "https://madparepresentaciones.com/",
    demo: "https://madparepresentaciones.com/",
  },
  {
    id: 11,
    image: IMG11,
    category: "Frontend",
    title: "Sitio Web para la empresa BiokJail",
    github: "https://biokjail.com/",
    demo: "https://biokjail.com/",
  },
  {
    id: 12,
    image: IMG12,
    category: "Frontend",
    title: "Sitio Web para la empresa Alexander Fleming",
    github: "https://alexanderfleming.vercel.app/",
    demo: "https://alexanderfleming.vercel.app/",
  },
  {
    id: 13,
    image: IMG13,
    category: "Frontend",
    title: "Sitio Web para la empresa Última Mano",
    github: "https://ultimamanopr.com/",
    demo: "https://ultimamanopr.com/",
  },
  {
    id: 14,
    image: IMG14,
    category: "Frontend",
    title: "Sitio Web para la empresa Juvenus Scodear",
    github: "https://juvenus.scodear.com/",
    demo: "https://juvenus.scodear.com/",
  },
  {
    id: 1,
    image: IMG1,
    category: "Frontend",
    title: "Mi Portafolio",
    github:
      "https://github.com/WalterNickSuelArroyo/Portfolio-Software-WalterNick",
    demo: "https://walternicksuelarroyo.github.io/Portfolio-Software-WalterNick/build/",
  },
  {
    id: 2,
    image: IMG10,
    category: "Frontend",
    title: "Weatherlink",
    github: "https://github.com/WalterNickSuelArroyo/app-de-clima",
    demo: "https://weatherlink.vercel.app/",
  },
  {
    id: 3,
    image: IMG2,
    category: "Frontend",
    title: "Generador de código QR",
    github: "https://github.com/WalterNickSuelArroyo/GeneradorCodigoQR",
    demo: "https://walternicksuelarroyo.github.io/GeneradorCodigoQR/",
  },
  {
    id: 4,
    image: IMG9,
    category: "Frontend",
    title: "Carrito de compras",
    github: "https://github.com/WalterNickSuelArroyo/carrito-de-compras",
    demo: "https://walternicksuelarroyo.github.io/carrito-de-compras/",
  },
  {
    id: 5,
    image: IMG3,
    category: "Frontend",
    title: "Generador de contraseñas",
    github: "https://github.com/WalterNickSuelArroyo/GeneradorDeContrase-as",
    demo: "https://walternicksuelarroyo.github.io/GeneradorDeContrase-as/",
  },
  {
    id: 6,
    image: IMG4,
    category: "Frontend",
    title: "Register and Login con React",
    github: "https://github.com/WalterNickSuelArroyo/LoginSignUp",
    demo: "https://walternicksuelarroyo.github.io/LoginSignUp/build/",
  },
  {
    id: 7,
    image: IMG5,
    category: "Frontend",
    title: "App de listado de tareas",
    github: "https://github.com/WalterNickSuelArroyo/TaskApp",
    demo: "https://walternicksuelarroyo.github.io/TaskApp/",
  },
  {
    id: 8,
    image: IMG6,
    category: "Frontend",
    title: "Calculadora básica",
    github: "https://github.com/WalterNickSuelArroyo/calculator-basic",
    demo: "https://walternicksuelarroyo.github.io/calculator-basic/",
  },
  {
    id: 9,
    image: IMG7,
    category: "Frontend",
    title: "Galeria Transición",
    github: "https://github.com/WalterNickSuelArroyo/_1_yt_tk_expanding_Card_",
    demo: "https://walternicksuelarroyo.github.io/_1_yt_tk_expanding_Card_/",
  },
  {
    id: 10,
    image: IMG8,
    category: "Backend",
    title: "Generador de gifs",
    github: "https://github.com/WalterNickSuelArroyo/_1_yt_tk_expanding_Card_",
    demo: "https://walternicksuelarroyo-gifexpert.netlify.app/",
  },
];
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
  }, [selectTab])
  return (
    <section id='portfolio'>
      <h5>Mis proyectos</h5>
      <h2>Portfolio</h2>
      <div className='filtros'>
        <button className='categoryButton' onClick={()=>setSelectTab('Frontend')}>Frontend</button>
        <button className='categoryButton' onClick={()=>setSelectTab('Backend')}>Backend</button>
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