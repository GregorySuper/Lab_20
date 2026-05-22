import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

// Эта страница показывается, когда пользователь зашёл по несуществующему адресу
function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="container not-found">
      <img src="/img/mascot.svg" alt="Маскот клуба" className="not-found-mascot" />
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">{t.notFound.text}</p>
      <Link to="/" className="action-button">{t.notFound.back}</Link>
    </section>
  )
}

export default NotFound
