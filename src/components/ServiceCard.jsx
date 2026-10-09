import './ServiceCard.css'

export default function ServiceCard({ service }) {
  const { title, description, points } = service

  return (
    <article className="service-card">
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      <ul className="service-card__points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  )
}