import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-about">
          <img src="/img/logo-ssk-white.svg" alt="Логотип ССК ЮФУ" className="footer-logo" />
          <p>{t.footer.about}</p>
        </div>

        <div className="footer-column">
          <h3>{t.footer.sectionsHeading}</h3>
          <Link to="/">{t.nav.news}</Link>
          <Link to="/team">{t.nav.team}</Link>
          <Link to="/calendar">{t.nav.calendar}</Link>
          <Link to="/events">{t.nav.events}</Link>
          <Link to="/contacts">{t.nav.contacts}</Link>
        </div>

        <div className="footer-column">
          <h3>{t.footer.contactsHeading}</h3>
          <p>{t.footer.address}</p>
          <p>+7 (863) 218-40-00 (доб. 10705)</p>
          <p>revenko@sfedu.ru</p>
          <div className="footer-socials">
            <a href="https://vk.com/ssc_sfedu" target="_blank" rel="noreferrer">ВКонтакте</a>
            <a href="https://t.me/ssc_sfedu" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>{t.footer.rights(currentYear)}</span>
          <Link to="/privacy" className="footer-privacy-link">{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
