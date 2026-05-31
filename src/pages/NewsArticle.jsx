import { useParams, Link } from 'react-router-dom'
import newsList from '../data/news'
import { useLanguage } from '../i18n/LanguageContext'
import './pages.css'

function formatDate(dateString) {
  const parts = dateString.split('-')
  return parts[2] + '.' + parts[1] + '.' + parts[0]
}

function NewsArticle() {
  const { language, t } = useLanguage()
  const { id } = useParams()

  // id из адреса — строка, поэтому приводим к строке при сравнении
  const news = newsList.find((item) => String(item.id) === id)

  if (!news) {
    return (
      <section className="container page-section">
        <p>{t.notFound.text}</p>
        <Link to="/" className="action-button">{t.notFound.back}</Link>
      </section>
    )
  }

  return (
    <article className="container page-section news-article">
      <Link to="/" className="back-link">{t.backToNews}</Link>

      <span className="news-category">{news.category[language]}</span>
      <time className="news-date">{formatDate(news.date)}</time>
      <h1 className="article-title">{news.title[language]}</h1>

      {news.content[language].map((paragraph, index) => (
        <p key={index} className="article-paragraph">{paragraph}</p>
      ))}
    </article>
  )
}

export default NewsArticle
