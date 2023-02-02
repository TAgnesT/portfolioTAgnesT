import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/projectCrypto.jpg'
import img2 from '../../assets/projectMomentum.jpg'
import img3 from '../../assets/projectTraveling.jpg'
import img4 from '../../assets/projectTesla.jpg'
import img5 from '../../assets/projectTodo.jpg'
import img6 from '../../assets/projectGalaxy.jpg'

const data = [
  {
      id: 1,
      image: img6,
      title: 'Galaxy Space Travel |',
      github: 'https://github.com/TAgnesT/GalaxySpacetravelFullpage',
      demo: 'https://galaxy-spacetravel.netlify.app/'
    },
  {
    id: 2,
    image: img1,
    title: 'Crypto Currency Dash |',
    github: 'https://github.com/TAgnesT/React-crypto',
    demo: 'https://reacttestcrypto.netlify.app/'
  },
  {
    id: 3,
    image: img2,
    title: 'Momentum Counter |',
    github: 'https://github.com/TAgnesT/momentumCounter',
    demo: 'https://momentumcounter.netlify.app/'
  },
  {
    id: 4,
    image: img3,
    title: 'Traveling Site |',
    github: 'https://github.com/TAgnesT/travelingPage',
    demo: 'https://travelingpagee.netlify.app/'
  },
  {
    id: 5,
    image: img4,
    title: 'Tesla Webshop Landing |',
    github: 'https://github.com/TAgnesT/teslaLanding',
    demo: 'https://teslalanding.netlify.app/'
  },
  {
    id: 6,
    image: img5,
    title: 'TodoList |',
    github: 'https://github.com/TAgnesT/TodoListReact',
    demo: 'https://todotodolist.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo})=>{
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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