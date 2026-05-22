import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  // Текущий год для копирайта вычисляем автоматически
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-about">
          <img src="/img/logo-ssk-white.svg" alt="Логотип ССК ЮФУ" className="footer-logo" />
          <p>
            Спортивный студенческий клуб ЮФУ «Южная стая».<br />
            Объединяем студентов спортом с первого курса.
          </p>
        </div>

        <div className="footer-column">
          <h3>Разделы</h3>
          <Link to="/">Новости</Link>
          <Link to="/team">Команда</Link>
          <Link to="/calendar">Календарь</Link>
          <Link to="/events">Мероприятия</Link>
          <Link to="/contacts">Контакты</Link>
        </div>

        <div className="footer-column">
          <h3>Контакты</h3>
          <p>г. Ростов-на-Дону, ул. Большая Садовая, 105/42</p>
          <p>Телефон: +7 (863) 000-00-00</p>
          <p>E-mail: ssk@sfedu.ru</p>
          <div className="footer-socials">
            <a href="https://vk.com" target="_blank" rel="noreferrer">ВКонтакте</a>
            <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {currentYear} ССК ЮФУ «Южная стая». Сайт разработан студентом в учебных целях.
        </div>
      </div>
    </footer>
  )
}

export default Footer
