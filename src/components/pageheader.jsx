import './PageHeader.css'

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="page-header">
      <p className="page-header__eyebrow">{eyebrow}</p>
      <h1 className="page-header__title">{title}</h1>
      {text && <p className="page-header__text">{text}</p>}
    </header>
  )
}