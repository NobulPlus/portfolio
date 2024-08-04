import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/lashma.png'
import IMG2 from '../../assets/LoanWise.png'
import IMG3 from '../../assets/ileraeko.png'
import IMG4 from '../../assets/hrm1.png'
import IMG5 from '../../assets/git.png'
import IMG6 from '../../assets/patrick.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Lagos State Health Management Agency Web App',
    github: 'https://github.com/NobulPlus/lashma_website.git',
    demo: 'https://lashma.com'
  },
  {
    id:2,
    image: IMG2,
    title: 'LoanWise Application',
    github: 'https://github.com/adeleyepaul/loanwise.git',
    demo: '#'
  },
  {
    id:3,
    image: IMG3,
    title: 'ILERA EKO Web App',
    github: 'https://github.com/NobulPlus/ileraeko_website.git',
    demo: 'https://ileraeko.com'
  },
  {
    id:5,
    image: IMG5,
    title: 'BlogApp-Api',
    github: 'https://github.com/NobulPlus/BlogApi-app.git',
    demo: '#'
  },
  {
    id:4,
    image: IMG4,
    title: 'Human Resources Management System Application',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id:6,
    image: IMG6,
    title: "Patrick Art's Website",
    github: 'https://github.com/adeleyepaul/patrickart.git',
    demo: 'rubumnl.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href="{github/adeleyepaul}" className='btn'>GitHub</a>
                <a href="{demo}" className='btn btn-primary'>Live</a>
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