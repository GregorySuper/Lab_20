import { Link } from 'react-router-dom'
import newsList from '../data/news'
import './pages.css'

// Превращаем дату вида "2026-05-18" в "18.05.2026" для показа на карточке
function formatDate(dateString) {
  const parts = dateString.split('-')
  return parts[2] + '.' + parts[1] + '.' + parts[0]
}

function News() {
  return (
    <div>
      {/* Приветственный блок (hero) — первое, что видит пользователь */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-label">Спортивный студенческий клуб ЮФУ</p>
            <h1>Южная стая</h1>
            <p className="hero-subtitle">
              Тренировки, турниры и большие победы. Присоединяйся к команде
              и проведи студенческие годы в спорте.
            </p>
            <Link to="/contacts" className="action-button">
              Подать заявку
            </Link>
          </div>
          <img src="/img/mascot.svg" alt="Маскот клуба — волк" className="hero-mascot" />
        </div>
      </section>

      {/* Лента новостей */}
      <section className="container page-section">
        <h2 className="section-title">Новости</h2>

        <div className="cards-grid">
          {newsList.map((news) => (
            <article key={news.id} className="news-card">
              <span className="news-category">{news.category}</span>
              <time className="news-date">{formatDate(news.date)}</time>
              <h3>{news.title}</h3>
              <p>{news.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News
