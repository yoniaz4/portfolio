import { steps } from '../data/services'
import { usePageTitle } from '../hooks/usePageTitle'
import './ProcessSteps.css'

export default function ProcessSteps() {
  usePageTitle('Process Steps') 
  return (
    <section className="process">
      <h2 className="process__title">How I work</h2>

      <ol className="process__list">
        {steps.map((step) => (
          <li key={step.id} className="process__step">
            <h3 className="process__step-title">{step.title}</h3>
            <p className="process__step-text">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}