import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { usePageTitle } from '../hooks/usePageTitle'
import './Home.css'

export default function Home() {
  usePageTitle('Home')
  return (
    <section className="hero container">
      <p className="hero__role">{profile.role}</p>
      <h1 className="hero__title">{profile.headline}</h1>
      <p className="hero__intro">{profile.intro}</p>

      <div className="hero__actions">
        <Link to="/projects" className="button button--primary">
          See my projects
        </Link>
        <Link to="/contact" className="button">
          Get in touch
        </Link>
      </div>
    </section>
  )
}