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
  // Берём id новости из адреса (например, /news/3 -> id = "3")
  const { id } = useParams()

  // Ищем новость с таким id. id из адреса — строка, поэтому сравниваем как строки.
  const news = newsList.find((item) => String(item.id) === id)

  // Если новость с таким номером не найдена — показываем подсказку
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

      {/* Полный текст новости — выводим каждый абзац отдельным <p> */}
      {news.content[language].map((paragraph, index) => (
        <p key={index} className="article-paragraph">{paragraph}</p>
      ))}
    </article>
  )
}

export default NewsArticle
