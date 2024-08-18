import React, { useEffect, useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    category: "Frontend",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/21808909-NowNow-logo-design'
  },
  {
    id: 2,
    image: IMG2,
    category: "Backend",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribbble.com/shots/16673715-Crypto-currency.dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    category: "Análisis de Datos",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribbble.com/shots/16673715-Crypto-currency.dashboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG4,
    category: "UX/UI",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribbble.com/shots/16673715-Crypto-currency.dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG5,
    category: "Frontend",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribbble.com/shots/16673715-Crypto-currency.dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    category: "Backend",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'http://dribbble.com/shots/16673715-Crypto-currency.dashboards-and-financial-data-visualization'
  },
  {
    id: 7,
    image: IMG1,
    category: "Frontend",
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'http://github.com',
    demo: 'https://dribbble.com/shots/21808909-NowNow-logo-design'
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