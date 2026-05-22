import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './Header.css'

// Пункты меню: путь и ключ перевода (сам текст берём из словаря по текущему языку)
const menuLinks = [
  { path: '/', key: 'news' },
  { path: '/team', key: 'team' },
  { path: '/calendar', key: 'calendar' },
  { path: '/events', key: 'events' },
  { path: '/contacts', key: 'contacts' },
]

function Header() {
  // Состояние мобильного меню: открыто оно или нет
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Текущий язык, переводы и функция переключения языка
  const { language, toggleLanguage, t } = useLanguage()

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  // Закрываем меню после клика по ссылке (нужно для мобильной версии)
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src="/img/logo-ssk.svg" alt="Логотип ССК ЮФУ" />
          <span className="header-logo-text">
            ССК ЮФУ
            <small>«Южная стая»</small>
          </span>
        </Link>

        {/* Кнопка-бургер видна только на узких экранах (управляется через CSS) */}
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

          {/* Переключатель языка: подсвечивается активный */}
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

          {/* Главная кнопка действия — единственный красный элемент в шапке */}
          <Link to="/contacts" className="action-button header-action" onClick={closeMenu}>
            {t.apply}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
