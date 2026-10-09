 import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'
import ProcessSteps from './ProcessSteps'
import { services } from '../data/services'
import { usePageTitle } from '../hooks/usePageTitle'
import './Services.css'

export default function Services() {
  usePageTitle('Services')
  return (
    <div className="container">
      <PageHeader
        eyebrow="Services"
        title="Good software, without the big price."
        text="I help companies get websites and software built with care, clear communication and a small budget."
      />

      <ProcessSteps />

      <h2 className="services__heading">What I can build for you</h2>
      <div className="services__grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}