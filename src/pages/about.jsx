 import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/profile'
import { story, highlights } from '../data/about'
import profilePhoto from '../assets/profile.jpg'
import { usePageTitle } from '../hooks/usePageTitle'
import './About.css'

export default function About() {
  const [isGlowing, setIsGlowing] = useState(false)
  usePageTitle('About')

  return (
    <div className="container">
      <PageHeader
        eyebrow="About"
        title={`Hi, I'm ${profile.name.split(' ')[0]}.`}
        text="Software engineering student, freelancer and team leader from Ethiopia."
      />

      <section className="about">
        <button
          type="button"
          className={`about__photo-button ${isGlowing ? 'about__photo-button--glow' : ''}`}
          onClick={() => setIsGlowing(!isGlowing)}
          aria-pressed={isGlowing}
          aria-label="Toggle glow around my photo"
        >
          <img
            className="about__photo"
            src={profilePhoto}
            alt={`Portrait of ${profile.name}`}
          />
        </button>

        <div className="about__story">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about__location">{profile.location}</p>
        </div>
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <div key={item.id} className="highlights__item">
            <p className="highlights__label">{item.label}</p>
            <p className="highlights__value">{item.value}</p>
          </div>
        ))}
      </section>
    </div>
  )
}