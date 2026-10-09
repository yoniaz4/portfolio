import './ProjectCard.css'

export default function ProjectCard({ project }) {
  const { name, description, tags, link } = project

  return (
    <article className="project-card">
      <ul className="project-card__tags">
        {tags.map((tag) => (
          <li key={tag} className="project-card__tag">
            {tag}
          </li>
        ))}
      </ul>

      <h2 className="project-card__name">{name}</h2>
      <p className="project-card__description">{description}</p>

      <a
        className="project-card__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub &rarr;
      </a>
    </article>
  )
}