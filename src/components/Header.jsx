import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

// Пункты меню вынесены в массив, чтобы не дублировать разметку для каждой ссылки
const menuLinks = [
  { path: '/', label: 'Новости' },
  { path: '/team', label: 'Команда' },
  { path: '/calendar', label: 'Календарь' },
  { path: '/events', label: 'Мероприятия' },
  { path: '/contacts', label: 'Контакты' },
]

function Header() {
  // Состояние мобильного меню: открыто оно или нет
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              {link.label}
            </NavLink>
          ))}

          {/* Главная кнопка действия — единственный красный элемент в шапке */}
          <Link to="/contacts" className="action-button header-action" onClick={closeMenu}>
            Подать заявку
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
