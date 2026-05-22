import { Link } from 'react-router-dom'
import newsList from '../data/news'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

// Превращаем дату вида "2026-05-18" в "18.05.2026" для показа на карточке
function formatDate(dateString) {
  const parts = dateString.split('-')
  return parts[2] + '.' + parts[1] + '.' + parts[0]
}

function News() {
  const { language, t } = useLanguage()
  // Сортируем новости по дате от свежих к старым (даты ГГГГ-ММ-ДД сравниваем как строки)                                                                                                        
  const sortedNews = [...newsList].sort((firstNews, secondNews) =>
    secondNews.date.localeCompare(firstNews.date)
  )

  return (
    <div>
      {/* Приветственный блок (hero) — первое, что видит пользователь */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-label">{t.hero.label}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <Link to="/contacts" className="action-button">
              {t.hero.cta}
            </Link>
          </div>
          <img src="/img/mascot.svg" alt="Маскот клуба — волк" className="hero-mascot" />
        </div>
      </section>

      {/* Лента новостей. Каждая карточка — ссылка на страницу новости */}
      <section className="container page-section">
        <h2 className="section-title">{t.titles.news}</h2>

        <div className="cards-grid">
          {sortedNews.map((news) => (
            <Link key={news.id} to={'/news/' + news.id} className="news-card">
              <span className="news-category">{news.category[language]}</span>
              <time className="news-date">{formatDate(news.date)}</time>
              <h3>{news.title[language]}</h3>
              <p>{news.text[language]}</p>
              <span className="news-more">{t.readMore} →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News
