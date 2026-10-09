import { useState } from 'react'
import { profile } from '../data/profile'
import './ContactForm.css'

// Optional: a Formspree URL. If it is empty, we fall back to the email app.
//const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/mbgdoeee'
const emptyForm = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.'
  }

  return errors
}

function openEmailApp({ name, email, message }) {
  const subject = encodeURIComponent(`Project inquiry from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const foundErrors = validate(values)
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length > 0) return

    if (!FORM_ENDPOINT) {
      openEmailApp(values)
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Request failed')

      setStatus('sent')
      setValues(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form contact-form--done" role="status">
        <h2>Thank you!</h2>
        <p>Your message reached me. I will reply as soon as I can.</p>
        <button type="button" className="button" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="contact-form__error">{errors.name}</p>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="contact-form__error">{errors.email}</p>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Tell me about your project</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="contact-form__error">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="button button--primary"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          Something went wrong. Please try again, or email me at {profile.email}.
        </p>
      )}
    </form>
  )
}