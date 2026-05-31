import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

const menuLinks = [
  { path: '/', key: 'news' },
  { path: '/team', key: 'team' },
  { path: '/calendar', key: 'calendar' },
  { path: '/events', key: 'events' },
  { path: '/contacts', key: 'contacts' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src="/img/logo-ssk.svg" alt="Логотип ССК ЮФУ" />
          <span className="header-logo-text">
            {t.logo.title}
            <small>{t.logo.subtitle}</small>
          </span>
        </Link>

        <button
          type="button"
          className="burger-button"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMenuOpen ? 'main-nav open' : 'main-nav'}>
          {menuLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className="nav-link"
              onClick={closeMenu}
            >
              {t.nav[link.key]}
            </NavLink>
          ))}

          <button
            type="button"
            className="lang-switch"
            onClick={toggleLanguage}
            aria-label="Сменить язык"
          >
            <span className={language === 'ru' ? 'lang-active' : ''}>RU</span>
            <span className="lang-divider">/</span>
            <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          <Link to="/contacts" className="action-button header-action" onClick={closeMenu}>
            {t.apply}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
