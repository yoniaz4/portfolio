 import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import { faqs } from '../data/faqs'
import { profile } from '../data/profile'
import { usePageTitle } from '../hooks/usePageTitle'
import './Contact.css'

export default function Contact() {
  usePageTitle('Contact')
  return (
    <div className="container">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together."
        text="Tell me about your company and what you need. I will reply with ideas and a fair price."
      />

      <div className="contact">
        <ContactForm />

        <aside className="contact__side">
          <h2 className="contact__heading">Quick answers</h2>

          <div className="faq">
            {faqs.map((item) => (
              <details key={item.id} className="faq__item">
                <summary className="faq__question">{item.question}</summary>
                <p className="faq__answer">{item.answer}</p>
              </details>
            ))}
          </div>

          <h2 className="contact__heading">Or find me here</h2>
          <ul className="contact__links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  )
}